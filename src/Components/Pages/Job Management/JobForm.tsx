// // JobForm.tsx
// import React, { useState, useEffect } from 'react';
// import jobService from "../../../services/job-service";

// export interface Job {
//     id?: string;
//     title: string;
//     description: string;
//     requirements: string[];
//     department: string;
//     workMode: 'REMOTE' | 'ONSITE' | 'HYBRID';
//     employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
//     createdAt?: Date;
// }

// interface JobFormProps {
//     initialData?: Job | null;
//     onSave: () => void;
//     onCancel: () => void;
// }

// const JobForm = ({ initialData, onSave, onCancel }: JobFormProps) => {
//     const [formData, setFormData] = useState<Job>({
//         title: '',
//         description: '',
//         requirements: [''],
//         department: '',
//         workMode: 'ONSITE',
//         employmentType: 'FULL_TIME',
//     });
//     const [loading, setLoading] = useState(false);
//     const [errors, setErrors] = useState<Record<string, string>>({});

//     useEffect(() => {
//         if (initialData) {
//             setFormData(initialData);
//         }
//     }, [initialData]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         setErrors((prev) => ({ ...prev, [name]: '' }));
//     };

//     const handleRequirementChange = (index: number, value: string) => {
//         const newRequirements = [...formData.requirements];
//         newRequirements[index] = value;
//         setFormData((prev) => ({ ...prev, requirements: newRequirements }));
//     };

//     const addRequirement = () => {
//         setFormData((prev) => ({
//             ...prev,
//             requirements: [...prev.requirements, ''],
//         }));
//     };

//     const removeRequirement = (index: number) => {
//         if (formData.requirements.length <= 1) return;
//         const newRequirements = formData.requirements.filter((_, i) => i !== index);
//         setFormData((prev) => ({ ...prev, requirements: newRequirements }));
//     };

//     const validate = (): boolean => {
//         const newErrors: Record<string, string> = {};
//         if (!formData.title.trim()) newErrors.title = 'Title is required';
//         if (!formData.description.trim()) newErrors.description = 'Description is required';
//         if (!formData.department.trim()) newErrors.department = 'Department is required';
//         if (formData.requirements.some((req) => !req.trim())) {
//             newErrors.requirements = 'All requirements must be filled';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!validate()) return;

//         setLoading(true);
//         try {
//             if (initialData?.id) {
//                 // Update existing job
//                 await jobService.update(initialData.id, formData);
//             } else {
//                 // Create new job
//                 await jobService.create(formData);
//             }
//             onSave();
//         } catch (error) {
//             console.error('Error saving job:', error);
//             setErrors({ submit: 'Failed to save job' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
//                 <h2 className="text-2xl font-bold mb-6">
//                     {initialData?.id ? 'Edit Job' : 'Add New Job'}
//                 </h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* Title */}
//                     <div>
//                         <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//                             Job Title *
//                         </label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                                 errors.title ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                             placeholder="e.g., Senior Frontend Developer"
//                         />
//                         {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
//                     </div>

//                     {/* Department */}
//                     <div>
//                         <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
//                             Department *
//                         </label>
//                         <input
//                             type="text"
//                             id="department"
//                             name="department"
//                             value={formData.department}
//                             onChange={handleChange}
//                             className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                                 errors.department ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                             placeholder="e.g., Engineering"
//                         />
//                         {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//                             Description *
//                         </label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             rows={4}
//                             className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                                 errors.description ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                             placeholder="Job description..."
//                         />
//                         {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
//                     </div>

//                     {/* Work Mode */}
//                     <div>
//                         <label htmlFor="workMode" className="block text-sm font-medium text-gray-700 mb-1">
//                             Work Mode
//                         </label>
//                         <select
//                             id="workMode"
//                             name="workMode"
//                             value={formData.workMode}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="ONSITE">On-site</option>
//                             <option value="REMOTE">Remote</option>
//                             <option value="HYBRID">Hybrid</option>
//                         </select>
//                     </div>

//                     {/* Employment Type */}
//                     <div>
//                         <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-1">
//                             Employment Type
//                         </label>
//                         <select
//                             id="employmentType"
//                             name="employmentType"
//                             value={formData.employmentType}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="FULL_TIME">Full Time</option>
//                             <option value="PART_TIME">Part Time</option>
//                             <option value="CONTRACT">Contract</option>
//                             <option value="INTERNSHIP">Internship</option>
//                         </select>
//                     </div>

//                     {/* Requirements */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Requirements
//                         </label>
//                         {formData.requirements.map((req, index) => (
//                             <div key={index} className="flex gap-2 mb-2">
//                                 <input
//                                     type="text"
//                                     value={req}
//                                     onChange={(e) => handleRequirementChange(index, e.target.value)}
//                                     className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                                         errors.requirements ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                     placeholder={`Requirement ${index + 1}`}
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => removeRequirement(index)}
//                                     disabled={formData.requirements.length <= 1}
//                                     className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     ✕
//                                 </button>
//                             </div>
//                         ))}
//                         <button
//                             type="button"
//                             onClick={addRequirement}
//                             className="mt-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                         >
//                             + Add Requirement
//                         </button>
//                         {errors.requirements && <p className="mt-1 text-sm text-red-500">{errors.requirements}</p>}
//                     </div>

