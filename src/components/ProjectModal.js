'use client'; // Client-side component for interactivity

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

const ProjectModal = ({ isOpen, onOpenChange, title, longDescription, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        base: 'bg-[#0e0e11] text-white', // Dark background to match the theme
      }}
      backdrop="blur" // Subtle blurred background for focus effect
      radius="lg" // Rounded corners for a modern feel
      size="lg" // Large modal to give enough space for content
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold text-[#d8b4fe]">{title}</h3> {/* Add purple gradient */}
            </ModalHeader>

            <ModalBody className="py-6">
              {/* Long description */}
              <p className="text-gray-300 mb-4">{longDescription}</p> {/* Text color adjusted */}

              {/* Image in modal */}
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={`${title} detailed image`}
                  className="rounded-lg shadow-lg" // Add rounded corners and shadow to the image
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              )}
            </ModalBody>

            <ModalFooter className="flex justify-end">
              <Button
                color="danger"
                auto
                flat
                className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                color="gradient"
                auto
                className="ml-3"
                css={{
                  background: 'linear-gradient(90deg, #a855f7, #9333ea)',
                  color: '#fff',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #9333ea, #7e22ce)',
                  },
                }}
                onPress={onClose}
              >
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
