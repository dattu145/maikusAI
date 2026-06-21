import { motion } from 'framer-motion';
import { Target, Zap, Shield, Cpu, Bot, Phone, Mail, Globe, ArrowRight, Check, Users, Star, MessageSquare, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const heroStats = [
    { value: "10K+", label: "Calls Monthly",      sub: "and growing"          },
    { value: "< 1s", label: "Response Time",       sub: "every single call"    },
    { value: "98%",  label: "Caller Satisfaction", sub: "post-call surveys"    },
    { value: "5",    label: "Days to Go Live",     sub: "from sign-up to live" },
];

const marqueeItems = [
    "AI Voice Receptionist", "24/7 Availability", "HIPAA Compliant", "Appointment Booking",
    "Lead Capture", "10+ Languages", "SMS Confirmations", "Fully Managed",
];

const About = () => {
    return (
        <div className="bg-brand-bg text-brand-text">

            {/* ─── HERO ─── */}
            <section className="relative min-h-screen flex flex-col overflow-hidden border-b border-brand-border">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(var(--theme-primary-rgb),0.14) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.05 }} />
                    <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-blue/6 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-[80px]" />
                </div>

                <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 lg:pt-44 pb-16 grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_360px] gap-0 relative z-10">
                    <div className="flex flex-col justify-center lg:pr-16 lg:border-r border-brand-border/30">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-10">
                            <div className="h-px w-10 bg-accent-blue" />
                            <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Our Story</span>
                        </motion.div>

                        <div className="overflow-hidden mb-8">
                            {["We Build", "AI That", "Works."].map((line, i) => (
                                <motion.div key={line} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75, delay: i * 0.12 + 0.1, ease: [0.22, 1, 0.36, 1] }}>
                                    <h1 className={`block font-black leading-[0.88] tracking-tighter select-none text-6xl sm:text-7xl md:text-8xl xl:text-9xl ${i === 1 ? 'text-accent-blue' : 'text-brand-text'}`}>{line}</h1>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-lg mb-10">
                            Buzcall is an AI automation agency. We build intelligent systems that handle your front desk — so you never miss a call, appointment, or customer again.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-wrap gap-4 mb-12">
                            <Link to="/services/ai-voice-receptionist" className="btn-primary py-4 px-8 text-sm" style={{ boxShadow: `0 0 28px rgba(var(--theme-primary-rgb),0.28)` }}>
                                Try Live Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="btn-secondary py-4 px-8 text-sm">Get in Touch</Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex lg:hidden flex-wrap gap-x-8 gap-y-4">
                            {heroStats.map(({ value, label }) => (
                                <div key={label}>
                                    <p className="text-2xl font-black text-brand-text tabular-nums">{value}</p>
                                    <p className="text-[10px] text-brand-text-muted uppercase tracking-widest font-bold">{label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="hidden lg:flex flex-col justify-center pl-14 gap-0 relative">
                        <div className="absolute left-0 top-[10%] bottom-[10%] w-px bg-accent-blue/20" />
                        {heroStats.map(({ value, label, sub }, i) => (
                            <motion.div key={label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }} className="group py-7 border-b border-brand-border/30 last:border-b-0">
                                <p className="text-4xl xl:text-5xl font-black text-brand-text tabular-nums leading-none mb-1.5 group-hover:text-accent-blue transition-colors duration-300">{value}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted mb-0.5">{label}</p>
                                <p className="text-[10px] text-brand-text-muted/40 italic">{sub}</p>
                            </motion.div>
                        ))}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-8 flex items-center gap-2 text-accent-blue text-[10px] font-bold border border-accent-blue/20 bg-accent-blue/8 rounded-full px-3 py-1.5 self-start">
                            <Shield className="w-3 h-3" /> HIPAA Compliant
                        </motion.div>
                    </div>
                </div>

                {/* Marquee strip */}
                <div className="border-t border-brand-border/30 overflow-hidden relative z-10">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        <motion.div animate={{ x: [0, "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="flex shrink-0 gap-0">
                            {[...marqueeItems, ...marqueeItems].map((item, i) => (
                                <div key={i} className="flex items-center gap-0 shrink-0">
                                    <span className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-widest text-brand-text-muted/50 whitespace-nowrap">{item}</span>
                                    <span className="text-brand-border/60 text-xs">·</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── MISSION + VISION — Full-width typographic layout ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(var(--theme-primary-rgb),0.04)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    {/* Section label */}
                    <motion.div {...fadeUp()} className="flex items-center gap-4 mb-16">
                        <div className="h-px w-10 bg-accent-blue" />
                        <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Purpose</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-brand-border/40">
                        {/* Mission */}
                        <motion.div {...fadeUp(0.1)} className="pb-14 lg:pb-0 lg:pr-16">
                            <span className="text-[120px] sm:text-[160px] font-black leading-none tabular-nums text-brand-border/20 select-none block -mb-6 lg:-mb-10">01</span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text mb-5 flex items-center gap-3">
                                <span className="w-2 h-6 bg-accent-blue rounded-full inline-block shrink-0" />
                                Our Mission
                            </h3>
                            <p className="text-brand-text-muted leading-relaxed text-base sm:text-lg max-w-lg">
                                To drastically reduce the time businesses spend on repetitive, manual tasks. Human talent should be reserved for strategy, creativity, and connection —{" "}
                                <span className="text-brand-text font-semibold">not data entry and missed calls.</span>
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div {...fadeUp(0.2)} className="pt-14 lg:pt-0 lg:pl-16">
                            <span className="text-[120px] sm:text-[160px] font-black leading-none tabular-nums text-brand-border/20 select-none block -mb-6 lg:-mb-10">02</span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text mb-5 flex items-center gap-3">
                                <span className="w-2 h-6 bg-accent-purple rounded-full inline-block shrink-0" />
                                Our Vision
                            </h3>
                            <p className="text-brand-text-muted leading-relaxed text-base sm:text-lg max-w-lg">
                                Helping 10,000 operations-heavy businesses fully automate their front desk and workflows by 2030 —{" "}
                                <span className="text-brand-text font-semibold">transforming them into lean, AI-powered enterprises.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── FOUNDER STORY — Magazine editorial ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Top label row */}
                    <motion.div {...fadeUp()} className="flex items-center justify-between mb-16 pb-6 border-b border-brand-border/40">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-10 bg-accent-blue" />
                            <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Our Story</span>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-brand-text-muted/40">Buzcall · Est. 2024</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                        {/* Image block */}
                        <motion.div {...fadeUp(0.1)} className="lg:col-span-4">
                            <div className="relative rounded-2xl overflow-hidden border border-brand-border aspect-[3/4] max-w-xs mx-auto lg:mx-0"
                                style={{ background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb),0.06) 0%, rgba(var(--theme-bg-card-rgb),0.95) 60%)` }}>
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-brand-text-muted">
                                    <div className="w-24 h-24 rounded-full border-2 border-accent-blue/30 bg-accent-blue/8 flex items-center justify-center">
                                        <Cpu className="w-12 h-12 text-accent-blue/60" />
                                    </div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-accent-blue/50">Founder Portrait</span>
                                </div>
                                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-accent-blue/40" />
                                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-accent-blue/40" />

                                {/* Caption strip */}
                                <div className="absolute bottom-0 inset-x-0 px-4 py-3 border-t border-brand-border/30" style={{ background: 'rgba(var(--theme-bg-card-rgb),0.85)', backdropFilter: 'blur(10px)' }}>
                                    <p className="font-bold text-brand-text text-sm">Dattu</p>
                                    <p className="text-accent-blue text-[10px] font-semibold uppercase tracking-wider">Founder & Lead AI Engineer</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story text */}
                        <motion.div {...fadeUp(0.2)} className="lg:col-span-8 flex flex-col justify-center">
                            {/* Pull quote */}
                            <blockquote className="border-l-4 border-accent-blue pl-6 mb-8">
                                <p className="text-xl sm:text-2xl font-bold text-brand-text leading-snug italic">
                                    "Businesses didn't need another SaaS subscription. They needed AI that actually picks up the phone."
                                </p>
                            </blockquote>

                            <div className="space-y-4 text-brand-text-muted leading-relaxed text-sm sm:text-base mb-8">
                                <p>It started simply: seeing smart business owners drowning in mundane tasks — missing client inquiries, spending weekends organizing CRMs, losing revenue to unanswered calls at 9 PM.</p>
                                <p>I built Buzcall to give every clinic, law firm, and salon the same unfair advantage that large corporations have — an intelligent front desk that never sleeps, never forgets, and never puts anyone on hold.</p>
                                <p>Today, every product we ship is measured against one question: <span className="text-brand-text font-semibold">does it make money, save time, or reduce stress?</span> If not, we don't build it.</p>
                            </div>

                            {/* Achievement tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {[
                                    "10,000+ calls handled monthly",
                                    "HIPAA-compliant from day one",
                                    "ROI within week one",
                                    "5-day go-live guarantee",
                                ].map(tag => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-border bg-brand-glass text-brand-text-muted rounded-full px-3 py-1.5">
                                        <Check className="w-3 h-3 text-accent-blue shrink-0" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link to="/services/ai-voice-receptionist" className="inline-flex items-center gap-2 text-sm font-bold text-accent-blue hover:gap-3 transition-all duration-200 self-start">
                                See it in action <ChevronRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── WHAT WE BUILD — Featured + grid ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...fadeUp()} className="flex items-center justify-between mb-14 pb-6 border-b border-brand-border/40">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Products</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                                What We <span className="text-accent-blue">Build</span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-brand-text-muted text-sm max-w-xs text-right leading-relaxed">
                            Every product removes repetitive work and replaces it with a reliable AI system.
                        </p>
                    </motion.div>

                    {/* Featured card — AI Voice Receptionist */}
                    <motion.div {...fadeUp(0.1)} className="rounded-3xl border border-accent-blue/25 overflow-hidden mb-5 relative"
                        style={{ background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb),0.08) 0%, rgba(var(--theme-bg-card-rgb),0.95) 55%)` }}>
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />
                        <div className="p-7 sm:p-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-accent-blue" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/8 rounded-full px-3 py-1">Live Now</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-brand-text mb-2">AI Voice Receptionist</h3>
                                <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
                                    Answers every inbound call, books appointments, captures leads, and sends SMS confirmations — 24 hours a day, 7 days a week. Never miss a customer again.
                                </p>
                            </div>
                            <Link to="/services/ai-voice-receptionist"
                                className="btn-primary py-3.5 px-7 text-sm shrink-0 whitespace-nowrap"
                                style={{ boxShadow: `0 0 24px rgba(var(--theme-primary-rgb),0.25)` }}>
                                Try Demo <ArrowRight className="ml-1.5 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Smaller product cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {[
                            { icon: Mail,         title: "Email Automation",  badge: "Q3 2025", blue: false },
                            { icon: Target,       title: "Lead Funnels",      badge: "Q3 2025", blue: true  },
                            { icon: MessageSquare,title: "AI Chatbots",        badge: "Q4 2025", blue: false },
                            { icon: Zap,          title: "CRM Automation",    badge: "Q1 2026", blue: true  },
                            { icon: Bot,          title: "Custom AI Dev",     badge: "Ongoing", blue: false },
                        ].map(({ icon: Icon, title, badge, blue }, idx) => (
                            <motion.div key={title} {...fadeUp(idx * 0.06 + 0.2)}
                                className="glass-card flex flex-col gap-3 group hover:border-accent-blue/35 transition-all duration-300">
                                <div className="flex items-start justify-between">
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${blue ? 'bg-accent-blue/10 border-accent-blue/20' : 'bg-accent-purple/10 border-accent-purple/20'}`}>
                                        <Icon className={`w-4 h-4 ${blue ? 'text-accent-blue' : 'text-accent-purple'}`} />
                                    </div>
                                    <span className={`text-[9px] font-bold uppercase tracking-widest border rounded-full px-2 py-0.5 ${blue ? 'text-accent-blue border-accent-blue/25 bg-accent-blue/8' : 'text-accent-purple border-accent-purple/25 bg-accent-purple/8'}`}>
                                        {badge}
                                    </span>
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-brand-text leading-snug group-hover:text-accent-blue transition-colors">{title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CORE VALUES — Full-width numbered list ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...fadeUp()} className="flex items-center gap-4 mb-16 pb-6 border-b border-brand-border/40">
                        <div className="h-px w-10 bg-accent-blue" />
                        <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Values</span>
                    </motion.div>

                    <div className="space-y-0">
                        {[
                            { num: "01", icon: Target, title: "ROI-Focused",  desc: "If our systems don't save you money or make you money, we simply don't build them. Every feature, every automation is measured against real business outcomes.", blue: true  },
                            { num: "02", icon: Zap,    title: "Speed",        desc: "We deploy lean, iterate fast, and deliver working systems in weeks — not months. Done is better than perfect, shipping beats planning.",                        blue: false },
                            { num: "03", icon: Shield, title: "Simplicity",   desc: "Complex on the backend. Beautifully simple and completely frictionless for your team on the front. Your team shouldn't need a manual.",                         blue: true  },
                            { num: "04", icon: Cpu,    title: "Innovation",   desc: "We constantly evaluate the latest AI models and infrastructure to give our clients an unfair competitive advantage. We never settle for yesterday's tech.",     blue: false },
                        ].map(({ num, icon: Icon, title, desc, blue }, idx) => (
                            <motion.div key={title} {...fadeUp(idx * 0.08)}
                                className="group grid grid-cols-1 sm:grid-cols-[80px_1fr_1fr] items-center gap-6 py-8 border-b border-brand-border/30 hover:bg-accent-blue/2 transition-colors duration-300 -mx-6 px-6 lg:-mx-12 lg:px-12">
                                {/* Number */}
                                <span className="text-5xl sm:text-6xl font-black tabular-nums text-brand-border/30 group-hover:text-accent-blue/20 transition-colors duration-300 leading-none select-none">{num}</span>
                                {/* Title + icon */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${blue ? 'bg-accent-blue/10 border-accent-blue/20 group-hover:bg-accent-blue/18' : 'bg-accent-purple/10 border-accent-purple/20 group-hover:bg-accent-purple/18'}`}>
                                        <Icon className={`w-5 h-5 ${blue ? 'text-accent-blue' : 'text-accent-purple'}`} />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-brand-text group-hover:text-accent-blue transition-colors duration-300 leading-none">{title}</h3>
                                </div>
                                {/* Description */}
                                <p className="text-brand-text-muted text-sm leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── BY THE NUMBERS ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...fadeUp()} className="flex items-center gap-4 mb-14 pb-6 border-b border-brand-border/40">
                        <div className="h-px w-10 bg-accent-blue" />
                        <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Results</span>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-brand-border/40 border border-brand-border/40 rounded-2xl overflow-hidden"
                        style={{ background: "var(--theme-glass)", backdropFilter: "blur(16px)" }}>
                        {[
                            { value: "10,000+", label: "Calls Monthly",      sub: "and growing"          },
                            { value: "< 1s",    label: "Response Time",       sub: "every single call"    },
                            { value: "98%",     label: "Caller Satisfaction", sub: "post-call surveys"    },
                            { value: "5 days",  label: "Average Go-Live",     sub: "from sign-up to live" },
                        ].map(({ value, label, sub }, idx) => (
                            <motion.div key={label} {...fadeUp(idx * 0.08)} className="flex flex-col items-center text-center px-4 py-8 sm:py-10 group hover:bg-accent-blue/4 transition-colors duration-200">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-text tabular-nums mb-1 group-hover:text-accent-blue transition-colors duration-300">{value}</p>
                                <p className="text-[10px] sm:text-xs text-brand-text-muted uppercase tracking-widest font-bold mb-1">{label}</p>
                                <p className="text-[10px] text-brand-text-muted/40 italic">{sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/6 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 py-14 px-8 sm:px-12 glass-card relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />

                        <div className="flex-1 max-w-xl">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Work With Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text leading-[0.9] tracking-tight mb-5">
                                Ready to<br /><span className="text-accent-blue">Automate?</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
                                Get a free demo built for your practice. Hear exactly how your AI receptionist will sound — no commitment required.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 shrink-0">
                            <Link to="/services/ai-voice-receptionist" className="btn-primary py-4 px-10 text-base justify-center"
                                style={{ boxShadow: `0 0 30px rgba(var(--theme-primary-rgb),0.28)` }}>
                                Try Live Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="btn-secondary py-4 px-10 text-base justify-center">
                                Get in Touch
                            </Link>
                            <p className="text-center text-[10px] text-brand-text-muted/50">
                                Free · No commitment · Live in 5 days
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
