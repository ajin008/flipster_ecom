"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ZesTEXLogo from "./ZesTEXLogo";
import { useRouter } from "next/navigation";
import { Bell } from "react-feather";
import NotificationsModal from "./NotificationsModal";
import { useUserStore } from "@/store/userStore";
import ProfileDropDown from "./ProfileDropDown";
import { getMe } from "@/api/api";

export default function Header() {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const router = useRouter();

  const { setUser } = useUserStore();

  useEffect(() => {
    console.log("Fetching user Data...");
    const fetchUser = async () => {
      try {
        const res = await getMe();
        console.log("✅ API response:", res);
        if (res.status === 200 || res.status === 201) {
          const data = await res.data.user.user;
          setUser(data);
        }
        if (res.data.user === null) {
          console.log("User not logged in.");
        } else {
          setUser(res.data.user);
        }
      } catch (error) {
        console.log("error in fetching user data", error);
      }
    };
    fetchUser();
  }, [setUser]);

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

  return (
    <>
      <header className="px-4 py-2">
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
                <ProfileDropDown />
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:hidden">
                <Button onClick={() => router.push("/login")}>GET IN</Button>
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
              <ProfileDropDown />
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
              <Button onClick={() => router.push("/login")}>GET IN</Button>
            </div>
          )}
        </div>
      </header>
      <NotificationsModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
      />
    </>
  );
}
