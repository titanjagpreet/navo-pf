"use client";

import { useEffect, useState } from "react";
import { 
  Home as HomeIcon, 
  User, 
  BookOpen, 
  Briefcase, 
  GraduationCap,
  Mail, 
  Linkedin, 
  Bot,
  Code
} from "lucide-react";

import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans transition-colors duration-300">
      
      {/* Theme Toggle - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50 animate-fade-in">
        <ThemeToggle />
      </div>

      {/* Floating Dock Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <div className="flex items-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 rounded-full border border-border bg-card/80 backdrop-blur-md shadow-lg ring-1 ring-white/10 overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <DockLink href="#" icon={<HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />} label="Home" />
          <DockLink href="#about" icon={<User className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />} label="About" />
          <DockLink href="#affiliation" icon={<Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />} label="Experience" />
          <DockLink href="#education" icon={<GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />} label="Education" />
          <DockLink href="#research" icon={<BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />} label="Research" />
          <DockLink href="#contact" icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />} label="Contact" />
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        
        {/* Hero Section */}
        <header 
          className={`pt-20 sm:pt-28 lg:pt-20 pb-6 sm:pb-10 lg:pb-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-32 lg:h-32 rounded-full bg-muted overflow-hidden ring-4 ring-border hover:ring-primary/50 transition-all duration-300 shadow-xl relative">
                <Image 
                  src="/profile.jpeg" 
                  alt="Navodita Singh" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Status Badge - Positioned below the profile pic */}
              <div className="bg-card border border-border text-[10px] sm:text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg flex items-center gap-2 ring-1 ring-white/5 hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
                </span>
                <span className="whitespace-nowrap">Exploring 3D</span>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3 mb-3 sm:mb-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight glow-text">
                  Navodita Singh
                </h1>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-mono border border-border/50 font-medium">
                  Research Scholar
                </span>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Indian Institute of Science Education and Research, Bhopal
              </p>
            </div>
          </div>
        </header>

        <SectionDivider />

        {/* About Section */}
        <section id="about" className="py-2 sm:py-4 lg:py-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            About Me
          </h2>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg">
            <p className="mb-4">
              Hi, I’m Navodita Singh, a PhD Scholar at the Department of Data Science & Engineering, Indian Institute of Science Education and Research (IISER) Bhopal. I work under the supervision of Dr. Sundaram Muthu at the Robotic Perception and Embodied Intelligence Lab.
            </p>
            <p>
              My research focuses on 3D reconstruction, with an emphasis on perception-driven methods for building accurate three-dimensional representations of real-world environments.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* Experience / Affiliation Section */}
        <section id="affiliation" className="py-2 sm:py-4 lg:py-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Experience
          </h2>
          
          <div className="space-y-4 sm:space-y-5">
            <ExperienceCard 
              title="Research Scholar"
              role="PhD Candidate"
              org="Indian Institute of Science Education and Research (IISER) Bhopal"
              date="Present"
              icon={<GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />}
            />
            <ExperienceCard 
              title="Robotic Perception Lab"
              role="Researcher"
              org="Under Dr. Sundaram Muthu"
              date="Present"
              icon={<Bot className="w-6 h-6 sm:w-7 sm:h-7" />}
            />
          </div>
        </section>

        <SectionDivider />

        {/* Education Section
        <section id="education" className="py-2 sm:py-4 lg:py-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Education
          </h2>
          
          <div className="space-y-4 sm:space-y-5">
            <ExperienceCard 
              title="M.Tech"
              role="Maulana Azad National Institute of Technology (MANIT)"
              org="Bhopal, India"
              date="2023"
              icon={<BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />}
            />
            <ExperienceCard 
              title="B.Tech"
              role="University Institute of Technology Rajiv Gandhi Proudyogiki Vishwavidyalaya (UIT RGPV)"
              org="Bhopal, India"
              date="2019"
              icon={<Code className="w-6 h-6 sm:w-7 sm:h-7" />}
            />
          </div>
        </section>

        <SectionDivider /> */}

        {/* Research Interests (Tech Stack Style) */}
        <section id="research" className="py-2 sm:py-4 lg:py-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Research Interests
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <TechPill icon="🧊" label="3D Reconstruction" />
            <TechPill icon="📐" label="Multi-View Geometry" />
            <TechPill icon="🧠" label="NeRFs" />
            <TechPill icon="👁️" label="Visual SLAM" />
            <TechPill icon="🤖" label="Robotic Perception" />
            <TechPill icon="🦾" label="Embodied Intelligence" />
          </div>
        </section>

        <SectionDivider />

        {/* Contact Section */}
        <section id="contact" className="py-8 sm:py-12 lg:py-8 text-center">
          <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-secondary text-[10px] sm:text-xs font-medium mb-4 sm:mb-6 tracking-wide">
            CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Open to research collaboration and academic discussion.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-8 sm:mb-10">
            
          </p>
          
          <a 
            href="mailto:navodita25@iiserb.ac.in"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-foreground text-background font-bold text-base sm:text-lg hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            Email: navodita25@iiserb.ac.in
          </a>

          <div className="mt-12 sm:mt-16 flex justify-center gap-4 sm:gap-6">
             {/* Socials removed as requested */}
          </div>
        </section>

      </main>
    </div>
  );
}

// Components

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-5 sm:py-6 opacity-40">
      <div className="w-full h-px max-w-[200px] bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="mx-2 text-border text-xs">✻</div>
      <div className="w-full h-px max-w-[200px] bg-linear-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function DockLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      className="p-2.5 rounded-xl hover:bg-secondary/80 transition-all duration-200 hover:-translate-y-1 relative group"
      style={{ 
        color: 'var(--foreground)',
      }}
      aria-label={label}
    >
      {icon}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-popover text-popover-foreground text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-border pointer-events-none shadow-md translate-y-2 group-hover:translate-y-0">
        {label}
      </span>
    </a>
  );
}

function TechPill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group cursor-default hover:-translate-y-0.5 shadow-sm hover:shadow-md">
      <span className="text-2xl sm:text-3xl grayscale group-hover:grayscale-0 transition-all filter">{icon}</span>
      <span className="text-sm sm:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
    </div>
  );
}

function ExperienceCard({ title, role, org, date, icon }: { title: string; role: string; org: string; date: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card/30 hover:bg-card/80 transition-all border border-transparent hover:border-primary/20 group hover:shadow-lg">
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-xl bg-secondary/80 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5 sm:mb-2">
          <h3 className="font-semibold text-foreground text-lg sm:text-xl lg:text-lg truncate">{title}</h3>
          <span className="text-xs sm:text-sm lg:text-xs text-muted-foreground font-mono bg-secondary px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md self-start sm:self-auto">{date}</span>
        </div>
        <p className="text-sm sm:text-base lg:text-sm font-medium text-foreground/90 mb-0.5 sm:mb-1">{role}</p>
        {org && <p className="text-sm sm:text-base lg:text-sm text-muted-foreground">{org}</p>}
      </div>
    </div>
  );
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a 
      href={href}
      className="p-3.5 rounded-2xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all border border-border/50 hover:scale-110 hover:shadow-md"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
