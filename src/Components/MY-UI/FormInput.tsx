

// type InputType = 'text' | 'email' | 'tel' | 'textarea'

// interface FormInputProps {
//   label: string
//   name: string
//   type?: InputType
//   id?: string
//   placeholder?: string
//   value?: string
//   onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
//   onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
//   error?: string
//   required?: boolean
//   rows?: number
//   className?: string
// }

// const FormInput: React.FC<FormInputProps> = ({
//   label,
//   name,
//   type = 'text',
//   id,
//   placeholder,
//   value,
//   onChange,
//   onBlur,
//   error,
//   required = false,
//   rows = 5,
//   className = '',
// }) => {
//   const inputId = id || `input-${name}`

//   const baseClasses = `text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary w-full ${className}`
//   const errorClasses = error ? 'border-2 border-red-500 focus:border-red-500' : ''
//   const combinedClasses = `${baseClasses} ${errorClasses}`

//   return (
//     <div className='flex flex-col gap-2 flex-1 w-full'>
//       <label htmlFor={inputId} className='text-xl text-text'>
//         {label}
//         {required && <span className='text-red-500 ml-1'>*</span>}
//       </label>

//       {type === 'textarea' ? (
//         <textarea
//           id={inputId}
//           name={name}
//           rows={rows}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           className={combinedClasses + ' resize-none'}
//         />
//       ) : (
//         <input
//           type={type}
//           id={inputId}
//           name={name}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           className={combinedClasses}
//         />
//       )}

//       {error && (
//         <p className='text-red-500 text-sm mt-1'>
//           {error}
//         </p>
//       )}
//     </div>
//   )
// }

// export default FormInput
import React from 'react'
import { Upload } from '../../assets/SvgImage'

// إضافة أنواع جديدة
type InputType = 'text' | 'email' | 'tel' | 'textarea' | 'file' | 'select'

interface Option {
    value: string
    label: string
}

interface FormInputProps {
    label: string
    name: string
    type?: InputType
    id?: string
    placeholder?: string
    value?: string | File | null
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    error?: string
    required?: boolean
    rows?: number
    className?: string
    accept?: string // لإضافة أنواع الملفات المسموحة (images, pdf, etc.)
    options?: Option[] // للـ dropdown list
    multiple?: boolean // للسماح باختيار多个 ملفات
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = 'text',
    id,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    required = false,
    rows = 5,
    className = '',
    accept,
    options = [],
    multiple = false,
}) => {
    const inputId = id || `input-${name}`

    const baseClasses = `text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary w-full ${className}`
    const errorClasses = error ? 'border-2 border-red-500 focus:border-red-500' : ''
    const combinedClasses = `${baseClasses} ${errorClasses}`

    // ريندر حسب نوع الـ input
    const renderInput = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        id={inputId}
                        name={name}
                        rows={rows}
                        placeholder={placeholder}
                        value={value as string}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={combinedClasses + ' resize-none'}
                    />
                )

            case 'select':
                return (
                    <select
                        id={inputId}
                        name={name}
                        value={value as string}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={combinedClasses}
                    >
                        <option value="">Select {label}</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )

case 'file':
  return (
    <div className='relative w-full bg-white'>
      <label 
        htmlFor={inputId}
        
        className='flex flex-col items-center justify-center w-full border-2 border-dashed  border-primary rounded-lg cursor-pointer transition-all duration-300'
      >
        <div className='flex flex-col items-center justify-center py-8 px-4'>
          {/* SVG Icon للـ Upload */}
          <div className='mb-3 text-primary'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg> */}
            {Upload}
          </div>
          
          <p className='text-text font-medium mb-1'>
            {multiple ? 'Upload your files' : 'Upload your CV / Document'}
          </p>
          
          <p className='text-sm text-gray-500 mb-2'>
            {accept?.includes('image') 
              ? 'PNG, JPG, JPEG up to 5MB' 
              : accept?.includes('pdf') 
                ? 'PDF files only (Max 10MB)'
                : 'Click or drag and drop'}
          </p>
          
          <button 
            type="button"
            className='mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-all duration-300'
          >
            Browse Files
          </button>
        </div>
        
        <input
          type="file"
          id={inputId}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          accept={accept}
          multiple={multiple}
          className='hidden'
        />
      </label>
    </div>
  )

            default:
                return (
                    <input
                        type={type}
                        id={inputId}
                        name={name}
                        placeholder={placeholder}
                        value={value as string}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={combinedClasses}
                    />
                )
        }
    }

    return (
        <div className='flex flex-col gap-2 flex-1 w-full'>
            <label htmlFor={inputId} className='text-xl text-text'>
                {label}
                {required && <span className='text-red-500 ml-1'>*</span>}
            </label>

            {renderInput()}

            {error && (
                <p className='text-red-500 text-sm mt-1'>
                    {error}
                </p>
            )}
        </div>
    )
}

export default FormInput