//                     {/* Submit Error */}
//                     {errors.submit && (
//                         <div className="p-3 bg-red-50 text-red-500 rounded-lg">{errors.submit}</div>
//                     )}

//                     {/* Actions */}
//                     <div className="flex gap-3 pt-4 border-t">
//                         <button
//                             type="button"
//                             onClick={onCancel}
//                             className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
//                         >
//                             {loading ? 'Saving...' : initialData?.id ? 'Update' : 'Add Job'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default JobForm;
// JobForm.tsx
import React, { useState, useEffect } from 'react';
import jobService from "../../../services/job-service";
import { X } from 'lucide-react';

export interface Job {
    id?: string;
    title: string;
    description: string;
    requirements: string[];
    department: string;
    workMode: 'REMOTE' | 'ONSITE' | 'HYBRID';
    employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
    createdAt?: Date;
}

interface JobFormProps {
    initialData?: Job | null;
    onSave: () => void;
    onCancel: () => void;
}

const JobForm = ({ initialData, onSave, onCancel }: JobFormProps) => {
    const [formData, setFormData] = useState<Job>({
        title: '',
        description: '',
        requirements: [''],
        department: '',
        workMode: 'ONSITE',
        employmentType: 'FULL_TIME',
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleRequirementChange = (index: number, value: string) => {
        const newRequirements = [...formData.requirements];
        newRequirements[index] = value;
        setFormData((prev) => ({ ...prev, requirements: newRequirements }));
    };

    const addRequirement = () => {
        setFormData((prev) => ({
            ...prev,
            requirements: [...prev.requirements, ''],
        }));
    };

    const removeRequirement = (index: number) => {
        if (formData.requirements.length <= 1) return;
        const newRequirements = formData.requirements.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, requirements: newRequirements }));
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        if (!formData.department.trim()) newErrors.department = 'Department is required';
        if (formData.requirements.some((req) => !req.trim())) {
            newErrors.requirements = 'All requirements must be filled';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            if (initialData?.id) {
                await jobService.update(initialData.id, formData);
            } else {
                await jobService.create(formData);
            }
            onSave();
        } catch (error) {
            console.error('Error saving job:', error);
            setErrors({ submit: 'Failed to save job' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 transition-colors">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-heading dark:text-white">
                        {initialData?.id ? 'Edit Job' : 'Add New Job'}
                    </h2>
                    <button
                        onClick={onCancel}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                    >
                        <X size={24} className="text-text dark:text-gray-300" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                            Job Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-heading dark:text-white transition ${
                                errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="e.g., Senior Frontend Developer"
                        />
                        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                    </div>

                    {/* Department */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                            Department *
                        </label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-heading dark:text-white transition ${
                                errors.department ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="e.g., Engineering"
                        />
                        {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                            Description *
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-heading dark:text-white transition ${
                                errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="Job description..."
                        />
                        {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                    </div>

                    {/* Work Mode */}
                    <div>
                        <label htmlFor="workMode" className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                            Work Mode
                        </label>
                        <select
                            id="workMode"
                            name="workMode"
                            value={formData.workMode}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-heading dark:text-white transition"
                        >
                            <option value="ONSITE">On-site</option>
                            <option value="REMOTE">Remote</option>
                            <option value="HYBRID">Hybrid</option>
                        </select>
                    </div>

                    {/* Employment Type */}
                    <div>
                        <label htmlFor="employmentType" className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                            Employment Type
                        </label>
                        <select
                            id="employmentType"
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-heading dark:text-white transition"
                        >
                            <option value="FULL_TIME">Full Time</option>
                            <option value="PART_TIME">Part Time</option>
                            <option value="CONTRACT">Contract</option>
                            <option value="INTERNSHIP">Internship</option>
                        </select>
                    </div>

                    {/* Requirements */}
                    <div>
                        <label className="block text-sm font-medium text-text dark:text-gray-300 mb-1">
                            Requirements
                        </label>
                        {formData.requirements.map((req, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={req}
                                    onChange={(e) => handleRequirementChange(index, e.target.value)}
                                    className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-heading dark:text-white transition ${
                                        errors.requirements ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                    }`}
                                    placeholder={`Requirement ${index + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeRequirement(index)}
                                    disabled={formData.requirements.length <= 1}
                                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addRequirement}
                            className="mt-2 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:opacity-90 transition"
                        >
                            + Add Requirement
                        </button>
                        {errors.requirements && <p className="mt-1 text-sm text-red-500">{errors.requirements}</p>}
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-lg">
                            {errors.submit}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition"
                        >
                            {loading ? 'Saving...' : initialData?.id ? 'Update' : 'Add Job'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobForm;