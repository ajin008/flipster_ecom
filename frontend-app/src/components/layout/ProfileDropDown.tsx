import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  User,
  BarChart3,
  Home,
  List,
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
  onClick?: () => void;
  href?: string;
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
      href: "/sales-dashboard",
    },
    {
      icon: Home,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: List,
      label: "My Listing",
      href: "/Mylisting",
    },
    {
      icon: UserCircle,
      label: "My Profile",
      href: "/profile",
    },
    {
      icon: Edit3,
      label: "Edit Profile",
      href: "/profile/edit",
    },
    {
      icon: ShoppingBag,
      label: "My Purchases",
      href: "/purchases",
    },
    {
      icon: Heart,
      label: "My Favourites",
      href: "/favourites",
    },
    {
      icon: Users,
      label: "Be An Affiliate",
      href: "/affiliate",
      badge: "NEW",
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      href: "/support",
    },
    {
      icon: LogOut,
      label: "Logout",
      onClick: () => logout(),
      className: "text-red-400 hover:text-red-300",
    },
  ];

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    const IconComponent = item.icon;
    const baseClasses = `w-full px-6 py-5 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 hover:bg-gray-800/60 transition-all duration-200 text-left group ${
      item.className || "text-gray-200 hover:text-white"
    }`;

    const content = (
      <>
        <IconComponent
          size={18}
          className="group-hover:text-purple-400 transition-colors md:w-5 md:h-5"
        />
        <span className="text-sm md:text-base font-medium flex-1">
          {item.label}
        </span>
        {item.badge && (
          <span className="px-2 py-1 text-sm font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full">
            {item.badge}
          </span>
        )}
      </>
    );

    if (item.href) {
      return (
        <Link
          key={index}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={baseClasses}
        >
          {content}
        </Link>
      );
    } else {
      return (
        <button
          key={index}
          onClick={() => handleItemClick(item)}
          className={baseClasses}
        >
          {content}
        </button>
      );
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105 border border-purple-500/30"
      >
        <User size={24} className="text-white" />
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-14 md:top-12 right-0 w-80 sm:w-96 md:w-80 bg-slate-950 backdrop-blur-xl rounded-xl shadow-2xl border z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User size={16} className="text-white md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm md:text-base">
                  {user?.username}
                </p>
                <p className="text-purple-100 text-xs md:text-sm opacity-80">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">{menuItems.map(renderMenuItem)}</div>

          {/* Footer */}
          <div className="px-3 py-1 md:px-6 md:py-4 bg-gray-900/60 border-t border-gray-700/50">
            <p className="text-xs md:text-sm text-gray-400 text-center">
              FlipSter Gaming Platform
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
