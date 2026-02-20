import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const PeaceBuilding = () => {
  return (
    <>
      <Navbar/>
      
      {/* Hero Section with Theme Gradient */}
      <section className="w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Peacebuilding and Reconciliation
          </h1>
          <p className="text-2xl text-[#E07B00] font-semibold">
            Ushering in an Era of No War
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
                Conflicts are intricate human occurrences that can neither be good nor bad, inevitable nor always have negative outcomes. They can encourage disruption as well as change and innovation. Whether a conflict's outcome is favorable or negative for individuals participating in it depends on the goals and the dedication to achieving those goals no matter the means used. Conflicts leave a wake of indiscriminate violence and devastation, and before going to war, there is always an effort to settle the conflict peacefully.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                As a result, all types of societal and international players have worked to find a solution to their disputes throughout history in order to manage them effectively and, while maximizing their profits, to control their costs. The conflict might be either legally or politically unjustifiable. However, there are other ways to account for political and legal disparities between countries. Short of going to war, these disagreements can be settled amicably or violently.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                In order for states to continue pursuing their objectives peacefully, tensions between them must be reduced or kept at levels that are consistent with peaceful conflict resolution (individual or collective). It would be necessary to fully describe the many and complicated types and degrees of the contentious and shared issues among the community's members in order to fully describe the processes of conflict resolution within that setting.
              </p>
            </div>
          </div>

          {/* Fight or Flight Response Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
                The Third Option: Active Nonviolence
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The two common responses to a threat are passivity (flight) and violent opposition (fight), thanks to the widespread knowledge of the fight-or-flight response. However, active nonviolence is an additional option. Despite being non-violent, the flight response sidesteps dealing with the danger. Therefore, the appearance of flight can be one of submission, passivity, disengagement, or surrender. The fight response, which responds to violence with violence, might take the form of an armed uprising, revenge, or violent rebellion. A third option for retaliation is active nonviolence. Contrary to what the phrase "nonviolence" could imply, which is that of passiveness, nonviolence is an active response that directly addresses the threat and has the ability to turn adversaries into allies. Non-cooperation, intervention, self-suffering, protest, and the development of alternative systems are all examples of active nonviolence.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Furthermore, creativity, discipline, courage, and strength are necessary for active nonviolence. To redirect rage over injustice toward the creation of chances that stop violent cycles and engage enemies in productive dialogue, creativity and discipline are needed. To manage one's fear and endure while facing injustice, one needs courage and strength. Gandhi referred to nonviolence as the weapon of the strong and violence as the weapon of the weak because of these characteristics.
              </p>
            </div>
          </div>

          {/* Three Classifications Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Civil Resistance */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#8B4513] mb-3">Civil Resistance</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Non-cooperation with repressive social, economic, and political systems, nonviolent protest, and the establishment of alternative institutions of government are all examples of civil resistance. Civil resistance may result in regime change or the repeal of repressive laws and practices, or it may contribute to peacemaking by facilitating negotiations between conflicting parties.
              </p>
            </div>

            {/* Civil Defense */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#8B4513] mb-3">Civil Defense</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Building, defending, and maintaining democratic structures against invasion, coup d'état, natural disasters, or other dangers is referred to as civil defense. Creating means to alter unjust structures, processes, and policies as well as to ease tensions, settle disputes, and end confrontations without using force falls under the broad umbrella of civil defense. Agriculture and natural resource management, water and sanitation, as well as access to education, health, and social assistance programmes, are a few examples.
              </p>
            </div>

            {/* Civilian Protection */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#8B4513] mb-3">Civilian Protection</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The practice of sending out groups of prepared, unarmed individuals before, during, or after a violent conflict is known as unarmed civilian protection (UCP). UCP aims to prevent or lessen violence, to directly protect threatened civilian populations physically, and to enhance or develop resilient local peace infrastructures. UCP is thought to be a type of peacekeeping.
              </p>
            </div>
          </div>

          {/* UCP Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#E07B00]">
            <p className="text-gray-700 leading-relaxed">
              The majority of UCP practitioners are nonpartisan and actively engage in communication with all conflicting groups. Relationship building, proactive engagement, monitoring, and capacity development are key UCP strategies. These strategies have been used to successfully train civilians to monitor cease-fires, to encourage communication between rival factions, and to inform civilians about how to defend themselves, especially women and children.
            </p>
          </div>

          {/* Global North-South Collaboration */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
                Collaboration Of The Global North And The Global South
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The socioeconomic gap between many countries in the Southern hemisphere and those in the Northern hemisphere is described by the idea of the global North and South, however the reality is undoubtedly more nuanced. Although there are obvious advantages for both the North and the South, how precisely does one build up a North-South collaboration?
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                There are development organizations that, despite being focused on humanitarian partnership, frequently sponsor projects including that collaboration. Furthermore, several organisations have entire offices devoted to North-South cooperation. Finding the diaspora of South Americans working in the North, and vice versa, is another place to start. Once the process has started, it is essential to be clear in order to prevent miscommunications. After the objectives are defined, an agenda that corrects any imbalances can be created. Although the South typically receives the majority of the funding for these initiatives since they typically have less available for research, this does not imply that the liabilities should be unfairly distributed. The explanation of obligations is the next natural step.
              </p>
            </div>
          </div>

          {/* Civil Society Functions */}
          <div className="bg-[#8B4513] text-white rounded-2xl p-8">
            <p className="text-xl text-center font-semibold">
              There are several functions played by civil society in peacebuilding processes. These functions include protection, monitoring, advocacy, socialization, social cohesion, facilitation, and service delivery.
            </p>
          </div>

          {/* Protection Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Protection is the provision of security requirements by members of civil society, either independently or in collaboration with other organisations. Normally, the state performs this as one of its primary duties, but under situations of extreme state fragility and conflict, the connection between the state and society may deteriorate. Protection becomes a need for other civil society responsibilities both during and after a conflict since civil society actors find it extremely difficult to take on peacebuilding tasks when they are threatened with violence.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The phrase "civil society protection" is frequently used to refer to specialised protection NGOs like Peace Brigades International that provide direct or indirect support to local players, such as serving as a watchdog or international accompaniment. When these initiatives have been methodically paired with monitoring and advocacy activities, they have proven to be more successful.
              </p>
            </div>
          </div>

          {/* Monitoring Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Monitoring</h2>
              <p className="text-gray-700 leading-relaxed">
                International and local civil society organisations keep an eye on pertinent topics, like the state of human rights or the application of agreements, and they offer advice and data to decision-makers or organisations that support human rights. Such monitoring can act as an early warning system as well as a means of holding governments and armed organisations responsible for wrongdoings or subpar performance. No monitoring programme for the Oslo process in the context of the Israel–Palestine conflict was ever established throughout the 1990s. Given that the parties were criticised for breaking their commitments, this could have had a significant influence.
              </p>
            </div>
          </div>

          {/* Advocacy Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Advocacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Actors from civil society might advocate for the opening of negotiations, for the implementation of negotiated accords, or against a resumption of hostilities. International advocacy efforts that lobby against things like land mines, blood diamonds, or using children as troops are also significant. There are two types of advocacy: public and private. Public advocacy may take the form of petitions, rallies, press releases, social media campaigns, or public relations initiatives. Non-public advocacy typically uses back channels and relies on unofficial interactions and connections. When organizations are knowledgeable about campaigning, base their advocacy on the findings of monitoring programmes, and understand how to use the media to further their cause, advocacy campaigns have a greater impact.
              </p>
            </div>
          </div>

          {/* Socialization and Social Cohesion */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Socialization */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#8B4513] mb-3">Socialization</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Families, schools, religious organisations, secular and cultural organisations, and the workplace are the major institutions in society that have an impact on how people acquire democracy and conflict-response behaviour. These socialisation venues typically perpetuate existing divisions in conflict-ridden nations. The majority of socialisation initiatives have concentrated on working on short-term projects with NGOs, who lack the genuine power to socialise individuals due to their restricted access and reach.
              </p>
            </div>

            {/* Social Cohesion */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#8B4513] mb-3">Social Cohesion</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Initiatives to promote social cohesion may have a greater impact when they try to unite individuals over a common goal rather than just concentrating on rapprochement. Short-term sporadic initiatives have not been as successful as long-term systematic ones, especially when they have addressed a variety of societal divisions and have helped to build bridges between challenging groups.
              </p>
            </div>
          </div>

          {/* Facilitation Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilitation</h2>
              <p className="text-gray-700 leading-relaxed">
                In a process of peace or transition, civil society can serve as a facilitator to help bring the sides together. Both local and national levels of facilitation are possible. For instance, traditional mediation was the sole method available in Afghanistan under the Taliban to promote peace between the Taliban and the various Afghan communities. To discuss ideas for promoting peace, the Tribal Liaison Office assisted in setting up regional peace jirgas with religious and municipal authorities. Prominent members of civil society, foreign NGOs, and research organizations occasionally mediate or facilitate at the national level.
              </p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#E07B00]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                In conclusion, civil society organizations, both local and global, are a crucial component of modern peacebuilding. The protection of citizens from violence, the provision of services, the observation of violations of human rights, and the promotion of an end to war and authoritarian rule are all vital responsibilities that civil society organizations continue to play. Along with their active involvement in Track One negotiations, civil society organizations and actors are crucial in fostering peace on a local level. Research has supported the importance of this engagement in terms of strengthening the longevity of peace agreements. However, the discussions and examples provided in this article have brought to light a number of crucial concerns that will determine whether or not civil society will continue to play a significant role in peacemaking in the future.
              </p>
              
              {/* Download Button */}
              <div className="flex justify-center mt-8">
                <button className="bg-[#E07B00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8B4513] transition-colors duration-300 shadow-lg hover:shadow-xl text-lg">
                  DOWNLOAD WHITE PAPER
                </button>
              </div>
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

export default PeaceBuilding