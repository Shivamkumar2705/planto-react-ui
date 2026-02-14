import React from 'react';
import user1 from '../assets/avatar-1.png';
import user2 from '../assets/avatar-2.png';
import user3 from '../assets/avatar-3.png';

const reviews = [
    { 
        id: 1, 
        name: "Mahn Josi", 
        role: "Customer", 
        img: user1, 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
        id: 2, 
        name: "Alina Thakur", 
        role: "Customer", 
        img: user2, 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
        id: 3, 
        name: "Max Makvana", 
        role: "Customer", 
        img: user3, 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
];

const Reviews = () => {
  return (
    <section className="px-6 md:px-16 py-24">
      {/* Title */}
      <div className="flex justify-center mb-20">
          <div className="relative inline-block">
             <span className="absolute -top-2 -left-4 text-green-500/50 text-4xl font-light">⌜</span>
             <h2 className="text-3xl font-bold px-4">Customer Review</h2>
             <span className="absolute -top-2 -right-4 text-green-500/50 text-4xl font-light">⌝</span>
          </div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-10">
          {reviews.map((review) => (
              // CARD STYLING
              // bg-[#171F12] to match background.
              // CHANGED ROUNDED CORNERS to match the asymmetrical shape in the pic:
              // rounded-t-[40px] & rounded-bl-[40px] are standard.
              // rounded-br-[140px] creates the large sweeping bottom-right curve.
              <div 
                key={review.id} 
                className="w-full md:w-[360px] h-auto min-h-[320px] bg-[#171F12] border border-white/10 rounded-t-[40px] rounded-bl-[40px] rounded-br-[140px] p-10 flex flex-col justify-center hover:bg-white/5 transition duration-300 shadow-2xl"
              >
                  {/* Header: Image + Name */}
                  <div className="flex items-center gap-5 mb-6">
                      <img 
                        src={review.img} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border border-white/10" 
                      />
                      <div>
                          <h4 className="font-bold text-lg text-white">{review.name}</h4>
                          <div className="flex text-yellow-400 text-sm gap-1 mt-1">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                          </div>
                      </div>
                  </div>
                  
                  {/* Text Content */}
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {review.text}
                  </p>
              </div>
          ))}
      </div>
    </section>
  );
};

export default Reviews;