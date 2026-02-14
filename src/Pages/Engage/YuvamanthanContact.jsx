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
    // console.log("this is E value",e)
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
      // console.log("response from form",response)
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
      icon: <Building className="w-5 h-5" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Phone",
      info: "+91 9560771911",
      icon: <Phone className="w-5 h-5" />,
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Email",
      info: "connect@yuvamanthan.org",
      icon: <Mail className="w-5 h-5" />,
      gradient: "from-[#C46200] to-[#E07B00]"
    },
    {
      title: "Working Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      icon: <Clock className="w-5 h-5" />,
      gradient: "from-[#E07B00] to-[#FFA500]"
    }
  ]

  // Nearby locations
  const nearbyLocations = [
    { name: "South Extension II", distance: "0.1 km" },
    { name: "Lajpat Nagar", distance: "1.2 km" },
    { name: "Green Park", distance: "2.5 km" },
    { name: "Hauz Khas", distance: "3.0 km" },
    { name: "Kailash Colony", distance: "1.8 km" },
    { name: "Moolchand", distance: "1.5 km" }
  ]

  // Contact methods
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "For general questions and information",
      email: "info@yuvamanthan.org",
      response: "Within 24 hours"
    },
    {
      title: "Partnerships",
      description: "For collaboration and partnership opportunities",
      email: "partnerships@yuvamanthan.org",
      response: "Within 48 hours"
    },
    {
      title: "Media Relations",
      description: "For press and media inquiries",
      email: "media@yuvamanthan.org",
      response: "Within 24 hours"
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                  <MessageSquare className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-sm font-semibold text-[#6A3E2E]">
                    Let's Connect & Collaborate
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-[#6A3E2E]">Get In</span>
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#8B4513] leading-relaxed">
                  Connect with us to collaborate, create relationships and more. 
                  Yuva manthan aims to create awareness, soft skills and participation 
                  amongst the youth on the principles of self-awareness, inclusivity, 
                  role sharing and innovation.
                </p>

                <p className="text-lg text-[#8B4513]">
                  Therefore, advancing their role in a fast changing world by promoting 
                  sustainability and inclusive growth. Join us in our initiatives and 
                  help us achieve our goals of creating a powerful youth ecosystem in India.
                </p>
              </div>

              {/* Contact Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactPoints.map((point, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${point.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-xl p-4 border border-[#6A3E2E]/10 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${point.gradient} mr-3`}>
                          <div className="text-white">
                            {point.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#6A3E2E] text-sm mb-1">{point.title}</h3>
                          <p className="text-[#8B4513]/80 text-sm">
                            {point.address || point.info}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-semibold">Call Now</span>
                  </div>
                </button>
                
                <button className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg font-semibold">Get Directions</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2">
                      Leave Us a Message
                    </h2>
                    <p className="text-[#8B4513]/80">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#6A3E2E] mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                          <input
                            type="text"
                            name="Fullname"
                            value={formData.Fullname}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#6A3E2E] mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                          <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#6A3E2E] mb-2">
                          Subject
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                          <input
                            type="text"
                            name="Subject"
                            value={formData.Subject}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300"
                            placeholder="Message subject"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#6A3E2E] mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                          <input
                            type="text"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#6A3E2E] mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-[#8B4513]/60" />
                        <textarea
                          name="Message"
                          value={formData.Message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 resize-none"
                          placeholder="Tell us about your inquiry..."
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <button type='submit'>Send Message</button>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-[#6A3E2E]/10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E]">
                        Our Location
                      </h2>
                      <p className="text-[#8B4513]/80">South Extension, New Delhi</p>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=A+92+South+Extension+Part+II+New+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513]"
                    >
                      View on Google Maps
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  
                  {/* Map Visualization */}
                  <div className="relative rounded-xl overflow-hidden border border-[#6A3E2E]/20">
                    <div className="h-64 md:h-80 bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] flex items-center justify-center shadow-lg">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-[#6A3E2E] font-bold mb-2">South Extension II</div>
                        <div className="text-[#8B4513] text-sm">New Delhi, Delhi 110049</div>
                      </div>
                    </div>
                    
                    {/* Location Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-full shadow-lg border-2 border-white"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-bold text-[#6A3E2E] mb-4">Directions</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-[#8B4513]">
                        <ChevronRight className="w-4 h-4 text-[#6A3E2E] mr-2" />
                        Nearest Metro: Kailash Colony Metro Station (1.8 km)
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]">
                        <ChevronRight className="w-4 h-4 text-[#6A3E2E] mr-2" />
                        Bus Stop: South Extension Bus Stop (200m)
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]">
                        <ChevronRight className="w-4 h-4 text-[#6A3E2E] mr-2" />
                        Parking available in N Block Market
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Locations & Contact Methods */}
            <div className="space-y-8">
              {/* Nearby Locations */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-6">
                  <Navigation className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Nearby Locations</h3>
                </div>
                
                <div className="space-y-3">
                  {nearbyLocations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FFF7ED] transition-colors duration-300 group">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                          index === 0 ? 'bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20' :
                          index === 1 ? 'bg-gradient-to-r from-[#8B4513]/20 to-[#C46200]/20' :
                          index === 2 ? 'bg-gradient-to-r from-[#C46200]/20 to-[#E07B00]/20' :
                          index === 3 ? 'bg-gradient-to-r from-[#E07B00]/20 to-[#FFA500]/20' :
                          'bg-gradient-to-r from-[#FFA500]/20 to-[#FF8C00]/20'
                        }`}>
                          <MapPin className={`w-4 h-4 ${
                            index === 0 ? 'text-[#6A3E2E]' :
                            index === 1 ? 'text-[#8B4513]' :
                            index === 2 ? 'text-[#C46200]' :
                            index === 3 ? 'text-[#E07B00]' :
                            'text-[#FFA500]'
                          }`} />
                        </div>
                        <span className="font-medium text-[#6A3E2E] group-hover:text-[#8B4513]">
                          {location.name}
                        </span>
                      </div>
                      <span className="text-sm text-[#8B4513]/60">{location.distance}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 py-3 border border-[#6A3E2E]/30 text-[#6A3E2E] rounded-lg font-semibold hover:bg-[#FFF7ED] transition-all duration-300">
                  View All Nearby Places
                </button>
              </div>

         
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Team */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-2xl mb-6">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-[#6A3E2E]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-4">
              Connect with Our Team
            </h2>
            <p className="text-[#8B4513]/80 max-w-2xl mx-auto">
              We have dedicated teams for different initiatives and collaborations. 
              Reach out to the right team for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#6A3E2E]" />
                </div>
                <h3 className="text-xl font-bold text-[#6A3E2E] mb-3">Youth Engagement</h3>
                <p className="text-[#8B4513]/80 text-sm mb-4">
                  For student participation, campus events, and youth programs
                </p>
                <button className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                  <span>Contact Team</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B4513]/10 to-[#C46200]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#8B4513]/10 transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8B4513]/20 to-[#C46200]/20 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#8B4513]" />
                </div>
                <h3 className="text-xl font-bold text-[#6A3E2E] mb-3">Partnerships</h3>
                <p className="text-[#8B4513]/80 text-sm mb-4">
                  For institutional collaborations, sponsorships, and strategic partnerships
                </p>
                <button className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                  <span>Contact Team</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C46200]/10 to-[#E07B00]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#C46200]/10 transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#C46200]/20 to-[#E07B00]/20 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#C46200]" />
                </div>
                <h3 className="text-xl font-bold text-[#6A3E2E] mb-3">Media Relations</h3>
                <p className="text-[#8B4513]/80 text-sm mb-4">
                  For press inquiries, interviews, and media coverage
                </p>
                <button className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                  <span>Contact Team</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default YuvamanthanContact