import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Bola from "../../assets/images/frame.png";
=======
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Bola from "../../assets/images/frame.png";
>>>>>>> 58bd6a5122f3a3e191e9e2a947d2279273107e32

const reviews = [
    {
        name: "Cody Fisher",
        email: "tim.jennings@example.com",
        text: "Coordination of activities improved tremendously with Learn codings.",
        rating: 4.5,
        image: 'frame-70-4.png'
    },
    {
        name: "Esther Howard",
        email: "felicia.reid@example.com",
        text: "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!",
        rating: 4.5,
        image: 'frame-70-2.png'
    },
    {
        name: "Eleanor Pena",
        email: "nathan.roberts@example.com",
        text: "I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!",
        rating: 4.5,
        image: 'frame-70.png'
    },
    {
        name: "Kristin Watson",
        email: "bill.sanders@example.com",
        text: "With Learn codings, we have finally accomplished things that have been waiting forever to get done.",
        rating: 4.5,
        image: 'frame-70-3.png'
    }
];

const Alside = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center w-full p-5 relative">
            <div className="text-center mb-5">
                <p className={`font-bold text-center ${isMobile ? 'text-2xl' : 'text-4xl'} text-[#f1f2ff]`}>
                    Reviews from other learners
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl w-full">
                {reviews.map((review, index) => (
                    <div key={index} className="p-5 flex justify-center">
                        <div className="flex flex-col p-5 bg-[#161d29] rounded-lg w-80 h-52">
                            <div className="flex items-center mb-2.5">
                                <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${review.image})` }}></div>
                                <div className="flex items-center ml-2.5">
                                    <img src={Bola} alt="rating" className="w-12 h-12" />
                                    <div className="flex flex-col ml-2.5">
                                        <p className="text-sm font-bold text-[#f1f2ff]">{review.name}</p>
                                        <p className="text-xs text-[#424854]">{review.email}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-[#dbddea]">{review.text}</p>
                            <p className="text-sm font-bold text-[#e7c009]">{review.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 h-96 bg-gradient-to-r from-[#000814] via-transparent to-[#000814]" />
        </div>
    );
};

export default Alside;
