// pages/about.js
import CustomNavbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';

export const metadata = {
    title: 'About Zach Greene',
  };
  
  export default function About() {
    return (
        <div className="bg-[#0a0c1a] text-white min-h-screen">
          <CustomNavbar /> {/* Navbar component */}
    
          <main className="max-w-7xl mx-auto py-8 lg:py-16">
    
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
  