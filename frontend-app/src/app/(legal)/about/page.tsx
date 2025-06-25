"use client";

import React, { useState } from "react";
import {
  Shield,
  Users,
  Zap,
  Globe,
  Trophy,
  MapPin,
  Phone,
  Globe2,
  Target,
  Eye,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500K+",
      label: "Active Users",
      color: "text-gaming-purple",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "2M+",
      label: "Accounts Traded",
      color: "text-gaming-pink",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: "99.8%",
      label: "Secure Transactions",
      color: "text-gaming-gold",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "150+",
      label: "Countries Served",
      color: "text-gaming-purpleLight",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Transactions",
      description:
        "Military-grade encryption and escrow services ensure every transaction is safe and secure.",
      gradient: "bg-gradient-purple",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description:
        "Instant account verification and rapid transaction processing for seamless gaming experience.",
      gradient: "bg-gradient-pink",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Driven",
      description:
        "Built by gamers, for gamers. Our platform thrives on community feedback and engagement.",
      gradient: "bg-gradient-gold",
    },
    {
      icon: <Globe2 className="w-12 h-12" />,
      title: "Global Marketplace",
      description:
        "Connect with gamers worldwide and access accounts from every major gaming platform.",
      gradient: "bg-gradient-hero",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      image: "👨‍💼",
      description:
        "Former gaming industry veteran with 10+ years at major studios.",
      specialty: "Strategy & Vision",
    },
    {
      name: "Sarah Kumar",
      role: "CTO & Co-Founder",
      image: "👩‍💻",
      description:
        "Full-stack engineer passionate about blockchain and gaming tech.",
      specialty: "Technology & Innovation",
    },
    {
      name: "Marcus Williams",
      role: "Head of Security",
      image: "🛡️",
      description:
        "Cybersecurity expert ensuring platform safety and user protection.",
      specialty: "Security & Compliance",
    },
    {
      name: "Luna Rodriguez",
      role: "Head of Design",
      image: "🎨",
      description:
        "UX/UI designer creating intuitive experiences for gaming communities.",
      specialty: "Design & User Experience",
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Founded by passionate gamers who saw the need for a secure gaming marketplace.",
      icon: "🚀",
    },
    {
      year: "2023",
      title: "Platform Launch",
      description:
        "Launched Flipster with support for major gaming platforms and instant verification.",
      icon: "🎮",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Expanded to 150+ countries with multi-language support and local payment methods.",
      icon: "🌍",
    },
    {
      year: "2025",
      title: "Innovation Continues",
      description:
        "Introducing AI-powered fraud detection and enhanced security features.",
      icon: "🤖",
    },
  ];

  const tabs = [
    {
      id: "mission",
      label: "Our Mission",
      icon: <Target className="w-5 h-5" />,
    },
    { id: "vision", label: "Our Vision", icon: <Eye className="w-5 h-5" /> },
    { id: "values", label: "Our Values", icon: <Heart className="w-5 h-5" /> },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gaming-background text-gaming-textPrimary">
      {/* Hero Section */}

      <section className="relative overflow-hidden">
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gaming-textSecondary hover:text-gaming-purple transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-gaming-radial"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient-shift bg-300% bg-gradient-to-r">
                About Flipster
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gaming-textSecondary mb-12 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing the gaming marketplace, connecting millions
              of gamers worldwide through secure, fast, and reliable account
              trading. Built by gamers, for gamers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-button hover:bg-gradient-button-hover text-white font-bold rounded-xl shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 transform hover:scale-105">
                Start Trading Now
              </button>
              <button className="px-8 py-4 border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white font-bold rounded-xl transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gaming-cardBg rounded-2xl mb-4 ${stat.color} group-hover:scale-110 transition-all duration-300 shadow-gaming-sm group-hover:shadow-gaming-md`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-gaming-textPrimary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gaming-textSecondary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gaming-cardBg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Our <span className="text-gaming-purple">Purpose</span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-button text-white shadow-gaming-lg"
                    : "bg-gaming-cardBg text-gaming-textSecondary hover:text-gaming-textPrimary hover:bg-gaming-purple/20"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gaming-cardBg rounded-2xl p-8 md:p-12 shadow-gaming-card border border-gaming-purple/20">
            {activeTab === "mission" && (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-gaming-textPrimary">
                  Our Mission
                </h3>
                <p className="text-xl text-gaming-textSecondary leading-relaxed max-w-3xl mx-auto">
                  To create the world's most trusted and secure gaming
                  marketplace where gamers can safely buy, sell, and trade their
                  gaming accounts with confidence. We bridge the gap between
                  gaming communities and commerce, making valuable gaming assets
                  accessible to everyone.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-pink rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-gaming-textPrimary">
                  Our Vision
                </h3>
                <p className="text-xl text-gaming-textSecondary leading-relaxed max-w-3xl mx-auto">
                  To become the global standard for gaming commerce, where every
                  gamer can unlock the full potential of their gaming
                  investments. We envision a future where gaming achievements
                  have real-world value and can be traded seamlessly across
                  platforms and communities.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-gaming-textPrimary">
                  Our Values
                </h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      title: "Trust & Security",
                      desc: "Every transaction is protected by cutting-edge security measures.",
                    },
                    {
                      title: "Community First",
                      desc: "We prioritize the gaming community and listen to their needs.",
                    },
                    {
                      title: "Innovation",
                      desc: "Constantly evolving to provide the best trading experience.",
                    },
                    {
                      title: "Transparency",
                      desc: "Open and honest communication in all our dealings.",
                    },
                  ].map((value, index) => (
                    <div key={index} className="text-left">
                      <h4 className="text-lg font-bold text-gaming-textPrimary mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gaming-textSecondary">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Why Choose <span className="text-gaming-pink">Flipster?</span>
            </h2>
            <p className="text-xl text-gaming-textSecondary max-w-3xl mx-auto">
              We've built the most advanced gaming marketplace with features
              that put security, speed, and community first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gaming-cardBg rounded-2xl p-8 shadow-gaming-card hover:shadow-gaming-hover transition-all duration-500 hover:transform hover:scale-105 border border-gaming-purple/20 h-full">
                  <div
                    className={`w-20 h-20 ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-gaming-sm group-hover:shadow-gaming-md transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gaming-textPrimary">
                    {feature.title}
                  </h3>
                  <p className="text-gaming-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gaming-cardBg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Our <span className="text-gaming-purple">Journey</span>
            </h2>
            <p className="text-xl text-gaming-textSecondary">
              From a simple idea to a global gaming marketplace
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-hero h-full rounded-full hidden md:block"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <div className="bg-gaming-cardBg rounded-2xl p-6 shadow-gaming-card border border-gaming-purple/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <div className="text-2xl font-bold text-gaming-gold">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gaming-textPrimary">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gaming-textSecondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gradient-button rounded-full shadow-gaming-lg border-4 border-gaming-background"></div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Meet Our <span className="text-gaming-pink">Team</span>
            </h2>
            <p className="text-xl text-gaming-textSecondary">
              Passionate gamers and tech experts working together to build the
              future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gaming-cardBg rounded-2xl p-6 shadow-gaming-card hover:shadow-gaming-hover transition-all duration-500 hover:transform hover:scale-105 border border-gaming-purple/20 text-center">
                  <div className="w-20 h-20 bg-gradient-button rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-gaming-sm group-hover:shadow-gaming-md transition-all duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gaming-textPrimary mb-2">
                    {member.name}
                  </h3>
                  <div className="text-gaming-purple font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gaming-textSecondary text-sm mb-3 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="text-gaming-gold text-sm font-medium">
                    {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Get in <span className="text-gaming-pink">Touch</span>
            </h2>
            <p className="text-xl text-gaming-textSecondary mb-8">
              Ready to join the gaming revolution? Connect with us today.
            </p>
          </div>

          <div className="bg-gaming-cardBg rounded-2xl p-8 shadow-gaming-card border border-gaming-purple/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gaming-textPrimary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center text-white shadow-gaming-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gaming-textPrimary">
                        Address
                      </div>
                      <div className="text-gaming-textSecondary">
                        No.77, 8th cross, Subramanya Pura Main Road,
                        <br />
                        BSK 2nd stage, BANGALORE-560070
                        <br />
                        Karnataka, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-pink rounded-xl flex items-center justify-center text-white shadow-gaming-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gaming-textPrimary">
                        Phone
                      </div>
                      <div className="text-gaming-textSecondary">
                        +91 9938494771
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center text-white shadow-gaming-sm">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gaming-textPrimary">
                        Website
                      </div>
                      <div className="text-gaming-textSecondary">
                        www.flipster.store.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gaming-textPrimary mb-6">
                  Join Our Community
                </h3>
                <p className="text-gaming-textSecondary mb-6 leading-relaxed">
                  Be part of the fastest-growing gaming marketplace community.
                  Connect with fellow gamers, get updates on new features, and
                  discover amazing trading opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-gradient-button hover:bg-gradient-button-hover text-white font-bold rounded-xl shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 transform hover:scale-105">
                    Visit Flipster
                  </button>
                  <button className="px-6 py-3 border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white font-bold rounded-xl transition-all duration-300">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
