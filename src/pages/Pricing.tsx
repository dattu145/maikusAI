import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, ShieldCheck, Phone, ArrowRight, Clock, Calendar, Bot, Globe, Zap, Star, Users, Target, MessageSquare, FileText, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import DotField from '../components/DotField';

const voicePlans = [
    {
        id: 'essential',
        name: 'Essential',
        monthly: '₹5,000',
        setup: '₹20,000 one-time',
        minutes: '200 mins/mo',
        overage: '₹40 / min',
        features: ['1 AI Receptionist', 'Dedicated Phone Number', 'Appointment Booking', 'Email Notifications', 'Basic Support'],
        cta: 'Get Started',
        popular: false,
    },
    {
        id: 'excel-integration',
        name: 'Excel Integration',
        monthly: '₹6,000',
        setup: '₹20,000 one-time',
        minutes: '200 mins/mo',
        overage: '₹40 / min',
        features: ['All Essential Features', 'Direct Excel / Sheets Sync', 'Automated Data Entry', 'Custom Caller Routing', 'Priority Support'],
        cta: 'Get Started',
        popular: false,
    },
    {
        id: 'dashboard-pro',
        name: 'Dashboard Pro',
        monthly: '₹7,500',
        setup: '₹25,000 one-time',
        minutes: '400 mins/mo',
        overage: '₹35 / min',
        features: ['Live Call Summary Dashboard', 'Full Transcripts & Recordings', 'Custom Script & AI Persona', 'Call Analytics & Insights', 'Dedicated Account Manager'],
        cta: 'Start Now',
        popular: true,
    },
    {
        id: 'custom-enterprise',
        name: 'Fully Custom',
        monthly: 'Custom',
        setup: 'Bespoke build',
        minutes: 'Custom Volume',
        overage: 'Negotiated',
        features: ['Unlimited AI Receptionists', 'Custom CRM / EHR Integrations', 'Multi-location Routing', 'Dedicated Infrastructure', '24/7 Priority SLA Support'],
        cta: 'Contact Us',
        popular: false,
    },
];

