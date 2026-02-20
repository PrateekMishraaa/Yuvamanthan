import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const SharedFuture = () => {
  return (
    <>
      <Navbar/>

      {/* Hero Section with Theme Gradient */}
      <section className="w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Shared Future
          </h1>
          <p className="text-2xl text-[#E07B00] font-semibold">
            Youth in Democracy and Governance
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">

          {/* Overview Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For any country, its youth population plays a key role in the overall growth, development and possible advancements. It is the youth of today that has the potential to become leaders, inventors, and innovators for tomorrow as they have the power to bring big change if their energies are put to good use.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Indian youth in recent times have shown great interest and calibre in the advancements of India in fields like technology, business, entertainment, science and more. Besides, when the youth are receiving a good education and getting employed, generating incomes rather than being dependent on others, the country's economy sees a positive surge too.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                International forums like the G20 have identified and accepted the youth's role and responsibilities towards bringing global change. Similarly, the platform has created a youth-centric engagement group called Youth20 or Y20.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The Y20 group allows young leaders across the globe to discuss and negotiate worldly matters and suggest valuable suggestions for the G20 leaders to take forward. Under India's G20 presidency for 2023, the Y20 summit will be hosted by India and the key focus will be on global youth leadership and partnership.
              </p>
            </div>
          </div>

          {/* Y20 Theme Highlight */}
          <div className="bg-[#8B4513] text-white rounded-2xl p-8">
            <p className="text-xl text-center font-semibold">
              One of the themes for the Y20 India summit is "Shared Future: Youth in Democracy and Governance." Take a look at the forthwith section to understand how youth can play an important role in realising that shared future dream.
            </p>
          </div>

          {/* Youth in Legislature and Politics */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Youth In Legislature And Politics</h2>
              <p className="text-gray-700 leading-relaxed">
                According to the United Nations Development Programme (UNDP) report, 2 out of 3 countries do not consult young people as a part of the process of preparing poverty reduction strategies or national development plans. Not only this but they are mostly underrepresented by formal political institutions even though the political decisions impact their lives.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Meaningful democracies require meaningful participation from the young factions of society. The youth with their fresh ideas and objective opinions have a lot to offer- from creative thinking to revolutionary action-taking. So, their participation in democracy will promote social responsibility, and enhance political institutions functioning.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Young men and women of today are key drivers for inclusive and progressive growth and sustainable development. When these people are actively engaged and empowered in legislative decision-making, societies shall be more cohesive, and resilient and the democracies will become more vibrant.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Besides, today's young minds are tomorrow's leaders and decision-makers, so their participation and engagement in legislature and politics are all the more crucial in the long run.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The guiding principle for effective youth political participation must be, 'nothing about us without us.' So, all strategies to enhance their role in politics must be grounded in a rights-based approach.
              </p>
            </div>
          </div>

          {/* Principles Section */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#8B4513] mb-4">Principles for Effective Youth Participation in Politics:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-[#E07B00]">Transparency</p>
                <p className="text-gray-700 mt-1">This means having a crystal clear flow of the process of the purpose of youth participation and engagement whether it is youth-led or organisation-led collaboration.</p>
              </div>
              
              <div>
                <p className="font-bold text-[#E07B00]">Innovation and Flexibility</p>
                <p className="text-gray-700 mt-1">This means having solid commitments from young people and adults side to be open to new ideas and willing to undertake risks and challenge the existing political processes and structures.</p>
              </div>

              <div>
                <p className="font-bold text-[#E07B00]">Accountability</p>
                <p className="text-gray-700 mt-1">This means having proper mechanisms in place to ensure follow-ups, implementation of youth ideas and accountability to constituencies. It majorly requires young people to take an active role in monitoring and establishing channels where youth participation in democratic events has proper visibility.</p>
              </div>

              <div>
                <p className="font-bold text-[#E07B00]">Sustainability</p>
                <p className="text-gray-700 mt-1">Sustainability of financial resources for best-practice youth engagement initiatives can help to ensure these are not limited or one-off events or processes. Successful youth engagement leads to decision-makers seeking youth involvement and leadership in addressing challenges and designing solutions.</p>
              </div>

              <div>
                <p className="font-bold text-[#E07B00]">Capacity oriented</p>
                <p className="text-gray-700 mt-1">This means solidifying youth faction by supporting their capability developments via networks, movements, youth organisations to enhance mutual transparency, trust and contribution.</p>
              </div>

              <div>
                <p className="font-bold text-[#E07B00]">Relevant and Purposeful</p>
                <p className="text-gray-700 mt-1">Activities to enhance youth political participation should be as youth-driven as possible. Young people themselves can decide on their priorities, methods, and tactics. It means young people take on valued roles, addressing issues that are relevant to them, and influencing real outcomes. To be relevant, they can link to specific concerns of youth such as unemployment, climate change, digital transformation, pandemic work culture, etc.</p>
              </div>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E07B00]">
            <p className="text-gray-700">
              <span className="font-bold text-[#E07B00]">FUN FACT:</span> India is known to be the world's largest democratic nation with more than half of the population between the age groups of 18–35 years. This somewhat sums up the point of highlighting how big of an asset India's youth is and can be to its democratic structure.
            </p>
            <p className="text-gray-700 mt-3">
              <span className="font-bold text-[#E07B00]">FUN FACT:</span> In one-third of countries of the world, 25 years is the average age to take part in national parliaments.
            </p>
          </div>

          {/* Positive Implications */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Positive Implications of Youth Engagement:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Promoting the welfare of young people and the development of their social skills and experience</li>
                <li>Helping to ensure good political decisions as youth are best placed to express their ideas, and views that are unique</li>
                <li>Solidifying the understanding and action for democratic rights in youngsters</li>
                <li>Managing conflicts and promoting peace within regions as the youth helps in bridging community gaps</li>
                <li>Realizing and empowering the fundamental right to participation for young people</li>
                <li>Having a positive influence in realising national goals like zero hunger and poverty to international goals like sustainability and climate justice</li>
              </ul>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Challenges in Youth Political Engagement</h3>
              <p className="text-gray-700 leading-relaxed">
                However, every initiative has its shortcomings as well, so engaging youth in politics can be challenging as young people tend to have fickle minds and dwindling interests in political scenes, especially towards politicians and party ideologies.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                According to a youth stocktaking report by the Organisation of Economic Co-operation and Development (OECD), in 17 out of 35 OECD member countries, young people express lesser trust in governments than in their parents. It signals from the frustration with the present outdated channels to make their voices heard in the political sphere.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Also, the significant share of political disengagement is vital as around 25% of 15–29 years old stress that they are not 'interested in politics.'
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Youth feel directionless and often marginalised from mainstream activities, which is a threat to democracy. The best solution can be to offer more youth involvement in international campaigns and challenging activities that make them feel heard and part of the decision-making process.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Additionally, political leaders must involve youth in democratic marches and share responsibilities to build partnerships with them. This way, youth can be a better asset to the thriving democratic alliance between government and citizens.
              </p>
            </div>
          </div>

          {/* Youth in Policy Making */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Youth In Policy Making And Governance</h2>
              
              {/* PM Quote */}
              <div className="bg-gradient-to-r from-[#FFF7ED] to-orange-100 p-4 rounded-lg italic mb-4">
                <p className="text-gray-800">"Mere good governance is not enough; it has to be pro-people and pro-active. Good governance is putting people at the centre of development process"</p>
                <p className="text-right font-semibold text-[#8B4513] mt-2">- PM Narendra Modi</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Historically, good governance is defined as a governing system that upholds the fundamentals of laid policies with equality, liberty and fraternity as guiding principles. Good governance plays a key role in the social, cultural and economic development of society and ensures social security and positive change.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                India, for instance, harbours the world's greatest youth workforce under 30 years of age and constitutes almost 75% of the country's population. Hence youth's role in policy-making and governance by bringing about a change can have a greater influence on the country's developmental process.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Basically, every nation needs to empower its youth so that they may contribute to society and the economy. This undertaking needs a clear and comprehensive vision that is backed by a sound strategy, and a specific action plan that guides youth-related policies, services and programmes.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This can be done by formulating a youth policy. A foremost public policy that acts as a framework or shape the vision for youth as well as builds a repertoire for good governance for the lawmakers.
              </p>
            </div>
          </div>

          {/* National Strategies Examples */}
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#8B4513] mb-3">Slovak Republic</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                National Youth Strategy (2014–2020) provides a cross-sectoral approach and focuses on nine policy areas including education, employment, health, entrepreneurship, social inclusion, and volunteering. The strategy underlines investment and empowerment as its key pillars while placing an emphasis on the labour migration of educated young Slovaks to other countries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#8B4513] mb-3">Ireland</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A national strategy on LGBTI+ youth (2018–2020) has been developed to create a more supportive and inclusive environment for LGBTI+ young people.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#8B4513] mb-3">Gaia, Portugal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The municipal corporation has prepared a municipal youth plan to enable public policies fostering equal opportunities and social cohesion; and to implement local youth policies in an open collaborative manner.
              </p>
            </div>
          </div>

          {/* Implementation Note */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E07B00]">
            <p className="text-gray-700">
              However, it also needs to be understood well that just formulating such strategies by the government isn't enough. They need to ensure that these policies are evidence-based, transparent, accountable and properly executed. Adequate resources as well as sound monitoring and evaluation mechanisms are critical to translating youth commitments into tangible outcomes.
            </p>
          </div>

          {/* COVID Impact */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed">
                Currently, COVID-19 has increased already high levels of uncertainty for youth due to global transformations that have significantly affected their access to decent jobs, affordable education and housing, and opportunities to participate in public and political life. Thus, youth participation and representation globally in policy-making institutions have always been relatively low.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                People under the age of 35 are seldom seen taking active roles in public administration, parliamentary sessions or any governing committees on economic growth and development. This issue needs to be addressed more sequentially and with proper consideration to know why it matters.
              </p>
            </div>
          </div>

          {/* Ways to Ensure Youth Engagement */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ways to ensure youth's attention and engagement in governance:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><span className="font-semibold">Having inclusive and active political</span> participation during major campaigns like elections, global summits, etc. to represent the nation's young voice.</li>
                <li><span className="font-semibold">Spreading accurate and complete awareness amongst young people</span> so they adequately understand the policy-making process, governance structure and political ideologies in a more meaningful sense.</li>
                <li><span className="font-semibold">Investing in new technologies and resources</span> to attract more youth towards national and international campaigns. For instance, the Indian government's Digital India campaign portals like 'mygov.in' connects their government and citizens under the universal brotherhood.</li>
                <li><span className="font-semibold">Developing budgeting as a tool</span> can be powerful to align the economic and social objectives of governments with the needs of young people by integrating their perspective within the budgetary process. For instance, Canada anticipates the impact of budgetary allocations across different age cohorts in the framework of Gender Budgeting to assess the impact on younger and older age cohorts.</li>
                <li><span className="font-semibold">Strengthening youth's relationship with public institutions</span> is vital and for that government can enrol youth stakeholders throughout the policy cycle to ensure age diversity and more responsive and inclusive policy outcomes, through in-person and digital means.</li>
              </ul>
            </div>
          </div>

          {/* Volunteering Section */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed">
              The pandemic has strongly indicated that young volunteers and youth workers are a crucial resource in ensuring societal resilience in the face of shocks and disasters. For that, governments and institutions can solidify volunteering and youth work through national laws, strategies and programmes that include a common vision and, co-ordinated action for building youth's skills and competencies as well as social cohesion and societal resilience.
            </p>
          </div>

          {/* Institutionalising Leadership */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Institutionalising Leadership And Governance Training</h2>
              <p className="text-gray-700 leading-relaxed">
                Times have changed and young people have become more self-aware and active agents of change for the world. They are taking part in rallies and boycotts, movements against the authoritarian regime, inequalities, injustice, etc. They are even readily participating to fight for the sustainable development cause and strive for a better future within communities.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                So, now more than ever, the youth's role in community governance must be realised with proper role-sharing and participation. They are the echoing voices and opinions the government must listen to in order to frame a suitable globalised solution to fight the causes like climate change, recession, global warming, etc.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                There can be some ways in which youth engagement in community governance can be undertaken by the authorities.
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#E07B00] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B4513] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Top ↑
            </button>
          </div>

        </div>
      </section>

      <Footer/>
    </>
  )
}

export default SharedFuture