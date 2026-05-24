

// import React, { useState } from 'react'
// import CountrySelect from '../../MY-UI/CountrySelect'
// import FormInput from '../../MY-UI/FormInput'


// interface FormData {
//     name: string
//     email: string
//     phone: string
//     company: string
//     message: string
// }

// interface FormErrors {
//     name?: string
//     email?: string
//     phone?: string
//     company?: string
//     message?: string
// }

// const ApplyForm = () => {
//     const [formData, setFormData] = useState<FormData>({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         message: ''
//     })

//     const [errors, setErrors] = useState<FormErrors>({})

//     // Validation Logic
//     const validateField = (name: string, value: string): string => {
//         switch (name) {
//             case 'name':
//                 if (!value.trim()) return 'Name is required'
//                 if (value.trim().length < 3) return 'Name must be at least 3 characters'
//                 return ''
//             case 'email':
//                 if (!value.trim()) return 'Email is required'
//                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//                 if (!emailRegex.test(value)) return 'Please enter a valid email address'
//                 return ''
//             case 'phone':
//                 if (!value.trim()) return 'Phone number is required'
//                 const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
//                 if (!phoneRegex.test(value)) return 'Please enter a valid phone number'
//                 return ''
//             case 'company':
//                 if (value.trim() && value.trim().length < 2) return 'Company name must be at least 2 characters'
//                 return ''
//             case 'message':
//                 if (!value.trim()) return 'Message is required'
//                 if (value.trim().length < 10) return 'Message must be at least 10 characters'
//                 return ''
//             default:
//                 return ''
//         }
//     }

//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target
//         setFormData(prev => ({ ...prev, [name]: value }))

//         // Real-time validation on change
//         const error = validateField(name, value)
//         setErrors(prev => ({ ...prev, [name]: error }))
//     }

//     const handleBlur = (
//         e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target
//         const error = validateField(name, value)
//         setErrors(prev => ({ ...prev, [name]: error }))
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()

//         // Validate all fields before submit
//         const newErrors: FormErrors = {}
//         let isValid = true

//         Object.keys(formData).forEach(key => {
//             const error = validateField(key, formData[key as keyof FormData])
//             if (error) {
//                 newErrors[key as keyof FormErrors] = error
//                 isValid = false
//             }
//         })

//         setErrors(newErrors)

//         if (isValid) {
//             console.log('Form submitted:', formData)
//             // Submit logic here
//         }
//     }

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className='bg-white py-17.5 px-5 sm:px-10 flex flex-col gap-5 flex-1  justify-center items-center rounded-lg shadow-(--custom-shadow)'
//         >
         

//             <div className='flex flex-col md:flex-row gap-5 w-full'>
//                 <FormInput
//                     label="Name"
//                     name="name"
//                     type="text"
//                     placeholder="Your Full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={errors.name}
//                     required
//                 />

//                 <FormInput
//                     label="Email"
//                     name="email"
//                     type="email"
//                     placeholder="example@gmail.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={errors.email}
//                     required
//                 />
//             </div>

//             <div className='flex flex-col md:flex-row gap-5 w-full'>
//                 <FormInput
//                     label="Phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="Your Phone Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={errors.phone}
//                     required
//                 />

//                 <div className='flex flex-col gap-2 flex-1'>
//                     <CountrySelect />
//                 </div>
//             </div>

//             <div className='flex flex-col gap-5 w-full'>
//                 <FormInput
//                     label="Company"
//                     name="company"
//                     type="text"
//                     placeholder="Company name"
//                     value={formData.company}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={errors.company}
//                 />

//                 <FormInput
//                     label="Message"
//                     name="message"
//                     type="textarea"
//                     placeholder="Your message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={errors.message}
//                     required
//                 />
//             </div>

//             <button
//                 type='submit'
//                 className='w-full shadow-(--custom-shadow) rounded-lg flex items-center justify-center gap-2 px-10 py-5 font-bold text-base bg-primary text-text-s hover:bg-primary/90 transition-all duration-300 ease-in-out group hover:scale-[1.02] hover:shadow-lg'
//             >
//                 Send
//             </button>
//         </form>
//     )
// }

// export default ApplyForm

import React, { useState } from 'react'
import CountrySelect from '../../MY-UI/CountrySelect'
import FormInput from '../../MY-UI/FormInput'


interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  category: string // جديد: للـ dropdown
  imageFile: File | null // جديد: للصور
  pdfFile: File | null // جديد: للـ PDF
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
  category?: string
  imageFile?: string
  pdfFile?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    category: '',
    imageFile: null,
    pdfFile: null,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  // Options للـ dropdown
  const categoryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'other', label: 'Other' },
  ]

  // Validation Logic
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 3) return 'Name must be at least 3 characters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number'
        return ''
      
      case 'company':
        if (value.trim() && value.trim().length < 2) return 'Company name must be at least 2 characters'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      
      case 'category':
        if (!value) return 'Please select a category'
        return ''
      
      case 'imageFile':
        if (value && value.size > 5 * 1024 * 1024) return 'Image size must be less than 5MB'
        if (value && !value.type.startsWith('image/')) return 'Only image files are allowed'
        return ''
      
      case 'pdfFile':
        if (value && value.size > 10 * 1024 * 1024) return 'PDF size must be less than 10MB'
        if (value && value.type !== 'application/pdf') return 'Only PDF files are allowed'
        return ''
      
      default:
        return ''
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    // معالجة الـ file inputs
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement
      const file = fileInput.files?.[0] || null
      
      setFormData(prev => ({ ...prev, [name]: file }))
      
      // Preview للصور
      if (name === 'imageFile' && file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviewImage(reader.result as string)
        }
        reader.readAsDataURL(file)
      } else if (name === 'imageFile' && !file) {
        setPreviewImage(null)
      }
      
      const error = validateField(name, file)
      setErrors(prev => ({ ...prev, [name]: error }))
    } else {
      // معالجة باقي الـ inputs
      setFormData(prev => ({ ...prev, [name]: value }))
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement
      const file = fileInput.files?.[0] || null
      const error = validateField(name, file)
      setErrors(prev => ({ ...prev, [name]: error }))
    } else {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) {
        newErrors[key as keyof FormErrors] = error
        isValid = false
      }
    })

    setErrors(newErrors)

    if (isValid) {
      // Prepare data for submission
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          submitData.append(key, value)
        }
      })
      
      console.log('Form submitted:', formData)
      // Send submitData to API here
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='bg-white py-17.5 px-5 sm:px-10 flex flex-col gap-5 flex-1 justify-center items-center rounded-lg shadow-(--custom-shadow)'
    >
      <p className='text-2xl text-primary'>Your Message Matters to Us</p>
      
      <div className='flex flex-col md:flex-row gap-5 w-full'>
        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Your Full name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          required
        />
        
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          required
        />
      </div>

      <div className='flex flex-col md:flex-row gap-5 w-full'>
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          required
        />
        
        <div className='flex flex-col gap-2 flex-1'>
          <CountrySelect />
        </div>
      </div>

      {/* Dropdown List - Category */}
      <div className='flex flex-col md:flex-row gap-5 w-full'>
        <FormInput
          label="Inquiry Category"
          name="category"
          type="select"
          options={categoryOptions}
          value={formData.category}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.category}
          required
        />
      </div>

      <div className='flex flex-col gap-5 w-full'>
        <FormInput
          label="Company"
          name="company"
          type="text"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.company}
        />
        
        {/* Upload Image */}
        <div className='space-y-3'>
          <FormInput
            label="Upload Image"
            name="imageFile"
            type="file"
            accept="image/*"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.imageFile}
          />
          {previewImage && (
            <div className='mt-2'>
              <p className='text-sm text-gray-600 mb-2'>Image Preview:</p>
              <img 
                src={previewImage} 
                alt="Preview" 
                className='w-32 h-32 object-cover rounded-lg border border-gray-300'
              />
            </div>
          )}
        </div>

        {/* Upload PDF */}
        <FormInput
          label="Upload PDF Document"
          name="pdfFile"
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.pdfFile}
        />
        
        <FormInput
          label="Message"
          name="message"
          type="textarea"
          placeholder="Your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
          required
        />
      </div>

      <button 
        type='submit'
        className='w-full shadow-(--custom-shadow) rounded-lg flex items-center justify-center gap-2 px-10 py-5 font-bold text-base bg-primary text-text-s hover:bg-primary/90 transition-all duration-300 ease-in-out group hover:scale-[1.02] hover:shadow-lg'
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm