import React from "react";
import type { PersonalInfoCardProps } from "./types";

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  isEditing,
  userInfo,
  setUserInfo,
  onSave,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        {isEditing && (
          <button
            onClick={onSave}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Save Changes
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{userInfo.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          {isEditing ? (
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{userInfo.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
          <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">Premium Member</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
