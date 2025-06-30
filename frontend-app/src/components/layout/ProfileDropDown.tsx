import React, { useState, useRef, useEffect } from "react";
import {
  User,
  BarChart3,
  Home,
  List,
  CreditCard,
  UserCircle,
  Edit3,
  ShoppingBag,
  Heart,
  Users,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useUserStore } from "@/store/userStore";

// ✅ Define the menu item type
type MenuItem = {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  className?: string;
  badge?: string;
};

const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, logout } = useUserStore();
  console.log("user data in profile dropdown:", user);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems: MenuItem[] = [
    {
      icon: BarChart3,
      label: "Sales Dashboard",
      onClick: () => console.log("Sales Dashboard clicked"),
    },
    {
      icon: Home,
      label: "Dashboard",
      onClick: () => console.log("Dashboard clicked"),
    },
    {
      icon: List,
      label: "My Listing",
      onClick: () => console.log("My Listing clicked"),
    },
    {
      icon: CreditCard,
      label: "Payout Options",
      onClick: () => console.log("Payout Options clicked"),
    },
    {
      icon: UserCircle,
      label: "My Profile",
      onClick: () => console.log("My Profile clicked"),
    },
    {
      icon: Edit3,
      label: "Edit Profile",
      onClick: () => console.log("Edit Profile clicked"),
    },
    {
      icon: ShoppingBag,
      label: "My Purchases",
      onClick: () => console.log("My Purchases clicked"),
    },
    {
      icon: Heart,
      label: "My Favourites",
      onClick: () => console.log("My Favourites clicked"),
    },
    {
      icon: Users,
      label: "Be An Affiliate",
      onClick: () => console.log("Be An Affiliate clicked"),
      badge: "NEW",
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      onClick: () => console.log("Help & Support clicked"),
    },
    {
      icon: LogOut,
      label: "Logout",
      onClick: () => logout(),
      className: "text-red-400 hover:text-red-300",
    },
  ];

  const handleItemClick = (item: MenuItem) => {
    item.onClick();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105 border border-purple-500/30"
      >
        <User size={20} className="text-white" />
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-64 bg-slate-950 backdrop-blur-xl rounded-xl shadow-2xl border z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {user?.username}
                </p>
                <p className="text-purple-100 text-xs opacity-80">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800/60 transition-all duration-200 text-left group ${
                    item.className || "text-gray-200 hover:text-white"
                  }`}
                >
                  <IconComponent
                    size={18}
                    className="group-hover:text-purple-400 transition-colors"
                  />
                  <span className="text-sm font-medium flex-1">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-900/60 border-t border-gray-700/50">
            <p className="text-xs text-gray-400 text-center">
              FlipSter Gaming Platform
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
