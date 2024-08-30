import React from 'react';
import provenImpactImage from '/images/impact.jpg';
import mentorshipImage from '/images/community.jpg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <div className="about-us-container">
        {/* About Us Header Section */}
        <div
          className="relative h-[600px] flex items-center justify-center mb-24"
          style={{
            backgroundImage: `url(https://th.bing.com/th/id/R.7173a01d392fd12baf23f5ebf2078577?rik=gZa9zUitogxsxw&pid=ImgRaw&r=0)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'multiply',
          }}
        >
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>

        {/* About Us Content */}
        <div className="container md:flex-col items-center mx-auto  mb-28">
          <p className='text-lg px-10'>
            Cyber Eyes Networks, a dynamic tech hub founded for the purpose of empowering students passionate about cyber security.
            <br />
            <br />
          </p>
            Our core values lie in cybersecurity are:
            <ul className='text-cyan-500'>
              <li> ★ Excellence </li>
              <li> ★ Fostering coding innovation </li>
              <li> ★ Building a diverse and inclusive tech community </li>
            </ul>
            <br />

            <p>
            We believe technology should be a force for good, and that's why we offer cutting-edge cybersecurity solutions to protect businesses and individuals.
            Our team's combined skillset and shared vision fuel Cyber Eyes Networks' mission to create a safer digital landscape.
            As technologist Alan Kay said, "The best way to predict the future is to invent it." We share this vision, and that's why we're constantly pushing boundaries and exploring new possibilities.
            We believe in shaping the future of technology in Africa, not just reacting to it.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col container mx-auto md:flex-row items-center my-12">
          <div className="md:w-1/2">
            <img src='https://i.postimg.cc/t4B8Rn50/image2.jpg' alt="Vision" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-4  text-cyan-500">Our Vision</h2>
            <p className='text-lg'>
              To empower the Mount Kenya region by becoming the leading force in technological advancement and security.
              We envision a future where everyone has a secure digital environment and technology unlocks the full potential of individuals and communities.
              We are committed to fostering an inclusive and representative tech industry, ensuring everyone has a seat at the table.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col container mx-auto md:flex-row-reverse items-center my-12">
        <div className="md:w-1/2">
          <img src='https://img.freepik.com/premium-vector/cyber-security-concept_23-2148533308.jpg?semt=ais_hybrid' alt="Mission" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-4  text-cyan-500">Our Mission</h2>
          <p className='text-lg'>
            Our mission is to create a safer digital landscape in Kenya. We achieve this by providing innovative cybersecurity solutions, IT consultancy services, and educational programs.
            A core aspect of our mission is championing women and youth in tech, ensuring a future where everyone has the opportunity to excel in this ever-growing field.
          </p>
          <div>
            <p className='text-lg mb-2 font-bold text-cyan-500 mt-6'>We offer:</p>
            <ul className='list-none list-inside'>
              <li>★ Hackathons and bootcamps to spark creativity and collaboration</li>
              <br />
              <li>★ Comprehensive cybersecurity training programs to equip individuals with the skills they need to succeed in cybersecurity </li>
              <br />
              <li>★ Comprehensive training programs in software development to equip individuals with the skills they need to thrive in the software industry.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8  text-cyan-500">Why Cyber Eyes Networks?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row">
            <img src={provenImpactImage} alt="Proven Impact" className="w-full md:w-1/2 object-cover" />
            <div className="w-full md:w-1/2 p-4 bg-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Proven Impact</h3>
              <p className="text-sm md:text-md">Our training programs drive measurable advancements in cybersecurity and software development skills. From securing networks to developing cutting-edge applications, we deliver results that matter. Each course is backed by rigorous data analysis and real success stories from our graduates.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <img src="https://i.postimg.cc/SRmGzDSg/award-winning-team.jpg" alt="Award Winning Team" className="w-full md:w-1/2 object-cover" />
            <div className="w-full md:w-1/2 p-4 bg-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Award Winning Team</h3>
              <p className="text-sm md:text-md">Our founders are recognized leaders in cybersecurity and software development, earning prestigious awards for their groundbreaking contributions. Their vision and expertise drive our mission to deliver top-tier training programs.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <img src="https://i.postimg.cc/901YPZzC/innovation.png" alt="Innovative Curriculum" className="w-full md:w-1/2 object-cover" />
            <div className="w-full md:w-1/2 p-4 bg-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Innovative Curriculum</h3>
              <p className="text-sm md:text-md">Our innovative curriculum goes beyond traditional learning methods, integrating cutting-edge technology and real-world applications to foster critical thinking and creativity. Designed by industry experts, our programs offer personalized learning paths, hands-on projects, and collaborative experiences.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <img src={mentorshipImage} alt="Mentorship and Community Support" className="w-full md:w-1/2 object-cover" />
            <div className="w-full md:w-1/2 p-4 bg-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Mentorship and Community Support</h3>
              <p className="text-sm md:text-md">Our mentorship and community support programs are dedicated to fostering the growth of cybersecurity and software engineering students on campuses. With guidance from industry experts and a collaborative community, students gain the skills and confidence needed to excel in the tech world.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Support us Section */}
      <div className="my-10 container mx-auto px-4 mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Support Us</h2>
        {/* Support Card 1 */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img src="https://i.postimg.cc/9Qw9jLpN/support-card-1.jpg" alt="Support Card 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Donate</h3>
            <p className="mb-4">Donate to Cyber Eyes Networks</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Donate</button>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="my-10 container mx-auto px-4 mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-800 shadow-lg mb-10  rounded-lg overflow-hidden">
            <img src='https://i.postimg.cc/mr0XhY1n/karanja.jpg' alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Brian Karanja</h3>
              <p className="mb-4">CEO & Founder</p>
              <div className='flex space-x-4 justify-evenly'>
                <a href="https://www.linkedin.com/in/brian-karanja-cyb3r-arson/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/cyb3rarson" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaTwitter size={24} />
                </a>
                <a href="https://cyb3r-arson.medium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaMedium size={24} />
                </a>
                <a href="https://github.com/cyb3r-arson" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-800 shadow-lg mb-10 rounded-lg overflow-hidden">
            <img src='https://i.postimg.cc/HsDfxg12/brian.jpg' alt="Team Member 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Brian Ndegwa</h3>
              <p className="mb-4">CTO</p>
              <div className='flex space-x-4 justify-evenly'>
                <a href="https://www.linkedin.com/in/ndegwaofficial/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/ndegwa_official" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-10 overflow-hidden">
            <img src='https://i.postimg.cc/zDwtXRzd/tiffany.jpg' alt="Team Member 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Mwaniki Tifany</h3>
              <p className="mb-4">Lead Developer</p>
              <div className='flex space-x-4 justify-evenly'>
                <a href="https://www.linkedin.com/in/mwanikitifany" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/RivoltaAlpha" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-10 overflow-hidden">
            <img src='https://i.postimg.cc/DwwYNyKx/jess.png' alt="Team Member 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Jessica Mbithi</h3>
              <p className="mb-4">Cybersecurity Specialist</p>
              <div className='flex space-x-4 justify-evenly'>
                <a href="https://www.linkedin.com/in/jess-mbithi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/JessMbithi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-10 overflow-hidden">
            <img src='https://i.postimg.cc/R03pMshf/lilian.jpg' alt="Team Member 5" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Lilian Wanjiku</h3>
              <p className="mb-4">Campus Ambassador</p>
              <div className='flex space-x-4 justify-evenly'>
                <a href="https://www.linkedin.com/in/lilintech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/lilintech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;