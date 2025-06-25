"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Users,
  Code,
  Palette,
  GamepadIcon,
  Trophy,
  Zap,
  Heart,
  MapPin,
  Clock,
  Building,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Career = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const router = useRouter();

  const jobs = [
    {
      id: "game-tester",
      title: "Game Tester",
      department: "Quality Assurance",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "₹2,200,00 - ₹3,500,00",
      icon: <GamepadIcon className="w-6 h-6" />,
      description:
        "Join our QA team to ensure game accounts and transactions meet the highest quality standards on Flipster.",
      responsibilities: [
        "Test game account verification processes across multiple gaming platforms",
        "Validate account authenticity and progression data accuracy",
        "Perform thorough testing of C2C marketplace functionality",
        "Document bugs and work closely with development team for resolution",
        "Test payment processing and security features",
        "Ensure seamless user experience across web and mobile platforms",
      ],
      requirements: [
        "2+ years of game testing or QA experience",
        "Deep knowledge of popular gaming platforms (Steam, Epic, PlayStation, Xbox)",
        "Understanding of game progression systems and account structures",
        "Experience with bug tracking tools and test case management",
        "Strong attention to detail and analytical thinking",
        "Passion for gaming and marketplace dynamics",
      ],
      benefits: [
        "Gaming hardware allowance",
        "Free premium Flipster account",
        "Flexible remote work options",
        "Professional development budget",
      ],
    },
    {
      id: "backend-developer",
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Full-time",
      salary: "₹6,500,00 - ₹10,000,00",
      icon: <Code className="w-6 h-6" />,
      description:
        "Build and scale the robust backend infrastructure that powers Flipster's gaming marketplace.",
      responsibilities: [
        "Develop and maintain RESTful APIs for marketplace functionality",
        "Design secure payment processing and escrow systems",
        "Implement account verification and fraud detection algorithms",
        "Build scalable microservices architecture using Node.js/Python",
        "Optimize database performance for high-volume transactions",
        "Integrate with gaming platform APIs for account validation",
      ],
      requirements: [
        "3+ years of backend development experience",
        "Proficiency in Node.js, Python, or similar server-side technologies",
        "Experience with PostgreSQL, Redis, and MongoDB",
        "Knowledge of payment processing systems and security protocols",
        "Understanding of microservices architecture and containerization",
        "Experience with AWS/GCP cloud services",
      ],
      benefits: [
        "Competitive equity package",
        "Top-tier health insurance",
        "Annual tech conference budget",
        "Flexible PTO policy",
      ],
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Mumbai",
      type: "Full-time",
      salary: "₹5,000,00 - ₹7,500,00",
      icon: <Palette className="w-6 h-6" />,
      description:
        "Shape the visual identity and user experience of the leading gaming marketplace platform.",
      responsibilities: [
        "Design intuitive user interfaces for account buying/selling flows",
        "Create engaging visual designs that resonate with gaming communities",
        "Conduct user research and usability testing with gamers",
        "Develop and maintain design systems and component libraries",
        "Collaborate with developers to ensure pixel-perfect implementations",
        "Design mobile-first responsive experiences",
      ],
      requirements: [
        "3+ years of UI/UX design experience, preferably in gaming or marketplace",
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Strong understanding of gaming aesthetics and user behavior",
        "Experience with design systems and component-based design",
        "Knowledge of frontend technologies (HTML, CSS, React)",
        "Portfolio demonstrating marketplace or gaming product design",
      ],
      benefits: [
        "Creative software licenses",
        "Design conference attendance",
        "Flexible creative time",
        "Remote work stipend",
      ],
    },
  ];

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "50+",
      label: "Team Members",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "1M+",
      label: "Accounts Traded",
    },
    { icon: <Zap className="w-8 h-8" />, value: "99.9%", label: "Uptime" },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "4.9★",
      label: "User Rating",
    },
  ];

  return (
    <div className="min-h-screen bg-gaming-background text-gaming-textPrimary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gaming-textSecondary hover:text-gaming-purple transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-gaming-radial"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient-shift bg-300% bg-gradient-to-r">
                Level Up Your Career
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gaming-textSecondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Join Flipster and build the future of gaming commerce. We're
              revolutionizing how gamers buy, sell, and trade accounts across
              the globe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => {
                  document.getElementById("open-positions")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-4 bg-gradient-button hover:bg-gradient-button-hover text-white font-bold rounded-xl shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </button>
              <button
                onClick={() => router.push("/about")}
                className="px-8 py-4 border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white font-bold rounded-xl transition-all duration-300"
              >
                Learn About Culture
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gaming-cardBg rounded-2xl mb-4 text-gaming-purple group-hover:text-gaming-pink transition-colors duration-300 shadow-gaming-sm group-hover:shadow-pink-md">
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

      {/* Why Join Flipster Section */}
      <section className="py-20 bg-gaming-cardBg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Why <span className="text-gaming-purple">Flipster?</span>
            </h2>
            <p className="text-xl text-gaming-textSecondary max-w-3xl mx-auto">
              We're not just building a marketplace – we're creating the
              ultimate destination for gaming commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gaming-First Culture",
                description:
                  "Work with fellow gamers who understand the passion and intricacies of gaming communities.",
                icon: "🎮",
                gradient: "bg-gradient-purple",
              },
              {
                title: "Cutting-Edge Tech",
                description:
                  "Build with the latest technologies and frameworks to create seamless user experiences.",
                icon: "⚡",
                gradient: "bg-gradient-pink",
              },
              {
                title: "Global Impact",
                description:
                  "Your work affects millions of gamers worldwide, creating value in the gaming ecosystem.",
                icon: "🌍",
                gradient: "bg-gradient-gold",
              },
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="bg-gaming-cardBg rounded-2xl p-8 shadow-gaming-card hover:shadow-gaming-hover transition-all duration-500 hover:transform hover:scale-105 border border-gaming-purple/20 flex flex-col h-full w-full">
                  <div
                    className={`w-16 h-16 ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-gaming-sm mx-auto`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gaming-textPrimary text-center">
                    {item.title}
                  </h3>
                  <p className="text-gaming-textSecondary leading-relaxed text-center flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              <span className="text-gaming-pink">Open</span> Positions
            </h2>
            <p className="text-xl text-gaming-textSecondary max-w-2xl mx-auto">
              Find your perfect role and join our mission to revolutionize
              gaming commerce.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-gaming-cardBg rounded-2xl shadow-gaming-card hover:shadow-gaming-hover transition-all duration-300 border border-gaming-purple/20 overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJobExpansion(job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-button rounded-xl flex items-center justify-center text-white shadow-gaming-sm flex-shrink-0">
                        {job.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-gaming-textPrimary">
                            {job.title}
                          </h3>
                          <span className="px-3 py-1 bg-gaming-purple/20 text-gaming-purple rounded-full text-sm font-medium">
                            {job.department}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gaming-textSecondary mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 flex-shrink-0" />
                            <span className="text-gaming-gold font-semibold">
                              {job.salary}
                            </span>
                          </div>
                        </div>

                        <p className="text-gaming-textSecondary leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-gaming-purple transition-transform duration-300 ml-4 mt-1 flex-shrink-0 ${
                        expandedJob === job.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-gaming-purple/20">
                    <div className="pt-6 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-gaming-textPrimary mb-4">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {job.responsibilities.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gaming-textSecondary"
                            >
                              <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gaming-textPrimary mb-4">
                          Requirements
                        </h4>
                        <ul className="space-y-3 mb-6">
                          {job.requirements.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gaming-textSecondary"
                            >
                              <div className="w-2 h-2 bg-gaming-pink rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-lg font-bold text-gaming-textPrimary mb-4">
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {job.benefits.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gaming-textSecondary"
                            >
                              <div className="w-2 h-2 bg-gaming-gold rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gaming-purple/20 flex justify-center">
                      <button className="w-full md:w-auto px-8 py-3 bg-gradient-button hover:bg-gradient-button-hover text-white font-bold rounded-xl shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 transform hover:scale-105">
                        Apply for this Position
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-hero/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to <span className="text-gaming-pink">Game On?</span>
          </h2>
          <p className="text-xl text-gaming-textSecondary mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented
            individuals who share our passion for gaming and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-button hover:bg-gradient-button-hover text-white font-bold rounded-xl shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 transform hover:scale-105">
              Send Us Your Resume
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white font-bold rounded-xl transition-all duration-300">
              Follow Our Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
