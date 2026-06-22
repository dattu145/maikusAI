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
            <section id="live-demo" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-brand-border pt-32 pb-20">

                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(var(--theme-primary-rgb),0.07) 0%, transparent 65%)" }} />
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(var(--theme-primary-rgb),0.13) 1px, transparent 1px)', backgroundSize: '34px 34px', opacity: 0.045 }} />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/4 rounded-full blur-[100px]" />
                    <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-blue/4 rounded-full blur-[80px]" />
                </div>

                {/* Decorative background waveform */}
                <div className="absolute bottom-0 inset-x-0 flex items-end justify-center gap-0.5 h-24 pointer-events-none overflow-hidden opacity-[0.06]">
                    {[4,8,14,6,20,10,18,7,24,12,19,8,28,14,22,9,26,13,20,10,24,8,18,12,22,7,16,11,20,6,14,9,18,12,8,16,10,14,6,12].map((h, i) => (
                        <motion.span key={i} className="w-2 bg-accent-blue rounded-t-sm flex-shrink-0"
                            animate={{ height: [`${h * 0.4}px`, `${h}px`, `${h * 0.4}px`] }}
                            transition={{ duration: 1.2 + i * 0.03, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }} />
                    ))}
                </div>

                {/* Two-column content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

                        {/* ── Left: Headline + form ── */}
                        <div>
                            {/* Editorial label */}
                            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                                className="flex items-center gap-3 mb-8">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                                    </span>
                                    Live AI Receptionist
                                </span>
                            </motion.div>

                            {/* Giant headline */}
                            <div className="overflow-hidden mb-6">
                                {["Every Call.", "Answered."].map((line, i) => (
                                    <motion.h1 key={line}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.75, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className={`block font-black leading-[0.88] tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[96px] ${i === 1 ? 'text-accent-blue' : 'text-brand-text'}`}>
                                        {line}
                                    </motion.h1>
                                ))}
                            </div>

                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                                className="text-brand-text-muted text-base sm:text-lg mb-8 max-w-md leading-relaxed">
                                Enter your number. Our AI calls you back instantly — sounds completely human, books appointments, captures leads.
                            </motion.p>

                            {/* Form */}
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-7">
                                <AnimatePresence mode="wait">
                                    {demoState === 'idle' && (
                                        <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            onSubmit={handleDemoCall} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                                            <input type="tel" value={demoPhone} onChange={e => setDemoPhone(e.target.value)}
                                                placeholder="+91 98765 43210" className={`${inputClass} flex-1`} required />
                                            <button type="submit" className="btn-primary py-3.5 px-7 text-sm shrink-0 flex items-center gap-2"
                                                style={{ boxShadow: `0 0 22px rgba(var(--theme-primary-rgb),0.3)` }}>
                                                <Phone className="w-4 h-4" /> Call Me Now
                                            </button>
                                        </motion.form>
                                    )}
                                    {demoState === 'calling' && (
                                        <motion.div key="calling" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                            className="flex items-center gap-4 py-4">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse shrink-0"
                                                style={{ background: `rgba(var(--theme-primary-rgb),0.15)` }}>
                                                <Phone className="w-5 h-5 text-accent-blue animate-bounce" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-brand-text">Connecting…</p>
                                                <p className="text-brand-text-muted text-sm">You'll receive a call in just a moment.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                    {demoState === 'connected' && (
                                        <motion.div key="connected" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col gap-3 py-2">
                                            <AnimatedWaveform />
                                            <p className="font-bold text-brand-text">Call in Progress — Speak naturally.</p>
                                            <div className="flex items-center gap-2 text-accent-blue text-xs font-bold border border-accent-blue/20 bg-accent-blue/8 px-4 py-2 rounded-full self-start">
                                                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                                                <DecryptedText text="Fully encrypted & privately processed." animateOn="view" speed={40} maxIterations={12} />
                                            </div>
                                            <button onClick={() => setDemoState('idle')} className="btn-secondary py-2 px-5 text-sm flex items-center gap-2 self-start">
                                                <Phone className="w-3.5 h-3.5" /> End Simulation
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Trust pills */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                                className="flex flex-wrap gap-2">
                                {[
                                    { icon: Bot,         text: "Human-Like Voice" },
                                    { icon: Clock,       text: "Answers in < 1s"  },
                                    { icon: ShieldCheck, text: "HIPAA Compliant"  },
                                    { icon: Calendar,    text: "Books in Real Time"},
                                ].map(({ icon: Icon, text }) => (
                                    <span key={text} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text-muted border border-brand-border bg-brand-glass rounded-full px-3 py-1.5">
                                        <Icon className="w-3.5 h-3.5 text-accent-blue" /> {text}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* ── Right: Live dashboard panel ── */}
                        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                            <div className="rounded-3xl border border-brand-border overflow-hidden"
                                style={{ background: "rgba(var(--theme-bg-card-rgb),0.55)", backdropFilter: "blur(24px)" }}>

                                {/* Panel header */}
                                <div className="px-6 py-4 border-b border-brand-border/60 flex items-center justify-between"
                                    style={{ background: `rgba(var(--theme-primary-rgb),0.04)` }}>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-text-muted">System Live</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-accent-blue/60 uppercase tracking-wider">Buzcall · v2.4</span>
                                </div>

                                {/* Big stat */}
                                <div className="px-6 py-7 border-b border-brand-border/40">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50 mb-2">Calls Handled This Month</p>
                                    <p className="text-5xl font-black text-brand-text tabular-nums leading-none mb-1">10,000+</p>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                        <span className="text-[11px] text-accent-blue font-semibold">+23% vs last month</span>
                                    </div>
                                </div>

                                {/* Stats list */}
                                <div className="divide-y divide-brand-border/30">
                                    {[
                                        { label: "Avg. Response Time",   value: "< 1s",   note: "instant pickup"        },
                                        { label: "Caller Satisfaction",  value: "98%",    note: "post-call surveys"     },
                                        { label: "Availability",         value: "24 / 7", note: "including holidays"    },
                                        { label: "Setup Time",           value: "5 days", note: "from sign-up to live"  },
                                    ].map(({ label, value, note }) => (
                                        <div key={label} className="px-6 py-3.5 flex items-center justify-between group hover:bg-accent-blue/3 transition-colors duration-200">
                                            <div>
                                                <p className="text-xs font-bold text-brand-text group-hover:text-accent-blue transition-colors duration-200">{label}</p>
                                                <p className="text-[10px] text-brand-text-muted/50">{note}</p>
                                            </div>
                                            <span className="text-base font-black text-accent-blue tabular-nums">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Waveform footer */}
                                <div className="px-6 py-5 border-t border-brand-border/40" style={{ background: `rgba(var(--theme-primary-rgb),0.03)` }}>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/40 mb-3">Live Transcript Sample</p>
                                    <p className="text-xs text-brand-text leading-relaxed mb-2">
                                        "You're all set — booked for Thursday at 2:00 PM. I'll send a confirmation text shortly."
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-accent-blue text-[11px] font-bold">
                                            <Check className="w-3.5 h-3.5" /> Appointment Confirmed · SMS Sent
                                        </div>
                                        <div className="flex items-end gap-0.5 h-5">
                                            {[3,7,11,5,9,13,4,10,6].map((h, i) => (
                                                <motion.span key={i} className="w-0.5 bg-accent-blue/50 rounded-full"
                                                    animate={{ height: [`${h*0.4}px`, `${h}px`, `${h*0.4}px`] }}
                                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            <section id="intake-form" className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(var(--theme-primary-rgb),0.04)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    {/* Editorial header */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between mb-16 pb-6 border-b border-brand-border/40"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Get Started</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none">
                                Request Your <span className="text-accent-blue">Free Demo</span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-brand-text-muted text-sm max-w-xs text-right leading-relaxed">
                            We review every submission and contact you within 24 hours with a demo built for your practice.
                        </p>
                    </motion.div>

                    {/* Split layout: left context + right form */}
                    <div className="grid lg:grid-cols-[360px_1fr] gap-14 lg:gap-20 items-start">

                        {/* ── Left: Context sidebar (sticky) ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:sticky lg:top-28 space-y-8"
                        >
                            {/* I'm in a hurry toggle */}
                            <div className="glass-card !p-5">
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setQuickCall(!quickCall)}
                                        className={`w-14 h-7 rounded-full transition-all relative outline-none focus:ring-2 focus:ring-accent-blue/40 shrink-0 ${quickCall ? 'bg-accent-blue' : 'bg-brand-text-muted/20 border border-brand-text-muted/30'}`}
                                    >
                                        <div className={`w-5 h-5 rounded-full bg-white absolute top-1/2 -translate-y-1/2 transition-all shadow-sm ${quickCall ? 'left-[calc(100%-1.5rem)]' : 'left-0.5'}`} />
                                    </button>
                                    <div>
                                        <p className="font-bold text-brand-text text-sm leading-tight mb-0.5">I'm in a hurry</p>
                                        <p className="text-xs text-brand-text-muted">Just take my number and call me back.</p>
                                    </div>
                                </div>
                            </div>

                            {/* What to expect */}
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50 mb-4">What happens next</p>
                                <div className="space-y-4">
                                    {[
                                        { num: "1", text: "We review your submission within a few hours." },
                                        { num: "2", text: "We build a custom demo tailored to your practice." },
                                        { num: "3", text: "We call you to walk through how it sounds live." },
                                        { num: "4", text: "If you love it, we go live within 5 business days." },
                                    ].map(({ num, text }) => (
                                        <div key={num} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">{num}</span>
                                            <p className="text-sm text-brand-text-muted leading-snug">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust signals */}
                            <div className="space-y-2.5 pt-6 border-t border-brand-border/40">
                                {[
                                    "No commitment required",
                                    "HIPAA-compliant infrastructure",
                                    "Free custom demo built for you",
                                    "Live in 5 business days",
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-2 text-xs text-brand-text-muted">
                                        <Check className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── Right: Form ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <form
                                className="space-y-10"
                                onSubmit={e => { e.preventDefault(); alert("Request submitted! We'll contact you within 24 hours."); }}
                            >
                                {quickCall ? (
                                    <div className="space-y-5">
                                        <div className="h-px bg-brand-border/40" />
                                        {[
                                            { label: "Your Name", placeholder: "Dr. John Smith", type: "text" },
                                            { label: "Phone / WhatsApp", placeholder: "+91 98765 43210", type: "tel" },
                                        ].map(f => (
                                            <div key={f.label}>
                                                <label className="block text-xs font-black uppercase tracking-widest text-brand-text-muted/60 mb-2">{f.label}</label>
                                                <input type={f.type} required className={inputClass} placeholder={f.placeholder} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        {/* Section 1 */}
                                        <div className="space-y-5">
                                            <div className="flex items-center gap-4 pb-4 border-b border-brand-border/40">
                                                <span className="text-4xl font-black tabular-nums text-brand-border/25 leading-none select-none">01</span>
                                                <h3 className="text-lg font-black text-brand-text">Your Practice</h3>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                {[
                                                    { label: "Practice / Business Name", placeholder: "Dr. Smith's Dental Clinic", type: "text" },
                                                    { label: "Contact Name",             placeholder: "Dr. John Smith",            type: "text"  },
                                                    { label: "Email",                    placeholder: "john@clinic.com",           type: "email" },
                                                    { label: "Phone / WhatsApp",         placeholder: "+91 98765 43210",           type: "tel"   },
                                                ].map(f => (
                                                    <div key={f.label}>
                                                        <label className="block text-xs font-black uppercase tracking-widest text-brand-text-muted/60 mb-2">{f.label}</label>
                                                        <input type={f.type} required className={inputClass} placeholder={f.placeholder} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Section 2 */}
                                        <div className="space-y-5">
                                            <div className="flex items-center gap-4 pb-4 border-b border-brand-border/40">
                                                <span className="text-4xl font-black tabular-nums text-brand-border/25 leading-none select-none">02</span>
                                                <h3 className="text-lg font-black text-brand-text">About Your Calls</h3>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                {[
                                                    { label: "Industry / Specialty",           options: [["","Select industry..."],["Dental","Dental Clinic"],["Medical","Medical / GP"],["Real Estate","Real Estate"],["Law Firm","Law Firm"],["Salon/Spa","Salon / Spa"],["Other","Other"]] },
                                                    { label: "Primary Goal",                   options: [["","Select goal..."],["Book appointments","Book Appointments"],["Answer FAQs","Answer FAQs & Hours"],["Capture leads","Capture New Leads"],["All","All of the above"]] },
                                                    { label: "Inbound Calls / Month",          options: [["","Select volume..."],["0–50","0 – 50 calls"],["50–200","50 – 200 calls"],["200–500","200 – 500 calls"],["500+","500+ calls"]] },
                                                    { label: "Current Setup",                  options: [["","Select current setup..."],["Human only","Human Receptionist Only"],["Voicemail","Mostly Voicemail"],["Answering service","Answering Service"],["Nothing","Nothing Yet"]] },
                                                ].map(s => (
                                                    <div key={s.label}>
                                                        <label className="block text-xs font-black uppercase tracking-widest text-brand-text-muted/60 mb-2">{s.label}</label>
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
                                            <div className="flex items-center gap-4 pb-4 border-b border-brand-border/40">
                                                <span className="text-4xl font-black tabular-nums text-brand-border/25 leading-none select-none">03</span>
                                                <h3 className="text-lg font-black text-brand-text">Choose Your Plan</h3>
                                            </div>
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
                                                            <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 px-2 py-0.5 rounded-full">
                                                                Popular
                                                            </span>
                                                        )}
                                                        <div className="font-bold text-brand-text text-sm mb-0.5 flex items-center gap-2">
                                                            {!contactForPricing && selectedPlan === plan.id && (
                                                                <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                                                            )}
                                                            {plan.name}
                                                        </div>
                                                        <div className="text-accent-blue font-bold text-xs">{plan.monthly === 'Custom' ? 'Custom pricing' : `${plan.monthly}/mo`}</div>
                                                        <div className="text-[11px] text-brand-text-muted mt-1">{plan.minutes}</div>
                                                    </button>
                                                ))}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => { setContactForPricing(true); setSelectedPlan(''); }}
                                                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${contactForPricing ? 'border-accent-blue bg-accent-blue/8' : 'border-brand-border bg-brand-glass hover:border-accent-blue/30'}`}
                                            >
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${contactForPricing ? 'border-accent-blue bg-accent-blue' : 'border-brand-border'}`}>
                                                    {contactForPricing && <Zap className="w-3 h-3" style={{ color: 'var(--theme-bg)' }} />}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-brand-text text-sm">Not sure yet — contact me to discuss</div>
                                                    <div className="text-xs text-brand-text-muted">We'll recommend the best plan for your volume</div>
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                )}

                                {/* Submit */}
                                <div className="pt-2">
                                    <button type="submit" className="w-full btn-primary text-base py-4 justify-center"
                                        style={{ boxShadow: `0 0 28px rgba(var(--theme-primary-rgb),0.22)` }}>
                                        {quickCall ? 'Request Quick Call' : 'Request My Free Demo'}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                    <p className="text-center text-xs text-brand-text-muted/60 mt-4">
                                        Free · No commitment · We reply within 24 hours
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
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
