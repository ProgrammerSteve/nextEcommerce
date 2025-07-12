import React from "react";
import { getInitials } from "@/utils/getInitials";

type Props = {
  name?: string | null;
  image?: string | null;
};

const ProfileAvatar: React.FC<Props> = ({ name = "User", image }) => {
  return (
    <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={name || "Profile"}
          className="w-28 h-28 rounded-full object-cover"
        />
      ) : (
        <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {getInitials(name || "User")}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
