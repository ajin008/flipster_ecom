"use client";

import React, { useState } from "react";
import {
  FiArrowLeft,
  FiShield,
  FiUsers,
  FiDollarSign,
  FiAlertTriangle,
  FiLock,
} from "react-icons/fi";
import { useRouter } from "next/navigation"; // App Router
// import { useRouter } from 'next/router'; // Pages Router

export default function TermsPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: FiShield },
    { id: "accounts", title: "Account Rules", icon: FiUsers },
    { id: "transactions", title: "Transactions", icon: FiDollarSign },
    { id: "prohibited", title: "Prohibited Activities", icon: FiAlertTriangle },
    { id: "liability", title: "Liability & Disputes", icon: FiLock },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // Fallback to home page
    }
  };

  return (
    <div className="min-h-screen bg-gaming-background text-gaming-textPrimary">
      {/* Header */}
      <div className="bg-gaming-cardBg border-b border-gaming-purple/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="p-2 rounded-lg bg-gaming-purple/20 hover:bg-gaming-purple/30 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gaming-textSecondary mt-2">
                zesTEX - Last updated: June 20, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gaming-cardBg rounded-xl p-6 border border-gaming-purple/20">
              <h3 className="font-semibold text-gaming-textPrimary mb-4">
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-gaming-purple text-white"
                          : "text-gaming-textSecondary hover:text-gaming-textPrimary hover:bg-gaming-purple/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gaming-cardBg rounded-xl p-8 border border-gaming-purple/20 space-y-8">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiShield className="w-6 h-6 text-gaming-purple" />
                  Overview
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <p>
                    Welcome to zesTEX, a peer-to-peer marketplace for buying and
                    selling gaming accounts. By using our platform, you agree to
                    these Terms of Service ("Terms").
                  </p>
                  <p>
                    Our platform facilitates transactions between users for
                    gaming accounts across various platforms including but not
                    limited to Steam, Epic Games, PlayStation, Xbox, Mobile
                    Games, and other gaming services.
                  </p>
                  <div className="bg-gaming-purple/10 border border-gaming-purple/20 rounded-lg p-4">
                    <p className="text-gaming-textPrimary font-medium">
                      Important Notice:
                    </p>
                    <p className="text-sm mt-2">
                      zesTEX acts as an intermediary platform. We do not own or
                      control the gaming accounts being traded. Users are
                      responsible for ensuring compliance with individual game
                      publishers' terms of service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Account Rules Section */}
              <section id="accounts" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiUsers className="w-6 h-6 text-gaming-purple" />
                  Account Rules & Responsibilities
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <h3 className="text-xl font-semibold text-gaming-textPrimary">
                    User Accounts
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Users must be 18+ or have parental consent</li>
                    <li>
                      • One account per person, verified identity required
                    </li>
                    <li>
                      • Accurate information must be provided during
                      registration
                    </li>
                    <li>
                      • Users are responsible for account security and all
                      activities
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Gaming Account Listings
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Sellers must own the gaming accounts they list</li>
                    <li>
                      • All account information must be accurate and complete
                    </li>
                    <li>
                      • Screenshots and proof of ownership may be required
                    </li>
                    <li>
                      • Accounts must be accessible and functional at time of
                      sale
                    </li>
                  </ul>
                </div>
              </section>

              {/* Transactions Section */}
              <section id="transactions" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiDollarSign className="w-6 h-6 text-gaming-purple" />
                  Transactions & Payments
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <h3 className="text-xl font-semibold text-gaming-textPrimary">
                    Payment Processing
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • All payments are processed through secure third-party
                      providers
                    </li>
                    <li>
                      • Funds are held in escrow until transaction completion
                    </li>
                    <li>
                      • Service fees apply to all transactions (disclosed at
                      checkout)
                    </li>
                    <li>
                      • Refunds processed according to our dispute resolution
                      policy
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Transaction Process
                  </h3>
                  <ol className="space-y-2 ml-4">
                    <li>
                      1. Buyer initiates purchase and payment goes to escrow
                    </li>
                    <li>2. Seller provides account credentials securely</li>
                    <li>3. Buyer has 24-48 hours to verify account access</li>
                    <li>4. Upon confirmation, payment is released to seller</li>
                    <li>5. Disputes handled through our resolution system</li>
                  </ol>
                </div>
              </section>

              {/* Prohibited Activities Section */}
              <section id="prohibited" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiAlertTriangle className="w-6 h-6 text-gaming-purple" />
                  Prohibited Activities
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 font-medium mb-2">
                      Strictly Prohibited:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Selling stolen, hacked, or compromised accounts</li>
                      <li>• Fraudulent transactions or chargebacks</li>
                      <li>• Misrepresenting account details or ownership</li>
                      <li>
                        • Selling accounts with pending bans or violations
                      </li>
                      <li>
                        • Money laundering or illegal financial activities
                      </li>
                      <li>• Harassment, threats, or abusive behavior</li>
                      <li>• Attempting to circumvent platform fees</li>
                    </ul>
                  </div>

                  <p className="text-sm">
                    <strong>Consequences:</strong> Violation of these terms may
                    result in account suspension, permanent ban, forfeiture of
                    funds, and potential legal action.
                  </p>
                </div>
              </section>

              {/* Liability Section */}
              <section id="liability" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiLock className="w-6 h-6 text-gaming-purple" />
                  Liability & Dispute Resolution
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <h3 className="text-xl font-semibold text-gaming-textPrimary">
                    Platform Limitations
                  </h3>
                  <p>
                    zesTEX provides the platform but does not guarantee the
                    quality, legality, or functionality of gaming accounts.
                    Users transact at their own risk.
                  </p>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Dispute Resolution
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Report disputes within 48 hours of transaction</li>
                    <li>• Provide evidence and documentation</li>
                    <li>• Mediation attempted before refund processing</li>
                    <li>• Final decisions made by zesTEX support team</li>
                  </ul>

                  <div className="bg-gaming-gold/10 border border-gaming-gold/20 rounded-lg p-4 mt-6">
                    <p className="text-gaming-gold font-medium">
                      Contact Information:
                    </p>
                    <p className="text-sm mt-2">
                      For legal matters: legal@zestex.com
                      <br />
                      For disputes: disputes@zestex.com
                      <br />
                      For general support: support@zestex.com
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
