"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
];

export default function NotificationsModal({
  isOpen,
  onClose,
}: NotificationsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-hidden flex flex-col fixed right-4 top-16 translate-x-0 translate-y-0 sm:right-6 sm:top-20">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-semibold">
            Notifications
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-2">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No notifications yet
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg border transition-colors hover:bg-muted/50 ${
                  !notification.isRead
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="w-2 h-2 bg-primary rounded-full mt-1 ml-2 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {notification.time}
                </p>
              </div>
            ))
          )}
        </div>

        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full" onClick={onClose}>
            View All Notifications
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
