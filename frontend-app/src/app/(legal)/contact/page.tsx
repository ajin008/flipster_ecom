"use client";

import React, { useState } from "react";
import {
  Search,
  MessageCircle,
  Shield,
  CreditCard,
  User,
  Settings,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Info,
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [selectedTicketType, setSelectedTicketType] = useState("general");

  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <User className="w-6 h-6" />,
      color: "text-gaming-purple",
      bgColor: "bg-gradient-purple",
    },
    {
      id: "buying-selling",
      title: "Buying & Selling",
      icon: <CreditCard className="w-6 h-6" />,
      color: "text-gaming-pink",
      bgColor: "bg-gradient-pink",
    },
    {
      id: "security",
      title: "Security & Safety",
      icon: <Shield className="w-6 h-6" />,
      color: "text-gaming-gold",
      bgColor: "bg-gradient-gold",
    },
    {
      id: "account",
      title: "Account Management",
      icon: <Settings className="w-6 h-6" />,
      color: "text-gaming-purpleLight",
      bgColor: "bg-gradient-button",
    },
  ];

  const faqs = {
    "getting-started": [
      {
        id: "what-is-flipster",
        question: "What is Flipster?",
        answer:
          "Flipster is the world's leading C2C marketplace for gaming accounts. We connect gamers who want to buy and sell gaming accounts across all major platforms including Steam, Epic Games, PlayStation, Xbox, and more. Our platform ensures secure transactions with advanced verification and escrow services.",
      },
      {
        id: "how-to-create-account",
        question: "How do I create an account on Flipster?",
        answer:
          'Creating an account is simple! Click "Sign Up" on our homepage, provide your email and create a secure password. You\'ll need to verify your email address and complete our quick identity verification process to start trading. The entire process takes less than 5 minutes.',
      },
      {
        id: "supported-platforms",
        question: "Which gaming platforms are supported?",
        answer:
          "We support all major gaming platforms including Steam, Epic Games Store, PlayStation Network, Xbox Live, Nintendo Switch, Riot Games (League of Legends, Valorant), Blizzard Battle.net, Origin/EA, Ubisoft Connect, and many more. New platforms are added regularly based on community demand.",
      },
      {
        id: "getting-verified",
        question: "How does account verification work?",
        answer:
          "Our verification process ensures account authenticity. For sellers, we verify account ownership through secure login credentials and check game progress, achievements, and purchase history. For buyers, we verify identity and payment methods. All sensitive data is encrypted and never stored permanently.",
      },
    ],
    "buying-selling": [
      {
        id: "how-to-buy",
        question: "How do I buy a gaming account?",
        answer:
          'Browse our marketplace using filters for games, platforms, ranks, or price range. When you find an account you like, click "Buy Now" and the funds will be held in escrow. Once the seller transfers the account details and we verify everything is correct, the account is yours!',
      },
      {
        id: "how-to-sell",
        question: "How do I sell my gaming account?",
        answer:
          'Click "Sell Account" and provide details about your account including platform, games, achievements, rank, and any special items. Upload screenshots, set your price, and our team will verify the account within 24 hours. Once approved, your listing goes live!',
      },
      {
        id: "pricing-guidelines",
        question: "How should I price my account?",
        answer:
          "Account value depends on factors like game progress, rare items, rank/level, time invested, and market demand. Use our pricing tool that analyzes similar accounts to get a suggested price range. Remember, competitive pricing leads to faster sales!",
      },
      {
        id: "payment-methods",
        question: "What payment methods are accepted?",
        answer:
          "We accept major credit/debit cards, PayPal, bank transfers, cryptocurrency (Bitcoin, Ethereum), and popular digital wallets. All payments are processed securely through our encrypted payment system with fraud protection.",
      },
    ],
    security: [
      {
        id: "transaction-security",
        question: "How secure are transactions on Flipster?",
        answer:
          "We use military-grade 256-bit SSL encryption and an advanced escrow system. Funds are held securely until both parties confirm the transaction is complete. Our fraud detection AI monitors all activities 24/7, and we have a 99.8% secure transaction rate.",
      },
      {
        id: "account-recovery",
        question: "What if someone tries to recover the account I bought?",
        answer:
          "All accounts sold on Flipster come with a 30-day guarantee. If the original owner attempts recovery, we'll investigate immediately. Verified sellers must provide proof of permanent ownership transfer. In rare cases of disputes, we offer full refunds or replacement accounts.",
      },
      {
        id: "personal-data",
        question: "How is my personal data protected?",
        answer:
          "We follow GDPR and international privacy standards. Your personal information is encrypted and never shared with third parties. Account credentials are temporarily encrypted during transfers and immediately deleted from our servers once transactions complete.",
      },
      {
        id: "report-suspicious",
        question: "How do I report suspicious activity?",
        answer:
          'Click the "Report" button on any suspicious listing or user profile. Our security team investigates all reports within 2 hours. You can also contact our 24/7 security hotline for urgent matters. We take community safety seriously and act quickly on all reports.',
      },
    ],
    account: [
      {
        id: "change-password",
        question: "How do I change my password?",
        answer:
          "Go to Settings > Security > Change Password. Enter your current password, then your new password twice. We recommend using a strong password with at least 8 characters, including numbers and special characters. Enable two-factor authentication for extra security.",
      },
      {
        id: "verification-levels",
        question: "What are the different verification levels?",
        answer:
          "Basic (email verified), Standard (phone + ID verified), and Premium (additional documentation). Higher verification levels unlock better features: increased transaction limits, priority support, lower fees, and access to high-value accounts. Premium users get VIP status.",
      },
      {
        id: "delete-account",
        question: "How do I delete my account?",
        answer:
          "We're sorry to see you go! Go to Settings > Account > Delete Account. You'll need to complete any pending transactions first. Account deletion is permanent and cannot be undone. We'll send a confirmation email with a 7-day cooling-off period.",
      },
      {
        id: "notification-settings",
        question: "How do I manage notifications?",
        answer:
          "Customize your notification preferences in Settings > Notifications. Choose which alerts you want via email, SMS, or push notifications: new messages, transaction updates, price drops on watchlisted accounts, security alerts, and community updates.",
      },
    ],
  };

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "Available 24/7",
      color: "text-gaming-purple",
      bgColor: "bg-gradient-purple",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Call us for urgent issues",
      icon: <Phone className="w-8 h-8" />,
      availability: "+91 9938494771",
      color: "text-gaming-pink",
      bgColor: "bg-gradient-pink",
      action: "Call Now",
    },
    {
      title: "Email Support",
      description: "Send us detailed questions",
      icon: <Mail className="w-8 h-8" />,
      availability: "Response within 4 hours",
      color: "text-gaming-gold",
      bgColor: "bg-gradient-gold",
      action: "Send Email",
    },
    {
      title: "Submit Ticket",
      description: "Create a support ticket",
      icon: <FileText className="w-8 h-8" />,
      availability: "Track your request",
      color: "text-gaming-purpleLight",
      bgColor: "bg-gradient-button",
      action: "Create Ticket",
    },
  ];

  const resources = [
    {
      title: "Video Tutorials",
      description: "Step-by-step guides for common tasks",
      icon: <Video className="w-6 h-6" />,
      count: "25+ videos",
      color: "text-gaming-purple",
    },
    {
      title: "User Guides",
      description: "Comprehensive documentation",
      icon: <BookOpen className="w-6 h-6" />,
      count: "50+ articles",
      color: "text-gaming-pink",
    },
    {
      title: "API Documentation",
      description: "For developers and integrations",
      icon: <FileText className="w-6 h-6" />,
      count: "Technical docs",
      color: "text-gaming-gold",
    },
  ];

  const ticketTypes = [
    { id: "general", label: "General Question" },
    { id: "technical", label: "Technical Issue" },
    { id: "billing", label: "Billing & Payments" },
    { id: "security", label: "Security Concern" },
    { id: "dispute", label: "Transaction Dispute" },
    { id: "feature", label: "Feature Request" },
  ];

  const filteredFaqs =
    faqs[activeCategory as keyof typeof faqs]?.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gaming-background text-gaming-textPrimary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gaming-textSecondary hover:text-gaming-purple transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-gaming-radial"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            <p className="text-xl text-gaming-textSecondary mb-8 max-w-2xl mx-auto">
              Find answers, get support, and learn how to make the most of
              Flipster
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gaming-textSecondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gaming-cardBg border border-gaming-purple/30 rounded-xl text-gaming-textPrimary placeholder-gaming-textSecondary focus:outline-none focus:border-gaming-purple focus:shadow-gaming-lg transition-all duration-300"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                {
                  label: "1000+ Articles",
                  icon: <BookOpen className="w-5 h-5" />,
                },
                { label: "24/7 Support", icon: <Clock className="w-5 h-5" /> },
                {
                  label: "99% Satisfaction",
                  icon: <CheckCircle className="w-5 h-5" />,
                },
                {
                  label: "<2min Response",
                  icon: <MessageCircle className="w-5 h-5" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gaming-cardBg/50 backdrop-blur-sm rounded-lg p-3 border border-gaming-purple/20 flex flex-col items-center"
                >
                  <div className="text-gaming-purple mb-1">{stat.icon}</div>
                  <div className="text-sm font-medium text-gaming-textSecondary text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-gaming-cardBg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Get <span className="text-gaming-purple">Instant Help</span>
            </h2>
            <p className="text-lg text-gaming-textSecondary">
              Choose the best way to reach our support team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="group">
                <div className="bg-gaming-cardBg rounded-2xl p-6 shadow-gaming-card hover:shadow-gaming-hover transition-all duration-500 hover:transform hover:scale-105 border border-gaming-purple/20 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 ${option.bgColor} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-gaming-sm group-hover:shadow-gaming-md transition-all duration-300`}
                  >
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gaming-textPrimary mb-2 text-center">
                    {option.title}
                  </h3>
                  <p className="text-gaming-textSecondary mb-3 text-sm text-center flex-grow">
                    {option.description}
                  </p>
                  <div className="text-gaming-textSecondary text-sm mb-4 text-center">
                    {option.availability}
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-button hover:bg-gradient-button-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    {option.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Frequently Asked{" "}
              <span className="text-gaming-pink">Questions</span>
            </h2>
            <p className="text-lg text-gaming-textSecondary">
              Find quick answers to common questions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gaming-cardBg rounded-2xl p-6 shadow-gaming-card border border-gaming-purple/20 sticky top-4">
                <h3 className="text-xl font-bold text-gaming-textPrimary mb-4">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-gradient-button text-white shadow-gaming-sm"
                          : "text-gaming-textSecondary hover:text-gaming-textPrimary hover:bg-gaming-purple/10"
                      }`}
                    >
                      <div
                        className={
                          activeCategory === category.id
                            ? "text-white"
                            : category.color
                        }
                      >
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:w-2/3">
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-gaming-cardBg rounded-2xl shadow-gaming-card border border-gaming-purple/20 overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                        }
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gaming-purple/5 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-gaming-textPrimary pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gaming-purple transition-transform duration-300 ${
                            expandedFaq === faq.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-6 border-t border-gaming-purple/20">
                          <div className="pt-4 text-gaming-textSecondary leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-gaming-textSecondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gaming-textPrimary mb-2">
                      No results found
                    </h3>
                    <p className="text-gaming-textSecondary">
                      Try searching with different keywords or browse categories
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gaming-cardBg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Learning <span className="text-gaming-gold">Resources</span>
            </h2>
            <p className="text-lg text-gaming-textSecondary">
              Explore our comprehensive guides and tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="group">
                <div className="bg-gaming-cardBg rounded-2xl p-6 shadow-gaming-card hover:shadow-gaming-hover transition-all duration-500 hover:transform hover:scale-105 border border-gaming-purple/20 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 bg-gaming-cardBg rounded-xl flex items-center justify-center ${resource.color} mb-4 shadow-gaming-sm`}
                  >
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gaming-textPrimary mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gaming-textSecondary mb-4 flex-grow">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gaming-textSecondary">
                      {resource.count}
                    </span>
                    <button className="flex items-center gap-2 text-gaming-purple hover:text-gaming-pink transition-colors duration-300">
                      <span className="font-semibold">Explore</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Still Need <span className="text-gaming-pink">Help?</span>
            </h2>
            <p className="text-lg text-gaming-textSecondary">
              Submit a support ticket and we'll get back to you within 4 hours
            </p>
          </div>

          <div className="bg-gaming-cardBg rounded-2xl p-8 shadow-gaming-card border border-gaming-purple/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gaming-textPrimary font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gaming-background border border-gaming-purple/30 rounded-xl text-gaming-textPrimary focus:outline-none focus:border-gaming-purple focus:shadow-gaming-sm transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gaming-textPrimary font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gaming-background border border-gaming-purple/30 rounded-xl text-gaming-textPrimary focus:outline-none focus:border-gaming-purple focus:shadow-gaming-sm transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gaming-textPrimary font-semibold mb-2">
                  Ticket Type
                </label>
                <select
                  value={selectedTicketType}
                  onChange={(e) => setSelectedTicketType(e.target.value)}
                  className="w-full px-4 py-3 bg-gaming-background border border-gaming-purple/30 rounded-xl text-gaming-textPrimary focus:outline-none focus:border-gaming-purple focus:shadow-gaming-sm transition-all duration-300"
                >
                  {ticketTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gaming-textPrimary font-semibold mb-2">
                  Subject
                  <span className="text-gaming-textSecondary text-sm font-normal ml-1">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gaming-background border border-gaming-purple/30 rounded-xl text-gaming-textPrimary focus:outline-none focus:border-gaming-purple focus:shadow-gaming-sm transition-all duration-300"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-gaming-textPrimary font-semibold mb-2">
                  Description
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gaming-background border border-gaming-purple/30 rounded-xl text-gaming-textPrimary focus:outline-none focus:border-gaming-purple focus:shadow-gaming-sm transition-all duration-300 resize-none"
                  placeholder="Please provide detailed information about your issue..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gaming-purple/10 rounded-xl border border-gaming-purple/20">
                <Info className="w-5 h-5 text-gaming-purple flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gaming-textSecondary">
                  For security issues or urgent matters, please call our support
                  line at <span className="font-semibold">+91 9938494771</span>
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-button hover:bg-gradient-button-hover text-white font-bold rounded-xl shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 transform hover:scale-105"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
