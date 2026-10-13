"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/features/auth/services/authService";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Users,
  GraduationCap,
  MessageSquare,
  BarChart3,
  HeartHandshake,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Send,
  Lightbulb,
  Mic,
  BrainCircuit,
  Lock,
  Play,
  Quote,
  Info,
} from "lucide-react";

// Verified Student Testimonials from 2025 pilot evaluation of an earlier VEWAI version
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Awesome tool, user friendly and engaging.",
    value: "User Experience",
    author: "Veterinary Student",
    affiliation: "University of Nottingham | 2025 Pilot Study",
  },
  {
    id: 2,
    quote: "I liked getting more information as you go along like in a real life case and that you had to ask specific questions in order to get the full picture.",
    value: "Clinical Reasoning",
    author: "Veterinary Student",
    affiliation: "University of Nottingham | 2025 Pilot Study",
  },
  {
    id: 3,
    quote: "Towards the end of the case I felt I was able to engage with it more and treat it as if it were a real scenario.",
    value: "Clinical Realism",
    author: "Veterinary Student",
    affiliation: "University of Nottingham | 2025 Pilot Study",
  },
  {
    id: 4,
    quote: "Really enjoyed using this and would use it again! The feedback was useful too.",
    value: "Engagement & Feedback",
    author: "Veterinary Student",
    affiliation: "University of Nottingham | 2025 Pilot Study",
  },
  {
    id: 5,
    quote: "This is a very interesting and beneficial use of AI and I feel it could be a very effective revision method for future vet students.",
    value: "Educational Value",
    author: "Veterinary Student",
    affiliation: "University of Nottingham | 2025 Pilot Study",
  },
  {
    id: 6,
    quote: "Overall really engaging and a good way to go through a case and get me thinking about on farm scenarios.",
    value: "Application of Knowledge",
    author: "Veterinary Student",
    affiliation: "University of Nottingham | 2025 Pilot Study",
  },
];

