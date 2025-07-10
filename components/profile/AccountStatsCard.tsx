import React from "react";
import type { AccountStatsCardProps } from "./types";

const AccountStatsCard: React.FC<AccountStatsCardProps> = ({
  orders = 12,
  wishlist = 5,
  reviews = 8,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Stats</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Orders</span>
          <span className="font-semibold text-gray-900">{orders}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Wishlist Items</span>
          <span className="font-semibold text-gray-900">{wishlist}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Reviews</span>
          <span className="font-semibold text-gray-900">{reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountStatsCard;
