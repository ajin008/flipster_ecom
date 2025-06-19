"use client"; // Add this if using App Router

import React, { useState } from "react";
import {
  FiArrowLeft,
  FiShield,
  FiDatabase,
  FiEye,
  FiUsers,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { useRouter } from "next/navigation"; // App Router
// import { useRouter } from 'next/router'; // Pages Router

export default function PrivacyPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: FiShield },
    { id: "collection", title: "Data Collection", icon: FiDatabase },
    { id: "usage", title: "How We Use Data", icon: FiEye },
    { id: "sharing", title: "Data Sharing", icon: FiUsers },
    { id: "security", title: "Security & Storage", icon: FiLock },
    { id: "rights", title: "Your Rights", icon: FiMail },
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
                Privacy Policy
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
                  Privacy Overview
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <p>
                    At zesTEX, we take your privacy seriously. This Privacy
                    Policy explains how we collect, use, and protect your
                    personal information when you use our gaming account
                    marketplace.
                  </p>
                  <div className="bg-gaming-purple/10 border border-gaming-purple/20 rounded-lg p-4">
                    <p className="text-gaming-textPrimary font-medium">
                      Key Principles:
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• We only collect data necessary for our services</li>
                      <li>• Your data is never sold to third parties</li>
                      <li>• You have full control over your information</li>
                      <li>• We use industry-standard security measures</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Collection Section */}
              <section id="collection" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiDatabase className="w-6 h-6 text-gaming-purple" />
                  Data We Collect
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <h3 className="text-xl font-semibold text-gaming-textPrimary">
                    Personal Information
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Name, email address, phone number</li>
                    <li>• Identity verification documents (when required)</li>
                    <li>
                      • Payment information (processed by secure third parties)
                    </li>
                    <li>• Profile information and preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Transaction Data
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Purchase and sale history</li>
                    <li>• Communication records with other users</li>
                    <li>• Dispute and support ticket information</li>
                    <li>• Gaming account details for listings</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Technical Data
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Usage analytics and platform interactions</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              {/* Data Usage Section */}
              <section id="usage" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiEye className="w-6 h-6 text-gaming-purple" />
                  How We Use Your Data
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gaming-purple/10 border border-gaming-purple/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gaming-textPrimary mb-2">
                        Essential Services
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Account creation and management</li>
                        <li>• Transaction processing</li>
                        <li>• Identity verification</li>
                        <li>• Customer support</li>
                      </ul>
                    </div>
                    <div className="bg-gaming-pink/10 border border-gaming-pink/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gaming-textPrimary mb-2">
                        Platform Improvement
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Analytics and usage patterns</li>
                        <li>• Security and fraud prevention</li>
                        <li>• Feature development</li>
                        <li>• Personalized recommendations</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Communication
                  </h3>
                  <p>
                    We use your contact information to send transaction
                    notifications, security alerts, platform updates, and
                    promotional materials (with your consent).
                  </p>
                </div>
              </section>

              {/* Data Sharing Section */}
              <section id="sharing" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiUsers className="w-6 h-6 text-gaming-purple" />
                  Data Sharing & Disclosure
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-400 font-medium mb-2">
                      We DO Share Data With:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Payment processors (for transaction handling)</li>
                      <li>• Identity verification services (for KYC/AML)</li>
                      <li>
                        • Cloud service providers (for hosting and storage)
                      </li>
                      <li>
                        • Analytics providers (aggregated, non-personal data)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 font-medium mb-2">
                      We DO NOT Share Data With:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Advertisers or marketing companies</li>
                      <li>• Data brokers or resellers</li>
                      <li>• Social media platforms</li>
                      <li>• Unauthorized third parties</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Legal Disclosure
                  </h3>
                  <p>
                    We may disclose personal information when required by law,
                    court order, or to protect our rights, users, or the public
                    from harm or illegal activities.
                  </p>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiLock className="w-6 h-6 text-gaming-purple" />
                  Security & Data Storage
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <h3 className="text-xl font-semibold text-gaming-textPrimary">
                    Security Measures
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li>• End-to-end encryption for sensitive data</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication for user accounts</li>
                    <li>• Secure data centers with 24/7 monitoring</li>
                    <li>• Employee background checks and training</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gaming-textPrimary mt-6">
                    Data Retention
                  </h3>
                  <p>
                    We retain personal data only as long as necessary for the
                    purposes outlined in this policy:
                  </p>
                  <ul className="space-y-2 ml-4 mt-2">
                    <li>• Account data: Until account deletion + 30 days</li>
                    <li>
                      • Transaction records: 7 years (for legal compliance)
                    </li>
                    <li>• Support communications: 3 years</li>
                    <li>
                      • Analytics data: 2 years (aggregated, non-personal)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Rights Section */}
              <section id="rights" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gaming-textPrimary mb-4 flex items-center gap-3">
                  <FiMail className="w-6 h-6 text-gaming-purple" />
                  Your Privacy Rights
                </h2>
                <div className="space-y-4 text-gaming-textSecondary">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-gaming-gold/10 border border-gaming-gold/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gaming-textPrimary mb-2">
                          Access & Control
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• View all data we have about you</li>
                          <li>• Update or correct your information</li>
                          <li>• Download your data</li>
                          <li>• Delete your account</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gaming-purple/10 border border-gaming-purple/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gaming-textPrimary mb-2">
                          Preferences
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Opt-out of marketing emails</li>
                          <li>• Manage cookie preferences</li>
                          <li>• Control data processing</li>
                          <li>• Request data portability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gaming-pink/10 border border-gaming-pink/20 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-gaming-textPrimary mb-2">
                      Contact Us
                    </h4>
                    <p className="text-sm">
                      For privacy-related questions or to exercise your rights:
                      <br />
                      <strong>Email:</strong> privacy@zestex.com
                      <br />
                      <strong>Phone:</strong> +1-800-ZESTEX
                      <br />
                      <strong>Address:</strong> 123 Gaming Street, Digital City,
                      DC 12345
                    </p>
                  </div>

                  <p className="text-sm text-gaming-textMuted">
                    We will respond to your privacy requests within 30 days.
                    Some requests may require identity verification to protect
                    your account security.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
