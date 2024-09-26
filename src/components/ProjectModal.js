'use client'; // Client-side component for interactivity

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

const ProjectModal = ({ isOpen, onOpenChange, title, longDescription, imageSrc, projectLink }) => {
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
            <div className="overflow-y-auto" style={{ maxHeight: '75vh' }}> {/* Wrapping the entire modal content in a scrollable div */}
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
                {projectLink && (
                  <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      auto
                      className="ml-3 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                    >
                      Project Link
                    </Button>
                  </a>
                )}
              </ModalFooter>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
