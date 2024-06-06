import React from "react";

const About__Main = () => {
  return (
    <div className=" container mx-auto  w-[1440px] mr-20">
      <div className="w-[1440px] h-[416px]">
        <ul className="flex ml-[185px] mt-[90px] gap-4 ">
          <li className="  w-[486px] h-[212px] ">
            <h2 className="w-[486px] h-[44px] font-semibold text-3xl text-[#E65C00]">
              Our Vision
            </h2>
            <p className=" text-[#838894] w-[486px] h-[144px] text-base font-medium mt-[20px] ">
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </li>
          <li className="  w-[486px] h-[212px] ">
            <h2 className="w-[486px] h-[44px] font-semibold text-3xl text-[#1FA2FF]">
              Our Mission
            </h2>
            <p className=" text-[#838894] w-[486px] h-[168px] text-base font-medium mt-[20px] ">
              our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </li>
        </ul>
      </div>
      <div className=" w-[1440px] h-[254px] bg-[#2C333F] ">

      </div>
    </div>
  );
};

export default About__Main;
