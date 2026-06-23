import { motion } from 'framer-motion';
import { Mail, Zap, MessageSquare, Workflow, BrainCircuit, Phone, ArrowRight, Check, ShieldCheck, Clock, Target, Star, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';


const roadmap = [
    {
        quarter: "Live Now",
        accent: "blue" as const,
        items: [
            {
                icon: Phone,
                title: "AI Voice Receptionist",
                desc: "Answers every call, books appointments, captures leads — 24/7. Our flagship product.",
                chips: ["24/7 Answering", "Appointment Booking", "Lead Capture"],
                live: true,
            },
        ],
    },
    {
        quarter: "Q3 2025",
        accent: "purple" as const,
        items: [
            {
                icon: Mail,
                title: "AI Email Automation",
                desc: "Smart sequences that nurture leads and book appointments on autopilot.",
                chips: ["Instant replies", "Personalized outreach", "Zero missed leads"],
                live: false,
            },
            {
                icon: Zap,
                title: "Lead Generation Systems",
                desc: "Intelligent funnels that qualify prospects automatically. Only hot leads reach your team.",
                chips: ["24/7 qualification", "CRM sync", "Higher conversions"],
                live: false,
            },
        ],
    },
    {
        quarter: "Q4 2025",
        accent: "purple" as const,
        items: [
            {
                icon: MessageSquare,
                title: "AI Website Chatbots",
                desc: "Custom-trained LLMs that convert visitors into booked appointments.",
                chips: ["Resolves 80% of queries", "Books instantly", "Multi-language"],
                live: false,
            },
            {
                icon: Globe,
                title: "Social Media Automation",
                desc: "AI-run socials with automated DM lead capture and content scheduling.",
                chips: ["Content calendars", "DM lead capture", "Multi-platform"],
                live: false,
            },
        ],
    },
    {
        quarter: "Q1 2026",
        accent: "purple" as const,
        items: [
            {
                icon: Workflow,
                title: "Automation Workflows",
                desc: "Connect your tools. Orchestrate complex cross-app tasks. Eliminate manual data entry.",
                chips: ["Saves 20+ hrs/week", "Instant triggers", "No errors"],
                live: false,
            },
            {
                icon: BrainCircuit,
                title: "Custom AI Development",
                desc: "Bespoke internal AI tools, apps, and dashboards built for your exact workflows.",
                chips: ["Full data ownership", "Tailored to SOPs", "Scalable"],
                live: false,
            },
        ],
    },
];

const Services = () => {
    return (
        <div className="bg-brand-bg text-brand-text">

            {/* ─── HERO — Left headline + Right status board ─── */}
            <section className="relative min-h-screen flex items-center overflow-hidden border-b border-brand-border pt-32 pb-16">

                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(var(--theme-primary-rgb),0.12) 1px, transparent 1px)', backgroundSize: '36px 36px', opacity: 0.05 }} />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-blue/4 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/4 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-[1fr_460px] gap-14 lg:gap-20 items-center">

                        {/* ── Left: Big vertical statement ── */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center gap-3 mb-10"
                            >
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">AI Automations Platform</span>
                            </motion.div>

                            <div className="overflow-hidden mb-8">
                                {[
                                    { text: "AI That Works",  accent: false },
                                    { text: "While",         accent: false },
                                    { text: "You Sleep.",     accent: true  },
                                ].map(({ text, accent }, i) => (
                                    <motion.h1
                                        key={text}
                                        initial={{ y: '105%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.75, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className={`block font-black leading-[0.88] tracking-tighter select-none
                                            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                                            ${accent ? 'text-accent-blue' : 'text-brand-text'}`}
                                    >
                                        {text}
                                    </motion.h1>
                                ))}
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-brand-text-muted text-base sm:text-lg mb-10 max-w-md leading-relaxed"
                            >
                                Six AI products that replace your most expensive manual operations. One is live right now.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                                className="flex flex-wrap gap-4 mb-10"
                            >
                                <Link to="/services/ai-voice-receptionist"
                                    className="btn-primary py-4 px-9 text-base flex items-center gap-2"
                                    style={{ boxShadow: `0 0 32px rgba(var(--theme-primary-rgb),0.3)` }}>
                                    Try Live Demo <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link to="/contact" className="btn-secondary py-4 px-9 text-base">
                                    Get Free AI Audit
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-2"
                            >
                                {[
                                    { icon: ShieldCheck, text: "HIPAA Compliant" },
                                    { icon: Clock,       text: "Live in 5 Days"  },
                                    { icon: Target,      text: "Fully Managed"   },
                                ].map(({ icon: Icon, text }) => (
                                    <span key={text} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text-muted border border-brand-border bg-brand-glass rounded-full px-3 py-1.5">
                                        <Icon className="w-3.5 h-3.5 text-accent-blue" /> {text}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* ── Right: System status board ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 28 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="rounded-2xl border border-brand-border overflow-hidden"
                            style={{ background: 'var(--theme-glass)', backdropFilter: 'blur(20px)' }}
                        >
                            {/* Board header */}
                            <div className="px-5 py-4 border-b border-brand-border flex items-center justify-between"
                                style={{ background: `rgba(var(--theme-primary-rgb),0.03)` }}>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text-muted">System Status</span>
                                </div>
                                <span className="text-[10px] font-bold text-brand-text-muted/50">Buzcall Platform · 2025</span>
                            </div>

                            {/* Column headers */}
                            <div className="grid grid-cols-[24px_1fr_80px] gap-3 px-5 py-2.5 border-b border-brand-border/40">
                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-text-muted/30">#</span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-text-muted/30">Product</span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-text-muted/30 text-right">Status</span>
                            </div>

                            {/* Service rows */}
                            {[
                                { num: "01", icon: Phone,         name: "AI Voice Receptionist", status: "LIVE",   live: true,  eta: "" },
                                { num: "02", icon: Mail,          name: "Email Automation",       status: "Q3 '25", live: false, eta: "Q3 2025" },
                                { num: "03", icon: Zap,           name: "Lead Generation",        status: "Q3 '25", live: false, eta: "Q3 2025" },
                                { num: "04", icon: MessageSquare, name: "AI Chatbots",            status: "Q4 '25", live: false, eta: "Q4 2025" },
                                { num: "05", icon: Globe,         name: "Social Media",           status: "Q4 '25", live: false, eta: "Q4 2025" },
                                { num: "06", icon: Workflow,      name: "Automation Workflows",   status: "Q1 '26", live: false, eta: "Q1 2026" },
                            ].map(({ num, icon: Icon, name, status, live }, idx) => (
                                <motion.div
                                    key={num}
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.07 + 0.5, duration: 0.4 }}
                                    className={`grid grid-cols-[24px_1fr_80px] gap-3 items-center px-5 py-4 border-b border-brand-border/25 last:border-b-0 transition-colors duration-200 group ${live ? 'hover:bg-accent-blue/4' : 'hover:bg-brand-glass/50'}`}
                                >
                                    {/* Number */}
                                    <span className="text-[11px] font-black tabular-nums text-brand-text-muted/30 group-hover:text-brand-text-muted/60 transition-colors">{num}</span>

                                    {/* Name + icon */}
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${live ? 'bg-accent-blue/12 border border-accent-blue/20 group-hover:bg-accent-blue/20' : 'bg-brand-glass border border-brand-border'}`}>
                                            <Icon className={`w-3.5 h-3.5 ${live ? 'text-accent-blue' : 'text-brand-text-muted/60'}`} />
                                        </div>
                                        <span className={`text-sm font-bold leading-none truncate transition-colors duration-200 ${live ? 'text-brand-text group-hover:text-accent-blue' : 'text-brand-text-muted/70'}`}>
                                            {name}
                                        </span>
                                    </div>

                                    {/* Status badge */}
                                    <div className="flex justify-end">
                                        {live ? (
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent-blue border border-accent-blue/30 bg-accent-blue/8 rounded-full px-2.5 py-1 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                                {status}
                                            </span>
                                        ) : (
                                            <span className="text-[10px] font-bold text-brand-text-muted/40 whitespace-nowrap">{status}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Board footer */}
                            <div className="px-5 py-3 flex items-center justify-between"
                                style={{ background: `rgba(var(--theme-primary-rgb),0.02)` }}>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-text-muted/30">6 products · 1 platform</span>
                                <Link to="/contact" className="text-[10px] font-bold text-accent-blue hover:underline">
                                    Join waitlist →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── ROADMAP TIMELINE ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 pb-6 border-b border-brand-border/40"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="h-px w-10 bg-accent-blue" />
                            <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Product Roadmap</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                            What's <span className="text-accent-blue">Coming</span>
                        </h2>
                    </motion.div>

                    {/* Timeline rows */}
                    <div className="space-y-14">
                        {roadmap.map(({ quarter, accent, items }, qIdx) => (
                            <motion.div
                                key={quarter}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: qIdx * 0.1, duration: 0.55 }}
                            >
                                {/* Quarter label */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className={`text-xs font-black uppercase tracking-[0.25em] border rounded-full px-4 py-1.5 ${
                                        accent === 'blue'
                                            ? 'text-accent-blue border-accent-blue/30 bg-accent-blue/8'
                                            : 'text-accent-purple border-accent-purple/30 bg-accent-purple/8'
                                    }`}>
                                        {quarter}
                                    </span>
                                    <div className="flex-1 h-px bg-brand-border/40" />
                                </div>

                                {/* Service cards in this quarter */}
                                <div className={`grid gap-5 ${items.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 sm:grid-cols-2'}`}>
                                    {items.map(({ icon: Icon, title, desc, chips, live }) => (
                                        <div key={title}
                                            className={`glass-card flex flex-col gap-4 relative overflow-hidden ${
                                                live ? 'border-accent-blue/30' : ''
                                            }`}
                                        >
                                            {live && <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />}

                                            <div className="flex items-start justify-between gap-4">
                                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${
                                                    live
                                                        ? 'bg-accent-blue/12 border-accent-blue/25'
                                                        : 'bg-brand-glass border-brand-border'
                                                }`}>
                                                    <Icon className={`w-5 h-5 ${live ? 'text-accent-blue' : 'text-brand-text-muted'}`} />
                                                </div>

                                                {live ? (
                                                    <Link
                                                        to="/services/ai-voice-receptionist"
                                                        className="text-xs font-bold text-accent-blue border border-accent-blue/25 bg-accent-blue/8 rounded-full px-3 py-1.5 flex items-center gap-1.5 shrink-0 hover:bg-accent-blue/15 transition-colors"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                                        Try Demo →
                                                    </Link>
                                                ) : (
                                                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-text-muted/50 border border-brand-border rounded-full px-2.5 py-1 shrink-0">
                                                        Coming Soon
                                                    </span>
                                                )}
                                            </div>

                                            <div>
                                                <h3 className={`text-base sm:text-lg font-black mb-1.5 leading-snug ${live ? 'text-brand-text' : 'text-brand-text'}`}>
                                                    {title}
                                                </h3>
                                                <p className="text-sm text-brand-text-muted leading-relaxed">{desc}</p>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-border/40">
                                                {chips.map(c => (
                                                    <span key={c} className="inline-flex items-center gap-1 text-[10px] text-brand-text-muted border border-brand-border/50 rounded-full px-2 py-0.5">
                                                        <Check className={`w-2.5 h-2.5 shrink-0 ${live ? 'text-accent-blue' : 'text-brand-text-muted/60'}`} />
                                                        {c}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Join waitlist */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <Link to="/contact"
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent-blue border border-accent-blue/25 bg-accent-blue/8 rounded-full px-6 py-3 hover:bg-accent-blue/15 transition-colors duration-200">
                            Join the early access waitlist <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── FLAGSHIP DEEP-DIVE — theme-aware, no forced dark ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(var(--theme-primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14 pb-6 border-b border-brand-border/40 flex items-end justify-between gap-6"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Flagship · Deep Dive</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                                AI Voice <span className="text-accent-blue">Receptionist</span>
                            </h2>
                        </div>
                        <Link to="/services/ai-voice-receptionist"
                            className="hidden sm:flex btn-primary py-3 px-7 text-sm items-center gap-2 shrink-0"
                            style={{ boxShadow: `0 0 24px rgba(var(--theme-primary-rgb),0.25)` }}>
                            Try It Now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">

                        {/* Left: Problem / Solution — terminal-style cards */}
                        <div className="space-y-4">
                            {[
                                {
                                    label: "The Problem",
                                    labelColor: "text-accent-purple",
                                    borderColor: "border-accent-purple/40",
                                    bg: "rgba(var(--theme-purple-rgb),0.04)",
                                    text: "Your front desk misses calls after hours, loses leads to voicemail, and costs you a full-time salary every month.",
                                },
                                {
                                    label: "Our Solution",
                                    labelColor: "text-accent-blue",
                                    borderColor: "border-accent-blue/40",
                                    bg: "rgba(var(--theme-primary-rgb),0.04)",
                                    text: "We deploy a 24/7 HIPAA-ready AI receptionist on your existing phone line. It books appointments, answers FAQs, and captures every lead — automatically.",
                                },
                            ].map(({ label, labelColor, borderColor, bg, text }) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`rounded-2xl border ${borderColor} p-6`}
                                    style={{ background: bg }}
                                >
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${labelColor}`}>{label}</p>
                                    <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">{text}</p>
                                </motion.div>
                            ))}

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="glass-card grid grid-cols-1 sm:grid-cols-2 gap-3"
                            >
                                {[
                                    "Never miss an inbound call — even at 2 AM",
                                    "HIPAA-compliant infrastructure from day one",
                                    "Flat monthly subscription, zero hidden fees",
                                    "Live within 5 business days, fully managed",
                                ].map(b => (
                                    <div key={b} className="flex items-start gap-2.5 text-sm text-brand-text-muted">
                                        <Check className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                        {b}
                                    </div>
                                ))}
                            </motion.div>

                            <Link to="/services/ai-voice-receptionist"
                                className="sm:hidden btn-primary py-4 px-8 text-sm flex items-center gap-2 justify-center w-full"
                                style={{ boxShadow: `0 0 24px rgba(var(--theme-primary-rgb),0.25)` }}>
                                Try Live Demo <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Right: Stats */}
                        <div className="flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card text-center py-8"
                            >
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50 mb-3">A dental clinic reported</p>
                                <p className="text-6xl sm:text-7xl font-black text-brand-text tabular-nums leading-none mb-2">+22</p>
                                <p className="text-accent-blue text-sm font-bold">extra bookings month one · zero extra staff</p>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { value: "10K+", label: "Monthly Calls",    note: "and growing"       },
                                    { value: "< 1s", label: "Response Time",    note: "every single call" },
                                    { value: "98%",  label: "Satisfaction",     note: "post-call surveys" },
                                    { value: "5",    label: "Days to Go Live",  note: "fully managed"     },
                                ].map(({ value, label, note }, idx) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.07 }}
                                        className="glass-card !p-4 text-center"
                                    >
                                        <p className="text-xl sm:text-2xl font-black text-brand-text tabular-nums leading-none mb-0.5">{value}</p>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-brand-text-muted/50 mb-0.5">{label}</p>
                                        <p className="text-[10px] text-brand-text-muted/35 italic">{note}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="glass-card border-accent-blue/20"
                                style={{ background: `rgba(var(--theme-primary-rgb),0.04)` }}
                            >
                                <p className="text-[10px] font-black uppercase tracking-widest text-accent-blue/60 mb-3">Capabilities</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["24/7 Answering", "Booking", "SMS Confirmations", "Lead Capture", "10+ Languages", "HIPAA", "Calendar Sync", "Unlimited Calls"].map(f => (
                                        <span key={f} className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-blue border border-accent-blue/20 bg-accent-blue/6 rounded-full px-2.5 py-1">
                                            <Check className="w-3 h-3 shrink-0" /> {f}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 py-14 px-8 sm:px-12 glass-card relative overflow-hidden"
                    >
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />

                        <div className="flex-1 max-w-xl">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Start Today</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text leading-[0.9] tracking-tight mb-5">
                                Stop Losing Revenue<br /><span className="text-accent-blue">to Missed Calls.</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
                                Let's build an AI system tailored to your specific bottlenecks. Free demo, no commitment.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
                            <Link to="/services/ai-voice-receptionist"
                                className="btn-primary py-4 px-10 text-base justify-center"
                                style={{ boxShadow: `0 0 30px rgba(var(--theme-primary-rgb),0.28)` }}>
                                Try Live Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="btn-secondary py-4 px-10 text-base justify-center">
                                Get Free AI Audit
                            </Link>
                            <p className="text-center text-[10px] text-brand-text-muted/50">Free · No commitment · 24h reply</p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Services;
