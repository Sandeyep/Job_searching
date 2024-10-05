import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import toast from 'react-hot-toast'

const AddJob = () => {
  const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    const formData = {
      type: values.type,
      title: values.title,
      location: values.location,
      description: values.description,
      salary: values.salary,
      company: {
        name: values.companyName,
        description: values.companyDesc,
        contactEmail: values.companyEmail,
        contactPhone: values.companyPhone
      }
    }
   try {
    await axios.post("http://localhost:4000/jobs",formData)
    toast.success("Job added sucessfully!")
    reset()
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border max-w-2xl mx-auto my-10'>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <div className='space-y-1'>
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            name="type"
            {...register('type')}
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor='title'>Job Listing Name</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Add job title"
            {...register('title', {
              required: "Tile is required*"
            })}
          />
          {errors.title && <p className='italic text-sm text-red-500 tracking-wide'>{errors.title.message}</p>}
        </div>
        <div className='space-y-1'>
          <label
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            rows='4'
            placeholder='Add any job duties, expectations, requirements, etc'
            {...register('description', {
              required: "Description is required*"
            })}
          ></textarea>
          {errors.description && <p className='italic text-sm text-red-500 tracking-wide'>{errors.description.message}</p>}
        </div>
        <div className='space-y-1'>
          <label
            htmlFor='salary'
          >
            Salary
          </label>
          <select
            id='salary'
            name='salary'
            {...register('salary')}
          >
            <option value='Under $50K'>Under $50K</option>
            <option value='$50K - 60K'>$50K - $60K</option>
            <option value='$60K - 70K'>$60K - $70K</option>
            <option value='$70K - 80K'>$70K - $80K</option>
            <option value='$80K - 90K'>$80K - $90K</option>
            <option value='$90K - 100K'>$90K - $100K</option>
            <option value='$100K - 125K'>$100K - $125K</option>
            <option value='$125K - 150K'>$125K - $150K</option>
            <option value='$150K - 175K'>$150K - $175K</option>
            <option value='$175K - 200K'>$175K - $200K</option>
            <option value='Over $200K'>Over $200K</option>
          </select>
        </div>

        <div className='space-y-1'>
          <label htmlFor='location'>
            Location
          </label>
          <input
            type='text'
            id='location'
            name='location'
            placeholder='Company Location'
            {...register('location', {
              required: "Location is required*"
            })}
          />
          {errors.location && <p className='italic text-sm text-red-500 tracking-wide'>{errors.location.message}</p>}
        </div>

        <h3 className='text-2xl mb-5'>Company Info</h3>
        <div className='space-y-1'>
          <label htmlFor='company'>
            Company Name
          </label>
          <input
            type='text'
            id='company'
            name='company'
            placeholder='Company Name'
            {...register('companyName', {
              required: "Company name is required*"
            })}
          />
          {errors.companyName && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyName.message}</p>}
        </div>

        <div className='space-y-1'>
          <label htmlFor='company_description'>
            Company Description
          </label>
          <textarea
            id='company_description'
            name='company_description'
            rows='4'
            placeholder='What does your company do?'
            {...register('companyDesc', {
              required: "Company description is required*"
            })}
          ></textarea>
          {errors.companyDesc && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyDesc.message}</p>}
        </div>

        <div className='space-y-1'>
          <label htmlFor='contact_email'>
            Contact Email
          </label>
          <input
            type='email'
            id='contact_email'
            name='contact_email'
            placeholder='Email address for applicants'
            {...register('companyEmail', {
              required: "Company Email is required*"
            })}
          />
          {errors.companyEmail && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyEmail.message}</p>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='contact_phone'>
            Contact Phone
          </label>
          <input
            type='tel'
            id='contact_phone'
            name='contact_phone'
            placeholder='Optional phone for applicants'
            {...register('companyPhone', {
              required: "Company Contact is required*"
            })}
          />
          {errors.companyContact && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyContact.message}</p>}
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            {isSubmitting ? "processing..." : "Add Job"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
