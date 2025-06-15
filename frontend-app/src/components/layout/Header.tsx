"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ZesTEXLogo from "./ZesTEXLogo";
import { useRouter } from "next/navigation";
import { Bell } from "react-feather";
import NotificationsModal from "./NotificationsModal";

export default function Header() {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNotificationClick = () => {
    if (isLargeScreen) {
      // Large screen: open modal
      setIsNotificationModalOpen(true);
    } else {
      // Small screen: navigate to notifications page
      router.push("/NotificationsPage");
    }
  };

  return (
    <>
      <header className="px-4 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Top section: Logo + mobile buttons */}
          <div className="w-full sm:w-auto flex items-center justify-between">
            <ZesTEXLogo />
            {/* Mobile buttons grouped together */}

            <div className="flex items-center gap-2 sm:hidden">
              <Button
                onClick={handleNotificationClick}
                className="bg-transparent hover:bg-transparent cursor-pointer"
              >
                <Bell />
              </Button>
              <Button onClick={() => router.push("/login")}>GET IN</Button>
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
            {/* <Button className="bg-amber-400">start selling</Button> */}
            <Button
              onClick={handleNotificationClick}
              className="bg-transparent hover:bg-transparent cursor-pointer"
            >
              <Bell size={28} />
            </Button>
            <Button onClick={() => router.push("/login")}>GET IN</Button>
          </div>
        </div>
      </header>
      <NotificationsModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
      />
    </>
  );
}
