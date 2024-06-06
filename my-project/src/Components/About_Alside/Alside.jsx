import Bola from "../../assets/images/frame.png";

const reviews = [
  {
    name: "Cody Fisher",
    email: "tim.jennings@example.com",
    text: "Coordination of activities improved tremendously with Learn codings.",
    rating: 4.5,
    image: "frame-70-4.png",
  },
  {
    name: "Esther Howard",
    email: "felicia.reid@example.com",
    text: "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!",
    rating: 4.5,
    image: "frame-70-2.png",
  },
  {
    name: "Eleanor Pena",
    email: "nathan.roberts@example.com",
    text: "I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!",
    rating: 4.5,
    image: "frame-70.png",
  },
  {
    name: "Kristin Watson",
    email: "bill.sanders@example.com",
    text: "With Learn codings, we have finally accomplished things that have been waiting forever to get done.",
    rating: 4.5,
    image: "frame-70-3.png",
  },
];

const Alside = () => (
  <div className="flex flex-col items-center w-full relative gap-12 px-8 py-20 lg:px-28">
    <div className="flex flex-col items-center w-full gap-3 lg:px-28">
      <p className="text-2xl lg:text-4xl font-semibold text-center text-[#f1f2ff]">
        Reviews from other learners
      </p>
    </div>
    <div className="flex flex-col w-full gap-5 max-w-7xl">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-3 bg-[#161d29] rounded-md"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-full bg-cover bg-center`}
              style={{ backgroundImage: `url('${review.image}')` }}
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-[#f1f2ff]">
                {review.name}
              </p>
              <p className="text-xs font-medium text-[#424854]">
                {review.email}
              </p>
            </div>
          </div>
          <p className="text-xs font-medium text-[#dbddea]">{review.text}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-[#e7c009]">
              {review.rating}
            </p>
            <img src={Bola} alt="rating" />
          </div>
        </div>
      ))}
    </div>
    <div className="absolute inset-0 h-[460px] bg-gradient-to-r from-[#000814] via-transparent to-[#000814]" />
  </div>
);

export default Alside;
