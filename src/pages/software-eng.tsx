const SoftwareEngPage = () => {

  
  type WriteupItem = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };

  const softwareEngData: WriteupItem[] = [
    {
      "title": "Software Development Fundamentals",
      "description": "An introductory MVA course that covers the basic concepts of software development. It helps viewers prepare for the 98-361 Software Development Fundamentals exam by understanding key concepts necessary for any software developer.",
      "imageUrl": "https://th.bing.com/th/id/R.4d4410886e4d77b73e5b0cdff67daee1?rik=FDLLB1Ey0CdSSQ&pid=ImgRaw&r=0",
      "link": "https://learn.microsoft.com/en-us/shows/software-development-fundamentals/"
    },
    {
      "title": "Beginner's Guide starting Web Development",
      "description": "Get started with web development, the foundational skills needed for building and hosting web applications. This path covers the basics of web development, including  JavaScript basics, Array and loops.",
      "imageUrl": "https://th.bing.com/th/id/R.260df90d353cc44162f816d46aa97d09?rik=fdQwbDGcUFeqAw&pid=ImgRaw&r=0",
      "link": "https://learn.microsoft.com/en-us/training/paths/web-development-101/"
    },
    {
      "title": "Web Development Tools: Visual Studio Code",
      "description": "Learn the basics of web development with Visual Studio Code. Practice the beginning steps of web development by creating a simple web project in Visual Studio Code that contains a web page, a CSS file, and a JavaScript file. Learn how to use developer tools in your browser to check your work. ",
      "imageUrl": "https://th.bing.com/th/id/OIP.mHPoSiRZnGdqucCiqSreHQHaFL?rs=1&pid=ImgDetMain",
      "link": "https://learn.microsoft.com/en-us/training/paths/beginner-java/"
    },
    {
      title: "Getting started with Git and Github ",
      description: "Git and Github are essential tools for software development. Here are some common commands and how to use them.",
      imageUrl: "https://th.bing.com/th/id/OIP.N2A89Kvz4PMLfkYBBqgcOAHaEK?rs=1&pid=ImgDetMain",
      link: "https://charityjelimo.hashnode.dev/getting-started-with-git-and-github",
    },

    {
      "title": "Introduction to Python",
      "description": "Dive into Python, a popular and beginner-friendly programming language. This path covers the basics of Python programming, including syntax, data structures, and building simple applications.",
      "imageUrl": "https://th.bing.com/th/id/R.8a3fb066568ba9bfddf9e8e10a4af196?rik=GAyeQ04HjU90Lw&pid=ImgRaw&r=0",
      "link": "https://learn.microsoft.com/en-us/training/paths/beginner-python/"
    },    
    {
      "title": "Build .NET applications with C#",
      "description": "A comprehensive learning path to get started with .NET and C#. It includes modules on writing your first C# code, understanding .NET, working with dependencies, debugging, and creating web APIs with ASP.NET Core.",
      "imageUrl": "https://th.bing.com/th/id/OIP.SFvK0udMbZSXilvWexTlnwAAAA?w=474&h=266&rs=1&pid=ImgDetMain",
      "link": "https://learn.microsoft.com/en-us/training/paths/build-dotnet-applications-csharp/"
    },    
    {
      "title": "Start Learning React",
      "description": "Get started with React, the most popular JavaScript library for building user interfaces. This path covers the basics of React, including components, state management, and routing.",
      "imageUrl": "https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg",
      "link": "https://learn.microsoft.com/en-us/training/modules/react-get-started/"
    },
    {
      "title": "Introduction to HTML and CSS",
      "description": "Get started with HTML and CSS, the foundational languages of the web. This learning path covers the basics of creating and styling web pages, making them interactive and visually appealing.",
      "imageUrl": "https://th.bing.com/th/id/OIP.n0TFRD66PewyakGCu7W7DQHaEK?rs=1&pid=ImgDetMain",
      "link": "https://learn.microsoft.com/en-us/training/modules/build-first-html-webpage/"
    },
    {
      "title": "The Principles of Sustainable Software Engineering",
      "description": "This module introduces the emerging discipline of Sustainable Software Engineering. It covers the six core principles and philosophies needed to define, build, and run sustainable software applications.",
      "imageUrl": "https://th.bing.com/th/id/OIP.qWxAKE1zqQp19lstQRoMPgHaEo?w=1024&h=640&rs=1&pid=ImgDetMain",
      "link": "https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/"
    },        
  ]



    return (
        <div className="min-h-screen bg-gray-900 text-white">
          
          <div className="relative h-96 overflow-hidden">
            <img 
              src="https://i.postimg.cc/5yJsSf3q/software.jpg" 
              alt="Software Engineering Banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-bold mb-4">Software Engineering Writeups</h1>
            </div>
          </div>
    
          {/* Main content */}
          <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Article grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {softwareEngData.map((article, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                      src={article.imageUrl} 
                      alt= {article.title}
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

export default SoftwareEngPage;
