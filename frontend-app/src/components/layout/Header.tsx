"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ZesTEXLogo from "./ZesTEXLogo";
import { useRouter } from "next/navigation";
import { Bell } from "react-feather";
import NotificationsModal from "./NotificationsModal";
import { useUserStore } from "@/store/userStore";
import ProfileDropDown from "./ProfileDropDown";
import GoogleSignupModal from "../shared/GoogleOnlyAuthenticationModal";
import { signInwithOauth } from "../../../services/signInWithOAuth";
import { SellBtn } from "../shared/SellBtn";

export default function Header() {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const { user } = useUserStore();

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

  const handleGetInBtn = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className="px-4 py-2 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Top section: Logo + mobile buttons */}
          <div className="w-full sm:w-auto flex items-center justify-between">
            <ZesTEXLogo />
            {/* Mobile buttons grouped together */}

            {user ? (
              <div className="sm:hidden flex items-center gap-2">
                {" "}
                {/* Hide on desktop */}
                <Button
                  onClick={handleNotificationClick}
                  className="bg-transparent hover:bg-transparent cursor-pointer p-2"
                >
                  <Bell size={20} />
                </Button>
                <SellBtn />
                <ProfileDropDown />
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:hidden">
                <Button onClick={handleGetInBtn}>GET IN</Button>
              </div>
            )}
          </div>

          {/* Desktop buttons */}
          {user ? (
            <div className="hidden sm:flex items-center gap-2">
              {" "}
              {/* Hide on mobile */}
              <Button
                onClick={handleNotificationClick}
                className="bg-transparent hover:bg-transparent cursor-pointer"
              >
                <Bell size={28} />
              </Button>
              <SellBtn />
              <ProfileDropDown />
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
              <Button onClick={handleGetInBtn}>GET IN</Button>
            </div>
          )}
        </div>
      </header>
      <NotificationsModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
      />
      <GoogleSignupModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onGoogleSignup={() => signInwithOauth()}
      />
    </>
  );
}
