// pages/about.js
export const metadata = {
    title: 'About Zach Greene',
  };
  
  export default function About() {
    return (
      <div className="bg-[#0a0c1a] text-white min-h-screen flex items-center justify-center">
        <main className="max-w-3xl mx-auto p-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#d8b4fe]">About Me</h1>
          <p className="text-lg text-gray-400">
            Hello! I’m Zach Greene, an Enterprise Technology Integration major at Penn State, focused on application
            development. I’m passionate about harnessing technology to build smarter, faster, and better solutions.
          </p>
        </main>
      </div>
    );
  }
  