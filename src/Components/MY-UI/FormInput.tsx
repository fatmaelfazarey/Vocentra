import React, { forwardRef } from 'react'
import { Upload } from '../../assets/SvgImage'
import { Eye, EyeOff } from 'lucide-react'

type InputType =
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'textarea'
    | 'file'
    | 'select'

interface Option {
    value: string
    label: string
}

interface FormInputProps {
    label: string
    name?: string
    type?: InputType
    id?: string
    placeholder?: string
    value?: string | File | null
    onChange?: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void
    onBlur?: (
        e: React.FocusEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void
    error?: string
    required?: boolean
    rows?: number
    className?: string
    accept?: string
    options?: Option[]
    multiple?: boolean
}

const FormInput = forwardRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
    FormInputProps
>(
    (
        {
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
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = React.useState(false)
        const inputType =
            type === 'password' && showPassword ? 'text' : type
        const inputId = id || `input-${name || label}`

        const baseClasses = `
      text-base text-text px-2.5 py-5
      bg-secondary rounded-lg outline-primary
      w-full
      ${className}
    `

        const errorClasses = error
            ? 'border-2 border-red-500 focus:border-red-500'
            : ''

        const combinedClasses = `${baseClasses} ${errorClasses}`

        const renderInput = () => {
            switch (type) {
                case 'textarea':
                    return (
                        <textarea
                            ref={ref as React.Ref<HTMLTextAreaElement>}
                            id={inputId}
                            name={name}
                            rows={rows}
                            placeholder={placeholder}
                            value={value as string}
                            onChange={onChange}
                            onBlur={onBlur}
                            className={`${combinedClasses} resize-none`}
                        />
                    )

                case 'select':
                    return (
                        <select
                            ref={ref as React.Ref<HTMLSelectElement>}
                            id={inputId}
                            name={name}
                            value={value as string}
                            onChange={onChange}
                            onBlur={onBlur}
                            className={combinedClasses}
                        >
                            <option value=''>Select {label}</option>

                            {options.map(option => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
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
                                className='flex flex-col items-center justify-center w-full border-2 border-dashed border-primary rounded-lg cursor-pointer transition-all duration-300'
                            >
                                <div className='flex flex-col items-center justify-center py-8 px-4'>
                                    <div className='mb-3 text-primary'>
                                        {Upload}
                                    </div>

                                    <p className='text-text font-medium mb-1'>
                                        {multiple
                                            ? 'Upload your files'
                                            : 'Upload your CV / Document'}
                                    </p>

                                    <p className='text-sm text-gray-500 mb-2'>
                                        {accept?.includes('image')
                                            ? 'PNG, JPG, JPEG up to 5MB'
                                            : accept?.includes('pdf')
                                                ? 'PDF files only (Max 10MB)'
                                                : 'Click or drag and drop'}
                                    </p>

                                    <button
                                        type='button'
                                        className='mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-all duration-300'
                                    >
                                        Browse Files
                                    </button>
                                </div>

                                <input
                                    ref={ref as React.Ref<HTMLInputElement>}
                                    type='file'
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

                // default:
                //     return (
                //         <input
                //             ref={ref as React.Ref<HTMLInputElement>}
                //             type={type}
                //             id={inputId}
                //             name={name}
                //             placeholder={placeholder}
                //             value={value as string}
                //             onChange={onChange}
                //             onBlur={onBlur}
                //             className={combinedClasses}
                //         />
                //     )
                default:
                    return (
                        <div className='relative w-full'>
                            <input
                                ref={ref as React.Ref<HTMLInputElement>}
                                type={inputType}
                                id={inputId}
                                name={name}
                                placeholder={placeholder}
                                value={value as string}
                                onChange={onChange}
                                onBlur={onBlur}
                                className={`${combinedClasses} ${type === 'password' ? 'pr-12' : ''}`}
                            />

                            {type === 'password' && (
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(prev => !prev)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary'
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            )}
                        </div>
                    )
            }
        }

        return (
            <div className='flex flex-col gap-2 flex-1 w-full'>
                <label
                    htmlFor={inputId}
                    className='text-xl text-text'
                >
                    {label}

                    {required && (
                        <span className='text-red-500 ml-1'>
                            *
                        </span>
                    )}
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
)

FormInput.displayName = 'FormInput'

export default FormInput