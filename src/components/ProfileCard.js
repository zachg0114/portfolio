// components/profileCard.js
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function ProfileCard({ imageSrc, name }) {
  return (
    <Card className="w-full max-w-sm mx-auto bg-[#1a1b2a] text-white rounded-xl shadow-lg flex flex-col items-center">
      <CardBody className="flex justify-center items-center pt-6">
        <Image
          alt="Profile picture"
          className="object-cover rounded-full"
          src={imageSrc}
          width={200}
          height={200}
        />
      </CardBody>
      <CardHeader className="text-center pb-6 px-4 flex-col items-center">
        <h2 className="text-2xl font-bold mt-4">{name}</h2>
      </CardHeader>
    </Card>
  );
}
