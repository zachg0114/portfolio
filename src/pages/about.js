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
      
      <main className="max-w-7xl mx-auto py-8 lg:py-16 px-4 sm:px-8 space-y-16">

        {/* Intro Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">About Me</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Hi, I’m Zachary Greene—a technology enthusiast focused on Enterprise Technology Integration and Application Development. I'm currently completing my Bachelor's in Enterprise Technology Integration at Penn State University, where I've gained hands-on experience with tech solutions in Java, network security, and IT project management.
          </p>
        </section>

        {/* What I Bring Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">What I Bring to the Table</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            With a blend of technical expertise and leadership skills, I have a track record of creating solutions that streamline operations. At Select Medical, I collaborated with cross-functional teams to automate processes and support critical finance systems, bringing measurable efficiency improvements. I’m skilled at organizing and communicating within teams, bringing a structured and results-driven approach to every project.
          </p>
        </section>

        {/* Passions and Projects Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">Passions and Projects</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            I'm passionate about solving real-world problems through technology. Whether building Stride, a five-figure sneaker reselling business, or reimagining Berkshire Hathaway’s user experience, I approach each challenge with enthusiasm and dedication. I believe in the power of community, leading Penn State’s Table Tennis Club and staying active in Alpha Chi Rho to connect with others and build teams with shared goals and values.
          </p>
        </section>

        {/* Looking Ahead Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">Looking Ahead</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            I’m excited to continue developing in cloud computing, data analysis, and web development, with the goal of creating tech solutions that streamline business processes and elevate user experiences. Ultimately, I aim to lead impactful projects that foster collaboration and innovation in technology, making a lasting difference.
          </p>
        </section>

        {/* Blog Posts Placeholder Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">Blog Posts</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Stay tuned for insights on technology, project journeys, and more. Exciting posts are coming soon!
          </p>
        </section>

        {/* Contact Section */}
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
