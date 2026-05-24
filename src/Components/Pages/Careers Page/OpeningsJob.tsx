import React from 'react'
import SectionTitle from '../../MY-UI/SectionTitle'
import SectionContainer from '../../shared/SectionContainer'
import Button from '../../MY-UI/Button'
import { MapPin, Briefcase, Wifi, Building2 } from 'lucide-react'

interface JobProps {
    id: string
    title: string
    department?: string
    WorkMode: 'REMOTE' | 'ON_SITE' | 'HYBRID'
    EmploymentType:
    | 'FULL_TIME'
    | 'PART_TIME'
    | 'CONTRACT'
    | 'INTERNSHIP'
    | 'FREELANCE'
    | 'TEMPORARY'
}

const WORK_MODE_CONFIG = {
    REMOTE: { label: 'Remote', icon: <Wifi size={11} />, color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
    ON_SITE: { label: 'On-site', icon: <Building2 size={11} />, color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
    HYBRID: { label: 'Hybrid', icon: <MapPin size={11} />, color: 'text-violet-700', bg: 'bg-violet-50 border-violet-200' },
}

const EMPLOYMENT_CONFIG = {
    FULL_TIME: { label: 'Full-time', color: 'text-primary', bg: 'bg-primary/8 border-primary/20' },
    PART_TIME: { label: 'Part-time', color: 'text-orange-700', bg: 'bg-orange-50 border-orange-200' },
    CONTRACT: { label: 'Contract', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-200' },
    INTERNSHIP: { label: 'Internship', color: 'text-pink-700', bg: 'bg-pink-50 border-pink-200' },
    FREELANCE: { label: 'Freelance', color: 'text-teal-700', bg: 'bg-teal-50 border-teal-200' },
    TEMPORARY: { label: 'Temporary', color: 'text-gray-700', bg: 'bg-gray-100 border-gray-200' },
}
const Badge = ({
    icon, label, color, bg,
}: { icon?: React.ReactNode; label: string; color: string; bg: string }) => (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${color} ${bg}`}>
        {icon}
        {label}
    </span>
)

// ── Job Card ──────────────────────────────────────────────────────────────────

const JobCard = ({ job, index }: { job: JobProps; index: number }) => {
    const workMode = WORK_MODE_CONFIG[job.WorkMode]
    const employment = EMPLOYMENT_CONFIG[job.EmploymentType]

    return (
        <div
            className="group relative flex flex-col gap-4 p-6 bg-white text-center rounded-2xl border border-gray-100
                 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20
                 transition-all duration-300 ease-out overflow-hidden"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            {/* top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* title */}
            <div>
                <h3 className="text-base font-bold text-primary leading-snug group-hover:text-primary/80 transition-colors">
                    {job.title}
                </h3>
            </div>

            {/* badges */}
            <div className="flex flex-wrap gap-2 justify-between">
                <Badge
                    icon={workMode.icon}
                    label={workMode.label}
                    color={workMode.color}
                    bg={workMode.bg}
                />
                <Badge
                    icon={<Briefcase size={11} />}
                    label={employment.label}
                    color={employment.color}
                    bg={employment.bg}
                />
            </div>

            {/* divider */}
            <div className="h-px bg-gray-100" />

            {/* footer */}
            <div className="flex items-center justify-between gap-3 flex-col w-full ">
                <Button
                    label="Apply Now"
                    title="Apply Now"
                    theme="gray"
                />
            </div>
        </div>
    )
}

// ── Main Component ────────────────────────────────────────────────────────────

const OpeningsJob = () => {
    const Openings: JobProps[] = [
        { id: 'JOB-001', title: 'Business Development Executive (BDE)', department: 'Sales', WorkMode: 'REMOTE', EmploymentType: 'FULL_TIME' },
        { id: 'JOB-002', title: 'Software Engineer Intern', department: 'Engineering', WorkMode: 'REMOTE', EmploymentType: 'INTERNSHIP' },
        { id: 'JOB-003', title: 'HR Intern', department: 'HR', WorkMode: 'REMOTE', EmploymentType: 'INTERNSHIP' },
        { id: 'JOB-004', title: 'Business Development Executive (BDE)', department: 'Sales', WorkMode: 'HYBRID', EmploymentType: 'FULL_TIME' },
        { id: 'JOB-005', title: 'Software Engineer Intern', department: 'Engineering', WorkMode: 'REMOTE', EmploymentType: 'INTERNSHIP' },
        { id: 'JOB-006', title: 'HR Intern', department: 'HR', WorkMode: 'ON_SITE', EmploymentType: 'INTERNSHIP' },
    ]

    return (
        <SectionContainer>
            <div className="flex flex-col gap-10">

                {/* header */}
                <div className="flex flex-col   text-center justify-between gap-4">
                    <SectionTitle label="Current Openings" line={true} />
                </div>

                {/* grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Openings.map((job, index) => (
                        <JobCard key={job.id + index} job={job} index={index} />
                    ))}
                </div>

                {/* bottom CTA */}
                <div className="flex flex-col items-center gap-3 pt-2">
                    <p className="text-sm text-text/50">
                        Don't see the right fit?
                    </p>
                    <Button
                        label="Send Open Application"
                        title="Send Open Application"
                        theme="primary"
                    />
                </div>

            </div>
        </SectionContainer>
    )
}

export default OpeningsJob