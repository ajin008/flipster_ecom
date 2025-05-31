import React from "react";

export default function Footer() {
  return (
    <footer className=" text-text-primary border-t border-border mt-auto py-6">
      <div className="container mx-auto px-4 text-center text-sm text-text-primary ">
        <p>© {new Date().getFullYear()} GameHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
