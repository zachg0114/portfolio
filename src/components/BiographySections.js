import { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function BiographySections() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-[#1b1b1e] p-6 rounded-lg shadow-md text-center">
      <h2 className="font-semibold text-white text-2xl">About Me</h2>

      {!expanded ? (
        // Summary content
        <>
          <p className="mt-4 text-sm sm:text-md lg:text-xl text-gray-400 max-w-5xl mx-auto">
          Hi, I’m Zachary Greene—a technology enthusiast focused on Enterprise Technology Integration and Application Development.
            Currently completing my Bachelor's at Penn State University, I've gained hands-on experience in developing tech solutions using Java, network security, and IT project management.
          </p>
          <div className="text-center mt-6">
            <Button
              onClick={toggleExpanded}
              className="bg-[#a855f7] text-white text-lg px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300"
            >
              Read More
            </Button>
          </div>
        </>
      ) : (
        // Expanded content
        <>
          <p className="mt-4 text-sm sm:text-md lg:text-xl text-gray-400 max-w-5xl mx-auto">
          Hi, I’m Zachary Greene—a technology enthusiast focused on Enterprise Technology Integration and Application Development.
            Currently completing my Bachelor's at Penn State University, I've gained hands-on experience in developing tech solutions using Java, network security, and IT project management.
          </p>

          <h2 className="font-semibold mt-4 text-white text-2xl">What I Bring to the Table</h2>
          <p className="mt-4 text-sm sm:text-md lg:text-xl text-gray-400 max-w-5xl mx-auto">
            I combine technical expertise and leadership skills to drive measurable improvements. At Select Medical, I collaborated with cross-functional teams to automate processes,
            bringing measurable efficiency to critical finance systems. I’m skilled at organizing and communicating within teams, emphasizing a structured and results-driven approach in every project I undertake.
          </p>

          <h2 className="font-semibold mt-4 text-white text-2xl">Passions and Projects</h2>
          <p className="mt-4 text-sm sm:text-md lg:text-xl text-gray-400 max-w-5xl mx-auto">
            My work is driven by a love for solving real-world problems through technology.
            From leading Penn State’s Table Tennis Club to staying active in Alpha Chi Rho,
            I prioritize building connections and leading teams with shared goals and values.
            My work on projects like Stride and the Berkshire Hathaway redesign has strengthened my belief in the power of community and teamwork.
          </p>

          <h2 className="font-semibold mt-4 text-white text-2xl">Looking Ahead</h2>
          <p className="mt-4 text-sm sm:text-md lg:text-xl text-gray-400 max-w-5xl mx-auto">
            Looking forward, I’m excited to develop further in cloud computing, data analysis, and web development.
            My goal is to create tech solutions that streamline business processes and elevate user experiences.
            I aim to lead impactful projects that foster collaboration and innovation in technology, making a lasting difference in the industry.
          </p>

          <div className="text-center mt-6">
            <Button
              onClick={toggleExpanded}
              className="bg-[#a855f7] text-white text-lg px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300"
            >
              Show Less
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
