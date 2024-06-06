export default function AboutLogin(){
    return<>
      
        <h1 className=" w-[600px] h-[44px] text-[36px] text-center">
            Get in Touch
        </h1>

        <div className=" w-[600px] h-[24px] text-[16px] text-[#838894] text-center">
            We’d love to here for you, Please fill out this form.
        </div>


     <div className=" flex flex-row p-12">

     <div className="">
        <div className=" w-[258px] h-[22px]">
            First name
        </div>
              <input className=" w-[258px] h-[44px] rounded-[5px] p-2" type="name" placeholder="Enter first name" />
         </div>

         <div className=" ml-5">
         <div className=" w-[258px] h-[22px]">
          Last name
        </div>
        <input className=" w-[258px] h-[44px] rounded-[5px] p-2" type="username" placeholder="Enter last name" />
         </div>
         </div>

         <div className=" p-12 mt-[-60px]">
         <div className=" w-[94px] h-[22px] text-[14px]">
            Email Address
         </div>
            <input className=" w-[536px] h-[48px] p-2" type="email" placeholder="enter email address" />
         </div>

         <div className=" p-12">
            <div className=" w-[99px] h-[22px] text-[14px]">
                Phone Number
            </div>
         </div>
    </>
}