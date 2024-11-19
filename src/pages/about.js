import { useState } from 'react';
import CustomNavbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import ContactModal from '../components/ContactModal';
import BlogList from '@/components/BlogList';

export const metadata = {
  title: 'About Zach Greene',
};

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="bg-[#0a0c1a] text-white min-h-screen w-full overflow-x-hidden">
      <CustomNavbar /> {/* Navbar component */}

      <main className="w-full lg:max-w-7xl mx-auto py-8 lg:py-16 px-4 sm:px-8">
        {/* Profile Card Section */}
        <section className="text-center mb-16">
          <ProfileCard
            imageSrc="/icons/profile.jpg"
            name="Zachary Greene"
          />
        </section>

        {/* Full Biography Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold">About Me</h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto">
            Hi, I’m Zachary Greene—a technology enthusiast focused on Enterprise Technology Integration and Application Development. 
            Currently completing my Bachelor's at Penn State University, I've gained hands-on experience in developing tech solutions using Java, network security, and IT project management.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto">
            My journey in tech has been marked by a passion for streamlining operations and crafting innovative, user-centered applications. 
            Whether it’s automating financial systems at Select Medical, building Stride (a sneaker reselling business), or reimagining user experience for Berkshire Hathaway, 
            I approach each challenge with enthusiasm and a drive to make a meaningful impact.
          </p>
        </section>

        {/* What I Bring Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold">What I Bring to the Table</h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto">
            I combine technical expertise and leadership skills to drive measurable improvements. At Select Medical, I collaborated with cross-functional teams to automate processes, 
            bringing measurable efficiency to critical finance systems. I’m skilled at organizing and communicating within teams, emphasizing a structured and results-driven approach in every project I undertake.
          </p>
        </section>

        {/* Passions and Projects Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold">Passions and Projects</h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto">
            My work is driven by a love for solving real-world problems through technology. 
            From leading Penn State’s Table Tennis Club to staying active in Alpha Chi Rho, 
            I prioritize building connections and leading teams with shared goals and values. 
            My work on projects like Stride and the Berkshire Hathaway redesign has strengthened my belief in the power of community and teamwork.
          </p>
        </section>

        {/* Looking Ahead Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold">Looking Ahead</h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto">
            Looking forward, I’m excited to develop further in cloud computing, data analysis, and web development. 
            My goal is to create tech solutions that streamline business processes and elevate user experiences. 
            I aim to lead impactful projects that foster collaboration and innovation in technology, making a lasting difference in the industry.
          </p>
        </section>

        {/* Blog Posts Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold">Blog Posts</h1>
          <BlogList />
        </section>

        {/* Contact Section */}
        <section className="text-center mt-16 lg:mt-24">
          <h1 className="text-4xl font-extrabold">Want to get in touch?</h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out—I’d love to hear from you!
          </p>
          <div className="mt-8 lg:mt-10">
            <button
              onClick={openContactModal}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Contact Me
            </button>
          </div>
        </section>
      </main>

      {isContactModalOpen && <ContactModal onClose={closeContactModal} />}

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