const included = [
    { icon: Bot,          title: "Full Setup & Config",        desc: "We write your script, configure the voice, and connect to your phone line." },
    { icon: Calendar,     title: "Calendar Integration",        desc: "Google Calendar, Calendly, or your PMS — synced in real time." },
    { icon: MessageSquare,title: "SMS Confirmations",           desc: "Automatic SMS to every caller after their appointment is booked." },
    { icon: FileText,     title: "Monthly Usage Reports",       desc: "Simple email breakdown of calls handled, bookings made, and leads captured." },
    { icon: Globe,        title: "Multi-Language Support",      desc: "English, Hindi, and regional Indian languages — all included." },
    { icon: ShieldCheck,  title: "HIPAA-Ready Infrastructure",  desc: "All calls encrypted at rest and in transit. Compliant from day one." },
    { icon: Zap,          title: "Ongoing Management",          desc: "We monitor, fine-tune, and update your receptionist every month." },
    { icon: Users,        title: "Unlimited Concurrent Calls",  desc: "No limits. Every caller gets through, no one ever goes to voicemail." },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const Pricing = () => {
    const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'));
    useEffect(() => {
        const obs = new MutationObserver(() => setIsLight(document.documentElement.classList.contains('light')));
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    return (
        <div className="bg-brand-bg text-brand-text">

            {/* ─── HERO — DotField stays ─── */}
            <section className="relative pt-36 pb-24 overflow-hidden border-b border-brand-border">
                <div className="absolute inset-0 pointer-events-none">
                    <DotField
                        dotRadius={2} dotSpacing={14} bulgeStrength={80}
                        glowRadius={180} sparkle={false} waveAmplitude={0}
                        gradientFrom={isLight ? 'rgba(76,51,214,0.55)' : 'rgba(0,240,255,0.45)'}
                        gradientTo={isLight ? 'rgba(124,58,237,0.38)' : 'rgba(151,112,230,0.32)'}
                        glowColor="transparent"
                    />
                </div>
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
                        {/* Left: huge headline */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                                    </span>
                                    Transparent Pricing
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                {["Simple,", "Predictable."].map((line, i) => (
                                    <motion.h1 key={line}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.75, delay: i * 0.1 + 0.1, ease: [0.22,1,0.36,1] }}
                                        className={`block font-black leading-[0.88] tracking-tighter select-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${i === 1 ? 'text-accent-blue' : 'text-brand-text'}`}>
                                        {line}
                                    </motion.h1>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: description + pills */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.65 }} className="pb-2">
                            <p className="text-brand-text-muted text-base sm:text-lg mb-8 leading-relaxed">
                                Flat monthly fees and transparent per-minute usage. Every plan includes full setup, configuration, and ongoing management — handled entirely by us.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { icon: ShieldCheck, text: "HIPAA Compliant"      },
                                    { icon: Clock,       text: "Live in 5 Days"       },
                                    { icon: Target,      text: "No Lock-In Contracts" },
                                    { icon: Star,        text: "Fully Managed"        },
                                ].map(({ icon: Icon, text }) => (
                                    <span key={text} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text-muted border border-brand-border bg-brand-glass rounded-full px-3 py-1.5">
                                        <Icon className="w-3.5 h-3.5 text-accent-blue" /> {text}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── PRICING PLANS — Featured + row comparison ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Editorial header */}
                    <motion.div {...fadeUp()} className="flex items-center justify-between mb-14 pb-6 border-b border-brand-border/40">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">AI Voice Receptionist</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                                Choose Your <span className="text-accent-blue">Plan</span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-brand-text-muted text-sm max-w-xs text-right leading-relaxed">
                            For clinics, real estate offices, salons & any business receiving inbound calls.
                        </p>
                    </motion.div>

                    {/* Featured popular card — full width */}
                    <motion.div {...fadeUp(0.1)} className="rounded-3xl border border-accent-blue/30 overflow-hidden mb-5 relative"
                        style={{ background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb),0.07) 0%, rgba(var(--theme-bg-card-rgb),0.95) 55%)` }}>
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />
                        <div className="p-7 sm:p-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 rounded-full px-2.5 py-0.5">Most Popular</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-text-muted border border-brand-border rounded-full px-2.5 py-0.5">Dashboard Pro</span>
                                </div>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl sm:text-5xl font-black text-brand-text tabular-nums">₹7,500</span>
                                    <span className="text-brand-text-muted text-sm">/mo · ₹25,000 one-time setup</span>
                                </div>
                                <p className="text-brand-text-muted text-xs mb-4">400 mins/mo free · ₹35 / min overage</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Live Dashboard", "Full Transcripts", "Custom Persona", "Analytics", "Account Manager"].map(f => (
                                        <span key={f} className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-blue border border-accent-blue/20 bg-accent-blue/8 rounded-full px-2.5 py-1">
                                            <Check className="w-3 h-3 shrink-0" /> {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Link to="/services/ai-voice-receptionist?plan=dashboard-pro#intake-form"
                                className="btn-primary py-3.5 px-8 text-sm shrink-0 whitespace-nowrap"
                                style={{ boxShadow: `0 0 24px rgba(var(--theme-primary-rgb),0.25)` }}>
                                Start Now <ArrowRight className="ml-1.5 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Other 3 plans as rows */}
                    <div className="space-y-0">
                        {voicePlans.filter(p => !p.popular).map((plan, idx) => (
                            <motion.div key={plan.id} {...fadeUp(idx * 0.08 + 0.2)}
                                className="group grid grid-cols-1 sm:grid-cols-[180px_1fr_auto] lg:grid-cols-[220px_1fr_200px] items-center gap-5 lg:gap-8 py-7 border-b border-brand-border/30 hover:bg-accent-blue/2 transition-colors duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12">
                                {/* Plan name + price */}
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-brand-text-muted/50 mb-1">{plan.name}</p>
                                    <p className="text-2xl sm:text-3xl font-black text-brand-text tabular-nums leading-none">
                                        {plan.monthly}{plan.monthly !== 'Custom' && <span className="text-sm font-normal text-brand-text-muted">/mo</span>}
                                    </p>
                                    <p className="text-[11px] text-brand-text-muted/60 mt-1">{plan.setup} · {plan.minutes}</p>
                                </div>
                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5">
                                    {plan.features.map(f => (
                                        <span key={f} className="inline-flex items-center gap-1 text-[11px] text-brand-text-muted border border-brand-border/50 bg-brand-glass rounded-full px-2.5 py-1">
                                            <Check className="w-3 h-3 text-accent-blue shrink-0" /> {f}
                                        </span>
                                    ))}
                                </div>
                                {/* CTA */}
                                <Link to={`/services/ai-voice-receptionist?plan=${plan.id}#intake-form`}
                                    className="btn-secondary py-2.5 px-6 text-sm text-center justify-center whitespace-nowrap self-center">
                                    {plan.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p {...fadeUp(0.5)} className="text-brand-text-muted/40 text-xs mt-8 text-center">
                        All prices exclude GST. Overage minutes billed end of month.{" "}
                        <Link to="/contact" className="text-accent-blue hover:underline">Contact us</Link> for volume discounts.
                    </motion.p>
                </div>
            </section>

            {/* ─── EVERYTHING INCLUDED — Bento mosaic grid ─── */}
            <section className="py-20 sm:py-28 border-b border-brand-border relative overflow-hidden bg-white dark:bg-brand-bg-alt">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(var(--theme-primary-rgb),0.04)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    {/* Section header — left-aligned editorial */}
                    <motion.div {...fadeUp()} className="mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px w-10 bg-accent-blue" />
                            <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Every Plan · No Exceptions</span>
                        </div>
                        <div className="flex items-end justify-between gap-8">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-tight leading-none">
                                8 Features.<br />
                                <span className="text-accent-blue">Zero Add-Ons.</span>
                            </h2>
                            <p className="hidden md:block text-brand-text-muted text-sm max-w-[220px] text-right leading-relaxed pb-1 shrink-0">
                                No hidden fees. The full feature set ships with every plan.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento grid — two featured + six compact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {/* Featured card 1 — Full Setup & Config */}
                        <motion.div {...fadeUp(0.05)}
                            className="sm:col-span-2 lg:col-span-2 rounded-2xl border border-accent-blue/15 overflow-hidden relative p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
                            style={{ background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb),0.08) 0%, rgba(var(--theme-bg-card-rgb),0.95) 60%)` }}>
                            <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />
                            <div className="w-14 h-14 rounded-2xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center shrink-0">
                                <Wrench className="w-7 h-7 text-accent-blue" />
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-accent-blue/60 mb-1">01</p>
                                <h3 className="text-xl sm:text-2xl font-black text-brand-text mb-2 leading-tight">Full Setup & Config</h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">We write your script, configure the voice, and connect to your phone line. Nothing for you to do.</p>
                            </div>
                        </motion.div>

                        {/* Calendar Integration */}
                        <motion.div {...fadeUp(0.1)} className="glass-card flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-accent-blue" />
                                </div>
                                <span className="text-3xl font-black tabular-nums text-brand-text/15 dark:text-brand-text/20 dark:text-white/22 leading-none select-none">02</span>
                            </div>
                            <h3 className="text-sm font-black text-brand-text">Calendar Integration</h3>
                            <p className="text-[11px] text-brand-text-muted leading-relaxed">Google Calendar, Calendly, or your PMS — synced in real time.</p>
                        </motion.div>

                        {/* SMS Confirmations */}
                        <motion.div {...fadeUp(0.13)} className="glass-card flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-accent-blue" />
                                </div>
                                <span className="text-3xl font-black tabular-nums text-brand-text/20 dark:text-white/22 leading-none select-none">03</span>
                            </div>
                            <h3 className="text-sm font-black text-brand-text">SMS Confirmations</h3>
                            <p className="text-[11px] text-brand-text-muted leading-relaxed">Automatic SMS to every caller after their appointment is booked.</p>
                        </motion.div>

                        {/* Monthly Reports */}
                        <motion.div {...fadeUp(0.16)} className="glass-card flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-accent-blue" />
                                </div>
                                <span className="text-3xl font-black tabular-nums text-brand-text/20 dark:text-white/22 leading-none select-none">04</span>
                            </div>
                            <h3 className="text-sm font-black text-brand-text">Monthly Usage Reports</h3>
                            <p className="text-[11px] text-brand-text-muted leading-relaxed">Simple email breakdown of calls handled, bookings, and leads.</p>
                        </motion.div>

                        {/* Multi-Language */}
                        <motion.div {...fadeUp(0.19)} className="glass-card flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-accent-purple" />
                                </div>
                                <span className="text-3xl font-black tabular-nums text-brand-text/20 dark:text-white/22 leading-none select-none">05</span>
                            </div>
                            <h3 className="text-sm font-black text-brand-text">Multi-Language Support</h3>
                            <p className="text-[11px] text-brand-text-muted leading-relaxed">English, Hindi & regional Indian languages — all included.</p>
                        </motion.div>

                        {/* HIPAA */}
                        <motion.div {...fadeUp(0.22)} className="glass-card flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-accent-purple" />
                                </div>
                                <span className="text-3xl font-black tabular-nums text-brand-text/20 dark:text-white/22 leading-none select-none">06</span>
                            </div>
                            <h3 className="text-sm font-black text-brand-text">HIPAA-Ready Infrastructure</h3>
                            <p className="text-[11px] text-brand-text-muted leading-relaxed">All calls encrypted at rest and in transit. Compliant from day one.</p>
                        </motion.div>

                        {/* Ongoing Management */}
                        <motion.div {...fadeUp(0.25)} className="glass-card flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-accent-purple" />
                                </div>
                                <span className="text-3xl font-black tabular-nums text-brand-text/20 dark:text-white/22 leading-none select-none">07</span>
                            </div>
                            <h3 className="text-sm font-black text-brand-text">Ongoing Management</h3>
                            <p className="text-[11px] text-brand-text-muted leading-relaxed">We monitor, fine-tune, and update your receptionist every month.</p>
                        </motion.div>

                        {/* Featured card 2 — Unlimited Calls */}
                        <motion.div {...fadeUp(0.28)}
                            className="sm:col-span-2 rounded-2xl border border-accent-purple/15 overflow-hidden relative p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
                            style={{ background: `linear-gradient(135deg, rgba(var(--theme-purple-rgb),0.08) 0%, rgba(var(--theme-bg-card-rgb),0.95) 60%)` }}>
                            <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-purple" />
                            <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center shrink-0">
                                <Users className="w-7 h-7 text-accent-purple" />
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-accent-purple/60 mb-1">08</p>
                                <h3 className="text-xl sm:text-2xl font-black text-brand-text mb-2 leading-tight">Unlimited Concurrent Calls</h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">No limits. Every caller gets through instantly — no one ever goes to voicemail, no matter how busy you are.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ─── GUARANTEES — Full-width bold statements ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(var(--theme-primary-rgb),0.04)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    <motion.div {...fadeUp()} className="flex items-center gap-4 mb-14 pb-6 border-b border-brand-border/40">
                        <div className="h-px w-10 bg-accent-blue" />
                        <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Our Commitments</span>
                    </motion.div>

                    <div className="space-y-0">
                        {[
                            { num: "01", icon: Clock,  title: "Live in 5 Business Days.",  sub: "Setup time",    desc: "We handle every step — script writing, voice config, phone connection, calendar sync. You review the final result before we flip the switch." },
                            { num: "02", icon: Target, title: "No Lock-In Contracts.",      sub: "Freedom",       desc: "30-day written notice to cancel. No penalties, no exit fees, no awkward conversations. We keep clients because the service works." },
                            { num: "03", icon: Star,   title: "Fully Managed, Always.",     sub: "Hands-free",    desc: "We monitor performance, fine-tune your receptionist monthly, and handle all updates. Your only job is to enjoy more free time." },
                        ].map(({ num, icon: Icon, title, sub, desc }, idx) => (
                            <motion.div key={num} {...fadeUp(idx * 0.1)}
                                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] lg:grid-cols-[120px_1fr_1fr] items-center gap-6 lg:gap-12 py-10 border-b border-brand-border/30 hover:bg-accent-blue/2 transition-colors duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12">
                                {/* Number */}
                                <span className="text-5xl sm:text-6xl font-black tabular-nums text-brand-border/20 group-hover:text-accent-blue/15 transition-colors duration-300 leading-none select-none">{num}</span>
                                {/* Title + icon */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/18 transition-all duration-300 mt-0.5">
                                        <Icon className="w-5 h-5 text-accent-blue" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/40 mb-1">{sub}</p>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-text group-hover:text-accent-blue transition-colors duration-300 leading-tight">{title}</h3>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── HOW PRICING WORKS — Two giant visual rows ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                    <motion.div {...fadeUp()} className="flex items-center justify-between mb-14 pb-6 border-b border-brand-border/40">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Billing</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                                Your Invoice Has{" "}<span className="text-accent-blue">2 Lines.</span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-brand-text-muted text-sm max-w-xs text-right leading-relaxed">
                            No surprises. No bundles. No rounding. Ever.
                        </p>
                    </motion.div>

                    <div className="space-y-0">
                        {[
                            {
                                num: "01",
                                title: "Monthly Platform Fee",
                                tag: "Fixed. Predictable.",
                                desc: "A flat subscription covering your AI receptionist, phone number, calendar integration, ongoing management, and all included minutes. Charged on the 1st of every month.",
                                example: "e.g. ₹5,000 / month on Essential",
                                icon: Zap,
                            },
                            {
                                num: "02",
                                title: "Per-Minute Overage",
                                tag: "Only if you exceed.",
                                desc: "Only charged when you exceed your plan's free minutes. Billed at a transparent per-minute rate — no rounding up, no bundles. A full usage report is emailed every month.",
                                example: "e.g. ₹40 / min on Essential",
                                icon: Clock,
                            },
                        ].map(({ num, title, tag, desc, example, icon: Icon }, idx) => (
                            <motion.div key={num} {...fadeUp(idx * 0.12)}
                                className="group grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] items-start gap-6 lg:gap-12 py-10 border-b border-brand-border/30 hover:bg-accent-blue/2 transition-colors duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12">
                                <span className="text-5xl sm:text-6xl font-black tabular-nums text-brand-border/20 group-hover:text-accent-blue/15 transition-colors duration-300 leading-none select-none">{num}</span>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50">{tag}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-brand-text group-hover:text-accent-blue transition-colors duration-300 leading-tight">{title}</h3>
                                </div>
                                <div>
                                    <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed mb-5">{desc}</p>
                                    <span className="inline-flex text-xs font-bold text-accent-blue border border-accent-blue/20 bg-accent-blue/8 rounded-xl px-4 py-2">
                                        {example}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA — Full-bleed asymmetric ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/6 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 py-14 px-8 sm:px-12 glass-card relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />

                        <div className="flex-1 max-w-xl">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Free Demo</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text leading-[0.9] tracking-tight mb-5">
                                Ready to Stop<br /><span className="text-accent-blue">Missing Calls?</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
                                Get a free custom demo built for your practice in 48 hours — no commitment required.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
                            <Link to="/services/ai-voice-receptionist" className="btn-primary py-4 px-10 text-base justify-center"
                                style={{ boxShadow: `0 0 30px rgba(var(--theme-primary-rgb),0.28)` }}>
                                Get Free Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="btn-secondary py-4 px-10 text-base justify-center">
                                Talk to Sales
                            </Link>
                            <p className="text-center text-[10px] text-brand-text-muted/50">
                                Live in 5 days · No credit card
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Pricing;
