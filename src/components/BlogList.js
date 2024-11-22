// components/BlogList.js
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default function BlogList() {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications with Next.js: My Approach to Multi-Page Websites",
      imageSrc: "/icons/website.png",
      summary:
        "Developing scalable, multi-page applications in Next.js requires a structured approach and attention to detail. In this post, I’ll walk through three key strategies I use to ensure that my Next.js applications remain fast, flexible, and maintainable as they grow.",
      fullPost: (
        <>
        <h2 className="font-semibold mt-4 text-white">Why Scalability Matters in Web Applications</h2>
        <p>As applications grow in functionality and user bases become larger, scalability becomes essential to maintaining peak performance and intuitive user experience. Next.js provides a solid framework for building scalable applications, offering features like server-side rendering (SSR), API routes, and built-in CSS and JavaScript optimization. But to truly harness Next.js’s capabilities for multi-page sites, I’ve found that a few specific strategies make a significant difference.</p>
        
        <h2 className="font-semibold mt-4 text-white">Strategy 1: Leveraging Server-Side Rendering (SSR)</h2>
        <p>One of Next.js’s biggest advantages is its server-side rendering capabilities. By rendering pages on the server instead of the client, SSR reduces the initial load time and improves Search Engine Optimization (SEO)-key considerations for any scalable web application. With SSR, I can deliver fully rendered pages to users as requested, ensuring a faster, smoother experience, especially on pages containing lots of content.</p>
        <p>In practice, I implement SSR in my multi-page applications by configuring pages to use <code>getServerSideProps</code>, which fetches data at request time. This approach keeps my applications responsive even as data demands grow. <Link
  href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
  target="_blank"
  className="text-[#a855f7] underline hover:text-purple-400 transition-colors"
>
  Next.js’s server-side rendering documentation
</Link> provides an in-depth guide for more information.</p>
        
        <h2 className="font-semibold mt-4 text-white">Strategy 2: Building Reusable Components</h2>
        <p>For any large-scale application, creating reusable components is a game-changer. Not only does this improve maintainability, but it also speeds up development time by allowing me to build UI elements once and use them throughout the application. In Next.js, I organize my components into a separate directory and structure them in a way that makes them easy to import and customize across different pages.</p>
        <p>For example, I often create modular components like Navbar, Footer, or Card components, each with customizable props. These components handle different data and styles across the site, enabling me to build a cohesive UI while keeping the codebase clean. Reusability also allows me to quickly adapt to changes, as updates to a single component are replicated throughout the application automatically.</p>
        
        <h2 className="font-semibold mt-4 text-white">Strategy 3: Optimizing API Routes for Data Flexibility</h2>
        <p>Next.js allows developers to define API routes directly in the application, which provides a flexible way to handle data fetching without relying on external server endpoints. I use API routes to keep my data handling efficient and modular, making it easy to scale the application without compromising on speed.</p>
        <p>For instance, each page can call specific API routes based on its data needs, reducing the load on the main server and improving response times. To organize my API routes, I use a RESTful approach, grouping routes by functionality (e.g., <code>/api/products</code>, <code>/api/users</code>). This structure makes it easier to manage and expand the API as new features are added.</p>
        
        <h2 className="font-semibold mt-4 text-white">Conclusion: Taking a Scalable Approach to Web Development</h2>
        <p>In my journey building multi-page applications with Next.js, I’ve found that prioritizing server-side rendering, reusable components, and flexible API routes has allowed me to scale applications without sacrificing performance. As web applications continue to evolve, scalability will remain a key concern for developers, and Next.js offers powerful tools to meet this demand.</p>
        <p>If you’re also working with Next.js or exploring scalable architectures, I’d love to hear your thoughts or tips! Feel free to connect with me or share your experiences.</p>
        <h2 className="font-semibold mt-4 text-white">View the code for this scalable web app <Link
            href="https://github.com/zachg0114/portfolio"
            target="_blank"
            className="text-[#a855f7] underline hover:text-purple-400 transition-colors"
          >
            here
          </Link>
        </h2>
      </>
      ),
    },
    {
      title: "Creating a Song Request Tool for DJs: Combining Technology and Live Performance Needs",
      imageSrc: "/icons/SRTVisual.png",
      summary:
        "Managing song requests efficiently is a game-changer for DJs who aim to balance crowd engagement with smooth transitions. In this post, I’ll share how I developed a scalable Song Request Tool designed for real-time interaction, simplicity, and enhancing live performances.",
      fullPost: (
        <>
                  <h2 className="font-semibold mt-4 text-white">Why DJs Need Better Song Request Systems</h2>
                  <p>
                    For DJs, taking song requests is a double-edged sword. On one hand, they allow for real-time crowd engagement and create a personalized experience. On the other hand, managing requests can interrupt the flow of a set, leading to awkward transitions or unmet expectations. Traditional methods like passing paper slips, shouting requests, or awkward phone interactions fail to scale for modern DJs working in fast-paced, high-energy environments.
                  </p>
                  <p>
                    This challenge inspired me to create a digital Song Request Tool—a solution designed to streamline the process, reduce friction, and integrate seamlessly into a DJ’s workflow.
                  </p>

                  <h2 className="font-semibold mt-4 text-white">Building the Song Request Tool: Core Features</h2>
                  <p>
                    The tool is built with simplicity, scalability, and usability in mind. Here are some key features that make it stand out:
                  </p>
                  <ul className="list-disc ml-6 text-gray-400">
                    <li>
                      <strong>Real-Time Requests:</strong> Guests can send song requests directly to the DJ through a mobile-friendly interface, ensuring quick communication without distractions.
                    </li>
                    <li>
                      <strong>Queue Management:</strong> DJs can view, prioritize, and manage requests in an organized queue, preventing the chaos of overlapping or redundant requests.
                    </li>
                    <li>
                      <strong>Auto-Downloading:</strong> The tool integrates with music libraries to automatically download requested tracks, saving DJs from scrambling to find files mid-set.
                    </li>
                    <li>
                      <strong>Customization:</strong> DJs can configure parameters like request limits, genre filters, and blackout periods to maintain creative control while accommodating the crowd.
                    </li>
                  </ul>

                  <h2 className="font-semibold mt-4 text-white">Technical Challenges and Solutions</h2>
                  <p>
                    Developing the Song Request Tool wasn’t without its hurdles. Here are a few challenges I faced and how I tackled them:
                  </p>
                  <ul className="list-disc ml-6 text-gray-400">
                    <li>
                      <strong>Real-Time Updates:</strong> Ensuring the request queue updated instantly for both DJs and users was a top priority. I leveraged WebSocket technology to enable live syncing, ensuring requests appeared without page refreshes or delays.
                    </li>
                    <li>
                      <strong>Data Scalability:</strong> For larger events with hundreds of participants, I needed a backend system capable of handling high traffic. I built the backend using Node.js and MongoDB for lightweight, scalable performance.
                    </li>
                    <li>
                      <strong>Usability Across Devices:</strong> To ensure accessibility, I designed the user interface with responsive Tailwind CSS, making it intuitive and seamless on both mobile and desktop devices.
                    </li>
                  </ul>

                  <h2 className="font-semibold mt-4 text-white">How It Enhances Live Performances</h2>
                  <p>
                    The tool’s impact goes beyond convenience—it actively improves the DJing experience. By eliminating the friction of traditional request methods, DJs can focus on their artistry while building a deeper connection with their audience. The streamlined process also opens doors for additional monetization opportunities, such as premium paid requests or exclusive song shout-outs.
                  </p>

                  <h2 className="font-semibold mt-4 text-white">Conclusion: The Future of Song Requests</h2>
                  <p>
                    The Song Request Tool represents a blend of technology and live performance, solving a common pain point for DJs while enhancing crowd interaction. Whether you’re a DJ looking to streamline your workflow or an event organizer aiming to improve guest experience, this tool is a step forward in modern music/event technology.
                  </p>
                  <p>
                    If you’ve worked on similar tools or have ideas for improving live performances with tech, I’d love to hear your thoughts.
                  </p>
                  <h2 className="font-semibold mt-4 text-white">View this project <Link
                      href="https://github.com/zachg0114/SongRequestTool"
                      target="_blank"
                      className="text-[#a855f7] underline hover:text-purple-400 transition-colors"
                    >
                      here
                    </Link>
                  </h2>
                </>
      ),
    },
    {
      title: "From Concept to Prototype: Redesigning the Berkshire Hathaway Website with Modern UX Principles",
      imageSrc: "/icons/berkshire.png",
      summary:
        "The redesign of the Berkshire Hathaway website demonstrates how modern UX principles can transform a traditional user interface into a more intuitive and engaging experience. In this post, I’ll walk through the process of conceptualizing, prototyping, and testing a complete website overhaul.",
      fullPost: (
        <>
                  <h2 className="font-semibold mt-4 text-white">Identifying the Problem</h2>
                  <p>
                    The original Berkshire Hathaway website, while functional, lacked the modern design and usability that today’s users expect in a website. Navigation was cumbersome, content was difficult to locate, and the site didn’t provide a cohesive visual identity. For a company of its stature, the website needed to reflect the brand’s professionalism and accessibility.
                  </p>
                  <p>
                    My goal was to create a site that not only showcased Berkshire Hathaway’s offerings but also provided an intuitive and pleasant experience for users across all devices.
                  </p>

                  <h2 className="font-semibold mt-4 text-white">Designing with Modern UX Principles</h2>
                  <p>
                    The redesign process began with a focus on core UX principles:
                  </p>
                  <ul className="list-disc ml-6 text-gray-400">
                    <li>
                      <strong>User-Centered Design:</strong> I conducted interviews and usability testing to understand user pain points and expectations.
                    </li>
                    <li>
                      <strong>Responsive Layout:</strong> The new design ensures a seamless experience across desktops, tablets, and mobile devices.
                    </li>
                    <li>
                      <strong>Clear Visual Hierarchy:</strong> I emphasized key elements like navigation menus and calls to action while maintaining a clean, minimalist aesthetic.
                    </li>
                    <li>
                      <strong>Accessibility Standards:</strong> I adhered to WCAG guidelines to ensure the site was inclusive and accessible to all users.
                    </li>
                  </ul>

                  <h2 className="font-semibold mt-4 text-white">From Wireframes to High-Fidelity Prototypes</h2>
                  <p>
                    After gathering insights from stakeholders and users, I moved to the wireframing stage. Wireframes served as the blueprint for the redesign, helping us map out page layouts, navigation flows, and content placement without the distraction of color or styling.
                  </p>
                  <p>
                    Once the wireframes were approved, I transitioned to a high-fidelity prototypes using Figma. These prototypes incorporated Berkshire Hathaway’s brand colors, fonts, and imagery to provide a realistic preview of the final product. Prototyping also allowed me to test interactive elements like dropdown menus, carousels, and form submissions before development.
                  </p>

                  <h2 className="font-semibold mt-4 text-white">Usability Testing and Iteration</h2>
                  <p>
                    Usability testing was a critical step in refining the design. I invited a diverse group of participants to navigate the prototype, complete tasks, and provide feedback. Testing revealed key areas for improvement, such as:
                  </p>
                  <ul className="list-disc ml-6 text-gray-400">
                    <li>
                      Simplifying navigation for first-time users.
                    </li>
                    <li>
                      Enhancing the visibility of important information, such as investment opportunities and contact details.
                    </li>
                    <li>
                      Reducing page load times with optimized images and assets.
                    </li>
                  </ul>
                  <p>
                    Based on this feedback, I made iterative changes to ensure the final product met user needs and expectations.
                  </p>

                  <h2 className="font-semibold mt-4 text-white">Outcome: A Modern, User-Friendly Website</h2>
                  <p>
                    The redesigned Berkshire Hathaway website achieved its goal of combining form and function. With a modern aesthetic, responsive layout, and improved usability, the site now serves as a reflection of the company’s values and professionalism. Navigation is intuitive, information is easy to find, and the overall experience leaves a positive impression on users.
                  </p>

                  <h2 className="font-semibold mt-4 text-white">Conclusion: The Power of UX in Business</h2>
                  <p>
                    Redesigning the Berkshire Hathaway website was a rewarding challenge that highlighted the importance of modern UX principles in enhancing brand perception and user satisfaction. Whether it’s for a global corporation or a personal project, a thoughtful approach to design can make a lasting impact.
                  </p>
                  <p>
                    If you’re working on a UX project or have insights into redesigning legacy websites, I’d love to hear your thoughts. Let’s collaborate and share ideas for creating better digital experiences!
                  </p>
                  <h2 className="font-semibold mt-4 text-white">View this project <Link
                      href="https://www.figma.com/proto/d489BGItEQzQXEAghsVfG6/High-Fidelity-Prototype---Berkshire-Hathaway?node-id=1-2&starting-point-node-id=1%3A2&t=Q3nTQlpBjmApu7HC-1"
                      target="_blank"
                      className="text-[#a855f7] underline hover:text-purple-400 transition-colors"
                    >
                      here
                    </Link>
                  </h2>                </>
      ),
    },
  ];

  return (
    <div className="space-y-6 flex flex-col items-center">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} title={post.title} imageSrc={post.imageSrc} summary={post.summary} fullPost={post.fullPost} />
      ))}
    </div>
  );
}
