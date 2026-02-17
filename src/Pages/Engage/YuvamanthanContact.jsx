import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import axios from "axios"
import Swal from "sweetalert2"
import Footer from '../../Components/Footer'
import { 
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Send,
  Clock,
  Users,
  Target,
  ArrowRight,
  ChevronRight,
  Navigation,
  ExternalLink,
  Building,
  Mail as MailIcon,
  Map,
  User,
  MessageCircle
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const YuvamanthanContact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Fullname: '',
    Email: '',
    Subject: '',
    PhoneNumber: '',
    Message: ''
  })


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!formData.Fullname || !formData.Email || !formData.Subject || !formData.PhoneNumber || !formData.Message){
      Swal.fire('All Fields are required')
    }
    try{
      const response = await axios.post('https://yuvamanthanbackend.onrender.com/api/contact',formData,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      Swal.fire("Your Query has been successfully submitted | !Thankyou")

      setFormData({
        Fullname:"",
        Email:"",
        Message:"",
        Subject:"",
        PhoneNumber:""
      })
      navigate('/')
    }catch(error){
      console.log('error',error)
      Swal.fire('Something went wrong')
    }
  }

  // Contact points
  const contactPoints = [
    {
      title: "Head Office",
      address: "A 92 (First Floor) South Extension Part II, New Delhi-110049",
      icon: <Building className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Phone",
      info: "+91 9560771911",
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Email",
      info: "connect@yuvamanthan.org",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-[#C46200] to-[#E07B00]"
    },
    {
      title: "Working Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-[#E07B00] to-[#FFA500]"
    }
  ]

  // Nearby locations
  const nearbyLocations = [
    { name: "South Extension II", distance: "0.1 km", color: "from-[#6A3E2E] to-[#8B4513]" },
    { name: "Lajpat Nagar", distance: "1.2 km", color: "from-[#8B4513] to-[#C46200]" },
    { name: "Green Park", distance: "2.5 km", color: "from-[#C46200] to-[#E07B00]" },
    { name: "Hauz Khas", distance: "3.0 km", color: "from-[#E07B00] to-[#FFA500]" },
    { name: "Kailash Colony", distance: "1.8 km", color: "from-[#FFA500] to-[#FF8C00]" },
    { name: "Moolchand", distance: "1.5 km", color: "from-[#FF8C00] to-[#FF7F00]" }
  ]

  // Contact methods
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "For general questions and information",
      email: "info@yuvamanthan.org",
      response: "Within 24 hours",
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Partnerships",
      description: "For collaboration and partnership opportunities",
      email: "partnerships@yuvamanthan.org",
      response: "Within 48 hours",
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Media Relations",
      description: "For press and media inquiries",
      email: "media@yuvamanthan.org",
      response: "Within 24 hours",
      gradient: "from-[#C46200] to-[#E07B00]"
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">
                    Let's Connect & Collaborate
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-[#6A3E2E]">Get In</span>
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#8B4513] leading-relaxed">
                  Connect with us to collaborate, create relationships and more. 
                  Yuva manthan aims to create awareness, soft skills and participation 
                  amongst the youth on the principles of self-awareness, inclusivity, 
                  role sharing and innovation.
                </p>

                <p className="text-base sm:text-lg text-[#8B4513]">
                  Therefore, advancing their role in a fast changing world by promoting 
                  sustainability and inclusive growth. Join us in our initiatives and 
                  help us achieve our goals of creating a powerful youth ecosystem in India.
                </p>
              </div>

              {/* Contact Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {contactPoints.map((point, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${point.gradient} rounded-lg sm:rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#6A3E2E]/10 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start">
                        <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${point.gradient} mr-2 sm:mr-3 flex-shrink-0`}>
                          <div className="text-white">
                            {point.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#6A3E2E] text-xs sm:text-sm mb-1">{point.title}</h3>
                          <p className="text-[#8B4513]/80 text-xs sm:text-sm break-words">
                            {point.address || point.info}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">Call Now</span>
                  </div>
                </button>
                
                <button className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">Get Directions</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6A3E2E] mb-2">
                      Leave Us a Message
                    </h2>
                    <p className="text-sm sm:text-base text-[#8B4513]/80">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#6A3E2E] mb-1 sm:mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                          <input
                            type="text"
                            name="Fullname"
                            value={formData.Fullname}
                            onChange={handleChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#6A3E2E] mb-1 sm:mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                          <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#6A3E2E] mb-1 sm:mb-2">
                          Subject
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                          <input
                            type="text"
                            name="Subject"
                            value={formData.Subject}
                            onChange={handleChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base"
                            placeholder="Message subject"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#6A3E2E] mb-1 sm:mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                          <input
                            type="text"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#6A3E2E] mb-1 sm:mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                        <textarea
                          name="Message"
                          value={formData.Message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base resize-none"
                          placeholder="Tell us about your inquiry..."
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group text-sm sm:text-base"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-[#6A3E2E]/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6A3E2E]">
                        Our Location
                      </h2>
                      <p className="text-sm sm:text-base text-[#8B4513]/80">South Extension, New Delhi</p>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=A+92+South+Extension+Part+II+New+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs sm:text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513]"
                    >
                      View on Google Maps
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </a>
                  </div>
                  
                  {/* Map Visualization */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#6A3E2E]/20">
                    <div className="h-48 sm:h-56 md:h-64 lg:h-80 bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] flex items-center justify-center shadow-lg">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="text-[#6A3E2E] font-bold text-sm sm:text-base mb-2">South Extension II</div>
                        <div className="text-[#8B4513] text-xs sm:text-sm">New Delhi, Delhi 110049</div>
                      </div>
                    </div>
                    
                    {/* Location Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-full shadow-lg border-2 border-white"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6">
                    <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base mb-3 sm:mb-4">Directions</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E] mr-1 sm:mr-2 flex-shrink-0" />
                        <span>Nearest Metro: Kailash Colony Metro Station (1.8 km)</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E] mr-1 sm:mr-2 flex-shrink-0" />
                        <span>Bus Stop: South Extension Bus Stop (200m)</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E] mr-1 sm:mr-2 flex-shrink-0" />
                        <span>Parking available in N Block Market</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Locations */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">Nearby Locations</h3>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {nearbyLocations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-[#FFF7ED] transition-colors duration-300 group">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 bg-gradient-to-r ${location.color} bg-opacity-20`}>
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E]" />
                        </div>
                        <span className="font-medium text-[#6A3E2E] text-xs sm:text-sm group-hover:text-[#8B4513]">
                          {location.name}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-[#8B4513]/60">{location.distance}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 sm:mt-6 py-2 sm:py-3 border border-[#6A3E2E]/30 text-[#6A3E2E] rounded-lg font-semibold hover:bg-[#FFF7ED] transition-all duration-300 text-xs sm:text-sm">
                  View All Nearby Places
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Team */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 lg:mb-6">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#6A3E2E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-3 sm:mb-4">
              Connect with Our Team
            </h2>
            <p className="text-sm sm:text-base text-[#8B4513]/80 max-w-2xl mx-auto px-4">
              We have dedicated teams for different initiatives and collaborations. 
              Reach out to the right team for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-3 sm:-inset-4 bg-gradient-to-r ${method.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${method.gradient} bg-opacity-20 flex items-center justify-center mb-3 sm:mb-4`}>
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#6A3E2E]" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#6A3E2E] mb-2">{method.title}</h3>
                  <p className="text-[#8B4513]/80 text-xs sm:text-sm mb-3 sm:mb-4">
                    {method.description}
                  </p>
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xs sm:text-sm text-[#6A3E2E] font-medium mb-1">Email:</div>
                    <a href={`mailto:${method.email}`} className="text-xs sm:text-sm text-[#8B4513] hover:text-[#6A3E2E] break-all">
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#8B4513]/60">{method.response}</span>
                    <button className="flex items-center text-xs sm:text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                      Contact
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default YuvamanthanContact