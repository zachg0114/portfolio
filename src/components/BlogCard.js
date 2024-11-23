import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";

export default function BlogCard({ title, imageSrc, summary, fullPost }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (expanded) {
      // Measure content height including padding
      setHeight(contentRef.current.scrollHeight + 16); // Adding extra space to prevent cutoff
    } else {
      // Collapse smoothly
      setHeight(0);
    }
  }, [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-[#1b1b1e] p-6 rounded-lg shadow-md">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </CardHeader>

      {/* Image Section */}
      <div className="my-4">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          layout="responsive"
          width={16} // Aspect ratio width (e.g., 16:9)
          height={9} // Aspect ratio height
          className="rounded-md object-cover"
        />
      </div>

      {/* Card Body with Enhanced Smooth Transition */}
      <CardBody>
        <div
          style={{
            height: `${height}px`,
            overflow: "hidden",
            transition: "height 0.5s ease, opacity 0.5s ease",
            opacity: expanded ? 1 : 0,
          }}
        >
          <div ref={contentRef} className="text-gray-400 text-base space-y-4">
            {/* "Show Less" button at the top */}
            <div className="text-center mt-4">
              {expanded && (
                <Button
                  auto
                  light
                  className="text-blue-400 text-sm"
                  onClick={toggleExpanded}
                >
                  Show Less
                </Button>
              )}
            </div>
            {fullPost}
          </div>
        </div>

        {/* "Show Less" button at the bottom */}
        {expanded && (
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
        )}

        {/* Summary and Read More Button */}
        {!expanded && (
          <>
            <p className="text-gray-300 text-md text-center">{summary}</p>
            <div className="text-center mt-4 flex justify-center">
              <Button
                color="primary"
                onClick={toggleExpanded}
                className="inline-block bg-[#a855f7] text-white text-lg px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300 flex items-center justify-center"
              >
                Read More
              </Button>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
}
