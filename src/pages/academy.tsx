const NetworkingPage = () => {

    type WriteupItem = {
      title: string;
      description: string;
      imageUrl: string;
      link: string;
    };
  
    const networkingData: WriteupItem[] = [
      {
        "title": "Networking Fundamentals",
        "description": "Learn the basics of networking, including key concepts like IP addressing, subnetting, and network protocols. This course is perfect for beginners looking to get started in the field of networking.",
        "imageUrl": "https://learn.microsoft.com/training/achievements/azure-networking-fundamentals-social.png",
        "link": "https://learn.microsoft.com/en-us/training/modules/network-fundamentals/"
      },
      {
        "title": "Introduction to Network Security",
        "description": "Explore the fundamentals of network security, including how to protect your network from threats and attacks. Learn about firewalls, VPNs, and encryption techniques.",
        "imageUrl": "https://th.bing.com/th/id/OIP.Wo01xpI7GQr57yMcRY-a7gHaEh?rs=1&pid=ImgDetMain",
        "link": "https://www.bing.com/search?q=network-security-basics&cvid=644c0edc48804208939fd757f5fd5bed&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEAyCAgJEOkHGPxV0gEINjkwM2owajSoAgCwAgE&FORM=ANAB01&PC=U531"
      },
      {
        "title": "Understanding TCP/IP",
        "description": "Dive deep into the TCP/IP protocol suite, which is the foundation of the internet. This course covers the TCP/IP model, its layers, and how data is transmitted across networks.",
        "imageUrl": "https://th.bing.com/th/id/OIP.2zHzlJByuWsmvP3ObFfGUAHaDX?rs=1&pid=ImgDetMain",
        "link": "https://www.geeksforgeeks.org/tcp-ip-in-computer-networking/"
      },
      {
        "title": "Wireshark for Network Analysis",
        "description": "Learn how to use Wireshark, a powerful network protocol analyzer, to monitor and troubleshoot network issues. This course covers the basics of packet analysis and how to use Wireshark effectively.",
        "imageUrl": "https://th.bing.com/th/id/OIP.StVLmcF9Aix3OGwPBBcxegHaEK?rs=1&pid=ImgDetMain",
        "link": "https://infosecwriteups.com/mastering-wireshark-a-comprehensive-guide-for-networks-analysis-6b2b8d5c1812"
      },
      {
        "title": "Cisco Networking Essentials",
        "description": "Get started with Cisco networking. Learn about Cisco routers, switches, and how to configure them for various network environments. This course is ideal for those pursuing Cisco certifications.",
        "imageUrl": "https://images.credly.com/images/d7f73336-9adb-4833-a602-761837a33ba3/NetworkingEssentials-01.png",
        "link": "https://www.netacad.com/networking"
      },
      {
        "title": "OSI Models",
        "description": " An overview of the OSI model, which is the backbone of the internet. This course covers the basics of the model, including the layers and how data is transmitted across networks.",
        "imageUrl": "https://3.bp.blogspot.com/-oz_8MJgG70k/Vxm-klCDucI/AAAAAAAAIVk/YblKuGAxGBk6Ma_7QhViiYoXrfjbGj30wCLcB/s1600/2911722148_b705ac15d9_o.png",
        "link": "https://en.wikipedia.org/wiki/OSI_model"
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        
        <div className="relative h-96 overflow-hidden">
          <img 
            src="https://i.postimg.cc/t4B8Rn50/image2.jpg" 
            alt="Networking Banner" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-4">Networking Learning Materials</h1>
          </div>
        </div>
  
        {/* Main content */}
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {networkingData.map((article, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-300">{article.description}</p>
                </div>
                <button type="button" className="w-[100px] py-2 rounded ml-[150px] mb-4 bg-red-500 btn btn-outline btn-primary" onClick={() => window.location.href = article.link} > Read more 
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default NetworkingPage;
  