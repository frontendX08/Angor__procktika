import React from "react";

const About__Main = () => {
  return (
    <>
      <div className="">
        <div className="w-full max-w-[1440px] mx-auto h-auto md:h-[416px]">
          <ul className="flex flex-col md:flex-row ml-4 md:ml-[185px] mx-auto mt-[30px] md:mt-[90px] gap-4">
            <li className="w-full md:w-[486px] h-auto md:h-[212px]">
              <h2 className="w-full md:w-[486px] h-[44px] font-semibold text-3xl text-[#E65C00]">
                Our Vision
              </h2>
              <p className="text-[#838894] w-full md:w-[486px] h-auto md:h-[144px] text-base font-medium mt-[20px]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </li>
            <li className="w-full md:w-[486px] h-auto md:h-[212px]">
              <h2 className="w-full md:w-[486px] h-[44px] font-semibold text-3xl text-[#1FA2FF]">
                Our Mission
              </h2>
              <p className="text-[#838894] w-full md:w-[486px] h-auto md:h-[168px] text-base font-medium mt-[20px]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#2C333F] h-auto md:h-[254px] py-10 md:py-0">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="">
            <ul className="flex flex-wrap ml-[50px] md:ml-[200px] gap-4 md:gap-[170px]">
              <li className="w-[calc(50%-0.5rem)] md:w-auto mt-4 md:mt-[100px]">
                <h4 className="w-[41px] h-[38px] ml-[35px] font-bold text-3xl text-[#F1F2FF]">
                  5K
                </h4>
                <p className="w-[124px] h-[24px] font-semibold text-base text-[#838894]">
                  Active Students
                </p>
              </li>
              <li className="w-[calc(50%-0.5rem)] md:w-auto mt-4 md:mt-[100px]">
                <h4 className="w-[41px] h-[38px] ml-[10px] font-bold text-3xl text-[#F1F2FF]">
                  10+
                </h4>
                <p className="w-[124px] h-[24px] font-semibold text-base text-[#838894]">
                  Mentors
                </p>
              </li>
              <li className="w-[calc(50%-0.5rem)] md:w-auto mt-4 md:mt-[100px]">
                <h4 className=" ml-[20px] w-[41px] h-[38px] font-bold text-3xl text-[#F1F2FF]">
                  200+
                </h4>
                <p className=" ml-[20px] w-[124px] h-[24px] font-semibold text-base text-[#838894]">
                  Courses
                </p>
              </li>
              <li className="w-[calc(50%-0.5rem)] md:w-auto mt-4 md:mt-[100px]">
                <h4 className="  w-[41px] h-[38px] ml-[10px] font-bold text-3xl text-[#F1F2FF]">
                  50+
                </h4>
                <p className=" ml-[5px] w-[124px] h-[24px] font-semibold text-base text-[#838894]">
                  Awards
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About__Main;