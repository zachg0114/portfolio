import { useState } from 'react';
import CustomNavbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import ContactModal from '../components/ContactModal';
import BlogList from '@/components/BlogList';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactButton from '@/components/ContactButton';
import BiographySections from '@/components/BiographySections';

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
        <section className="text-center mb-4">
          <ProfileCard
            imageSrc="/icons/profile.jpg"
            name="Zachary Greene"
          />
        </section>
        <div className="flex justify-center space-x-4 mb-16">
            <a href="https://github.com/zachg0114" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/zachary-greene-817237224/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>

        {/* Full Biography Section */}
        <section className="text-center mb-16">
          <BiographySections />
        </section>

        {/* Blog Posts Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-8">Blog Posts</h1>
          <BlogList />
        </section>

        {/* Contact Section */}
        {/* 
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
        */}
        <section className="text-center mt-16 lg:mt-24">
          <h1 className="text-4xl font-extrabold">Want to get in touch?</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out—I’d love to hear from you!
          </p>
          <div className="mt-8 lg:mt-10">
            <ContactButton />
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

      <ScrollToTopButton />
    </div>
  );
}
