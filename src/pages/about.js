import { useState } from 'react';
import CustomNavbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import ContactModal from '../components/ContactModal';
import BlogList from '@/components/BlogList';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactButton from '@/components/ContactButton';
import BiographySections from '@/components/BiographySections';
import RightDrawer from '@/components/RightDrawer';

export const metadata = {
  title: 'About Zach Greene',
};

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-[#0a0c1a] text-white min-h-screen w-full overflow-x-hidden">
      <RightDrawer /> {/* Replace CustomNavbar with RightDrawer */}
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
        <section className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-8">Biography</h1>
          <BiographySections />
        </section>

        {/* Blog Posts Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-8">Blog Posts</h1>
          <BlogList />
        </section>

        {/* Contact Section */}
        <section className="text-center mt-16 lg:mt-24">
          <h1 className="text-4xl font-extrabold">Want to get in touch?</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out—I’d love to hear from you!
          </p>
          <div className="mt-8 lg:mt-10">
            <button
              onClick={() => setIsContactModalOpen(true)}
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
        isOpen={isContactModalOpen}
        onOpenChange={() => setIsContactModalOpen(false)}
      />
      <ScrollToTopButton />
    </div>
  );
}
