import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col gap-6 lg:gap-10 items-center justify-center bg-[#37403D] overflow-x-hidden py-10 md:py-16'
      style={{
        backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}>
      <img src="/pics/LOGO.png" alt="logo" className='w-16 md:w-24 xl:w-36  h-16 md:h-24 xl:h-36 mt-10'/>

      <p className='font-conthrax text-4xl xl:text-6xl font-semibold text-[#DCE2E2]'>LOGIN</p>

      <div className='flex flex-col gap-3 w-[70%] mx-auto rounded-xl bg-[#1E2322] p-6 lg:p-10'>
        <div className='flex flex-col gap-1'>
         <label htmlFor="email" className='text-white text-lg font-semibold xl:text-xl'>Email</label>
         <input id='enail' type="email" placeholder='email' className='bg-[#1E1E1E] placeholder:text-opacity-40 p-2' />
         </div>

         <div className='flex flex-col gap-2'>
         <label htmlFor="email" className='text-white text-lg font-semibold xl:text-xl'>Password</label>
         <input id='enail' type="password" placeholder='password' className='bg-[#1E1E1E] placeholder:text-opacity-40 p-2' />
         </div>

         <button className='w-full bg-[#8AD5B7] text-[#1E1E1E] font-semibold text-lg xl:text-xl py-2 text-center rounded-lg hover:bg-[#6CBF9A] transition-all duration-300 ease-in-out'>
          Sign In
         </button>

         <div className='mt-6 lg:mt-10 flex flex-col gap-2'>
        <p className='underline text-white font-semibold cursor-pointer'>Forgot Password?</p>
        <p className='underline text-white font-semibold cursor-pointer'>Register</p>
      </div>

      <div className='flex justify-end text-[#8BD5B7] underline underline-offset-2 cursor-pointer'>
        <p className='text-white font-semibold'>New Member?</p>
         <p className='text-[#8BD5B7] font-semibold'>Register Here</p>
      </div>
      </div>
    </div>
  )
}

export default Page
