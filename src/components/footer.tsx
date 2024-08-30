import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaMediumM } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/cyber-eyes-networks-ke/' },
    { Icon: FaTwitter, url: 'https://x.com/cybereyeske' },
    { Icon: FaGithub, url: 'https://github.com/orgs/Cyber-Eyes-Networks' },
    { Icon: FaMediumM, url: 'https://medium.com/@Cyber_Eyes_Networks' },
  ];
  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about-us' },
    { label: 'Contact', url: '/contact' },
    { label: 'ctf Page', url: '/CTFPlatform' },
  ]

  return (
    <footer className="bg-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Organization Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Cyber Eyes Networks</h3>
            <p className="text-sm">Reach Us at</p>
            <p className="text-sm mt-2"><strong>Email: </strong>info@cybereyesnetworks.co.ke</p>
            <p className="text-sm"><strong>Phone: </strong> 0704918691 / 0741669984 </p>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Get Monthly Updates</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email here *"
                className="p-2 mb-2 border border-gray-300 rounded"
              />
              <NavLink to="/signup" className="text-sm hover:underline">
                <button className="bg-beige text-black p-2 rounded hover:bg-beige-dark transition duration-300">
                  Sign Up!
                </button>
              </NavLink>
            </form>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2 ml-[150px]">Quick Links</h3>
            <ul className='flex flex-col items-center'>
              {quickLinks.map(({ label, url }, index) => (
                <li key={index} className="mb-1">
                  <a href={url} className="text-sm hover:text-gray-800">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex flex-col items-center'>
          <div className="flex justify-center mt-2 space-x-4">
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <Icon size={20} />
              </a>
            ))}.
          </div>
            {/* all rights reserved  @Cyber-Eyes-Networks*/}
          <p className="text-black mt-4">All rights reserved @cybereyesnetworks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
