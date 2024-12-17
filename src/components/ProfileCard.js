import { Image } from "@nextui-org/react";

export default function ProfileCard({ imageSrc, name }) {
  return (
    <div className="flex flex-col items-center">
      {/* <div className="w-72 h-72 rounded-full overflow-hidden">
        <Image
          alt="Profile picture"
          className="object-cover w-full h-full"
          src={imageSrc}
        />
      </div> */}
      <h2 className="text-4xl font-bold mt-6 text-gradient bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7e22ce] bg-clip-text text-transparent">{name}</h2>
    </div>
  );
}