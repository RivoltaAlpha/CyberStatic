import React from 'react';
import Slider from 'react-slick';

interface SlideProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Slide: React.FC<SlideProps> = ({ title, description, imageUrl }) => (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8 max-w-2xl">{description}</p>
        <button className="bg-yellow-600 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          READ MORE
        </button>
      </div>
    </div>
  );

const HeroSection: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
    };

  return (
    <Slider {...settings}>
      <Slide
        title="Who we are"
        description="Cyber eyes networks its a startup founded by young innovators looking to help in bridging students in cyber security majorly and other tech stacks looking forward to skilling together."
        imageUrl='https://i.postimg.cc/t4B8Rn50/image2.jpg'
      />
      <Slide
        title="Vision"
        description=" To be the premier technical computer security collective in the region."
        imageUrl='https://i.postimg.cc/5NqZGRQ2/image1.jpg'
      />
            <Slide
        title="Mission"
        description="With core values deeply rooted in cybersecurity excellence, coding innovation, and community empowerment, Cyber Eyes Networks emerged as a technology hub that brings a unique blend of expertise, creativity, and a steadfast commitment to ethical practices. "
        imageUrl='https://www.tokiomarinehighland.com/wp-content/uploads/2022/05/Kiran-CIO-of-the-Year-Web-Header.jpg'
      />
    </Slider>
  );
};

export default HeroSection;