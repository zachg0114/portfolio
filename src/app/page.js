import Head from 'next/head';
import ProjectCard from '../components/ProjectCard'; // Updated card component

export default function Home() {
  return (
    <div className="bg-[#0e0e11] text-white min-h-screen">
      <Head>
        <title>Zach Greene - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="text-center mb-20">
          <h1 className="text-3xl font-bold">
          Harnessing technology to build{' '}
            <span className="text-gradient bg-gradient-to-r from-[#00ff99] via-blue-400 to-green-500 bg-clip-text text-transparent">
            smarter, faster, and better.
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
          Enterprise Technology Integration major at Penn State, focused on application development and innovative tech solutions.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            {/* Use icons from the public/icons/ directory */}
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
              title="Project 1"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat."
              tags={['HTML', 'React', 'JavaScript']}
            />
            <ProjectCard
              title="Project 2"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat."
              tags={['HTML', 'React', 'JavaScript']}
            />
            <ProjectCard
              title="Project 3"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat."
              tags={['HTML', 'React', 'JavaScript']}
            />
            <ProjectCard
              title="Project 4"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat."
              tags={['HTML', 'React', 'JavaScript']}
            />
          </div>
          <a href="https://github.com/zachg0114" className="block mt-6 text-center text-[#00ff99] hover:underline">View All Projects</a>
        </section>

        {/* Add the contact section here */}
        <section className="text-center mt-16">
          <h2 className="text-4xl font-semibold">Want to get in touch?</h2>
          <p className="mt-4 text-lg text-gray-400">
          Feel free to reach out—I'd love to hear from you!
          </p>
          <div className="mt-8">
            <a
              href="mailto:zachgreene88@gmail.com"
              className="inline-block bg-[#00ff99] text-black text-lg font-semibold px-8 py-4 rounded-md hover:bg-green-500 transition duration-300"
            >
              <i className="fas fa-envelope"></i> Contact me
            </a>
          </div>
        </section>

      </main>

      <footer className="text-center py-6 border-t border-gray-800 mt-16">
        <p>© Zach Greene</p>
      </footer>
    </div>
  );
}
