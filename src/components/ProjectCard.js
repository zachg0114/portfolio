'use client'; // Client-side component for interactivity

import { useState } from 'react';
import { Button } from '@nextui-org/react';
import ProjectModal from './ProjectModal'; // Import the new ProjectModal component

const ProjectCard = ({ title, description, tags, imageSrc, longDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-[#1b1b1e] max-w-[350px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image at the top of the card */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${title} image`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

        {/* Short Description */}
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex space-x-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#a855f7] text-white text-xs font-semibold px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button to open modal */}
        <div className="mt-4 flex justify-center">
          <Button
            auto
            color="gradient"
            css={{
              width: '100%', // Full width button
              padding: '12px 0', // Add more padding to make it feel substantial
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
            More Info
          </Button>
        </div>

        {/* Use the ProjectModal component */}
        <ProjectModal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title={title}
          longDescription={longDescription}
          imageSrc={imageSrc}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
