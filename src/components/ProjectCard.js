'use client'; // Client-side component for interactivity

import { useState } from 'react';
import { Button } from '@nextui-org/react';
import ProjectModal from './ProjectModal'; // Import the new ProjectModal component

const ProjectCard = ({ title, description, tags, imageSrc, longDescription, projectLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-[#1b1b1e] max-w-[350px] w-full flex flex-col justify-between rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px]">
      {/* Image at the top of the card */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${title} image`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}

      <div className="p-6 flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>

        {/* Short Description */}
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2"> {/* Reduced bottom margin here */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#a855f7] text-white text-xs font-semibold px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button to open modal */}
      <div className="px-6 pb-6"> {/* Reduced padding here */}
        <div className="flex justify-center">
          <Button
            auto
            color="gradient"
            css={{
              width: '100%', // Full width button
              padding: '10px 0', // Slightly reduced padding
              background: 'linear-gradient(90deg, #a855f7, #9333ea)', // Gradient background
              color: '#fff', // White text for contrast
              borderRadius: '8px', // Slightly rounded corners for a sleek look
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25)', // Soft shadow for a modern feel
              fontWeight: '600', // Bolder text
              '&:hover': {
                background: 'linear-gradient(90deg, #9333ea, #7e22ce)', // Darker gradient on hover
              },
            }}
            onPress={openModal}
          >
            More info
          </Button>
        </div>
      </div>

      {/* Use the ProjectModal component */}
      <ProjectModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title={title}
        longDescription={longDescription}
        imageSrc={imageSrc}
        projectLink={projectLink} // Pass the project link here
      />
    </div>
  );
};

export default ProjectCard;
