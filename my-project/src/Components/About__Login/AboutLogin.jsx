export default function AboutLogin(){
    return<>
      
        <h1 className=" w-[600px] h-[44px] text-[36px] text-center text-[#F1F2FF]">
            Get in Touch
        </h1>

        <div className=" w-[600px] h-[24px] text-[16px] text-[#838894] text-center">
            We’d love to here for you, Please fill out this form.
        </div>


     <div className=" flex flex-row p-12">

     <div className="">
        <div className=" w-[258px] h-[22px] text-[#F1F2FF]">
            First name
        </div>
              <input className=" w-[258px] h-[44px] rounded-[5px] p-2 bg-[#161D29] text-[#fff]" type="name" placeholder="Enter first name" />
         </div>

         <div className=" ml-5">
         <div className=" w-[258px] h-[22px] text-[#F1F2FF]">
          Last name
        </div>
        <input className=" w-[258px] h-[44px] rounded-[5px] p-2 bg-[#161D29] text-[#fff]" type="username" placeholder="Enter last name" />
         </div>
         </div>

         <div className=" p-12 mt-[-60px]">
         <div className=" w-[94px] h-[22px] text-[14px] text-[#F1F2FF]">
            Email Address
         </div>
            <input className=" w-[536px] h-[48px] p-2 rounded-[5px] bg-[#161D29] text-[#fff]" type="email" placeholder="enter email address" />
         </div>

         <div className=" p-12 mt-[-60px]">
            <div className=" w-[99px] h-[22px] text-[14px] text-[#F1F2FF]">
                Phone Number
            </div>
            <input className=" w-[81px] h-[48px] p-2 rounded-[5px] bg-[#161D29]"/>
            <select className="text-[#999DAA] ml-[-70px] bg-[#161D29]" name="" id="">
                <option className="  text-[#999DAA]" value="">+998</option>
                <option className=" text-[#707072]" value="">+918</option>
                <option className=" text-[#999DAA]" value="">+918</option>
                <option className=" text-[#999DAA]" value="">+138</option>
            </select>

            <input className=" w-[435px] h-[48px] p-2 ml-6 rounded-[5px] bg-[#161D29] text-[#fff]" type="number" placeholder="12345 67890" />
         </div>

         <div className=" p-12 mt-[-70px]">
            <div className=" w-[60px] p-[20px] text-[#fff]">
                Massege
            </div>
            <input className=" w-[536px] rounded-[8px] pb-[80px] p-2 bg-[#161D29] text-[#fff]" type="text" placeholder="Enter massage" />
         </div>
<div className=" p-12">
    
<button className=" w-[536px] h-[48px] bg-[#FFD60A] rounded-[8px] translate-y-[-62px]">Send Message</button>
</div>
    </>
}