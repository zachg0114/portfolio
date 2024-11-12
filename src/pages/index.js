// pages/index.js

import CustomNavbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ViewAllButton from '../components/ViewAllButton';
import ContactButton from '../components/ContactButton';
import TestimonialCarousel from '../components/TestimonialCarousel';

export const metadata = {
  title: 'Zach Greene - Portfolio',
};

export default function Home() {
  return (
    <div className="bg-[#0a0c1a] text-white min-h-screen">
      <CustomNavbar /> {/* Navbar component */}

      <main className="max-w-7xl mx-auto py-8 lg:py-16">
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
              <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-8 lg:mt-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 lg:mt-16 justify-items-center">
            <ProjectCard
              title="Stride"
              description="A sneaker reselling platform with a website and Discord bot for tracking sales and managing inventory."
              tags={['HTML', 'React', 'JavaScript']}
              projectLink="https://github.com/StrideLLC/stridesite"
            />
            <ProjectCard
              title="SongRequestTool"
              description="DJ song request tool with a queue system & automatic track download capabilities for seamless live performances."
              tags={['HTML', 'React', 'JavaScript']}
              projectLink="https://github.com/zachg0114/SongRequestTool"
            />
            <ProjectCard
              title="Berkshire Hathaway Redesign"
              description="Redesigned the Berkshire Hathaway website with modernized wireframes and enhanced user experience."
              tags={['Wireframing', 'UI/UX Design', 'Figma']}
              projectLink="https://www.figma.com/proto/d489BGItEQzQXEAghsVfG6/High-Fidelity-Prototype---Berkshire-Hathaway"
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
        <section className="text-center mt-12 lg:mt-16">
          <h2 className="text-3xl lg:text-4xl font-semibold">Want to get in touch?</h2>
          <p className="mt-4 text-lg lg:text-2xl text-gray-400">
            Feel free to reach out—I’d love to hear from you!
          </p>
          <div className="mt-8 lg:mt-10">
            <ContactButton />
          </div>
        </section>
      </main>

      <footer className="relative text-center py-6 border-t border-gray-800 mt-12 lg:mt-16">
        <p className="text-md lg:text-lg">© Zach Greene - 2024</p>
        <img
          src="/icons/zicon.webp"
          alt="Z Logo"
          className="absolute bottom-4 left-4 w-8 h-8 lg:w-10 lg:h-10"
        />
      </footer>
    </div>
  );
}
