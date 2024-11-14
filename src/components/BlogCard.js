// components/BlogCard.js
import { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

export default function BlogCard({ title, summary, fullPost }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-[#1a1c2a] p-6 rounded-lg shadow-md">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </CardHeader>
      <CardBody>
        {expanded ? (
          <div className="text-gray-400 text-base space-y-4">
            {fullPost}
          </div>
        ) : (
          <p className="text-gray-300 font-semibold">{summary}</p>
        )}
      </CardBody>
      <div className="text-center mt-4">
        <Button
          color="primary"
          onClick={toggleExpanded}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </div>
    </Card>
  );
}
