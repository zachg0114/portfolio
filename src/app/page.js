export const metadata = {
  title: 'Zach Greene - Portfolio',
};

import ProjectCard from '../components/ProjectCard';
import ViewAllButton from '../components/ViewAllButton';
import ContactButton from '../components/ContactButton';

export default function Home() {
  return (
    <div className="bg-[#0a0c1a] text-white min-h-screen"> {/* Updated background to dark blue */}
      <header className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto">
        {/* Name on the left */}
        <h1 className="text-2xl font-bold text-[#d8b4fe]">Zach Greene</h1>

        {/* Resume link on the right */}
        <a
          href="https://drive.google.com/file/d/1llsLqF-0HTSlhaWuHKfwhS9oxJoC0lGL/view?usp=sharing" // Correct path to your resume
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a855f7] hover:text-[#d8b4fe] underline"
        >
          View Resume
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="text-center mb-20">
          <h1 className="text-4xl sm:text-4xl font-extrabold leading-tight">
            Harnessing technology to build{' '}
            <span className="text-gradient bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7e22ce] bg-clip-text text-transparent">
              smarter, faster, and better.
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Enterprise Technology Integration major at Penn State, focused on application development and innovative tech solutions.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://github.com/zachg0114" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </header>

        <section className="mt-12">
          <h2 className="text-4xl font-semibold text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            
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
              tags={['HTML', 'React', 'JavaScript']}
              projectLink="https://github.com/StrideLLC/stridesite"
            />

            <ProjectCard
              title="SongRequestTool"
              description="DJ song request tool with a queue system & automatic track download capabilities for seamless live performances."
              longDescription={
                <>
                  <p className="mb-6">SongRequestTool is a comprehensive platform designed to streamline song requests for DJs by offering a powerful queue management system and the ability to automatically download requested tracks. This tool helps DJs stay organized during live sets, efficiently managing requests without interruptions.</p>

                  <p className="mb-6">Built with scalability in mind, SongrequestTool is being developed into a monetizable business, offering different modules tailored to the needs of DJs, such as custom request forms, auto-download packages, and advanced authentication.</p>

                  <p className="mb-6">By integrating tools like download packages and authentication modules, alongside Tailwind CSS for a sleek and responsive design, SongrequestTool aims to enhance the DJ experience and provide a seamless solution for managing song requests. It’s currently being scaled for commercial use, allowing DJs to improve their workflow and deliver more engaging performances.</p>
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

          {/* Use the ViewAllButton component here */}
          <div className="flex justify-center mt-6">
            <ViewAllButton />
          </div>
        </section>

        {/* Add the contact section here */}
        <section className="text-center mt-16">
          <h2 className="text-4xl font-semibold">Want to get in touch?</h2>
          <p className="mt-4 text-lg text-gray-400">
            Feel free to reach out—I'd love to hear from you!
          </p>
          <div className="mt-8">
            <ContactButton /> {/* Use the new ContactButton component */}
          </div>
        </section>
      </main>

      <footer className="relative text-center py-6 border-t border-gray-800 mt-16">
        <p>© Zach Greene - 2024</p>

        {/* Add favicon in the bottom left */}
        <img
          src="/icons/zicon.webp" // Use the correct path to your logo image
          alt="Z Logo"
          className="absolute bottom-4 left-4 w-8 h-8"
        />
      </footer>
    </div>
  );
}
