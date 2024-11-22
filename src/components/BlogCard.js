import { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Image from 'next/image';

export default function BlogCard({ title, imageSrc, summary, fullPost }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-[#1b1b1e] p-6 rounded-lg shadow-md">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </CardHeader>

      {/* Image below the title */}
      <div className="my-4">
      <Image
        src={imageSrc}
        alt={`${title} image`}
        layout="responsive"
        width={16} // Aspect ratio width (e.g., 16:9)
        height={9} // Aspect ratio height
        className="rounded-md object-cover"
      />

        {/* "Show Less" button below the image when expanded */}
        {expanded && (
          <div className="text-center mt-4">
            <Button
              auto
              light
              className="text-blue-400 text-sm"
              onClick={toggleExpanded}
            >
              Show Less
            </Button>
          </div>
        )}
      </div>

      <CardBody>
        {expanded ? (
          <div className="text-gray-400 text-base space-y-4">
            {fullPost}
            {/* "Show Less" button at the bottom of expanded content */}
            <div className="text-center mt-6 flex justify-center">
            <Button
                auto
                light
                className="inline-block bg-[#a855f7] text-white text-lg px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300 flex items-center justify-center"
                onClick={toggleExpanded}
              >
                Show Less
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-gray-300 font-semibold">{summary}</p>
        )}
      </CardBody>

      {/* Read More button (only visible when collapsed) */}
      {!expanded && (
        <div className="text-center mt-4 flex justify-center">
          <Button
            color="primary"
            onClick={toggleExpanded}
            className="inline-block bg-[#a855f7] text-white text-lg px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300 flex items-center justify-center"
            >
            Read More
          </Button>
        </div>
      )}
    </Card>
  );
}
