import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, ShieldCheck, Phone, ArrowRight, Clock, Calendar, Bot, Globe, Zap, Star, Users, Target, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import DotField from '../components/DotField';

const voicePlans = [
    {
        id: 'essential',
        name: 'Essential',
        monthly: '₹5,000',
        setup: '₹20,000 one-time setup',
        minutes: '200 mins/mo free',
        overage: '₹40 / min overage',
        features: [
            '1 AI Receptionist',
            'Dedicated Phone Number',
            'Appointment Booking',
            'Email Notifications',
            'Basic Support',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        id: 'excel-integration',
        name: 'Excel Integration',
        monthly: '₹6,000',
        setup: '₹20,000 one-time setup',
        minutes: '200 mins/mo free',
        overage: '₹40 / min overage',
        features: [
            'All Essential Features',
            'Direct Excel / Sheets Integration',
            'Automated Data Entry',
            'Custom Caller Routing',
            'Priority Support',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        id: 'dashboard-pro',
        name: 'Dashboard Pro',
        monthly: '₹7,500',
        setup: '₹25,000 one-time setup',
        minutes: '400 mins/mo free',
        overage: '₹35 / min overage',
        features: [
            'Live Call Summary Dashboard',
            'Full Transcripts & Recordings',
            'Custom Script & AI Persona',
            'Call Analytics & Insights',
            'Dedicated Account Manager',
        ],
        cta: 'Start Now',
        popular: true,
    },
    {
        id: 'custom-enterprise',
        name: 'Fully Custom',
        monthly: 'Custom',
        setup: 'Custom bespoke build',
        minutes: 'Custom Volume',
        overage: 'Negotiated',
        features: [
            'Unlimited AI Receptionists',
            'Custom CRM / EHR Integrations',
            'Multi-location Routing',
            'Dedicated Infrastructure',
            '24/7 Priority SLA Support',
        ],
        cta: 'Contact Us',
        popular: false,
    },
];

const included = [
    { icon: Bot,         title: "Full Setup & Config",       desc: "We write your script, configure the voice, and connect to your phone line." },
    { icon: Calendar,    title: "Calendar Integration",       desc: "Google Calendar, Calendly, or your PMS — synced in real time." },
    { icon: MessageSquare, title: "SMS Confirmations",        desc: "Automatic SMS to every caller after their appointment is booked." },
    { icon: FileText,    title: "Monthly Usage Reports",      desc: "Simple email breakdown of calls handled, bookings made, and leads captured." },
    { icon: Globe,       title: "Multi-Language Support",     desc: "English, Hindi, and regional Indian languages — all included." },
    { icon: ShieldCheck, title: "HIPAA-Ready Infrastructure", desc: "All calls encrypted at rest and in transit. Compliant from day one." },
    { icon: Zap,         title: "Ongoing Management",         desc: "We monitor, fine-tune, and update your receptionist every month." },
    { icon: Users,       title: "Unlimited Concurrent Calls", desc: "No limits. Every caller gets through, no one ever goes to voicemail." },
];

const guarantees = [
    {
        icon: Clock,
        title: "Live in 5 Business Days",
        desc: "We handle every step of setup. You simply review the final result before we switch it on.",
    },
    {
        icon: Target,
        title: "No Lock-In Contracts",
        desc: "30-day written notice to cancel. No penalties, no exit fees. We keep clients because it works.",
    },
    {
        icon: Star,
        title: "Fully Managed, Always",
        desc: "We don't just set it and forget it. Monthly fine-tuning and performance management is included.",
    },
];

const Pricing = () => {
    // Track theme for DotField colors
    const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'));
    useEffect(() => {
        const obs = new MutationObserver(() => setIsLight(document.documentElement.classList.contains('light')));
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    return (
        <div className="bg-brand-bg text-brand-text">

            {/* ─── HERO ─── */}
            <section className="relative pt-36 pb-20 overflow-hidden border-b border-brand-border">
                {/* DotField background */}
                <div className="absolute inset-0 pointer-events-none">
                    <DotField
                        dotRadius={2}
                        dotSpacing={14}
                        bulgeStrength={80}
                        glowRadius={180}
                        sparkle={false}
                        waveAmplitude={0}
                        gradientFrom={isLight ? 'rgba(76, 51, 214, 0.55)' : 'rgba(0, 240, 255, 0.45)'}
                        gradientTo={isLight ? 'rgba(124, 58, 237, 0.38)' : 'rgba(151, 112, 230, 0.32)'}
                        glowColor="transparent"
                    />
                </div>
                {/* Gentle bottom fade so content sits cleanly on top */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-bg to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-7">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                            </span>
                            Transparent Pricing
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                            Simple,{" "}
                            <span className="text-accent-blue">Predictable</span> Pricing
                        </h1>

                        <p className="text-base md:text-lg text-brand-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                            Flat monthly fees and transparent per-minute usage. Every plan includes setup, configuration, and ongoing management — handled entirely by us.
                        </p>

                        {/* Trust pills */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {[
                                { icon: ShieldCheck, text: "HIPAA Compliant"      },
                                { icon: Clock,       text: "Live in 5 Days"       },
                                { icon: Target,      text: "No Lock-In Contracts" },
                                { icon: Star,        text: "Fully Managed"        },
                            ].map(({ icon: Icon, text }) => (
                                <span key={text} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text-muted border border-brand-border bg-brand-glass rounded-full px-3 py-1.5">
                                    <Icon className="w-3.5 h-3.5 text-accent-blue" />
                                    {text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── PRICING CARDS ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(var(--theme-purple-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                            <Phone className="w-4.5 h-4.5 text-accent-blue" style={{ width: 18, height: 18 }} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-brand-text">AI Voice Receptionist Plans</h2>
                            <p className="text-brand-text-muted text-sm">For clinics, real estate offices, salons & any business that receives inbound calls.</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {voicePlans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className={`glass-card flex flex-col relative overflow-hidden ${
                                    plan.popular
                                        ? 'border-accent-blue/50 shadow-[0_0_40px_rgba(var(--theme-primary-rgb),0.10)] lg:-translate-y-2'
                                        : ''
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />
                                )}
                                {plan.popular && (
                                    <div className="absolute top-3 right-3">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 px-2 py-0.5 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-1.5 text-accent-blue text-xs font-semibold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        Fully Managed
                                    </div>

                                    <h3 className="text-lg font-bold text-brand-text mb-1">{plan.name}</h3>

                                    <div className="mb-1">
                                        <span className="text-3xl font-black text-brand-text tabular-nums">{plan.monthly}</span>
                                        {plan.monthly !== 'Custom' && <span className="text-sm font-normal text-brand-text-muted">/mo</span>}
                                    </div>

                                    <p className="text-[11px] text-brand-text-muted mb-1">{plan.setup}</p>
                                    <p className="text-[11px] text-brand-text-muted mb-5 pb-5 border-b border-brand-border">
                                        {plan.minutes} · {plan.overage}
                                    </p>

                                    <ul className="space-y-2.5 mb-7 flex-1">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2 text-brand-text-muted text-xs sm:text-sm">
                                                <Check className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={`/services/ai-voice-receptionist?plan=${plan.id}#intake-form`}
                                        className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full py-3 text-sm text-center justify-center`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Overage note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-brand-text-muted/50 text-xs mt-8"
                    >
                        All prices exclude GST. Overage minutes billed at the end of each calendar month. <Link to="/contact" className="text-accent-blue hover:underline">Contact us</Link> for volume discounts.
                    </motion.p>
                </div>
            </section>

            {/* ─── EVERYTHING INCLUDED ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <Check className="w-3.5 h-3.5" />
                            Included in Every Plan
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Everything You Need,{" "}
                            <span className="text-accent-blue">Out of the Box</span>
                        </h2>
                        <p className="text-brand-text-muted max-w-xl mx-auto text-sm sm:text-base">
                            No add-ons, no hidden fees. Every plan ships with the full feature set below — regardless of tier.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {included.map(({ icon: Icon, title, desc }, idx) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="glass-card flex flex-col gap-3"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-accent-blue" />
                                </div>
                                <h3 className="text-sm font-bold text-brand-text leading-snug">{title}</h3>
                                <p className="text-[11px] sm:text-xs text-brand-text-muted leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── GUARANTEES / TRUST ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(var(--theme-primary-rgb),0.04)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-purple/25 bg-accent-purple/8 text-accent-purple dark:border-accent-blue/25 dark:bg-accent-blue/8 dark:text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Our Commitments
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Built on{" "}
                            <span className="text-accent-blue">Trust</span>
                        </h2>
                        <p className="text-brand-text-muted max-w-xl mx-auto text-sm sm:text-base">
                            We don't trap clients in contracts. We earn their loyalty by delivering results.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {guarantees.map(({ icon: Icon, title, desc }, idx) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="glass-card flex flex-col items-center text-center gap-4 p-7"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-accent-blue" />
                                </div>
                                <h3 className="text-base font-bold text-brand-text leading-snug">{title}</h3>
                                <p className="text-sm text-brand-text-muted leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── HOW PRICING WORKS ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <Zap className="w-3.5 h-3.5" />
                            How It Works
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Two Simple{" "}
                            <span className="text-accent-blue">Cost Components</span>
                        </h2>
                        <p className="text-brand-text-muted max-w-xl mx-auto text-sm sm:text-base">
                            No surprises. Your invoice is always two lines — the platform fee and the overage minutes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                        {[
                            {
                                num: "01",
                                title: "Monthly Platform Fee",
                                desc: "A flat subscription that covers your AI receptionist, phone number, calendar integration, ongoing management, and all included minutes.",
                                example: "e.g. ₹5,000 / month on Essential",
                            },
                            {
                                num: "02",
                                title: "Per-Minute Overage",
                                desc: "Only charged when you exceed your plan's included minutes. Billed at a transparent rate — no rounding, no bundles. Usage report emailed monthly.",
                                example: "e.g. ₹40 / min on Essential",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12, duration: 0.55 }}
                                className="glass-card flex flex-col gap-4"
                            >
                                <span className="text-4xl font-black text-accent-blue/20 leading-none tabular-nums">{item.num}</span>
                                <h3 className="text-base font-bold text-brand-text">{item.title}</h3>
                                <p className="text-sm text-brand-text-muted leading-relaxed flex-1">{item.desc}</p>
                                <div className="text-xs font-semibold text-accent-blue border border-accent-blue/20 bg-accent-blue/8 rounded-xl px-3 py-2 self-start">
                                    {item.example}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/8 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 sm:p-12 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                            <Phone className="w-3.5 h-3.5" />
                            Free Demo — No Commitment
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text mb-4 leading-tight">
                            Ready to Stop Missing Calls?
                        </h2>

                        <p className="text-brand-text-muted text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                            Get a free custom demo built for your practice in 48 hours. Hear exactly how your AI receptionist will sound — no commitment required.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/services/ai-voice-receptionist"
                                className="btn-primary py-4 px-10 text-base w-full sm:w-auto justify-center"
                                style={{ boxShadow: `0 0 30px rgba(var(--theme-primary-rgb),0.3)` }}
                            >
                                Get Free Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="btn-secondary py-4 px-10 text-base w-full sm:w-auto justify-center"
                            >
                                Talk to Sales
                            </Link>
                        </div>

                        <p className="text-brand-text-muted/50 text-xs mt-6">
                            Most clients go live within 5 business days · No credit card required
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Pricing;
