import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const EditJob = () => {
  const location = useLocation();
  const job = location.state?.job;
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async values => {
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
    };
    try {
      await axios.put(`http://localhost:4000/jobs/${job?.id}`, formData);
      toast.success("Job updated successfully!");
      navigate('/jobs');
    } catch (error) {
      console.log(error);
      toast.error("Failed to update job.");
    }
  };

  return (
    <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border max-w-2xl mx-auto my-10'>
      <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <div className='space-y-1'>
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            name="type"
            {...register('type')}
            defaultValue={job?.type || 'Full-Time'}
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
            placeholder="Add job title"
            {...register('title', { required: "Title is required*" })}
            defaultValue={job?.title || ''}
          />
          {errors.title && <p className='italic text-sm text-red-500 tracking-wide'>{errors.title.message}</p>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='4'
            placeholder='Add any job duties, expectations, requirements, etc'
            {...register('description', { required: "Description is required*" })}
            defaultValue={job?.description || ''}
          ></textarea>
          {errors.description && <p className='italic text-sm text-red-500 tracking-wide'>{errors.description.message}</p>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='salary'>Salary</label>
          <select
            id='salary'
            {...register('salary')}
            defaultValue={job?.salary || 'Under $50K'}
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
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            placeholder='Company Location'
            {...register('location', { required: "Location is required*" })}
            defaultValue={job?.location || ''}
          />
          {errors.location && <p className='italic text-sm text-red-500 tracking-wide'>{errors.location.message}</p>}
        </div>
        <h3 className='text-2xl mb-5'>Company Info</h3>
        <div className='space-y-1'>
          <label htmlFor='companyName'>Company Name</label>
          <input
            type='text'
            id='companyName'
            placeholder='Company Name'
            {...register('companyName', { required: "Company name is required*" })}
            defaultValue={job?.company.name || ''}
          />
          {errors.companyName && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyName.message}</p>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='companyDesc'>Company Description</label>
          <textarea
            id='companyDesc'
            rows='4'
            placeholder='What does your company do?'
            {...register('companyDesc', { required: "Company description is required*" })}
            defaultValue={job?.company.description || ''}
          ></textarea>
          {errors.companyDesc && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyDesc.message}</p>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='companyEmail'>Contact Email</label>
          <input
            type='email'
            id='companyEmail'
            name='companyEmail'
            placeholder='Email address for applicants'
            {...register('companyEmail', { required: "Company Email is required*" })}
            defaultValue={job?.company.contactEmail || ''}
          />
          {errors.companyEmail && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyEmail.message}</p>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='companyPhone'>Contact Phone</label>
          <input
            type='tel'
            id='companyPhone'
            placeholder='Optional phone for applicants'
            {...register('companyPhone')}
            defaultValue={job?.company.contactPhone || ''}
          />
          {errors.companyPhone && <p className='italic text-sm text-red-500 tracking-wide'>{errors.companyPhone.message}</p>}
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            {isSubmitting ? "Processing..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditJob;
