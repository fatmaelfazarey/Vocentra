
import React, { useEffect, useState, useMemo } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../../../firebase/auth';
import jobService from '../../../services/job-service';
import JobForm, { type Job } from './JobForm';
import { Search, Filter, Plus, LogOut, Moon, Sun, ChevronDown, ChevronUp } from 'lucide-react';

type SortField = 'title' | 'department' | 'workMode' | 'employmentType' | 'createdAt';
type SortOrder = 'asc' | 'desc';

const JobsList = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingJob, setEditingJob] = useState<Job | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState<string>('all');
    const [workModeFilter, setWorkModeFilter] = useState<string>('all');
    const [employmentTypeFilter, setEmploymentTypeFilter] = useState<string>('all');
    const [sortField, setSortField] = useState<SortField>('createdAt');
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    // Apply theme
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Check authentication
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Fetch jobs
    const fetchJobs = async () => {
        setLoading(true);
        try {
            const { data } = await jobService.getAll<Job>();
            setJobs(data);
            setFilteredJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchJobs();
        }
    }, [user]);

    // Get unique departments for filter
    const departments = useMemo(() => {
        const depts = new Set(jobs.map(job => job.department));
        return ['all', ...Array.from(depts)];
    }, [jobs]);

    // Filter and search
    useEffect(() => {
        let result = [...jobs];

        // Search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(job =>
                job.title.toLowerCase().includes(term) ||
                job.description.toLowerCase().includes(term) ||
                job.department.toLowerCase().includes(term) ||
                job.requirements.some(req => req.toLowerCase().includes(term))
            );
        }

        // Department filter
        if (departmentFilter !== 'all') {
            result = result.filter(job => job.department === departmentFilter);
        }

        // Work mode filter
        if (workModeFilter !== 'all') {
            result = result.filter(job => job.workMode === workModeFilter);
        }

        // Employment type filter
        if (employmentTypeFilter !== 'all') {
            result = result.filter(job => job.employmentType === employmentTypeFilter);
        }

        // Sort
        result.sort((a, b) => {
            let aVal = a[sortField] || '';
            let bVal = b[sortField] || '';
            
            if (sortField === 'createdAt') {
                aVal = a.createdAt?.toString() || '';
                bVal = b.createdAt?.toString() || '';
            }

            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredJobs(result);
    }, [jobs, searchTerm, departmentFilter, workModeFilter, employmentTypeFilter, sortField, sortOrder]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this job?')) return;
        try {
            await jobService.delete(id);
            setJobs(jobs.filter((job) => job.id !== id));
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const handleEdit = (job: Job) => {
        setEditingJob(job);
        setShowForm(true);
    };

    const handleAdd = () => {
        setEditingJob(null);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingJob(null);
    };

    const handleSave = () => {
        fetchJobs();
        handleCloseForm();
    };

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const clearFilters = () => {
        setSearchTerm('');
        setDepartmentFilter('all');
        setWorkModeFilter('all');
        setEmploymentTypeFilter('all');
    };

    if (authLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-gray-500 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-gray-500 dark:text-gray-400">Please login to continue</div>
            </div>
        );
    }

    if (loading && jobs.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-gray-500 dark:text-gray-400">Loading jobs...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full  dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-heading dark:text-white">
                        Job Management
                    </h2>
                    <div className="flex flex-wrap items-center gap-3">
                     
                        <button
                            onClick={handleAdd}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition shadow-md"
                        >
                            <Plus size={18} />
                            Add Job
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transition-colors">
                    <div className="flex flex-wrap gap-4 items-end">
                        {/* Search */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-heading dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                                />
                            </div>
                        </div>

                        {/* Department Filter */}
                        <div className="min-w-[150px]">
                            <label className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                                Department
                            </label>
                            <select
                                value={departmentFilter}
                                onChange={(e) => setDepartmentFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-heading dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                            >
                                {departments.map(dept => (
                                    <option key={dept} value={dept}>
                                        {dept === 'all' ? 'All Departments' : dept}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Work Mode Filter */}
                        <div className="min-w-[150px]">
                            <label className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                                Work Mode
                            </label>
                            <select
                                value={workModeFilter}
                                onChange={(e) => setWorkModeFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-heading dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                            >
                                <option value="all">All Modes</option>
                                <option value="ONSITE">On-site</option>
                                <option value="REMOTE">Remote</option>
                                <option value="HYBRID">Hybrid</option>
                            </select>
                        </div>

                        {/* Employment Type Filter */}
                        <div className="min-w-[150px]">
                            <label className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                                Employment Type
                            </label>
                            <select
                                value={employmentTypeFilter}
                                onChange={(e) => setEmploymentTypeFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-heading dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                            >
                                <option value="all">All Types</option>
                                <option value="FULL_TIME">Full Time</option>
                                <option value="PART_TIME">Part Time</option>
                                <option value="CONTRACT">Contract</option>
                                <option value="INTERNSHIP">Internship</option>
                            </select>
                        </div>

                        {/* Clear Filters */}
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 text-sm text-primary dark:text-blue-400 hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                {/* Results count */}
                <div className="mb-4 text-text dark:text-gray-400">
                    Showing {filteredJobs.length} of {jobs.length} jobs
                </div>

                {/* Jobs Table */}
                {filteredJobs.length === 0 ? (
                    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <p className="text-lg text-text dark:text-gray-400">No jobs found</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                            Try adjusting your filters or add a new job
                        </p>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                    <tr>
                                        <th 
                                            className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                                            onClick={() => handleSort('title')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Title
                                                {sortField === 'title' && (
                                                    sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                                                )}
                                            </div>
                                        </th>
                                        <th 
                                            className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                                            onClick={() => handleSort('department')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Department
                                                {sortField === 'department' && (
                                                    sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                                                )}
                                            </div>
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300">
                                            Description
                                        </th>
                                        <th 
                                            className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                                            onClick={() => handleSort('workMode')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Work Mode
                                                {sortField === 'workMode' && (
                                                    sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                                                )}
                                            </div>
                                        </th>
                                        <th 
                                            className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                                            onClick={() => handleSort('employmentType')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Type
                                                {sortField === 'employmentType' && (
                                                    sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                                                )}
                                            </div>
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300">
                                            Requirements
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-text dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredJobs.map((job) => (
                                        <tr 
                                            key={job.id}
                                            className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                        >
                                            <td className="px-4 py-3">
                                                <span className="font-medium text-heading dark:text-white">
                                                    {job.title}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                                    {job.department}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <p className="text-sm text-text dark:text-gray-300 line-clamp-2 max-w-xs">
                                                    {job.description}
                                                </p>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    job.workMode === 'REMOTE' 
                                                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                                        : job.workMode === 'HYBRID'
                                                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                                                }`}>
                                                    {job.workMode}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    job.employmentType === 'FULL_TIME'
                                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                                        : job.employmentType === 'PART_TIME'
                                                        ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                                                        : job.employmentType === 'CONTRACT'
                                                        ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                                                }`}>
                                                    {job.employmentType.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex flex-wrap gap-1">
                                                    {job.requirements.slice(0, 2).map((req, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                            {req}
                                                        </span>
                                                    ))}
                                                    {job.requirements.length > 2 && (
                                                        <span className="text-xs text-gray-400 dark:text-gray-500">
                                                            +{job.requirements.length - 2}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(job)}
                                                        className="px-3 py-1 text-sm bg-yellow-400 dark:bg-yellow-600 text-yellow-900 dark:text-white rounded hover:bg-yellow-500 dark:hover:bg-yellow-700 transition"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(job.id!)}
                                                        className="px-3 py-1 text-sm bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 dark:hover:bg-red-700 transition"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Job Form Modal */}
                {showForm && (
                    <JobForm
                        initialData={editingJob}
                        onSave={handleSave}
                        onCancel={handleCloseForm}
                    />
                )}
            </div>
        </div>
    );
};

export default JobsList;