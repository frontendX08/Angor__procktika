import React from 'react';

const About__Section = () => {
  return (
    <div className='w-full lg:w-[1440px] mx-auto px-4 lg:px-0'>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:ml-24 mt-10 lg:mt-20 w-full lg:w-auto">
          <p className='w-full lg:w-[529px] font-normal text-[24px] lg:text-[36px] tracking-[-2%] text-[#F1F2FF]'>
            World-Class Learning for <span className='text-[#20BDFF]'>Anyone, Anywhere</span>
          </p>
          <p className='w-full lg:w-[529px] font-medium mt-4 text-[#838894] text-[14px] lg:text-[16px]'>
            Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
          </p>
          <button className='w-[120px] lg:w-[137px] h-[40px] lg:h-[48px] bg-[#FFD60A] rounded-[8px] font-bold mt-6 lg:mt-10'>
            Learn More
          </button>
        </div>
        <div className="mt-20">
        <div className="lg:ml-8 flex flex-wrap justify-center lg:justify-start mt-[-50px] lg:mt-0">
          <div className="w-[260px] lg:w-[294.5px] h-[260px] lg:h-[294px] bg-[#2C333F] m-4 lg:m-0">
            <p className='text-[#F1F2FF] w-[200px] lg:w-[230px] font-semibold text-[16px] lg:text-[18px] p-6 lg:p-[32px]'>
              Curriculum Based on Industry Needs
            </p>    
            <p className='text-[#AFB2BF] w-[200px] lg:w-[230px] font-normal text-[12px] lg:text-[14px] p-[2px] ml-4 lg:ml-8'>
              Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.
            </p>
          </div>
          <div className="w-[260px] lg:w-[294.5px] h-[260px] lg:h-[294px] bg-[#161D29] m-4 lg:m-0">
            <p className='text-[#F1F2FF] w-[200px] lg:w-[230px] font-semibold text-[16px] lg:text-[18px] p-6 lg:p-[32px]'>
              Our Learning Methods
            </p>    
            <p className='text-[#AFB2BF] w-[200px] lg:w-[230px] font-normal text-[12px] lg:text-[14px] p-[2px] ml-4 lg:ml-8'>
              The learning process uses the namely online and offline.
            </p>
          </div>
        </div>
        </div>
      </div>
     <div className="mt-24 ml-8">
     <div className="flex flex-wrap justify-center  lg:justify-start lg:ml-[364px] mt-[-100px] ml-[-30px] lg:mt-[-96px]">
        <div className="w-[260px] lg:w-[294\.5px] h-[260px] lg:h-[294px] bg-[#2C333F] m-4 lg:m-0">
          <p className='text-[#F1F2FF] w-[200px] lg:w-[230px] font-semibold text-[16px] lg:text-[18px] mt-4 lg:mt-6 p-6 lg:p-[32px]'>
            Certification
          </p>    
          <p className='text-[#AFB2BF] w-[200px] lg:w-[230px] font-normal text-[12px] lg:text-[14px] p-[2px] pt-4 ml-4 lg:ml-8'>
            You will get a certificate that can be used as a certification during job hunting.
          </p>
        </div>
        <div className="w-[260px] lg:w-[294.5px] h-[260px] lg:h-[294px] bg-[#161D29] m-4 lg:m-0">
          <p className='text-[#F1F2FF] w-[200px] lg:w-[230px] font-semibold text-[16px] lg:text-[18px] pt-4 lg:pt-10 p-6 lg:p-[32px]'>
            Rating "Auto-grading"
          </p>    
          <p className='text-[#AFB2BF] w-[200px] lg:w-[230px] font-normal text-[12px] lg:text-[14px] p-[2px] mt-4 ml-4 lg:ml-8'>
            You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.
          </p>
        </div>
        <div className="w-[260px] lg:w-[294.5px] h-[260px] lg:h-[294px] bg-[#2C333F] m-4 lg:m-0">
          <p className='text-[#F1F2FF] w-[200px] lg:w-[230px] font-semibold text-[16px] lg:text-[18px] p-6 lg:p-[32px] pt-4 lg:pt-10'>
            Ready to Work
          </p>    
          <p className='text-[#AFB2BF] w-[200px] lg:w-[230px] font-normal text-[12px] lg:text-[14px] p-[2px] pt-4 ml-4 lg:ml-8'>
            Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.
          </p>
        </div>
     </div>
      </div>
    </div>
  )
}

export default About__Section
