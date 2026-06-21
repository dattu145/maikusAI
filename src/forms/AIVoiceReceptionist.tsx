import { useState, useEffect } from 'react';
import {
    Phone, ShieldCheck, CheckCircle, Star, Zap,
    ArrowRight, MessageSquare, Bot, Clock,
    Check, Calendar, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';
import FAQItem from '../components/FAQItem';

// Theme-aware input/select styles
const inputClass =
    'w-full bg-brand-glass border border-brand-border hover:border-accent-blue/40 rounded-xl px-4 py-3.5 text-brand-text placeholder:text-brand-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue/50 transition-all';

const selectClass =
    'w-full bg-brand-glass border border-brand-border hover:border-accent-blue/40 rounded-xl px-4 py-3.5 text-brand-text focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue/50 transition-all appearance-none cursor-pointer';

const plans = [
    {
        id: 'essential',
        name: 'Essential',
        monthly: '₹5,000',
        minutes: '200 mins/mo free',
        overage: '₹40 / min overage',
        setup: '₹20,000 one-time setup',
        features: [
            '1 AI Receptionist',
            'Dedicated Phone Number',
            'Appointment Booking',
            'Email Notifications',
            'Basic Support',
        ],
        popular: false,
        accent: false,
    },
    {
        id: 'excel-integration',
        name: 'Excel Integration',
        monthly: '₹6,000',
        minutes: '200 mins/mo free',
        overage: '₹40 / min overage',
        setup: '₹20,000 one-time setup',
        features: [
            'All Essential Features',
            'Direct Excel Integration',
            'Automated Data Entry',
            'Custom Caller Routing',
            'Priority Support',
        ],
        popular: false,
        accent: false,
    },
    {
        id: 'dashboard-pro',
        name: 'Dashboard Pro',
        monthly: '₹7,500',
        minutes: '400 mins/mo free',
        overage: '₹35 / min overage',
        setup: '₹25,000 one-time setup',
        features: [
            'Live Call Summary Dashboard',
            'Transcripts & Recordings',
            'Custom Script & Persona',
            'Full Call Analytics',
            'Account Manager',
        ],
        popular: true,
        accent: true,
    },
    {
        id: 'custom-enterprise',
        name: 'Fully Custom',
        monthly: 'Custom',
        minutes: 'Custom Volume',
        overage: 'Negotiated',
        setup: 'Custom bespoke setup',
        features: [
            'Unlimited Receptionists',
            'Custom CRM/EHR Integrations',
            'Bespoke AI Development',
            'Dedicated Infrastructure',
            '24/7 Priority SLA Support',
        ],
        popular: false,
        accent: false,
    },
];

// FAQ moved from Home page
const faqs = [
    { q: "Will it sound robotic to my customers?", a: "No. Buzcall uses hyper-realistic voice synthesis with natural pauses, tone, and empathy — most callers can't tell they're speaking with an AI." },
    { q: "What languages does it support?", a: "Buzcall is fluent in English, Hindi, and several regional Indian languages, with more being added regularly." },
    { q: "How does appointment booking work?", a: "We connect directly to your existing calendar (Google Calendar, Calendly, or practice management software) so the AI books, reschedules, and cancels appointments in real time." },
    { q: "Is my customer data secure?", a: "Yes. All conversations are processed through encrypted, HIPAA-compliant infrastructure, and call data is never shared with third parties." },
    { q: "Can it handle multiple calls at once?", a: "Absolutely. Unlike a human receptionist, Buzcall can handle unlimited simultaneous calls without ever putting anyone on hold." },
    { q: "How long does setup take?", a: "Most businesses are fully live within 3–5 business days. We handle the entire setup, integration, and training process for you." },
];

const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const AnimatedWaveform = () => (
    <div className="flex items-center gap-1 h-10">
        {[...Array(9)].map((_, i) => (
            <motion.div
                key={i}
                className="w-1.5 bg-accent-blue rounded-full"
                animate={{ height: ['20%', '100%', '20%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            />
        ))}
    </div>
);

const AIVoiceReceptionist = () => {
    const [searchParams] = useSearchParams();
    const [quickCall, setQuickCall] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string>('dashboard-pro');
    const [contactForPricing, setContactForPricing] = useState(false);

    const [demoPhone, setDemoPhone] = useState('');
    const [demoState, setDemoState] = useState<'idle' | 'calling' | 'connected'>('idle');

    // Pre-select plan from ?plan= query param and scroll to intake form
    useEffect(() => {
        const planParam = searchParams.get('plan');
        if (planParam) {
            const valid = ['essential', 'excel-integration', 'dashboard-pro', 'custom-enterprise'];
            if (valid.includes(planParam)) {
                setSelectedPlan(planParam);
                setContactForPricing(planParam === 'custom-enterprise');
            }
            setTimeout(() => {
                document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }, [searchParams]);

    const handleDemoCall = (e: React.FormEvent) => {
        e.preventDefault();
        if (!demoPhone) return;
        setDemoState('calling');
        setTimeout(() => setDemoState('connected'), 3000);
    };

    return (
        <div className="bg-brand-bg text-brand-text">

            {/* ─── HERO & LIVE DEMO ─── */}
            <section id="live-demo" className="relative overflow-hidden pt-40 pb-20 border-b border-brand-border">
                {/* Background layers */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 65% at 50% 0%, rgba(var(--theme-primary-rgb),0.09) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px]" />
                    <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent-blue/4 rounded-full blur-[80px]" />
                    {/* Subtle dot grid */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(var(--theme-primary-rgb),0.12) 1px, transparent 1px)', backgroundSize: '38px 38px', opacity: 0.04 }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">

                        {/* ── Left: Rich content ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="pt-2"
                        >
                            {/* Live badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-7">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                                </span>
                                Live AI Receptionist Demo
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-[1.1]">
                                Hear It{" "}
                                <span className="text-accent-blue">In Action</span>
                            </h1>

                            <p className="text-base md:text-lg text-brand-text-muted mb-8 max-w-lg leading-relaxed">
                                Enter your number and our AI calls you instantly — sounds completely human, answers every time.
                            </p>

                            {/* Feature cards — 3 mini glass cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                                {[
                                    { icon: Bot,         title: "Human-Like Voice",   desc: "Natural pauses, tone & empathy" },
                                    { icon: Clock,       title: "Answers in < 1s",    desc: "Zero hold music, ever"           },
                                    { icon: ShieldCheck, title: "HIPAA Compliant",    desc: "Fully encrypted calls"           },
                                ].map(({ icon: Icon, title, desc }) => (
                                    <div key={title} className="glass-card !p-4 flex flex-col gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-accent-blue" />
                                        </div>
                                        <p className="text-xs font-bold text-brand-text leading-snug">{title}</p>
                                        <p className="text-[11px] text-brand-text-muted leading-snug">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Capabilities list */}
                            <div className="space-y-2.5 mb-8">
                                {[
                                    "Books, reschedules & cancels appointments in real time",
                                    "Speaks English, Hindi & regional Indian languages",
                                    "Captures lead details & sends SMS confirmations instantly",
                                    "Unlimited concurrent calls — no one ever goes to voicemail",
                                ].map(item => (
                                    <div key={item} className="flex items-start gap-2.5 text-sm text-brand-text-muted">
                                        <Check className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                        </motion.div>

                        {/* ── Right: Demo form + extras ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="relative"
                        >
                            {/* Main demo card */}
                            <div className="rounded-3xl border border-brand-border overflow-hidden shadow-xl" style={{ background: "var(--theme-glass)", backdropFilter: "blur(20px)" }}>
                                {/* Card header */}
                                <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-brand-border flex items-center justify-between" style={{ background: "rgba(var(--theme-primary-rgb),0.03)" }}>
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-9 h-9 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                                            {/* Black in dark, light in light — always contrasts with accent-blue */}
                                            <Bot className="w-4.5 h-4.5" style={{ width: 18, height: 18, color: 'var(--theme-bg)' }} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-text leading-none mb-0.5">Buzcall Receptionist</p>
                                            <p className="text-xs text-brand-text-muted">Demo Mode</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/25 bg-accent-blue/8 rounded-full px-3 py-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                        Ready
                                    </div>
                                </div>

                                {/* Form area */}
                                <div className="p-5 sm:p-6">
                                    <AnimatePresence mode="wait">
                                        {demoState === 'idle' && (
                                            <motion.form
                                                key="form"
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.97 }}
                                                onSubmit={handleDemoCall}
                                                className="flex flex-col gap-4"
                                            >
                                                <p className="text-sm text-brand-text-muted">Enter your mobile number and we'll call you right now:</p>
                                                <input
                                                    type="tel"
                                                    value={demoPhone}
                                                    onChange={e => setDemoPhone(e.target.value)}
                                                    placeholder="+91 98765 43210"
                                                    className={inputClass}
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn-primary w-full py-4 text-base flex items-center justify-center gap-3"
                                                    style={{ boxShadow: `0 0 24px rgba(var(--theme-primary-rgb),0.3)` }}
                                                >
                                                    <Phone className="w-5 h-5" />
                                                    Receive Demo Call
                                                </button>
                                                <p className="text-center text-xs text-brand-text-muted">
                                                    Free · No commitment · Takes 60 seconds
                                                </p>
                                            </motion.form>
                                        )}

                                        {demoState === 'calling' && (
                                            <motion.div
                                                key="calling"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="py-10 flex flex-col items-center justify-center text-center"
                                            >
                                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 animate-pulse" style={{ background: `rgba(var(--theme-primary-rgb),0.15)` }}>
                                                    <Phone className="w-7 h-7 text-accent-blue animate-bounce" />
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 text-brand-text">Connecting…</h3>
                                                <p className="text-brand-text-muted text-sm">You'll receive a call in just a moment.</p>
                                            </motion.div>
                                        )}

                                        {demoState === 'connected' && (
                                            <motion.div
                                                key="connected"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="py-8 flex flex-col items-center justify-center text-center"
                                            >
                                                <AnimatedWaveform />
                                                <h3 className="text-xl font-bold mt-6 mb-2 text-brand-text">Call in Progress</h3>
                                                <p className="text-brand-text-muted text-sm mb-5">Speak naturally — the AI is listening.</p>
                                                <div className="flex items-center gap-2 text-accent-blue text-xs font-bold border border-accent-blue/20 bg-accent-blue/8 px-4 py-2 rounded-full mb-6">
                                                    <ShieldCheck className="w-4 h-4 shrink-0" />
                                                    <DecryptedText text="Fully encrypted & privately processed." animateOn="view" speed={40} maxIterations={12} />
                                                </div>
                                                <button
                                                    onClick={() => setDemoState('idle')}
                                                    className="btn-secondary py-2.5 px-6 text-sm flex items-center gap-2"
                                                >
                                                    <Phone className="w-4 h-4" /> End Call Simulation
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Transcript preview card — below form */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mt-4 glass-card !p-4 !rounded-2xl"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-2">Live Transcript Sample</p>
                                <p className="text-sm text-brand-text leading-relaxed mb-2">
                                    "You're all set — booked for Thursday at 2:00 PM. I'll send a confirmation text shortly."
                                </p>
                                <div className="flex items-center gap-1.5 text-accent-blue text-xs font-bold">
                                    <Check className="w-3.5 h-3.5" />
                                    Appointment Confirmed · SMS Sent
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Editorial label row */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between mb-16 pb-6 border-b border-brand-border/40"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Setup Process</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                                Live in <span className="text-accent-blue">5 Days</span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-brand-text-muted text-sm max-w-xs text-right leading-relaxed">
                            We handle every step. You simply review the result before we switch it on.
                        </p>
                    </motion.div>

                    {/* Full-width horizontal step rows */}
                    <div className="space-y-0">
                        {[
                            { num: "01", icon: Phone,    title: "Free Demo",           desc: "We build a tailored demo for your specific practice, walk you through every interaction, and let you hear exactly how it sounds — before you commit to anything." },
                            { num: "02", icon: Bot,      title: "Onboarding",          desc: "We configure your receptionist's script, personality, and voice. We connect it to your existing phone number — no porting, no hardware, no technical effort from you." },
                            { num: "03", icon: Calendar, title: "Go Live",             desc: "Your AI receptionist is switched on. From this moment, every inbound call is answered automatically, every appointment booked, every lead captured." },
                            { num: "04", icon: Target,   title: "Ongoing Management",  desc: "We monitor performance, fine-tune scripts, and handle updates every month. You receive a simple usage report — that's the only thing you need to look at." },
                        ].map(({ num, icon: Icon, title, desc }, idx) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="group grid grid-cols-1 sm:grid-cols-[72px_1fr_1fr] lg:grid-cols-[100px_280px_1fr] items-center gap-5 lg:gap-10 py-8 border-b border-brand-border/30 hover:bg-accent-blue/2 transition-colors duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12"
                            >
                                {/* Step number */}
                                <span className="text-5xl sm:text-6xl lg:text-7xl font-black tabular-nums text-brand-border/25 group-hover:text-accent-blue/20 transition-colors duration-300 leading-none select-none">
                                    {num}
                                </span>

                                {/* Icon + title */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl border border-accent-blue/20 bg-accent-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/18 group-hover:border-accent-blue/35 transition-all duration-300">
                                        <Icon className="w-5 h-5 text-accent-blue" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-brand-text group-hover:text-accent-blue transition-colors duration-300 leading-tight">
                                        {title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-brand-text-muted text-sm leading-relaxed">
                                    {desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-brand-border/40"
                    >
                        <p className="text-brand-text-muted text-sm">
                            From signing up to taking your first AI call —{" "}
                            <span className="text-brand-text font-semibold">5 business days, guaranteed.</span>
                        </p>
                        <button
                            onClick={() => smoothScroll('intake-form')}
                            className="btn-primary py-3 px-7 text-sm shrink-0"
                            style={{ boxShadow: `0 0 20px rgba(var(--theme-primary-rgb),0.22)` }}
                        >
                            Get Started <Zap className="ml-1.5 w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ─── INTAKE FORM ─── */}
            <section id="intake-form" className="py-20 sm:py-28 bg-brand-bg-alt border-b border-brand-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(var(--theme-primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 sm:p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Top accent bar */}
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple" />

                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                                <Bot className="w-3.5 h-3.5" />
                                Get Started
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                                Get Your AI Receptionist{" "}
                                <span className="text-gradient">Running</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm sm:text-base">
                                Tell us about your practice and we'll be in touch within 24 hours with a custom demo.
                            </p>
                        </div>

                        {/* Quick-call toggle */}
                        <div className="flex items-center gap-4 mb-10 p-5 rounded-2xl border border-brand-border bg-brand-bg/40 max-w-md mx-auto">
                            <button
                                type="button"
                                onClick={() => setQuickCall(!quickCall)}
                                className={`w-14 h-7 rounded-full transition-colors relative outline-none focus:ring-2 focus:ring-accent-blue/40 shrink-0 ${
                                    quickCall ? 'bg-accent-blue' : 'bg-brand-glass border border-brand-border'
                                }`}
                            >
                                <div className={`w-5 h-5 rounded-full bg-white absolute top-1/2 -translate-y-1/2 transition-all shadow-sm ${quickCall ? 'left-[calc(100%-1.5rem)]' : 'left-0.5'}`} />
                            </button>
                            <div>
                                <h4 className="font-semibold text-brand-text text-sm leading-tight mb-0.5">I'm in a hurry</h4>
                                <p className="text-xs text-brand-text-muted">Just take my number and call me.</p>
                            </div>
                        </div>

                        <form
                            className="space-y-8"
                            onSubmit={e => { e.preventDefault(); alert("Request submitted! We'll contact you within 24 hours."); }}
                        >
                            {quickCall ? (
                                <div className="space-y-5 max-w-lg mx-auto">
                                    <div>
                                        <label className="block text-sm font-medium text-brand-text-muted mb-2">Name</label>
                                        <input type="text" required className={inputClass} placeholder="Dr. John Smith" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-text-muted mb-2">Phone / WhatsApp</label>
                                        <input type="tel" required className={inputClass} placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Section 1 */}
                                    <div className="space-y-5">
                                        <h3 className="text-base font-bold flex items-center gap-2 border-b border-brand-border pb-3">
                                            <span className="w-6 h-6 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center text-xs font-black">1</span>
                                            Your Practice
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {[
                                                { label: "Practice / Business Name", placeholder: "Dr. Smith's Dental Clinic", type: "text" },
                                                { label: "Contact Name", placeholder: "Dr. John Smith", type: "text" },
                                                { label: "Email", placeholder: "john@clinic.com", type: "email" },
                                                { label: "Phone / WhatsApp", placeholder: "+91 98765 43210", type: "tel" },
                                            ].map(f => (
                                                <div key={f.label}>
                                                    <label className="block text-sm font-medium text-brand-text-muted mb-2">{f.label}</label>
                                                    <input type={f.type} required className={inputClass} placeholder={f.placeholder} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="space-y-5">
                                        <h3 className="text-base font-bold flex items-center gap-2 border-b border-brand-border pb-3">
                                            <span className="w-6 h-6 rounded-full bg-accent-purple/15 text-accent-purple flex items-center justify-center text-xs font-black">2</span>
                                            About Your Calls
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {[
                                                {
                                                    label: "Industry / Specialty",
                                                    options: [["","Select industry..."],["Dental","Dental Clinic"],["Medical","Medical / GP"],["Real Estate","Real Estate"],["Law Firm","Law Firm"],["Salon/Spa","Salon / Spa"],["Other","Other"]],
                                                },
                                                {
                                                    label: "Primary Goal",
                                                    options: [["","Select goal..."],["Book appointments","Book Appointments"],["Answer FAQs","Answer FAQs & Hours"],["Capture leads","Capture New Leads"],["All","All of the above"]],
                                                },
                                                {
                                                    label: "Approx. Inbound Calls / Month",
                                                    options: [["","Select volume..."],["0–50","0 – 50 calls"],["50–200","50 – 200 calls"],["200–500","200 – 500 calls"],["500+","500+ calls"]],
                                                },
                                                {
                                                    label: "Current Setup",
                                                    options: [["","Select current setup..."],["Human only","Human Receptionist Only"],["Voicemail","Mostly Voicemail"],["Answering service","Answering Service"],["Nothing","Nothing Yet"]],
                                                },
                                            ].map(s => (
                                                <div key={s.label}>
                                                    <label className="block text-sm font-medium text-brand-text-muted mb-2">{s.label}</label>
                                                    <select required className={selectClass}>
                                                        {s.options.map(([v, l]) => (
                                                            <option key={v} value={v} className="bg-brand-bg text-brand-text">{l}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Section 3 — Plan */}
                                    <div className="space-y-4">
                                        <h3 className="text-base font-bold flex items-center gap-2 border-b border-brand-border pb-3">
                                            <span className="w-6 h-6 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center text-xs font-black">3</span>
                                            Choose Your Plan
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {plans.map(plan => (
                                                <button
                                                    key={plan.id}
                                                    type="button"
                                                    onClick={() => { setSelectedPlan(plan.id); setContactForPricing(false); }}
                                                    className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                                                        !contactForPricing && selectedPlan === plan.id
                                                            ? 'border-accent-blue bg-accent-blue/8'
                                                            : 'border-brand-border bg-brand-glass hover:border-accent-blue/30'
                                                    }`}
                                                >
                                                    {plan.popular && (
                                                        <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-widest text-accent-purple border border-accent-purple/30 bg-accent-purple/10 px-2 py-0.5 rounded-full">
                                                            Popular
                                                        </span>
                                                    )}
                                                    <div className="font-bold text-brand-text text-sm mb-0.5 flex items-center gap-2">
                                                        {!contactForPricing && selectedPlan === plan.id && (
                                                            <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                                                        )}
                                                        {plan.name}
                                                    </div>
                                                    <div className="text-accent-blue font-semibold text-xs">
                                                        {plan.monthly === 'Custom' ? 'Custom pricing' : `${plan.monthly}/mo`}
                                                    </div>
                                                    <div className="text-[11px] text-brand-text-muted mt-1">{plan.minutes}</div>
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => { setContactForPricing(true); setSelectedPlan(''); }}
                                            className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                                                contactForPricing
                                                    ? 'border-accent-purple bg-accent-purple/8'
                                                    : 'border-brand-border bg-brand-glass hover:border-accent-purple/30'
                                            }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${contactForPricing ? 'border-accent-purple bg-accent-purple' : 'border-brand-border'}`}>
                                                {contactForPricing && <Zap className="w-3 h-3 text-white" />}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-brand-text text-sm">I'm not sure — contact me to discuss pricing</div>
                                                <div className="text-xs text-brand-text-muted">We'll recommend the best plan for your call volume</div>
                                            </div>
                                        </button>
                                    </div>
                                </>
                            )}

                            <div className="pt-6 border-t border-brand-border">
                                <button type="submit" className="w-full btn-primary text-base py-4 justify-center">
                                    {quickCall ? 'Request Quick Call' : 'Request My Free Demo'}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                                <p className="text-center text-xs text-brand-text-muted mt-4 flex items-center justify-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-accent-blue" />
                                    We review every request and contact you within 24 hours.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* ─── FAQ — moved from Home page ─── */}
            <section className="py-20 sm:py-28 relative bg-brand-bg overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-blue/4 rounded-full blur-[130px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 max-w-6xl mx-auto">

                        {/* Left: sticky panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:w-[38%] lg:sticky lg:top-28 lg:self-start"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                                <MessageSquare className="w-3.5 h-3.5" />
                                FAQ
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                                Got <span className="text-accent-blue">Questions?</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
                                Everything you need to know before getting started. Can't find an answer? Talk to us directly.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { stat: "3–5 days", label: "Average go-live time" },
                                    { stat: "24 / 7",   label: "Support availability"  },
                                    { stat: "100%",     label: "Setup handled by us"   },
                                ].map(({ stat, label }) => (
                                    <div key={label} className="flex items-center gap-4">
                                        <span className="text-accent-blue font-black text-lg whitespace-nowrap tabular-nums shrink-0 leading-none">{stat}</span>
                                        <span className="h-px flex-1 bg-brand-border" />
                                        <span className="text-brand-text-muted text-sm">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 text-sm py-3 px-6">
                                Ask Us Anything <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* Right: accordion */}
                        <div className="lg:w-[62%] space-y-3">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <FAQItem question={faq.q} answer={faq.a} index={idx} />
                                </motion.div>
                            ))}

                            {/* CTA card */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: faqs.length * 0.07 + 0.1, duration: 0.5 }}
                                className="mt-6 rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                                style={{ backdropFilter: 'blur(12px)' }}
                            >
                                <div>
                                    <p className="font-bold text-brand-text text-sm mb-1">Still have a question?</p>
                                    <p className="text-brand-text-muted text-xs">Our team replies within a few hours.</p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="btn-primary shrink-0 py-2.5 px-6 text-sm whitespace-nowrap flex items-center gap-1.5"
                                    style={{ boxShadow: 'none' }}
                                >
                                    Contact Us <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Security Notice ─── */}
            <div className="py-8 border-t border-brand-border bg-brand-bg-alt">
                <div className="container mx-auto px-6 text-center flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 text-accent-blue text-sm font-bold border border-accent-blue/20 bg-accent-blue/8 px-6 py-3 rounded-full">
                        <ShieldCheck className="w-5 h-5 shrink-0" />
                        <DecryptedText text="HIPAA-Compliant: All patient data is encrypted locally and completely safe." animateOn="view" speed={60} maxIterations={15} />
                    </div>
                </div>
            </div>

            {/* ─── Floating CTA ─── */}
            <Link
                to="/contact"
                className="fixed bottom-6 right-6 z-30 flex items-center gap-3 bg-brand-glass backdrop-blur-lg border border-accent-purple/50 px-5 py-3.5 rounded-full hover:-translate-y-1 transition-all shadow-xl"
            >
                <Phone className="w-5 h-5 text-accent-purple" />
                <span className="font-semibold text-brand-text text-sm">Doubt? Let's talk!</span>
            </Link>
        </div>
    );
};

export default AIVoiceReceptionist;
