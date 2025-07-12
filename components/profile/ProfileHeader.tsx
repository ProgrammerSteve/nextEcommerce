import React from "react";
import type { ProfileHeaderProps } from "./types";
import ProfileAvatar from "./ProfileAvatar";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user,
  isEditing,
  onToggleEdit,
  onSignOut,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative">
        <div className="absolute -bottom-16 left-8">
          <ProfileAvatar name={user.name} image={user.image || undefined} />
        </div>
      </div>

      <div className="pt-20 pb-8 px-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Active
              </span>
              <span className="text-gray-500 text-sm">
                Member since {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onToggleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
            </button>

            <button
              onClick={onSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
