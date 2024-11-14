// pages/about.js
import CustomNavbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';
import BlogCard from '@/components/BlogCard';
import ProfileCard from '../components/ProfileCard';

export const metadata = {
  title: 'About Zach Greene',
};

export default function About() {
  return (
    <div className="bg-[#0a0c1a] text-white min-h-screen">
      <CustomNavbar /> {/* Navbar component */}

      <main className="max-w-7xl mx-auto py-8 lg:py-16 space-y-12 px-4">
        
        {/* Profile Card Section */}
        <section className="text-center">
          <ProfileCard
            imageSrc="/icons/profile.jpg" // Using the imported image
            name="Zach Greene"
          />
        </section>

        {/* Intro Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">About Me</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Hi, I’m Zachary Greene—a technology enthusiast focused on Enterprise Technology Integration and Application Development. I'm currently completing my Bachelor's in Enterprise Technology Integration at Penn State University, where I've gained hands-on experience with tech solutions in Java, network security, and IT project management.
          </p>
        </section>

        {/* Blog Posts Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold">Blog Posts</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Stay tuned for insights on technology, project journeys, and more. Exciting posts are coming soon!
          </p>

          <div className="mt-8 space-y-6 flex flex-col items-center">
            <BlogCard
              title="Building Scalable Web Applications with Next.js: My Approach to Multi-Page Websites"
              summary="Developing scalable, multi-page applications in Next.js requires a structured approach and attention to detail. In this post, I’ll walk through three key strategies I use to ensure that my Next.js applications remain fast, flexible, and maintainable as they grow."
              fullPost={
                <>
                  <h3 className="font-semibold mt-4">Why Scalability Matters in Web Applications</h3>
                  <p>As applications grow in functionality and user base, scalability becomes essential to maintain performance and user experience. Next.js provides a solid framework for building scalable applications, offering features like server-side rendering (SSR), API routes, and built-in CSS and JavaScript optimization. But to truly harness Next.js’s capabilities for multi-page sites, I’ve found that a few specific strategies make a significant difference.</p>
                  
                  <h3 className="font-semibold mt-4">Strategy 1: Leveraging Server-Side Rendering (SSR)</h3>
                  <p>One of Next.js’s biggest advantages is its server-side rendering capabilities. By rendering pages on the server instead of the client, SSR reduces the initial load time and improves SEO—key considerations for any scalable web application. With SSR, I can deliver fully rendered pages to users as requested, ensuring a faster, smoother experience, especially on content-rich pages.</p>
                  <p>In practice, I implement SSR in my multi-page applications by configuring pages to use getServerSideProps, which fetches data at request time. This approach keeps my application responsive even as data demands grow. <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props" target="_blank" className="text-blue-400 underline">Next.js’s server-side rendering documentation</a> provides an in-depth guide for more information.</p>
                  
                  <h3 className="font-semibold mt-4">Strategy 2: Building Reusable Components</h3>
                  <p>For any large-scale application, creating reusable components is a game-changer. Not only does this improve maintainability, but it also speeds up development time by allowing me to build UI elements once and use them throughout the application. In Next.js, I organize my components into a separate directory and structure them in a way that makes them easy to import and customize across different pages.</p>
                  <p>For example, I often create modular components like Navbar, Footer, or Card components, each with customizable props. These components handle different data and styles across the site, enabling me to build a cohesive UI while keeping the codebase clean. Reusability also allows me to quickly adapt to changes, as updates to a single component propagate throughout the application automatically.</p>
                  
                  <h3 className="font-semibold mt-4">Strategy 3: Optimizing API Routes for Data Flexibility</h3>
                  <p>Next.js allows developers to define API routes directly in the application, which provides a flexible way to handle data fetching without relying on external server endpoints. I use API routes to keep my data handling efficient and modular, making it easy to scale the application without compromising on speed.</p>
                  <p>For instance, each page can call specific API routes based on its data needs, reducing the load on the main server and improving response times. To organize my API routes, I use a RESTful approach, grouping routes by functionality (e.g., /api/products, /api/users). This structure makes it easier to manage and expand the API as new features are added.</p>
                  
                  <h3 className="font-semibold mt-4">Conclusion: Taking a Scalable Approach to Web Development</h3>
                  <p>In my journey building multi-page applications with Next.js, I’ve found that prioritizing server-side rendering, reusable components, and flexible API routes has allowed me to scale applications without sacrificing performance. As web applications continue to evolve, scalability will remain a key concern for developers, and Next.js offers powerful tools to meet this demand.</p>
                  <p>If you’re also working with Next.js or exploring scalable architectures, I’d love to hear your thoughts or tips! Feel free to connect with me or share your experiences.</p>
                </>
              }
            />
          </div>
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
