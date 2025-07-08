import type { User } from "next-auth";

export type EditableUserInfo = {
  name: string;
  email: string;
};

export type ProfileHeaderProps = {
  user: User;
  isEditing: boolean;
  onToggleEdit: () => void;
  onSignOut: () => void;
};

export type PersonalInfoCardProps = {
  isEditing: boolean;
  userInfo: EditableUserInfo;
  setUserInfo: (info: EditableUserInfo) => void;
  onSave: () => void;
};

export type AccountStatsCardProps = {
  orders?: number;
  wishlist?: number;
  reviews?: number;
};

export type QuickActionsCardProps = {
  onViewOrders?: () => void;
  onViewWishlist?: () => void;
  onOpenSettings?: () => void;
};
