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
  Menu,
  X,
  Send,
  AlertTriangle,
  Lightbulb,
  Mic,
  BrainCircuit,
  Lock,
  Play,
} from "lucide-react";

export default function LandingPage() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreDropdownOpen, setWhoWeAreDropdownOpen] = useState(false);
  const [mockupTab, setMockupTab] = useState<"video" | "dialogue">("video");

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
    { name: "The Solution", href: "#solution" },
    { name: "Educator Insights", href: "#insights" },
    { name: "Our Ethos", href: "#ethos" },
    { name: "Leadership & Team", href: "#team" },
    { name: "Register Interest", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* ─────────────────────────────────────────────────────────────
          STICKY TOP NAVIGATION
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-v.png"
                alt="VEWAI Logo"
                width={44}
                height={44}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-0.5">
                Vew<span className="text-emerald-400">Ai</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Clinical Simulation
              </span>
            </div>
          </Link>

          {/* Desktop Two-Tab Menu Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {/* Tab 1: Who We Are (Dropdown Menu) */}
            <div
              className="relative"
              onMouseEnter={() => setWhoWeAreDropdownOpen(true)}
              onMouseLeave={() => setWhoWeAreDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <span>Who We Are</span>
                <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200" />
              </button>

              {whoWeAreDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in-50 slide-in-from-top-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Platform & Mission
                  </div>
                  {navLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setWhoWeAreDropdownOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Quick Links */}
            <a
              href="#solution"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Solution
            </a>
            <a
              href="#insights"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Educator Analytics
            </a>
            <a
              href="#team"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Team
            </a>

            {/* Vertical separator */}
            <div className="h-5 w-px bg-slate-800 mx-2" />

            {/* Tab 2: Platform Access (Sign in / Enter Dashboard) */}
            {user ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30"
              >
                <span>Platform Access (Dashboard)</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all"
              >
                <Lock className="h-3.5 w-3.5" />
                <span>Platform Access</span>
              </Link>
            )}

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors shadow-sm"
            >
              <span>Register Interest</span>
            </a>
          </nav>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3 animate-in fade-in-50">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Who We Are
            </div>
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-base font-medium text-slate-300 hover:text-emerald-400"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <Link
                href={user ? "/dashboard" : "/login"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                {user ? "Enter Platform Dashboard" : "Platform Access (Log In)"}
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-lg border border-slate-700 py-2.5 text-sm font-semibold text-white hover:bg-slate-900"
              >
                Register Interest
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>In Pilot Testing with UK Veterinary Students · Developed by Clinical Faculty</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Master Clinical Communication <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Before Stepping into Practice.
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed">
              An interactive simulation platform authored by board-certified veterinary specialists. We use calibrated AI to roleplay pet owners, veterinary nurses, and team members in a closed, safe, and academically rigorous environment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Register Your School&apos;s Interest
              </a>
              <Link
                href={user ? "/dashboard" : "/login"}
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-800 hover:border-slate-600 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Lock className="h-4 w-4 text-emerald-400" />
                <span>{user ? "Enter Dashboard" : "Platform Access"}</span>
              </Link>
            </div>
          </div>

          {/* Interactive Consult Simulator Mockup */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-emerald-950/30 overflow-hidden backdrop-blur-xl">
              {/* Mockup Header Bar with Switchable Views */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 px-4 sm:px-6 py-3 bg-slate-950/80 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setMockupTab("video")}
                      className={`px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                        mockupTab === "video"
                          ? "bg-emerald-500 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Play className="h-3 w-3 fill-current" />
                      <span>Live App Recording</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMockupTab("dialogue")}
                      className={`px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                        mockupTab === "dialogue"
                          ? "bg-emerald-500 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <MessageSquare className="h-3 w-3" />
                      <span>Consult Breakdown</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Equine Colic Case #04
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
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Authentic recording from the VewAI clinical simulator environment</span>
                    <button
                      type="button"
                      onClick={() => setMockupTab("dialogue")}
                      className="text-emerald-400 hover:underline font-medium"
                    >
                      Inspect dialogue analysis →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8 space-y-6">
                {/* Dialogue 1: The AI Pet / Horse Owner */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold text-sm shadow-md">
                    SO
                  </div>
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-amber-400">
                        Sarah (Barnaby&apos;s Owner)
                      </span>
                      <span className="text-[10px] text-slate-400">Anxious & Distressed</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-slate-800/80 p-4 text-sm text-slate-100 border border-slate-700/60 leading-relaxed shadow-sm">
                      &ldquo;Doctor, Barnaby hasn&apos;t eaten since yesterday afternoon and he kept rolling in the paddock. When I checked him this morning he broke out into a sweat. I&apos;m terrified... is he going to need surgery?&rdquo;
                    </div>
                  </div>
                </div>

                {/* Dialogue 2: The Veterinary Student */}
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shadow-md">
                    VS
                  </div>
                  <div className="space-y-1.5 max-w-xl text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs font-semibold text-emerald-400">
                        Veterinary Student
                      </span>
                      <span className="text-[10px] text-slate-400">Voice Input Active</span>
                    </div>
                    <div className="rounded-2xl rounded-tr-none bg-emerald-950/60 border border-emerald-500/40 p-4 text-sm text-emerald-100 text-left leading-relaxed shadow-sm">
                      &ldquo;I completely understand how alarming this is, Sarah. Let&apos;s take a deep breath together. I will examine Barnaby right now to assess his heart rate, gut sounds, and pain level, and I&apos;ll explain every step to you before we make any decisions.&rdquo;
                    </div>
                  </div>
                </div>

                {/* Real-time Pedagogical Evaluation Box */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4 md:p-5 mt-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                        Immediate Pedagogical Assessment · Calgary-Cambridge Framework
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                      Empathy Score: Exemplary
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="rounded-lg bg-slate-900/80 p-3 border border-slate-800">
                      <div className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        Active Listening
                      </div>
                      <p className="text-slate-400">
                        Successfully acknowledged owner anxiety before requesting physical exam details.
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-3 border border-slate-800">
                      <div className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        Diagnostic Pathway
                      </div>
                      <p className="text-slate-400">
                        Appropriately prioritized vital signs and pain score evaluation for colic triage.
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-3 border border-slate-800">
                      <div className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        Transparency
                      </div>
                      <p className="text-slate-400">
                        Reassured the client by setting clear expectations and collaborative consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: THE URGENT NEED (80% COMMUNICATION CRISIS)
      ────────────────────────────────────────────────────────────── */}
      <section id="challenge" className="py-20 border-t border-slate-800/80 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              The Reality of Veterinary Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Communication Skills Are the Make-or-Break Competency
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Veterinary school prepares students extensively in pathology, pharmacology, and surgery. But when new graduates enter clinics, their greatest challenge isn&apos;t knowing the medicine—it&apos;s communicating with the client.
            </p>
          </div>

          {/* Stat Banner */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 p-8 md:p-10 shadow-xl mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left shrink-0">
                <div className="text-6xl sm:text-7xl font-extrabold text-amber-400 tracking-tight">
                  80%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300/80 mt-1">
                  Of Investigated Cases
                </div>
              </div>
              <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
                <h3 className="text-xl font-bold text-white">
                  Communication problems are a contributing factor in 80% of veterinary negligence and complaint cases.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Published research analyzing settled veterinary malpractice cases revealed that breakdown in communication—between clinicians and animal owners, as well as within clinical teams—is the predominant driver of complaints.
                </p>
                <div className="pt-1">
                  <a
                    href="https://doi.org/10.1002/vetr.1068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
                  >
                    <span>
                      Russell, Mossop, Forbes, &amp; Oxtoby (2022) · Veterinary Record
                    </span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">The Actor Simulation Bottleneck</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Actor-based roleplay is difficult to coordinate and prohibitively expensive. As a result, students typically get only 10–15 minutes of live client practice per term.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">High-Stakes Emotional Pressure</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Breaking bad news, discussing sudden euthanasia, and negotiating financial constraints require seasoned emotional intelligence that textbook study cannot build.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Clinical Reasoning in Action</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Students need to synthesize symptoms, diagnostic tests, and owner constraints in real time—without fear of causing harm to a live animal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE SOLUTION (CLOSED, SPECIALIST-AUTHORED AI)
      ────────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 border-t border-slate-800/80 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              The VewAI Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A Closed, Safe Simulation Environment for Veterinary Education
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We leverage purpose-trained artificial intelligence to roleplay animal owners, nurses, and clinical colleagues. Every scenario operates within strict pedagogical guardrails authored and verified by board-certified veterinary specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Specialist-Authored Cases</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No unconstrained AI hallucinations. All patient histories, laboratory findings, and diagnostic branches are meticulously crafted by European Specialists.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Dynamic Roleplay Personas</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Interact with angry, anxious, or budget-limited owners. Consult with veterinary nurses and technicians to mirror authentic clinical workflow.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Mic className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Voice &amp; Avatar Immersion</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Students practice verbal communication using live voice input. The AI responds with expressive avatars, replicating the pressure of face-to-face consults.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Unlimited Safe Practice</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Students can practice cases 24/7 at their own pace. Mistakes become formative learning opportunities rather than real-world malpractice risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: EDUCATOR INSIGHTS & COHORT PROGRESSION
      ────────────────────────────────────────────────────────────── */}
      <section id="insights" className="py-20 border-t border-slate-800/80 bg-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Dual-Level Pedagogical Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Actionable Feedback for Students. <br />
              Cohort-Level Intelligence for Educators.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              VewAI doesn&apos;t just score consultations—it bridges the gap between individual practice and classroom teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Student Feedback Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">For the Veterinary Student</h3>
                  <p className="text-xs text-slate-400">Immediate Consultation Debrief</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Calgary-Cambridge Scoring:</strong> Objective assessment of rapport building, active listening, and information gathering.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clinical Reasoning Breakdown:</strong> Review whether the diagnostic differential diagnosis matched the physiological signs revealed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Personalized Action Points:</strong> Specific suggestions on phrasing, pacing, and emotional de-escalation before the next attempt.
                  </span>
                </li>
              </ul>
            </div>

            {/* Educator Analytics Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-slate-950 p-8 space-y-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">For Veterinary Educators</h3>
                  <p className="text-xs text-emerald-400 font-medium">Cohort &amp; Curriculum Intelligence</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cohort Progress Monitoring:</strong> Track overall class performance trends across communication domains and species categories.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Highlighting Knowledge Gaps:</strong> Automatically flags specific Learning Objectives (LOs) where multiple students struggle.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Targeted Teaching Reinforcement:</strong> Faculty can adapt lecture content and tutorials based on real simulation analytics before clinic rotations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: OUR ETHOS & PEDAGOGY
      ────────────────────────────────────────────────────────────── */}
      <section id="ethos" className="py-20 border-t border-slate-800/80 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Our Educational Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Built on Pedagogical Safety, Integrity, and Global Access
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              VewAI was conceived from inside the veterinary classroom, designed not to replace educators, but to equip them with scalable tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Safe-to-Fail Learning</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                True competence requires experimenting with communication styles. Our simulator creates a psychologically safe environment where mistakes lead to reflection rather than real-world repercussions.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Equitable Access</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Simulation should not be reserved only for wealthy institutions with large actor budgets. We are committed to making high-fidelity practice accessible to veterinary schools globally.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Faculty-Empowered</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI handles repetitive baseline simulation practice so clinical faculty can dedicate their valuable time to personalized mentorship, advanced procedural training, and bedside rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: LEADERSHIP & THE TEAM
      ────────────────────────────────────────────────────────────── */}
      <section id="team" className="py-20 border-t border-slate-800/80 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Founders &amp; Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Conceived by Veterinary Clinical Educators
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              VewAI is created by European Veterinary Specialists and clinical educators with decades of university teaching and international specialist practice.
            </p>
          </div>

          {/* Clinical Leadership (The Faces) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
            {/* Dr. Marco Duz */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-extrabold text-lg shadow-md">
                  MD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dr. Marco Duz</h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    MedVet MVM(Res) DipECEIM PhD SFHEA MRCVS
                  </p>
                  <p className="text-xs text-slate-400">Co-Founder &amp; Clinical Lead</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Clinical Associate Professor in Equine Internal Medicine at the University of Nottingham. Diplomate of the European College of Equine Internal Medicine (ECEIM), Senior Fellow of the Higher Education Academy (SFHEA), and Treasurer of the ECEIM Executive Committee, with over 20 years of clinical and educational experience worldwide.
              </p>
            </div>

            {/* Dr. Ignacio Corradini */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-700 text-white font-extrabold text-lg shadow-md">
                  IC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dr. Ignacio Corradini</h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    MV MSc FHEA EBVS DipECEIM MRCVS
                  </p>
                  <p className="text-xs text-slate-400">Co-Founder &amp; AI Educational Strategy</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Clinical Associate Professor in Equine Internal Medicine and European Specialist (EBVS DipECEIM). Chair of the Digital Learning Group at the University of Nottingham&apos;s School of Veterinary Medicine and Science, pioneering AI integration and patient-side clinical reasoning within modern curricula.
              </p>
            </div>
          </div>

          {/* Technical Team */}
          <div className="max-w-3xl mx-auto rounded-xl border border-slate-800 bg-slate-950/70 p-6 md:p-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
              Engineering &amp; Technical Development
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 font-bold text-sm">
                  SC
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">Dr. Sebastian Corradini</h5>
                  <p className="text-xs text-emerald-400">Technical Lead</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Medical Doctor and certified AI developer specializing in clinical simulation architecture and healthcare NLP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 font-bold text-sm">
                  NC
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">Nick Coleman</h5>
                  <p className="text-xs text-emerald-400">Senior Full-Stack Developer</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Senior software engineer with expertise in scalable web architectures, real-time data, and secure cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: REGISTER INTEREST & EARLY ACCESS
      ────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 border-t border-slate-800/80 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Pilot Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Register Interest for Future Trials
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We are currently conducting pilot studies with veterinary students to perfect the simulation engine. If you are a veterinary school leader, clinical educator, or student interested in early trial access, connect with our team.
            </p>
          </div>

          <div className="max-w-xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in-50">
                <div className="h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You for Your Interest!</h3>
                <p className="text-sm text-slate-300">
                  Your details have been received. We will reach out from{" "}
                  <strong className="text-emerald-400">vewai.education@gmail.com</strong> regarding upcoming trial cohorts.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-emerald-400 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="e.g. Dr. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="institution" className="block text-xs font-medium text-slate-300 mb-1">
                      University / Institution *
                    </label>
                    <input
                      id="institution"
                      required
                      type="text"
                      placeholder="e.g. Royal Vet College"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                    Work / Academic Email *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="alex.mercer@institution.ac.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Message or Cohort Size (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your teaching focus or number of students..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Early Access Request</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-2">
                  Prefer direct email? Reach our founders directly at{" "}
                  <a
                    href="mailto:vewai.education@gmail.com"
                    className="text-emerald-400 hover:underline font-mono"
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
          FOOTER
      ────────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-v.png"
              alt="VEWAI Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain opacity-80"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white text-sm">VEWAI Ltd</span>
              <span className="text-[10px] text-slate-400">
                Veterinary Education with Artificial Intelligence
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#challenge" className="hover:text-white transition-colors">
              The Need
            </a>
            <a href="#solution" className="hover:text-white transition-colors">
              The Solution
            </a>
            <a href="#team" className="hover:text-white transition-colors">
              Leadership
            </a>
            <Link href="/login" className="hover:text-emerald-400 transition-colors">
              Platform Login
            </Link>
            <a
              href="mailto:vewai.education@gmail.com"
              className="hover:text-emerald-400 transition-colors font-mono"
            >
              vewai.education@gmail.com
            </a>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} VEWAI Ltd. All rights reserved.
            <div className="mt-0.5 text-slate-400">Currently in controlled empirical pilot testing.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
