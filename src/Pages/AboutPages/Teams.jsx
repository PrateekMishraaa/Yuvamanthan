import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Member1 from "../../assets/teams/shakshi.png"
import Member2 from "../../assets/teams/rahul.png"
import Member3 from "../../assets/teams/akash.jpg"
import Member4 from "../../assets/teams/sneha.jpg"
import Member5 from "../../assets/teams/himanshu.png"
import Member6 from "../../assets/teams/ruchi.jpg"
import Member7 from "../../assets/teams/priyanka.jpg"
import Member8 from "../../assets/teams/neha.jpg"
import Member9 from "../../assets/teams/ashika.jpg"
import Member10 from "../../assets/teams/hemant.jpg"
import Member11 from "../../assets/teams/dhaneswari.jpg"
import Member12 from "../../assets/teams/karan.jpg"
import Member13 from "../../assets/teams/deepali.jpeg"
import Member14 from "../../assets/teams/kanchan.jpg"
import Member15 from "../../assets/teams/divyanka.jpeg"
import Member16 from "../../assets/teams/mahavir.jpg"
import Member17 from "../../assets/teams/arnab.jpeg"
import Member18 from "../../assets/teams/kumkum.jpeg"
import Member19 from "../../assets/teams/payal.jpg"
import Member20 from "../../assets/teams/vishal.jpg"
import Member21 from "../../assets/teams/rahul.jpg"
import Member22 from "../../assets/teams/asha.jpg"
import Member23 from "../../assets/teams/akashh.jpg"
import Member24 from "../../assets/teams/pankaj.webp"
import Member25 from "../../assets/teams/aishwariya.jpg"
import Member26 from "../../assets/teams/naman.jpeg"
import Member27 from "../../assets/teams/nitin.webp"
import { FaLinkedin, FaTwitter, FaEnvelope, FaQuoteLeft } from 'react-icons/fa'

