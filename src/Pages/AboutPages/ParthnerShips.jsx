import React from "react";
import Navbar from "../../Components/Navbar";
import ParthnerOne from "../../assets/p1.svg";
import Parthner2 from "../../assets/p2.svg";
import Parthner3 from "../../assets/p3.svg";
import Parthner4 from "../../assets/p4.svg";
import Parthner5 from "../../assets/p5.svg";
import Parthner6 from "../../assets/p6.svg";
import Parthner7 from "../../assets/p7.svg";
import Parthner8 from "../../assets/p8.svg";
import Parthner9 from "../../assets/p9.svg";
import Parthner10 from "../../assets/p10.svg";
import Parthner11 from "../../assets/p11.png";
import Parthner12 from "../../assets/p12.svg";
import Parthner13 from "../../assets/p13.png";
import Parthner14 from "../../assets/p14.png";
import Parthner15 from "../../assets/p15.png";
import Parthner16 from "../../assets/p16.svg";
import Parthner17 from "../../assets/p17.svg";
import Parthner18 from "../../assets/p18.png";
import Parthner19 from "../../assets/p19.png";
import Parthner20 from "../../assets/p20.png";
import Parthner21 from "../../assets/p21.png";
import Parthner22 from "../../assets/p22.png";
import Parthner23 from "../../assets/p23.png";
import Parthner24 from "../../assets/p24.png";
import Parthner25 from "../../assets/p25.png";
import Parthner26 from "../../assets/p26.png";
import Parthner27 from "../../assets/p27.png";
import Parthner28 from "../../assets/p28.png";
import Parthner29 from "../../assets/p29.png";
import Parthner30 from "../../assets/p30.png";
import Parthner31 from "../../assets/p31.png";
import Parthner32 from "../../assets/p32.png";
import Parthner33 from "../../assets/p33.png";
import Footer from "../../Components/Footer";

const ParthnerShips = () => {
  const parthnerShips = [
    ParthnerOne,
    Parthner2,
    Parthner3,
    Parthner4,
    Parthner5,
    Parthner6,
    Parthner7,
    Parthner8,
    Parthner9,
    Parthner10,
    Parthner11,
    Parthner12,
    Parthner13,
    Parthner14,
    Parthner15,
    Parthner16,
    Parthner17,
    Parthner18,
    Parthner19,
    Parthner20,
    Parthner21,
    Parthner22,
    Parthner23,
    Parthner24,
    Parthner25,
    Parthner26,
    Parthner27,
    Parthner28,
    Parthner29,
    Parthner30,
    Parthner31,
    Parthner32,
    Parthner33,
  ];

  // Dignitaries data
  const dignitaries = [
    {
      name: "Shri Nayab Singh Saini",
      title: "Honorable Chief Minister of Haryana"
    },
    {
      name: "Shri Pramod Sawant",
      title: "Honorable Chief Minister of Goa"
    },
    {
      name: "Shri Arjun Munda",
      title: "Honorable Union Minister of Tribal Affairs, Honorable Agriculture and Farmer Welfare"
    },
    {
      name: "Shri Arun Sao",
      title: "Honorable Deputy Chief Minister of Chhattisgarh"
    },
    {
      name: "Dr K Laxman",
      title: "Honorable Minister of parliament, Rajya Sabha, Honorable National President OBC Morcha"
    },
    {
      name: "Shri Bhupendra Singh Choudhary",
      title: "President, BJP Uttar Pradesh"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-[#E07B00]">Partners</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Collaborating with leading organizations to empower youth and drive positive change
          </p>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {parthnerShips.map((item, index) => (
              <div 
                key={index} 
                className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img 
                  src={item} 
                  alt={`Partner ${index + 1}`} 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Partnership Note */}
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-lg">
              And many more prestigious organizations...
            </p>
            <p className="text-[#8B4513] mt-4 max-w-2xl mx-auto">
              We are grateful to all our partners for their continued support in our mission to empower youth through experiential learning and global dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Dignitaries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-[#FFF7ED]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dignitaries Speaking About <span className="text-[#E07B00]">YuvaManthan</span>
          </h2>
          <div className="w-24 h-1 bg-[#E07B00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dignitaries.map((dignitary, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-[#E07B00] hover:scale-105"
            >
              <h3 className="text-xl font-bold text-[#8B4513] mb-2">{dignitary.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{dignitary.title}</p>
              
              {/* Decorative element */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-[#E07B00]">
                  <span className="text-xs font-semibold">YuvaManthan Supporter</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about dignitaries */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Respected dignitaries from across India have appreciated YuvaManthan's contribution to youth empowerment and experiential learning.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ParthnerShips;