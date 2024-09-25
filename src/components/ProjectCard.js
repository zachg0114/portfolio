'use client'; // Ensure it's a client component

export default function ProjectCard({ title, description, tags, imageSrc }) {
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

        {/* Description */}
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#00ff99] text-black text-xs font-semibold px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