const Teams = () => {
  // Core Team
  const coreTeam = [
    { name: "Sakshi Verma", role: "Program Director", image: Member1 },
    { name: "Rahul Khanna", role: "Process Manager", image: Member2 },
    { name: "Aakash Thakur", role: "Senior Software Developer", image: Member3 },
    { name: "Sneha", role: "Software Developer", image: Member4 },
    { name: "Himanshu Sharma", role: "UI/UX Designer", image: Member5 },
  ]

  // Executives
  const executives = [
    { name: "Ruchi Chhetri", role: "Executive", image: Member6 },
    { name: "Priyanka Yadav", role: "Executive", image: Member7 },
    { name: "Neha Sharma", role: "Executive", image: Member8 },
    { name: "Ashika Chettri", role: "Executive", image: Member9 },
    { name: "Hemant Ved", role: "Executive", image: Member10 },
    { name: "Dhaneshwari Giri", role: "Executive", image: Member11 },
    { name: "Karan Chauhan", role: "Executive", image: Member12 },
    { name: "Deepali Tanwar", role: "Executive", image: Member13 },
    { name: "Kanchan Kanojiya", role: "Executive", image: Member14 },
    { name: "Divyanka Tripathi", role: "Executive", image: Member15 },
    { name: "Mahavir Tiwari", role: "Executive", image: Member16 },
    { name: "Arnab Batayal", role: "Executive", image: Member17 },
    { name: "KumKum Malhotra", role: "Executive", image: Member18 },
    { name: "Payal Shankhwar", role: "Executive", image: Member19 },
    { name: "Vishal Kumar", role: "Executive", image: Member20 },
    { name: "Rahul Kumar", role: "Executive", image: Member21 },
  ]

  // Advisors
  const advisors = [
    { 
      name: "Dr. Asha Bhandarker", 
      role: "Advisor", 
      image: Member22,
      bio: "Dr. Bhandarker is well known in the field of Leadership and HR as a scholar, consultant, and researcher. She is a psychologist by training, a management professor, coach and counsellor by passion and a strong voice for diversity at the workplace. She has published nine books and forty five research papers and cases in peer reviewed national and international journals.",
      fullBio: "Dr. Bhandarker is the recipient of several accolades and awards for her work including the Senior Fulbright Fellowship for Research, Leadership Thinker Award, Best Teacher Award and the Woman of Excellence Award. She has served as an Independent Director on the board of Punjab National Bank and was member of many board level bank HR committees. She has worked closely with the corporate sector for decades, conducting Board levels and Top management workshops on topics of Culture, Leadership Development and Organizational Vision Building."
    },
    { 
      name: "Amit Kapoor", 
      role: "Advisor", 
      image: null,
      bio: "Amit Kapoor, PhD, is Honorary Chairman at Institute for Competitiveness, India. He is an affiliate faculty for the Microeconomics of Competitiveness & Value-Based Health Care Delivery courses of the Institute of Strategy and Competitiveness, Harvard Business School.",
      fullBio: "Amit is the author of bestsellers 'Riding the Tiger' and 'The Age of Awakening: The Story of the Indian Economy Since Independence'. He is also a columnist with IANS in addition to his contributions being published by Economic Times, Hindu Business Insider, Hindu Business Line, Mint, Financial Express, Outlook Business, Governance Now, Business Today. He has written over 500 opinion pieces apart from publishing academic research."
    },
    { 
      name: "Aakash Khandelwal", 
      role: "Advisor", 
      image: Member23,
      bio: "Aakash Khandelwal is an independent consultant with a background in economics and education. He was formerly with STG International, a U.S. based IT training organisation as a lead adviser & was the recipient of National Award for Institutional Excellence in IT education.",
      fullBio: "He has worked as a consultant for many commercial organisations including Network 18-Toppers, ILFS-School Net, IYCON-India. He is also the Governing Body Member of REACHA, an N.G.O. in New Delhi. He has recently completed work on CASE, an online/offline Model for Assessment & E-Governance in Schools. He is associated as Co-Founder of Delhi Public School, Amritsar (Punjab)."
    },
    { 
      name: "Pankaj Sharma", 
      role: "Advisor", 
      image: Member24,
      bio: "Based out of New York, USA, Pankaj Sharma is a public policy and management consultant. He is an alumnus of the prestigious International Visitors Leadership Program (Deptt of State, Government of USA) Alumnus, Ex Civil Rights Commissioner, State of Colorado.",
      fullBio: "Ex Advisor on Sustainability and Technology Initiatives, City of Boulder, Colorado. His passion lies in the advancement of education, youth empowerment and international affairs."
    },
    { 
      name: "Aishwarya Singh", 
      role: "Advisor", 
      image: Member25,
      bio: "Aishwarya is a social worker working in the health sector. She has worked on diverse issues such as Providing legal aid to needy, AES Fever, Organ Donation and free medical camps.",
      fullBio: "As part of her initiative to save girl child, she organised a 21000 Km Long Swasth Bharat Yatra focussing on Girl Child Health. As part of National Mahila Morcha team of Bhartiya Janta Party she is working towards empowering women. As Advisor to YuvaManthan, she has taken upon herself to instill in youth a sense of responsibility towards the nation and working towards creating a India of our dreams."
    },
    { 
      name: "Naman Midha", 
      role: "Advisor", 
      image: Member26,
      bio: "Strategic Thinker | Grassroots Enabler | Advocate for Equitable Education. Naman Midha is a purpose-driven professional passionate about building systems that enable access, equity, and excellence in education.",
      fullBio: "With a decade-long journey in problem-solving and strategy, Naman brings deep experience in designing inclusive, data-backed solutions that create tangible impact—especially for underserved communities. Having worked across diverse regions in India—from urban centres to rural pockets—Naman has developed a strong grasp of local contexts. He is particularly committed to using analytical tools, human-centered design, and grassroots insights to shape education programs that are scalable and sustainable. 'When we unlock access to quality education, we don't just change individual lives—we transform communities.'"
    }
  ]

  // Leadership
  const leadership = [
    { 
      name: "Nitin Agarwal", 
      role: "Director", 
      image: Member27,
      bio: "Nitin is the Convenor of National Association of School Professionals, an NGO working towards bringing a fresh impact-based approach to Learning Beyond Curriculum in India. National Association of School Professionals owns and operates the Yuvamanthan Platform.",
      fullBio: "He is also CEO of Govardhan Learning Cloud (GLC), an organization focused on solving societal issues through learning based intervention among students. GLC is working with the government on issues such as Women Empowerment, Child Safety, Financial Literacy, Environment Protection etc. He is also a Director at Pahle India Foundation (PIF). He was previously Advisor at the UN-ECOSOC recognized leadership and training think tank, Rambhau Mhalgi Prabodhini (RMP). He is an engineer who holds an MBA from Management Development Institute (MDI Gurgaon). He is a prolific author and has written 4 bestsellers Viz. 21 Leadership Lessons of Narendra Damodardas Modi, India's Greatest Speeches, Do You Know Narendra Modi?, and Narendra Modi Ke Netritva ke 21 Sutra."
    }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-[#E07B00]">Team</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the passionate individuals driving YuvaManthan's mission to empower youth through experiential learning
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-16">

        {/* Team Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#E07B00]">
          <p className="text-gray-700 text-lg leading-relaxed">
            Team YMG20 strives to make YMG20 an impactful summit. Our team consists of experts and volunteers who are working closely with other stakeholders to ensure that the summit is a resounding success. The coordination and efforts span from creating content, developing IT infrastructure and promotional strategies to working closely with G20 experts and educational institutions.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-[#E07B00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8B4513] transition-colors shadow-lg">
              CONTACT NOW
            </button>
          </div>
          <p className="text-gray-600 mt-6 text-center italic">
            We also have a team of student volunteers who do most of the groundwork for the institutional-level events called 'Campus Sherpas'. We especially thank the Teacher Coordinators who eventually make it all happen and it goes without saying that Campus Sherpas along with Teacher Coordinators are the backbone of YMG20.
          </p>
        </div>

        {/* Leadership Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#8B4513] to-[#E07B00] p-8 flex items-center justify-center">
                    {leader.image ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-48 h-48 rounded-full bg-white/20 flex items-center justify-center border-4 border-white">
                        <span className="text-white text-4xl font-bold">{leader.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-[#8B4513] mb-2">{leader.name}</h3>
                    <p className="text-[#E07B00] font-semibold mb-4">{leader.role}</p>
                    <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">{leader.fullBio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* We Are A Young Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
            WE ARE A YOUNG TEAM AND GROWING
          </h2>
          
          {/* Core Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-[#8B4513]">{member.name}</h3>
                  <p className="text-sm text-[#E07B00]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Executives Grid */}
          <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Executives</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {executives.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="font-semibold text-[#8B4513] text-sm">{member.name}</h4>
                  <p className="text-xs text-[#E07B00]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
            Our Advisors
          </h2>

          <div className="space-y-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-br from-[#8B4513] to-[#E07B00] p-6 flex items-center justify-center">
                    {advisor.image ? (
                      <img 
                        src={advisor.image} 
                        alt={advisor.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center border-4 border-white">
                        <span className="text-white text-3xl font-bold">{advisor.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/4 p-6">
                    <h3 className="text-xl font-bold text-[#8B4513] mb-2">{advisor.name}</h3>
                    <p className="text-[#E07B00] font-semibold mb-3">{advisor.role}</p>
                    <p className="text-gray-700 leading-relaxed">{advisor.bio}</p>
                    {advisor.fullBio && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed">{advisor.fullBio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#E07B00] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B4513] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Top ↑
          </button>
        </div>

      </section>

      <Footer/>
    </>
  )
}

export default Teams