export default function LandingPage() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreDropdownOpen, setWhoWeAreDropdownOpen] = useState(false);
  const [mockupTab, setMockupTab] = useState<"video" | "dialogue">("video");

  // Testimonials carousel state (strictly manual navigation)
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    role: "Faculty / Educator",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const navLinks = [
    { name: "The Challenge", href: "#challenge" },
    { name: "How VEWAI Works", href: "#solution" },
    { name: "Educator Insights", href: "#insights" },
    { name: "Student Feedback", href: "#testimonials" },
    { name: "Our Ethos", href: "#ethos" },
    { name: "Leadership & Team", href: "#team" },
    { name: "Register Interest", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2fbf7] via-[#f7fdfa] to-[#eef9f4] text-slate-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          STICKY NAVIGATION BAR
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-emerald-100/80 bg-white/90 backdrop-blur-md shadow-xs">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo - Official VEWAI™ with Tagline */}
          <Link href="/" className="flex items-center group py-1" title="VEWAI™ - Veterinary Education with AI">
            <div className="relative h-10 w-48 sm:h-12 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo-full.png"
                alt="VEWAI™ - Vet Education with AI"
                width={260}
                height={56}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {/* Tab 1: Who We Are (Dropdown) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setWhoWeAreDropdownOpen(!whoWeAreDropdownOpen)}
                onBlur={() => setTimeout(() => setWhoWeAreDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors rounded-lg hover:bg-emerald-50/70"
              >
                <span>Who We Are</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 text-slate-500 ${
                    whoWeAreDropdownOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </button>

              {whoWeAreDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl border border-emerald-100 bg-white p-2 shadow-xl shadow-emerald-950/10 z-50 animate-in fade-in-50 zoom-in-95">
                  {navLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setWhoWeAreDropdownOpen(false)}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Shortcut Nav Links */}
            <a
              href="#challenge"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              The Challenge
            </a>
            <a
              href="#solution"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              How VEWAI Works
            </a>
            <a
              href="#testimonials"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              Student Feedback
            </a>
            <a
              href="#team"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              Team
            </a>

            {/* Vertical separator */}
            <div className="h-5 w-px bg-emerald-200/80 mx-2" />

            {/* Tab 2: Platform Access (Sign in / Enter Dashboard) */}
            {user ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/25 transition-all"
              >
                <span>Platform Access (Dashboard)</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
              >
                <Lock className="h-3.5 w-3.5" />
                <span>Platform Access</span>
              </Link>
            )}

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Register your school&apos;s interest</span>
            </a>
          </nav>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-emerald-50"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-emerald-100 bg-white px-4 py-4 space-y-3 animate-in fade-in-50 shadow-lg">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Who We Are
            </div>
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-base font-medium text-slate-700 hover:text-emerald-700"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-emerald-100 flex flex-col gap-2">
              <Link
                href={user ? "/dashboard" : "/login"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 shadow-sm"
              >
                {user ? "Enter Platform Dashboard" : "Platform Access (Log In)"}
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl border border-slate-300 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                Register Interest
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (Light Mint & Emerald Theme)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-18 md:pt-20 md:pb-24">
        {/* Subtle mint/emerald ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-300/25 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Status Pill Badge */}
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>AI-Powered Veterinary Communication Practice</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Practise the conversations that shape veterinary care.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              VEWAI helps veterinary learners develop communication skills through realistic roleplay, structured feedback and repeat practice. From foundational interactions to complex consultations, clinical reasoning comes into focus when the scenario calls for it.
            </p>

            {/* Fixed Value Phrases */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm font-semibold text-emerald-900/90 tracking-wide">
                Realistic roleplay · Specific feedback · Repeat practice
              </p>
            </div>

            {/* Status Note: Pilot testing secondary to value proposition */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 border border-emerald-200/80 px-3.5 py-1 text-xs font-medium text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Currently in pilot evaluation with UK veterinary students · Authored by clinical faculty</span>
              </span>
            </div>

            {/* Two Clear CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Register your school&apos;s interest
              </a>
              <a
                href="#demo"
                className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 text-base font-semibold text-emerald-800 hover:bg-emerald-50 hover:border-emerald-400 transition-all hover:-translate-y-0.5 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Play className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                <span>See VEWAI in action</span>
              </a>
            </div>
          </div>

          {/* Interactive Consult Simulator Mockup */}
          <div id="demo" className="mt-14 max-w-4xl mx-auto scroll-mt-24">
            {/* Lead-in line near demonstration */}
            <div className="text-center mb-5">
              <p className="text-sm sm:text-base font-bold text-slate-800">
                Choose a scenario. Have the conversation. Review the feedback. Try again.
              </p>
            </div>

            <div className="relative rounded-2xl border border-emerald-200/90 bg-white shadow-2xl shadow-emerald-950/10 overflow-hidden backdrop-blur-xl">
              {/* Mockup Header Bar with Switchable Views */}
              <div className="flex flex-wrap items-center justify-between border-b border-emerald-100 px-4 sm:px-6 py-3 bg-emerald-50/70 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-0.5 border border-emerald-200/80 text-xs shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setMockupTab("video")}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                        mockupTab === "video"
                          ? "bg-emerald-600 text-white shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Play className="h-3 w-3 fill-current" />
                      <span>Live Simulation Recording</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMockupTab("dialogue")}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                        mockupTab === "dialogue"
                          ? "bg-emerald-600 text-white shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <MessageSquare className="h-3 w-3" />
                      <span>Consultation &amp; Feedback Sample</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Clinical Consultation · Barnaby
                  </span>
                </div>
              </div>

              {/* Mockup Content Area: Conditional Video / Dialogue */}
              {mockupTab === "video" ? (
                <div className="relative bg-slate-950 overflow-hidden">
                  <video
                    src="/images/demo-loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto aspect-video object-cover"
                  />
                  <div className="p-3.5 bg-white border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                    <span>Recording of active roleplay session within the VEWAI learning environment</span>
                    <button
                      type="button"
                      onClick={() => setMockupTab("dialogue")}
                      className="text-emerald-700 hover:underline font-semibold cursor-pointer"
                    >
                      View dialogue and structured feedback breakdown →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8 space-y-6 bg-white">
                  {/* Step 1: Character interaction */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold text-sm shadow-md">
                      SO
                    </div>
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-800">
                          Sarah (Barnaby&apos;s Owner)
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">Anxious &amp; Distressed</span>
                      </div>
                      <div className="rounded-2xl rounded-tl-none bg-amber-50/80 p-4 text-sm text-slate-900 border border-amber-200/80 leading-relaxed shadow-2xs">
                        &ldquo;Doctor, Barnaby hasn&apos;t eaten since yesterday afternoon and he kept rolling in the paddock. When I checked him this morning he broke out into a sweat. I&apos;m terrified... is he going to need surgery?&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Learner verbal response */}
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shadow-md">
                      VL
                    </div>
                    <div className="space-y-1.5 max-w-xl text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-xs font-bold text-emerald-800">
                          Veterinary Learner
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">Voice / Text Interaction</span>
                      </div>
                      <div className="rounded-2xl rounded-tr-none bg-emerald-50 border border-emerald-300 p-4 text-sm text-slate-900 text-left leading-relaxed shadow-2xs">
                        &ldquo;I completely understand how alarming this is, Sarah. Let&apos;s take a deep breath together. I will examine Barnaby right now to assess his vital signs and pain level, and I will explain every step to you before we make any decisions.&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Structured debrief feedback */}
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 md:p-5 mt-4">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <BrainCircuit className="h-4 w-4 text-emerald-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                          Structured Consultation Feedback · Calgary-Cambridge Framework
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
                        Formative Debrief
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="rounded-lg bg-white p-3 border border-emerald-100 shadow-2xs">
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          Building Rapport
                        </div>
                        <p className="text-slate-600 leading-normal">
                          Acknowledged client anxiety directly before moving into clinical history and examination.
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-3 border border-emerald-100 shadow-2xs">
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          Information Gathering
                        </div>
                        <p className="text-slate-600 leading-normal">
                          Clear open questions established onset and progression without medical jargon.
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-3 border border-emerald-100 shadow-2xs">
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          Explanation &amp; Next Steps
                        </div>
                        <p className="text-slate-600 leading-normal">
                          Set transparent expectations for the physical exam and reassured the client regarding decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Short verified student quotation immediately below demonstration */}
            <div className="mt-4 rounded-xl border border-emerald-100 bg-white/90 p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <Quote className="h-4 w-4 text-emerald-600 shrink-0" />
                <p className="text-xs sm:text-sm italic text-slate-700">
                  &ldquo;Awesome tool, user friendly and engaging.&rdquo;
                </p>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 shrink-0">
                — Veterinary student, 2025 pilot of an earlier VEWAI version
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: THE CHALLENGE
      ────────────────────────────────────────────────────────────── */}
      <section id="challenge" className="py-20 border-t border-emerald-100/90 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              The Need for Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Communication is a clinical skill. It needs practice.
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Veterinary learners need opportunities to ask questions, listen, explain, respond to emotion and work with colleagues. These skills develop through practice, feedback and reflection, from the first years of training onwards.
            </p>
          </div>

          {/* 3 Concise Challenge Themes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-7 space-y-3 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Practice before the pressure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rehearse conversations before facing them in placements or practice.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-7 space-y-3 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Respond to real people</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work through uncertainty, emotion and different perspectives, not just scripted answers.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-7 space-y-3 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Connect communication to care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As learners progress, use conversation to gather information, discuss options and support clinical decisions.
              </p>
            </div>
          </div>

          {/* Smaller evidence note below cards */}
          <div className="max-w-3xl mx-auto rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 sm:p-5 text-xs text-slate-700 flex items-start gap-3.5 shadow-2xs">
            <Info className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-900 text-xs block">
                Evidence note
              </span>
              <p className="leading-relaxed text-slate-600">
                In a study of 100 settled cases of alleged professional negligence involving canine patients, communication problems were identified in 80 cases.
              </p>
              <div>
                <a
                  href="https://doi.org/10.1002/vetr.1068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <span>Russell, Mossop, Forbes, &amp; Oxtoby (2022) · Veterinary Record (DOI: 10.1002/vetr.1068)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE SOLUTION
      ────────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 border-t border-emerald-100/90 bg-[#f4fbf7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-200">
              How VEWAI Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Realistic conversations. Useful feedback. Another chance to practise.
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Learners interact with AI roleplay characters in educator-designed scenarios. They make choices, respond to what they hear and receive feedback they can use in their next attempt.
            </p>
          </div>

          {/* 3 Simple Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="rounded-2xl border border-emerald-200/90 bg-white p-7 space-y-3 shadow-xs hover:border-emerald-300 transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-base">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Choose a scenario</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Start with a learning objective suited to the learner&apos;s stage.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/90 bg-white p-7 space-y-3 shadow-xs hover:border-emerald-300 transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-base">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Have the conversation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engage with an owner or member of the veterinary team and respond as the interaction develops.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/90 bg-white p-7 space-y-3 shadow-xs hover:border-emerald-300 transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-base">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Review and repeat</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                See specific feedback, reflect on your approach and try again.
              </p>
            </div>
          </div>

          {/* Supporting Implementation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-6 space-y-2.5 shadow-2xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Specialist-Authored Scenarios</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical cases and background details are authored by veterinary specialists to reflect realistic practice.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-6 space-y-2.5 shadow-2xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Roleplay Characters</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learners interact with distinct owner profiles and clinical colleagues representing different communication challenges.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-6 space-y-2.5 shadow-2xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Mic className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Spoken &amp; Written Practice</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supports speech input and text dialogue, allowing learners to practise realistic spoken pacing.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-6 space-y-2.5 shadow-2xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Repeatable Practice</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learners can revisit cases at their own pace to test different approaches and apply feedback directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2B: COMPACT LEARNING-PATH SECTION
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-emerald-100/90 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Curriculum Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Communication practice that grows with the learner.
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              VEWAI supports learners from early introductory training through clinical rotations, introducing clinical complexity as scenarios require it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Stage 1: Foundations */}
            <div className="rounded-2xl border border-dashed border-emerald-300 bg-[#fbfdfc] p-7 space-y-3 relative shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                  Stage 1
                </span>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  In development
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 pt-1">Foundations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Opening conversations, listening, asking questions and explaining clearly.
              </p>
            </div>

            {/* Stage 2: Applied Conversations */}
            <div className="rounded-2xl border border-dashed border-emerald-300 bg-[#fbfdfc] p-7 space-y-3 relative shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                  Stage 2
                </span>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  In development
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 pt-1">Applied conversations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Responding to concerns, discussing options and communicating within the veterinary team.
              </p>
            </div>

            {/* Stage 3: Complex Clinical Scenarios */}
            <div className="rounded-2xl border border-emerald-300 bg-white p-7 space-y-3 relative shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                  Stage 3
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Available in pilot
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 pt-1">Complex clinical scenarios</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bringing communication and clinical reasoning together when decisions become more demanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FEEDBACK & EDUCATOR INSIGHTS
      ────────────────────────────────────────────────────────────── */}
      <section id="insights" className="py-20 border-t border-emerald-100/90 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Structured Debrief
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Feedback learners can use. Insights educators can act on.
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              VEWAI turns a practice conversation into specific points for reflection. Educators can use patterns across learners to guide teaching and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Student Feedback Card */}
            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-2xs">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">For the Veterinary Learner</h3>
                  <p className="text-xs text-emerald-800 font-semibold">Immediate debrief after each conversation</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>See what worked in the conversation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Identify a specific communication skill to improve.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Try the scenario again and apply the feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-xs leading-relaxed">
                    <em>For scenarios that assess clinical reasoning:</em> Review diagnostic decision paths and investigation choices alongside communication feedback.
                  </span>
                </li>
              </ul>
              <div className="pt-2 border-t border-emerald-100/80">
                <p className="text-[11px] text-slate-500">
                  Feedback rubrics are informed by established clinical communication principles, including the Calgary–Cambridge guide.
                </p>
              </div>
            </div>

            {/* Educator Insights Card */}
            <div className="rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-8 space-y-5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">For Veterinary Educators</h3>
                  <p className="text-xs text-emerald-800 font-bold">Cohort feedback &amp; teaching support</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>See where learners are progressing or struggling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Use scenario results to focus teaching and discussion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Align practice with course learning objectives.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-emerald-100/80">
                <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                  Cohort analytics dashboard in active pilot testing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: STUDENT FEEDBACK & PILOT EVALUATION
      ────────────────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 border-t border-emerald-100/90 bg-[#f4fbf7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-200">
              Pilot Evaluation Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Student feedback on earlier-version testing
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Verbatim feedback collected during a 2025 student evaluation of an earlier VEWAI prototype at the University of Nottingham.
            </p>
          </div>

          {/* Carousel Container (Manual Navigation Only) */}
          <div className="max-w-6xl mx-auto">
            {/* Top Carousel Controls Bar */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  Showing {testimonialIndex + 1} to {Math.min(testimonialIndex + 3, TESTIMONIALS.length)} of {TESTIMONIALS.length} quotations
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-emerald-200 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-all shadow-2xs cursor-pointer"
                  aria-label="Previous testimonials"
                  title="Previous testimonials"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-emerald-200 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-all shadow-2xs cursor-pointer"
                  aria-label="Next testimonials"
                  title="Next testimonials"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* 3 Visible Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const item = TESTIMONIALS[(testimonialIndex + offset) % TESTIMONIALS.length];
                return (
                  <div
                    key={`${item.id}-${testimonialIndex}`}
                    className="flex flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 animate-in fade-in"
                  >
                    <div>
                      {/* Card Header: Quote icon & Value badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                          <Quote className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          {item.value}
                        </span>
                      </div>

                      {/* Quotation text (Verbatim student words preserved) */}
                      <p className="text-base font-medium text-slate-800 leading-relaxed italic my-2">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Attribution footer */}
                    <div className="pt-5 mt-4 border-t border-emerald-100/80">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 shrink-0 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-200">
                          VS
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{item.author}</div>
                          <div className="text-[11px] text-slate-600 font-medium">
                            {item.affiliation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === testimonialIndex
                      ? "w-8 bg-emerald-600 shadow-xs"
                      : "w-2.5 bg-emerald-200 hover:bg-emerald-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  title={item.value}
                />
              ))}
            </div>

            {/* Evaluation & Research Context Note */}
            <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-emerald-200/90 bg-white p-5 text-xs text-slate-700 flex items-start gap-3.5 shadow-2xs">
              <Info className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 text-xs block">
                  Evaluation and research note
                </span>
                <p className="leading-relaxed text-slate-600">
                  These quotations represent selected feedback collected during a 2025 student evaluation of an earlier VEWAI version. They do not claim universal consensus or clinical outcome improvements. Full study findings and academic publications will be shared following formal peer review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OUR ETHOS
      ────────────────────────────────────────────────────────────── */}
      <section id="ethos" className="py-20 border-t border-emerald-100/90 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Our Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed by veterinary educators for safe, repeatable practice.
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              VEWAI gives learners space to rehearse, reflect and improve without involving real clients or patients. Educators remain central to scenario design, teaching and interpretation of feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-7 space-y-3 shadow-2xs hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Safe rehearsal space</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learners can experiment with phrasing and active listening in low-stakes scenarios, using mistakes as opportunities to reflect rather than causing real distress.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-7 space-y-3 shadow-2xs hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Broad student access</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Supplemental conversational practice can be accessed by all students throughout the academic year, not only during occasional actor-based sessions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-7 space-y-3 shadow-2xs hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Educator-led teaching</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Technology supports self-directed practice, freeing educators to focus contact time on small-group discussions, clinical reasoning, and personalized coaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: LEADERSHIP & THE TEAM
      ────────────────────────────────────────────────────────────── */}
      <section id="team" className="py-20 border-t border-emerald-100/90 bg-[#f4fbf7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Founders &amp; Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conceived by Veterinary Clinical Educators
            </h2>
            {/* Highly visible, bold and clear contrast subtitle */}
            <p className="text-slate-800 font-semibold text-base sm:text-lg max-w-2xl mx-auto">
              VewAI is created by European Veterinary Specialists and clinical educators with decades of university teaching and international specialist practice.
            </p>
          </div>

          {/* Clinical Leadership (The Faces) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
            {/* Dr. Marco Duz */}
            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-8 space-y-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-extrabold text-lg shadow-md">
                  MD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dr. Marco Duz</h3>
                  <p className="text-xs text-emerald-800 font-mono font-bold">
                    MedVet MVM(Res) DipECEIM PhD SFHEA MRCVS
                  </p>
                  <p className="text-xs text-slate-600 font-medium">Co-Founder &amp; Clinical Lead</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Clinical Associate Professor in Equine Internal Medicine at the University of Nottingham. Diplomate of the European College of Equine Internal Medicine (ECEIM), Senior Fellow of the Higher Education Academy (SFHEA), and Treasurer of the ECEIM Executive Committee, with over 20 years of clinical and educational experience worldwide.
              </p>
            </div>

            {/* Dr. Ignacio Corradini */}
            <div className="rounded-2xl border border-emerald-100 bg-[#f9fdfb] p-8 space-y-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 text-white font-extrabold text-lg shadow-md">
                  IC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dr. Ignacio Corradini</h3>
                  <p className="text-xs text-emerald-800 font-mono font-bold">
                    MV MSc FHEA EBVS DipECEIM MRCVS
                  </p>
                  <p className="text-xs text-slate-600 font-medium">Co-Founder &amp; AI Educational Strategy</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Clinical Assistant Professor in Equine Internal Medicine and European Specialist (EBVS DipECEIM). Chair of the Digital Learning Group at the University of Nottingham&apos;s School of Veterinary Medicine and Science, pioneering AI integration and patient-side clinical reasoning within modern curricula.
              </p>
            </div>
          </div>

          {/* Technical Team */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-emerald-100 bg-[#f4fbf7] p-6 md:p-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-6 text-center">
              Engineering &amp; Technical Development
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-100 shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm">
                  SC
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Dr. Sebastian Corradini</h5>
                  <p className="text-xs text-emerald-700 font-semibold">Technical Lead</p>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Medical Doctor and certified AI developer specializing in clinical simulation architecture and healthcare NLP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-100 shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm">
                  NC
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Nick Coleman</h5>
                  <p className="text-xs text-emerald-700 font-semibold">Senior Full-Stack Developer</p>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Lead platform engineer architecting responsive interactive interfaces, database infrastructure, and pedagogical scoring modules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: REGISTER INTEREST / EARLY ADOPTERS CONTACT
      ────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 border-t border-emerald-100/90 bg-gradient-to-b from-[#eef9f4] via-[#f7fdfa] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto rounded-3xl border border-emerald-200/90 bg-white p-8 md:p-10 shadow-xl shadow-emerald-950/5">
            <div className="text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>Early Academic Partnership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bring VEWAI to your veterinary school.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tell us about your teaching needs and we&apos;ll discuss how VEWAI could support your learners, including current pilot opportunities.
              </p>
            </div>

            {formSubmitted ? (
              <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center space-y-4 animate-in fade-in-50">
                <div className="h-14 w-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Thank you for registering your interest!</h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  Our clinical education leads (Dr Marco Duz &amp; Dr Ignacio Corradini) have received your details. We will be in touch via <strong>{formData.email}</strong> to discuss your learners&apos; needs and current pilot opportunities.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        institution: "",
                        role: "Faculty / Educator",
                        email: "",
                        message: "",
                      });
                    }}
                    className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Type your first and last name here"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-emerald-200 bg-[#fcfdfd] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="institution" className="block text-xs font-bold text-slate-700 mb-1">
                      University / Institution *
                    </label>
                    <input
                      id="institution"
                      required
                      type="text"
                      placeholder="eg. University of Nottingham"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full rounded-xl border border-emerald-200 bg-[#fcfdfd] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-xl border border-emerald-200 bg-[#fcfdfd] px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <option value="Dean / School Director">Dean / School Director</option>
                      <option value="Faculty / Educator">Faculty / Educator</option>
                      <option value="Veterinary Student">Veterinary Student</option>
                      <option value="Postgraduate / Resident">Postgraduate / Resident</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                    Work / Academic Email *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="eg. name.lastname@yourinstitution.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-emerald-200 bg-[#fcfdfd] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message or Cohort Size (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your teaching focus or number of students..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-emerald-200 bg-[#fcfdfd] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Register your school&apos;s interest</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 pt-2">
                  Direct email enquiries:{" "}
                  <a
                    href="mailto:vewai.education@gmail.com"
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    vewai.education@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER (Clean Mint with Official Brand Mark & Tagline)
      ────────────────────────────────────────────────────────────── */}
      <footer className="border-t border-emerald-200 bg-[#f4fbf7] py-12 text-slate-600 text-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-48 sm:h-11 sm:w-52">
              <Image
                src="/images/logo-full.png"
                alt="VEWAI™ - Vet Education with AI"
                width={220}
                height={52}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-600 font-medium">
            <a href="#challenge" className="hover:text-emerald-700 transition-colors">
              The Challenge
            </a>
            <a href="#solution" className="hover:text-emerald-700 transition-colors">
              How VEWAI Works
            </a>
            <a href="#testimonials" className="hover:text-emerald-700 transition-colors">
              Student Feedback
            </a>
            <a href="#team" className="hover:text-emerald-700 transition-colors">
              Team
            </a>
            <Link href="/login" className="hover:text-emerald-700 transition-colors font-bold text-emerald-800">
              Platform Access
            </Link>
            <a
              href="mailto:vewai.education@gmail.com"
              className="hover:text-emerald-700 transition-colors"
            >
              Contact: vewai.education@gmail.com
            </a>
          </div>

          <div className="text-slate-500 text-[11px] text-center sm:text-right">
            &copy; {new Date().getFullYear()} VEWAI Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
