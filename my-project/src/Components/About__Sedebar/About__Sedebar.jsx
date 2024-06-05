import HTML from "../../assets/html.png"


export default function About__Sedebar() {
    return (
        <div className="w-[1440px] ml-[-115px]">
            <p className="w-[1100px] text-[#AFB2BF] text-[36px] tracking-[-2%] text-center ml-[130px]"><span className="text-[50px]">"</span> We are passionate about revolutionizing the way we learn. Our innovative platform <span className="text-[aqua]">combines technology</span>, <span className="text-[#F09819]">expertise</span>, and community to create an <span className="text-[#F9D423]">unparalleled educational experience.</span> <span className="text-[50px]">"</span></p>

            <div className="p-[90px, 120px, 90px, 120px] flex">
                <div className=" flex justify-between">
                    <div className=" mt-[90px] block ml-[70px]">
                        <p className="w-[486px] h-[44px] text-[36px] tracking-[-2%] text-[#FD1D1D]">Our Founding Story </p>
                        <p className="w-[480px] h-[120px] text-[#838894] text-[16px] text-left mt-[24px] ml-[90px]">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                        <p className="w-[480px] h-[120px] text-[#838894] text-[16px] text-left mt-[24px] ml-[90px]">As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                    </div>
                    <div className=""><img className=" block" src={HTML} alt="" /></div>
                </div>
            </div>

        </div>
    )
}
