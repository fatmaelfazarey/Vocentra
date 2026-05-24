// import React, { useEffect, useState } from 'react'
// import CountrySelect from '../../MY-UI/CountrySelect';

// const ContactForm = () => {

//   return (
//     <form className='bg-white py-17.5 px-5 sm:px-10 flex flex-col gap-5 flex-1 max-w-3xl justify-center items-center rounded-lg   shadow-(--custom-shadow) '>
//       <p className='text-2xl text-primary'>Your Message Matters to Us</p>
//       <div className='flex flex-col md:flex-row gap-5 w-full'>
//         <div className='flex flex-col gap-2 flex-1'>
//           <label htmlFor="name" className='text-xl text-text'>Name</label>
//           <input
//             type="text"
//             id='name'
//             placeholder='Your Full name'
//             className='text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary'

//           />
//         </div>
//         <div className='flex flex-col gap-2 flex-1'>
//           <label htmlFor="email" className='text-xl text-text'>Email</label>
//           <input
//             type="email"
//             id='email'
//             placeholder='example@gmail.com'
//             className='text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary'
//           />
//         </div>
//       </div>
//       <div className='flex flex-col md:flex-row gap-5 w-full '>
//         <div className='flex flex-col gap-2 flex-1'>
//           <label htmlFor="phone" className='text-xl text-text outline-primary'>Phone</label>
//           <input
//             type="text"
//             id='phone'
//             placeholder='Your Phone Name'
//             className='text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary'

//           />
//         </div>

//         <div className='flex flex-col gap-2 flex-1'><CountrySelect /></div>

//       </div>
//       <div className='flex flex-col  gap-5 w-full'>
//         <div className='flex flex-col gap-2 flex-1'>
//           <label htmlFor="company" className='text-xl text-text'>Company</label>

//           <input
//             type="text"
//             id='company'
//             placeholder='company name'
//             className='text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary'

//           />
//         </div>
//         <div className='flex flex-col gap-2 flex-1'>
//           <label htmlFor="message" className='text-xl text-text'>Message</label>
//           <textarea
//             rows={5}
//             id='message'
//             placeholder='Your message'
//             className='text-base text-text px-2.5 py-5 bg-secondary rounded-lg outline-primary resize-none'
//           />
//         </div>
//       </div>
//       <button type='submit'
//         className={`w-full shadow-(--custom-shadow) rounded-lg flex items-center justify-center gap-2 px-10 py-5  font-bold text-base bg-primary text-text-s hover:bg-primary/90 transition-all duration-300 ease-in-out  group hover:scale-[1.02] hover:shadow-lg `}
//       >Send</button>
//     </form>
//   )
// }

// export default ContactForm

import React, { useState } from 'react'
import CountrySelect from '../../MY-UI/CountrySelect'
import FormInput from '../../MY-UI/FormInput'


interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})

  // Validation Logic
  const validateField = (name: string, value: string): string => {
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
      default:
        return ''
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation on change
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields before submit
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
      console.log('Form submitted:', formData)
      // Submit logic here
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='bg-white py-17.5 px-5 sm:px-10 flex flex-col gap-5 flex-1 max-w-3xl justify-center items-center rounded-lg shadow-(--custom-shadow)'
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