"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample notification data - replace with your actual data
const notifications = [
  {
    id: 1,
    title: "New order received",
    message: "You have a new order from John Doe",
    time: "2 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Payment processed",
    message: "Payment of $25.00 has been processed successfully",
    time: "1 hour ago",
    isRead: true,
  },
  {
    id: 3,
    title: "Profile updated",
    message: "Your profile information has been updated",
    time: "3 hours ago",
    isRead: true,
  },
  {
    id: 4,
    title: "Welcome to zesTEX",
    message: "Thank you for joining our platform. Start exploring!",
    time: "1 day ago",
    isRead: true,
  },
];

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="h-8 w-8 p-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <h1 className="text-lg font-semibold">Notifications</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-4">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No notifications</h2>
            <p className="text-muted-foreground">
              You're all caught up! Check back later for updates.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border transition-colors ${
                  !notification.isRead
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="w-3 h-3 bg-primary rounded-full mt-1 ml-3 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {notification.time}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
