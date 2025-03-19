// pages/index.js

import { useState } from "react";
import CustomNavbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ViewAllButton from '../components/ViewAllButton';
import ContactButton from '../components/ContactButton';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import RightDrawer from '@/components/RightDrawer';
import ContactModal from '@/components/ContactModal';

export const metadata = {
  title: 'Zach Greene - Portfolio',
};

export default function Home() {
  // State for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#0a0c1a] text-white min-h-screen w-full overflow-x-hidden">
      <RightDrawer /> {/* Replace CustomNavbar with RightDrawer */}

      <main className="w-full lg:max-w-7xl mx-auto py-8 mt-4 lg:py-16 px-4 sm:px-8">
        
        {/* Main title section */}
        <section className="text-center mb-16 lg:mb-24">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            Harnessing technology to build{' '}
            <span className="text-gradient bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7e22ce] bg-clip-text text-transparent">
              smarter, faster, and better.
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400">
            Enterprise Technology Integration major at Penn State, focused on application development and innovative tech solutions.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://github.com/zachg0114" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/zachary-greene-817237224/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-8 lg:mt-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 lg:mt-16 justify-items-center">
            
          <ProjectCard
              title="ESPN API Documentation & Data Extraction Package"
              description="A custom tool for extracting player statistics from ESPN's undocumented API endpoints, with AI-assisted documentation."
              longDescription={
                <>
                  <p className="mb-6">
                    The ESPN API Documentation & Data Extraction Package is a powerful tool I developed to retrieve 
                    player-specific statistics from ESPN’s undocumented API endpoints. With over <strong>1,000 lines of code</strong>, 
                    this package automates the process of searching, parsing, and extracting key player statistics from game box scores.
                  </p>
                  <p className="mb-6">
                    One of the biggest challenges was ESPN’s lack of official API documentation. To overcome this, 
                    I leveraged AI to generate an <strong>8-page documentation</strong> that helped structure the code, optimize endpoint calls, 
                    and ensure efficient data retrieval. This documentation bridges the gap for developers who need structured access 
                    to ESPN’s public data.
                  </p>
                  <p className="mb-6">
                    The project features <strong>customized API calls</strong> that dynamically filter data down to individual player statistics, 
                    enabling seamless integration into various applications. Whether for data analysis, sports betting tools, 
                    or fantasy league management, this package simplifies working with ESPN’s API by providing a structured, 
                    reusable solution for retrieving live sports data.
                  </p>
                </>
              }
              tags={['JavaScript', 'API Development', 'AI']}
              projectLink="https://github.com/vunsh/ShootingBets"
            />
            
            <ProjectCard
              title="Stride"
              description="A sneaker reselling platform with a website and Discord bot for tracking sales and managing inventory."
              longDescription={
                <>
                  <p className="mb-6">Stride is a comprehensive platform consisting of a website and a Discord bot, specifically designed for the sneaker reselling community. As a co-creator, I helped develop Stride to address the needs of resellers by offering a suite of tools that streamline and optimize their operations. The platform allowed users to efficiently track their sales, manage inventory, and gain insights into their overall performance, helping them stay organized in a fast-paced and competitive industry.</p>
                  <p className="mb-6">One of Stride's standout features is its integration with Discord, where the bot provides real-time updates and easy access to essential reselling tools directly within a community-driven space. This seamless integration empowered users to manage their operations without ever leaving the platform they’re already using to communicate with other resellers.</p>
                  <p className="mb-6">Built into a five-figure business, Stride played a significant role in helping users boost their revenue by offering advanced features such as sales tracking, profit analysis, and real-time market data. The platform became a trusted resource within the sneaker reselling world, enabling users to make informed decisions, streamline their processes, and grow their businesses. The combination of a user-friendly interface, powerful functionality, and the flexibility of Discord integration made Stride an invaluable tool for the reselling community.</p>
                </>
              }
              tags={['HTML', 'React', 'JavaScript', 'Python']}
              projectLink="https://github.com/StrideLLC/stridesite"
            />

            <ProjectCard
              title="SongRequestTool"
              description="DJ song request tool with a queue system & automatic track download capabilities for seamless live performances."
              longDescription={
                <>
                  <p className="mb-6">SongRequestTool is a comprehensive platform designed to streamline song requests for DJs by offering a powerful queue management system and the ability to automatically download requested tracks. This tool helps DJs stay organized during live sets, efficiently managing requests without interruptions.</p>
                  <p className="mb-6">Built with scalability in mind, SongRequestTool is being developed into a monetizable business, offering different modules tailored to the needs of DJs, such as custom request forms, auto-download packages, and advanced authentication.</p>
                  <p className="mb-6">By integrating tools like download packages and authentication modules, alongside Tailwind CSS for a sleek and responsive design, SongRequestTool aims to enhance the DJ experience and provide a seamless solution for managing song requests. It’s currently being scaled for commercial use, allowing DJs to improve their workflow and deliver more engaging performances.</p>
                </>
              }
              tags={['HTML', 'React', 'JavaScript']}
              projectLink="https://github.com/zachg0114/SongRequestTool"
            />

            <ProjectCard
              title="Berkshire Hathaway Redesign"
              description="Redesigned the Berkshire Hathaway website with modernized wireframes and enhanced user experience."
              longDescription={
                <>
                  <p className="mb-6">Worked with a team to redesign the Berkshire Hathaway website, focusing on improving user experience and modernizing the overall interface. We created wireframes that streamlined navigation and improved content organization.</p>
                  <p className="mb-6">Key features included optimizing the website's layout for better usability and incorporating new functionality like appointment scheduling and shareholder information. The final product delivered a more user-friendly and intuitive design.</p>
                </>
              }
              tags={['Wireframing', 'UI/UX Design', 'Figma']}
              projectLink="https://www.figma.com/proto/d489BGItEQzQXEAghsVfG6/High-Fidelity-Prototype---Berkshire-Hathaway?node-id=1-2&starting-point-node-id=1%3A2&t=Q3nTQlpBjmApu7HC-1"
            />

          </div>

          <div className="flex justify-center mt-10 lg:mt-12">
            <ViewAllButton />
          </div>
        </section>

        {/* Testimonial Carousel Section */}
        <section className="mt-8 lg:mt-16">
          <TestimonialCarousel />
        </section>

        {/* Contact Section */}
        <section className="text-center mt-16 lg:mt-24">
          <h1 className="text-4xl font-extrabold">Want to get in touch?</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out—I’d love to hear from you!
          </p>
          <div className="mt-8 lg:mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md"
            >
              Contact Me
            </button>
          </div>
        </section>
      </main>

      <footer className="relative text-center py-6 border-t border-gray-800 mt-12 lg:mt-16">
        <p className="text-md lg:text-lg">© Zach Greene - 2025</p>
        <img
          src="/icons/zicon.webp"
          alt="Z Logo"
          className="absolute bottom-4 left-4 w-8 h-8 lg:w-10 lg:h-10"
        />
      </footer>

      <ContactModal
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      />
      <ScrollToTopButton />
    </div>
  );
}
