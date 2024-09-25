import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#0e0e11] text-white min-h-screen">
      <Head>
        <title>Zach Greene - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header section */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold">
            I make ideas a reality through <span className="text-[#00ff99]">scalable software.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Current student at Penn State, aspiring software engineer.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/github-icon.svg" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </header>

        {/* Projects section */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <ProjectCard title="Project 1" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat." />
            <ProjectCard title="Project 2" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat." />
            <ProjectCard title="Project 3" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat." />
            <ProjectCard title="Project 4" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis aperiam ducimus ullam fugiat." />
          </div>
          <a href="/projects" className="block mt-6 text-center text-[#00ff99] hover:underline">View All Projects</a>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-800 mt-16">
        <p>© Zach Greene</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-[#1b1b1e] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex space-x-2">
        <span className="bg-[#00ff99] text-black text-xs font-semibold px-3 py-1 rounded">HTML</span>
        <span className="bg-[#00ff99] text-black text-xs font-semibold px-3 py-1 rounded">React</span>
        <span className="bg-[#00ff99] text-black text-xs font-semibold px-3 py-1 rounded">JavaScript</span>
      </div>
    </div>
  );
}
