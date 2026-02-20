import React from "react";
import Navbar from "../../Components/Navbar.jsx";
import { Link } from "react-router-dom";
import BhupendraYadav from "../../assets/yadav.jpg"
import Modi from "../../assets/modi3.png"
import Footer from "../../Components/Footer.jsx";

const MissionLife = () => {
  // Data for 21 Days Challenge
  const challengeDays = [
    "Carry a non-plastic bottle while stepping out of homes",
    "Use cloth bags for grocery shopping instead of plastic bags",
    "Use stairs instead of an elevator",
    "Donate old clothes and books",
    "Practice segregation of wet and dry waste at home",
    "Switch off appliances from plug points when not in use",
    "Use of public transport",
    "Switch off vehicle engine at signals and railroad crossing",
    "Plant trees to reduce the impact of pollution",
    "Feed unused and uncooked leftovers to cattle/pets/street animals",
    "Pre-soak heavy pots and pans before washing them",
    "Use steel/recyclable plastic lunch boxes and water bottles"
  ];

  // Data for 75 Steps (Energy Saved actions)
  const energyActions = [
    "Use LED Bulbs/Tubelights",
    "Use Public Transport Wherever Is Possible",
    "Take The Stairs Instead Of Elevator Wherever Possible",
    "Switch Off Vehicle Engines At Red Lights And Railway Crossings",
    "Use Bicycle For Local Or Short Commute",
    "Switch Off Irrigation Pumps After Use",
    "Prefer CNG/EV Vehicle Over Petrol / Diesel Vehicles",
    "Use Carpooling With Friends And Colleagues",
    "Drive In The Correct Gear. Keep Your Foot Off The Clutch When Not Changing Gears",
    "Install A Solar Water Or Solar Cooker Heater On Rooftops",
    "Switch Off Appliances From Plug Points When Not In Use",
    "Use Biogas For Cooking And Electricity Needs",
    "Keep Temperature Of Air Conditioners To 24 Degrees",
    "Prefer Pressure Cookers Over Other Cookware",
    "Keep Your Electronic Devices In Energy-Saving Mode",
    "Use Smart Switches For Appliances Which Are Used Frequently",
    "Install Community Earthen Pots For Cooling Water",
    "Defrost Fridge Or Freezer Regularly",
    "Run Outdoors Instead Of On A Treadmill"
  ];

  // KPI Data
  const kpiData = [
    { indicator: "Number of Pro Planet People", unit: "Million", year1: "150", year2: "400", year3: "650", year4: "900", target: "1000", total: "1 Billion" },
    { indicator: "Number of LiFE Villages", unit: "Thousand", year1: "77", year2: "206", year3: "335", year4: "463", target: "515", total: "515,000" },
    { indicator: "Number of LiFE ULBs", unit: "Hundred", year1: "5", year2: "15", year3: "24", year4: "33", target: "37", total: "3700" },
    { indicator: "Number of LiFE Districts", unit: "No.", year1: "115", year2: "306", year3: "498", year4: "690", target: "766", total: "766" }
  ];

  // Impact Stats
  const impactStats = [
    {
      title: "Switching Off Vehicle Engines",
      description: "At Traffic Lights / Railway Crossings Can Save Up To",
      value: "22.5 Billion",
      unit: "KWh Of Energy"
    },
    {
      title: "Turning Off Running Taps",
      description: "When Not In Active Use Can Save Upto",
      value: "9 Trillion",
      unit: "Litres Of Water"
    },
    {
      title: "Using A Cloth Bag",
      description: "Instead Of A Plastic Bag While Shopping Can Save Up To",
      value: "375 Million",
      unit: "Tonnes Of Solid Waste"
    },
    {
      title: "Discarding Non-Functioning Gadgets",
      description: "In The Nearest E-Recycling Unit Can Recycle Upto",
      value: "0.75 Million",
      unit: "Tonnes Of E-Waste"
    },
    {
      title: "Composting Waste Food At Home",
      description: "Can Save Up To",
      value: "15 Billion",
      unit: "Tonnes Of Food"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Lifestyle For Environment Initiative: <span className="text-[#E07B00]">LiFE</span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A mass movement towards an environmentally conscious lifestyle
          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 border-2 border-[#8B4513] text-[#E07B00] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#8B4513] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Join the Movement →
          </Link>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Overview Section with Modi Image */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#E07B00]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            'Lifestyle for Environment' or <span className="font-semibold text-[#E07B00]">LiFE initiative</span> is a campaign envisioned by honourable Prime Minister Narendra Modi with a prime focus on environmentally conscious living. It was globally introduced at the 26th United Nations Climate Change Conference of the Parties (COP26) in Glasgow in 2021.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
            <blockquote className="flex-1 p-4 bg-orange-50 italic text-gray-700 border-l-4 border-[#E07B00]">
              "This LiFE campaign can become a mass movement towards an environmentally conscious lifestyle."
            </blockquote>
            <div className="flex-shrink-0">
              <img 
                src={Modi} 
                alt="Prime Minister Narendra Modi" 
                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#E07B00] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Prime Minister Quote Section with Bhupendra Yadav Image */}
        <div className="bg-gradient-to-r from-[#FFF7ED] to-orange-100 rounded-2xl p-8 shadow-md">
          <p className="text-gray-800 text-lg mb-4">
            LiFE is a call to action for every citizen to practice sustainability and mindful utilisation of resources over 'mindless destructive consumption.'
          </p>
          <p className="text-gray-700 mb-4">
            Through this initiative, Hon'ble PM Modi wishes to tackle the menace that is climate change and distinctively vows to do away with the 'use-and-throw' economy among the masses by advocating to take deliberate measures to uplift Pro Planet lifestyle.
          </p>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-gray-700 italic">
              "India's budget has made key declarations affirming its vision for 'Lifestyle for Environment (LiFE)', 'Panchamrit' and net-zero carbon emissions by 2070. The green growth provisions outlined in the budget place the country on a steadfast path to meeting its sustainability goals."
            </p>
            <p className="mt-2 font-semibold text-[#8B4513]">— Shri Narendra Modi (Prime Minister of India)</p>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-end gap-4">
            <div className="text-right order-2 md:order-1">
              <p className="font-medium text-gray-700 text-lg">Shri Bhupender Yadav</p>
              <p className="text-sm text-gray-600 max-w-md">
                Union Cabinet Minister of Labour and Employment, Environment, Forest and Climate Change.
              </p>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <img 
                src={BhupendraYadav} 
                alt="Shri Bhupender Yadav" 
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-[#8B4513] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Rest of your components remain the same */}
        {/* Throw-Away Society vs Circular Economy */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-red-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Throw-Away Society: A Challenge</h2>
            <p className="text-gray-700">
              In recent times, the throwaway culture has gathered much traction. It stems from the social concept of a throw-away society that is strongly affected by consumerism, where people tend to use items of single-use and disposable packaging. It is an overall critical viewpoint of overconsumption and excessive usage of limited shelf-life goods and products.
            </p>
            <p className="mt-4 text-gray-700 font-semibold">
              It is believed that due to environmental destruction and adverse climatic shifts, the population without proper action will face acute scarcity of basic needs like water, food, etc. Moreover, the global economy could lose up to 18% of GDP BY 2050.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-green-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Towards A Circular Economy</h2>
            <p className="text-gray-700">
              Under the LiFE initiative, the focus shall be to transition from this so-called throw-away society to a more circular economy. A model of production and consumption that entails industries and markets adopting the concept of 'reduce, reuse, recycle.'
            </p>
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-[#E07B00]">Successful Campaigns:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><span className="font-medium">Swachh Bharat Abhiyan (2014)</span> – Almost 100 million restrooms were created in a span of 7 years.</li>
                <li><span className="font-medium">Pradhan Mantri Ujjwala Scheme (2016)</span> – Incremented households with LPG from 62% to 99.8% in 2021.</li>
                <li><span className="font-medium">Surakshit Sagar Campaign (2022)</span> – Removed 15000 tonnes of waste from 75 beaches in 75 days.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LiFE Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">LiFE Mission</h2>
          <p className="text-gray-700 mb-6">
            PM Modi green-flagged mission LiFE this year for changing citizens' collective approach towards sustainability. The mission has three simple strategies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#E07B00] mb-2">Change in Demand</h3>
              <p className="text-gray-700">People undertaking easy and efficient eco-friendly steps in daily lives</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#E07B00] mb-2">Change in Supply</h3>
              <p className="text-gray-700">Industries and business markets alter supply patterns to changing demand</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#E07B00] mb-2">Change in Policy</h3>
              <p className="text-gray-700">Government lawmakers set influential norms to support sustainable lifestyle and production</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-[#FFF7ED] rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">P3 Model (Pro-Planet-People):</span> The mission aims to unite those people under the initiative who think, act in unity while consuming Earth's gifted resources.
            </p>
          </div>
        </div>

        {/* Traditional Practices */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Traditional Practices in LiFE Mission</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-orange-200 rounded-lg">
              <p className="text-gray-700">Clayware and biodegradable utensils for cooking, serving and storing food items</p>
            </div>
            <div className="p-4 border border-orange-200 rounded-lg">
              <p className="text-gray-700">Handwashing and sun drying of clothes instead of excessive electronic means of washing</p>
            </div>
            <div className="p-4 border border-orange-200 rounded-lg">
              <p className="text-gray-700">Traditional rainwater harvesting techniques like underground tanks, check dams, etc.</p>
            </div>
          </div>
        </div>

        {/* 21 Days Challenge */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">21 Days Challenge</h2>
            <span className="bg-[#E07B00] text-white px-4 py-1 rounded-full text-sm font-semibold">Make it a Habit</span>
          </div>
          <p className="text-gray-700 mb-6">
            Under the LiFE Mission, the government has initiated a 21-day challenge which lists out activities and measures that one can undertake to minimize the wasteful consumption of resources.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {challengeDays.map((activity, index) => (
              <div key={index} className="bg-orange-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <span className="inline-block bg-[#8B4513] text-white w-8 h-8 rounded-full text-center leading-8 font-bold mb-2">Day {index + 1}</span>
                <p className="text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 75 Steps Towards LiFE */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">75 Steps Towards LiFE</h2>
          <p className="text-gray-600 mb-6">Celebrating India's 75th Independence Year</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#E07B00] mb-3">Energy Saved Actions</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {energyActions.map((action, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#E07B00] font-bold">{index + 1}.</span>
                  <p className="text-gray-700 text-sm">{action}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-4">
            {["Energy Saved", "Water Saved", "Single Use Plastic Reduced", "Sustainable Food Systems", "Waste Reduced", "Healthy Lifestyles"].map((category, idx) => (
              <div key={idx} className="bg-[#FFF7ED] p-2 text-center rounded-lg text-xs font-medium text-gray-700">
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* KPI Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Key Performance Indicators</h2>
          <p className="text-gray-600 mb-6">Results Framework Matrix (2022-28)</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#8B4513] text-white">
                  <th className="p-3 text-left">Key Performance Indicator</th>
                  <th className="p-3">Unit</th>
                  <th className="p-3">Year I</th>
                  <th className="p-3">Year II</th>
                  <th className="p-3">Year III</th>
                  <th className="p-3">Year IV</th>
                  <th className="p-3">Target</th>
                  <th className="p-3">Total (Year V)</th>
                </tr>
              </thead>
              <tbody>
                {kpiData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-orange-50">
                    <td className="p-3 font-medium">{row.indicator}</td>
                    <td className="p-3 text-center">{row.unit}</td>
                    <td className="p-3 text-center">{row.year1}</td>
                    <td className="p-3 text-center">{row.year2}</td>
                    <td className="p-3 text-center">{row.year3}</td>
                    <td className="p-3 text-center">{row.year4}</td>
                    <td className="p-3 text-center">{row.target}</td>
                    <td className="p-3 text-center font-semibold text-[#E07B00]">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">LiFE Mission Impact</h2>
          <p className="text-gray-700 mb-8">
            Estimated changes that LiFE actions will bring for 1 billion Indians in 2027-28:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-[#8B4513] mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{stat.description}</p>
                <p className="text-2xl font-extrabold text-[#E07B00]">{stat.value} <span className="text-base font-normal text-gray-600">{stat.unit}</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Youth's Role */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Youth's Role In LiFE</h2>
          <p className="text-gray-700 mb-6">
            As India comprises more than 65% youth majority, they can actively contribute to the Lifestyle for Environment (LiFE) initiative.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Organise workshops, seminars, and speech sessions in association with government bodies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Planning and organising campaigns online – making posters, drawings, handicrafts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Taking part in Youth centric corps like NCC, NSS, and youth congress events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Organising environmental friendly events like green drives, peace march, planting trees</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Inviting famous social personalities for talks and panel discussions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Observing an eco-friendly hour like Gadget Free hour, Green Hour or Earth Hour</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Engaging in contests like quizzes, debates, article writing on LiFE's message</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E07B00] text-xl">•</span>
                <span>Posting on social media with trendy and viral content related to LiFE initiative</span>
              </li>
            </ul>
          </div>
        </div>


      </section>
      <Footer/>
    </>
  );
};

export default MissionLife;