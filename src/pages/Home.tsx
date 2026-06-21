import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Strands from '../components/Strands';
import {
    ArrowRight, Phone, Clock, Calendar, Globe, Target, Building2, Stethoscope, Scissors,
    Home as HomeIcon, Bot, MessageSquare, Zap, Users, Mail, ShieldCheck, Star, Quote,
    Check, X as XIcon, Lock, Eye, RefreshCw, Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';
import TiltCard from '../components/TiltCard';
import MagicRings from '../components/MagicRings';
import Antigravity from '../components/Antigravity';
import CardSwap, { Card } from '../components/CardSwap';
import InfiniteMenu from '../components/InfiniteMenu';

const NumberCounter = ({ from = 0, to, duration = 2, prefix = "", suffix = "" }: { from?: number, to: number, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(from);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });

    useEffect(() => {
        if (!isInView) return;
        let startTime: number | null = null;
        const id = requestAnimationFrame(function tick(t) {
            if (!startTime) startTime = t;
            const p = Math.min((t - startTime) / (duration * 1000), 1);
            setCount(Math.floor(from + (to - from) * p));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(to);
        });
        return () => cancelAnimationFrame(id);
    }, [from, to, duration, isInView]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const stats = [
    { icon: Phone, value: 10000, suffix: "+", label: "Calls Handled Monthly" },
    { icon: Clock, value: 24, prefix: "", suffix: "/7", label: "Always Available" },
    { icon: Star, value: 98, suffix: "%", label: "Caller Satisfaction" },
    { icon: Zap, value: 1, prefix: "<", suffix: "s", label: "Avg. Response Time" },
];

const comparisonRows = [
    { label: "Availability", traditional: "9am – 6pm, weekdays only", maikus: "24/7/365, including holidays" },
    { label: "Simultaneous Calls", traditional: "One caller at a time, rest go to voicemail", maikus: "Unlimited concurrent calls" },
    { label: "Monthly Cost", traditional: "₹25,000+ salary, plus benefits", maikus: "Flat, predictable subscription" },
    { label: "Response Time", traditional: "Hold music, missed calls, callbacks", maikus: "Answers instantly, every time" },
    { label: "Sick Days & Turnover", traditional: "Frequent, needs retraining", maikus: "Never — always on, always trained" },
    { label: "Languages", traditional: "Usually one", maikus: "English, Hindi & regional languages" },
];

const testimonials = [
    {
        name: "Dr. Priya Sharma",
        role: "Owner, SmileCare Dental",
        quote: "Buzcall books appointments while we sleep. We've seen a 30% increase in new patient bookings since going live.",
        rating: 5,
    },
    {
        name: "Rohan Mehta",
        role: "Founder, UrbanCuts Salon",
        quote: "Our front desk used to miss half the calls during peak hours. Now every single caller gets answered instantly, every time.",
        rating: 5,
    },
    {
        name: "Anjali Verma",
        role: "Director, Vista Realty",
        quote: "The lead capture alone paid for the subscription in the first week. It feels like having a full-time receptionist for a fraction of the cost.",
        rating: 5,
    },
];

const industries = [
    { icon: Stethoscope, name: "Dental Clinics" },
    { icon: HomeIcon, name: "Real Estate" },
    { icon: Scissors, name: "Salons & Spas" },
    { icon: Building2, name: "Service Businesses" },
    { icon: Users, name: "Law Firms" },
    { icon: Stethoscope, name: "Medical Practices" },
    { icon: Building2, name: "Clinics & Hospitals" },
];

const floatingBadges = [
    { icon: Phone, text: "Call Answered", position: "-top-4 -left-4 lg:-left-12", delay: 0 },
    { icon: Calendar, text: "Appointment Booked", position: "top-1/3 -right-4 lg:-right-12", delay: 0.6 },
    { icon: Star, text: "5-Star Service", position: "-bottom-4 left-8 lg:left-12", delay: 1.2 },
];

const Home = () => {
    const navigate = useNavigate();

    const solutionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: solutionProgress } = useScroll({ target: solutionRef, offset: ["start end", "end start"] });
    const solutionBgY = useTransform(solutionProgress, [0, 1], ["-15%", "15%"]);

    // Track light/dark theme for WebGL components
    const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'));
    useEffect(() => {
        const obs = new MutationObserver(() => setIsLight(document.documentElement.classList.contains('light')));
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    // Interactive calculator state
    const [dailyCalls, setDailyCalls] = useState(60);
    const [missedRate, setMissedRate] = useState(20);
    const [clientValue, setClientValue] = useState(3000);
    const revenueLost = dailyCalls * (missedRate / 100) * clientValue * 30;

    const [displayRevenue, setDisplayRevenue] = useState(0);
    const problemRef = useRef<HTMLDivElement>(null);
    const problemInView = useInView(problemRef, { once: true, margin: "-10%" });
    const hasCountedRef = useRef(false);

    // How It Works — cards drop from top, staggered, pin at natural position
    const howRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: howProgress } = useScroll({
        target: howRef,
        offset: ["start end", "end start"],
    });
    const howCard1Y  = useTransform(howProgress, [0.00, 0.30], [-240, 0]);
    const howCard2Y  = useTransform(howProgress, [0.10, 0.40], [-240, 0]);
    const howCard3Y  = useTransform(howProgress, [0.20, 0.50], [-240, 0]);
    const howCard1Op = useTransform(howProgress, [0.00, 0.25], [0, 1]);
    const howCard2Op = useTransform(howProgress, [0.10, 0.35], [0, 1]);
    const howCard3Op = useTransform(howProgress, [0.20, 0.45], [0, 1]);

    useEffect(() => {
        if (!problemInView || hasCountedRef.current) return;
        hasCountedRef.current = true;
        const target = revenueLost;
        let startTime: number | null = null;
        const id = requestAnimationFrame(function tick(t) {
            if (!startTime) startTime = t;
            const p = Math.min((t - startTime) / 2000, 1);
            setDisplayRevenue(Math.floor(target * p));
            if (p < 1) requestAnimationFrame(tick);
            else setDisplayRevenue(target);
        });
        return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [problemInView]);

    useEffect(() => {
        if (hasCountedRef.current) setDisplayRevenue(revenueLost);
    }, [revenueLost]);

    const handleDemoNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/services/ai-voice-receptionist');
        setTimeout(() => {
            document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="flex flex-col w-full bg-brand-bg text-brand-text overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-6 lg:pt-44 lg:pb-4 overflow-hidden">
                {/* Strands background — hidden in light mode (looks odd on white bg) */}
                <div className="absolute inset-0 pointer-events-none hide-in-light">
                    <Strands
                        colors={["#00f0ff", "#9770e6"]}
                        count={4}
                        speed={0.22}
                        amplitude={0.7}
                        waviness={0.8}
                        thickness={0.6}
                        glow={2.8}
                        taper={2}
                        spread={1.2}
                        intensity={0.55}
                        saturation={1.2}
                        opacity={1}
                        scale={1.6}
                    />
                </div>
                {/* Gradient overlay — only needed in dark mode with Strands active */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/95 via-brand-bg/55 to-brand-bg/10 pointer-events-none hide-in-light" />

                <div className="relative z-10 container mx-auto px-6 lg:px-28">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left: Text content */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-accent-blue/20 text-accent-blue text-xs font-bold tracking-widest uppercase mb-7">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                                </span>
                                Buzcall Receptionist
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                                Never Miss Another{" "}
                                <span className="text-accent-blue">Customer Call</span>
                            </h1>

                            <p className="text-base md:text-lg text-brand-text-muted mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Buzcall Receptionist answers every call, books appointments, and captures leads — 24 hours a day, 7 days a week.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                                <button
                                    onClick={handleDemoNavigation}
                                    className="btn-primary w-full sm:w-auto py-4 px-8 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)]"
                                >
                                    Try Live Demo
                                </button>
                                <a href="#how-it-works" className="btn-secondary w-full sm:w-auto py-4 px-8 gap-2 group">
                                    See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Trust row */}
                            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
                                {["HIPAA-Compliant", "24/7 Live", "Zero Missed Calls"].map((tag) => (
                                    <span key={tag} className="flex items-center gap-1.5 text-brand-text-muted text-sm font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Visual panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="relative"
                        >
                            <div className="relative mx-auto max-w-sm lg:max-w-md">
                                {/* Main glass panel */}
                                <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5", background: "rgba(5,8,18,0.92)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)" }}>
                                    {/* Magic Rings — full card fill, follows mouse, click to burst */}
                                    <div className="absolute inset-0">
                                        <MagicRings
                                            color={isLight ? "#ffffff" : "#00f0ff"}
                                            colorTwo={isLight ? "#7c3aed" : "#9770e6"}
                                            ringCount={7}
                                            speed={0.85}
                                            attenuation={9}
                                            lineThickness={2.5}
                                            baseRadius={0.18}
                                            radiusStep={0.09}
                                            scaleRate={0.18}
                                            opacity={0.95}
                                            noiseAmount={0.06}
                                            ringGap={1.6}
                                            fadeIn={0.65}
                                            fadeOut={0.55}
                                            followMouse={true}
                                            mouseInfluence={0.18}
                                            hoverScale={1.15}
                                            parallax={0.04}
                                            clickBurst={true}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />

                                    {/* Active call card — top */}
                                    <div className="absolute inset-x-5 top-5 glass-card !rounded-2xl !p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                                                <Bot className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm leading-none mb-0.5">Buzcall</p>
                                                <p className="text-xs text-brand-text-muted">Active Call · 0:42</p>
                                            </div>
                                        </div>
                                        <div className="flex items-end gap-0.5 h-5">
                                            {[5, 12, 18, 8, 14, 6, 16].map((h, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="w-1 bg-accent-blue rounded-full"
                                                    animate={{ height: [`${h * 0.5}px`, `${h}px`, `${h * 0.5}px`] }}
                                                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Transcript card — bottom */}
                                    <div className="absolute inset-x-5 bottom-5 glass-card !rounded-2xl !p-4 space-y-2">
                                        <p className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest">Live Transcript</p>
                                        <p className="text-sm text-brand-text leading-relaxed">
                                            "You're all set — booked for Thursday at 2:00 PM. I'll send a confirmation text shortly."
                                        </p>
                                        <div className="flex items-center gap-1.5 text-accent-blue text-xs font-bold pt-1">
                                            <Check className="w-3.5 h-3.5" />
                                            Appointment Confirmed
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                {floatingBadges.map((badge, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={`hidden md:flex absolute ${badge.position} items-center gap-2 glass-card !rounded-full !py-2.5 !px-4 z-10 whitespace-nowrap`}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: [0, -10, 0] }}
                                        transition={{
                                            opacity: { duration: 0.6, delay: 0.5 + badge.delay },
                                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: badge.delay },
                                        }}
                                    >
                                        <badge.icon className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                                        <span className="text-xs font-bold">{badge.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION — flows from hero, same bg */}
            <section className="relative bg-brand-bg pt-4 pb-16 sm:pb-20 overflow-hidden">
                {/* Faint Strands continuation glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/60 pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    {/* Live indicator row */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted/60">Live platform metrics</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                    </motion.div>

                    {/* Unified stat panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x divide-brand-border/60 border border-brand-border/60 rounded-2xl overflow-hidden"
                        style={{ background: "var(--theme-glass)", backdropFilter: "blur(16px)" }}
                    >
                        {([
                            { icon: Phone,  value: 10000, suffix: "+",  label: "Calls Handled Monthly",  note: "↑ Growing every week"    },
                            { icon: Clock,  value: 24,    suffix: "/7",  label: "Always Available",       note: "No downtime, ever"         },
                            { icon: Star,   value: 98,    suffix: "%",   label: "Caller Satisfaction",    note: "Based on post-call ratings"},
                            { icon: Zap,    value: 1,     prefix: "<",   suffix: "s", label: "Avg. Response Time", note: "Instant pick-up, every time"},
                        ] as const).map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group flex flex-col items-center text-center px-5 py-7 relative hover:bg-accent-blue/4 transition-colors duration-300"
                            >
                                {/* Icon with glow on hover */}
                                <div className="w-9 h-9 rounded-xl bg-accent-blue/8 border border-accent-blue/15 flex items-center justify-center mb-3 group-hover:bg-accent-blue/15 group-hover:border-accent-blue/30 transition-all duration-300">
                                    <stat.icon className="w-4 h-4 text-accent-blue" />
                                </div>

                                {/* Number */}
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-text mb-0.5 tabular-nums leading-none">
                                    <NumberCounter from={0} to={stat.value} prefix={stat.prefix ?? ""} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <p className="text-brand-text-muted text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mb-2">
                                    {stat.label}
                                </p>

                                {/* Note — appears on hover */}
                                <p className="text-[10px] text-accent-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                                    {stat.note}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Divider leading into next section */}
                    <div className="mt-14 flex items-center gap-4 max-w-5xl mx-auto">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted/30">Scroll to explore</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
                    </div>
                </div>
            </section>

            {/* PROBLEM SECTION — Interactive Revenue Calculator */}
            <section className="relative border-t border-brand-border overflow-hidden">

                {/* Pinned background image — replace URL with your own photo */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('src/assets/tokyo-alley.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                />

                {/* Dark brand overlay */}
                <div className="absolute inset-0 bg-brand-bg/82 pointer-events-none" />
                {/* Subtle cyan edge glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(0,240,255,0.07)_0%,transparent_70%)] pointer-events-none" />

                <div ref={problemRef} className="relative z-10 py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <Target className="w-3.5 h-3.5" />
                            Revenue Calculator
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                            Every Missed Call Is{" "}
                            <span className="text-black bg-white px-3 py-0.5">Lost Revenue</span>
                        </h2>
                        <p className="text-brand-text-muted text-sm sm:text-base max-w-lg mx-auto">
                            Adjust the sliders to see exactly how much your business loses each month from unanswered calls.
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 items-stretch">

                        {/* Left panel — sliders */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="glass-card !p-5 sm:!p-6 flex flex-col gap-5 hover:border-brand-border"
                        >
                            {/* Card header */}
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                                    <Phone className="w-3.5 h-3.5 text-accent-blue" />
                                </div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">Your Business Numbers</h3>
                            </div>

                            {/* Daily calls */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs sm:text-sm text-brand-text-muted font-medium">Daily calls received</label>
                                    <span className="text-base sm:text-lg font-black text-brand-text tabular-nums">{dailyCalls}</span>
                                </div>
                                <input
                                    type="range" min={10} max={200} step={5}
                                    value={dailyCalls}
                                    onChange={e => setDailyCalls(Number(e.target.value))}
                                    className="calc-slider"
                                    style={{ background: `linear-gradient(to right, var(--theme-accent-blue) ${((dailyCalls - 10) / 190) * 100}%, var(--theme-border) ${((dailyCalls - 10) / 190) * 100}%)` }}
                                />
                                <div className="flex justify-between text-[10px] text-brand-text-muted/40">
                                    <span>10</span><span>200</span>
                                </div>
                            </div>

                            <div className="h-px bg-brand-border/60" />

                            {/* Missed rate */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs sm:text-sm text-brand-text-muted font-medium">Missed call rate</label>
                                    <span className="text-base sm:text-lg font-black text-accent-blue tabular-nums">{missedRate}%</span>
                                </div>
                                <input
                                    type="range" min={5} max={60} step={1}
                                    value={missedRate}
                                    onChange={e => setMissedRate(Number(e.target.value))}
                                    className="calc-slider"
                                    style={{ background: `linear-gradient(to right, var(--theme-accent-blue) ${((missedRate - 5) / 55) * 100}%, var(--theme-border) ${((missedRate - 5) / 55) * 100}%)` }}
                                />
                                <div className="flex justify-between text-[10px] text-brand-text-muted/40">
                                    <span>5%</span><span>60%</span>
                                </div>
                            </div>

                            <div className="h-px bg-brand-border/60" />

                            {/* Client value */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs sm:text-sm text-brand-text-muted font-medium">Avg. value per client</label>
                                    <span className="text-base sm:text-lg font-black text-brand-text tabular-nums">₹{clientValue.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range" min={500} max={15000} step={100}
                                    value={clientValue}
                                    onChange={e => setClientValue(Number(e.target.value))}
                                    className="calc-slider"
                                    style={{ background: `linear-gradient(to right, var(--theme-accent-blue) ${((clientValue - 500) / 14500) * 100}%, var(--theme-border) ${((clientValue - 500) / 14500) * 100}%)` }}
                                />
                                <div className="flex justify-between text-[10px] text-brand-text-muted/40">
                                    <span>₹500</span><span>₹15,000</span>
                                </div>
                            </div>

                            {/* Summary pill */}
                            <div className="mt-auto flex items-center justify-between rounded-xl bg-accent-blue/8 border border-accent-blue/15 px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <XIcon className="w-3.5 h-3.5 text-accent-blue" />
                                    <span className="text-xs sm:text-sm text-brand-text-muted">Missed calls / day</span>
                                </div>
                                <span className="font-black text-accent-blue text-sm sm:text-base tabular-nums">
                                    {Math.round(dailyCalls * missedRate / 100)} calls
                                </span>
                            </div>
                        </motion.div>

                        {/* Right panel — result */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="glass-card !p-5 sm:!p-6 flex flex-col justify-between border-accent-purple/20 hover:border-accent-purple/20"
                        >
                            <div className="flex-1">
                                {/* Card header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse shrink-0" />
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">Monthly Revenue Loss</h3>
                                </div>

                                {/* Revenue number */}
                                <div className="mb-1">
                                    <div className="text-3xl sm:text-4xl font-black text-brand-text leading-none tabular-nums">
                                        ₹{displayRevenue.toLocaleString()}
                                    </div>
                                    <p className="text-[10px] text-brand-text-muted/50 mt-1 uppercase tracking-widest">per month</p>
                                </div>

                                {/* Yearly row */}
                                <div className="flex items-center gap-2 mt-3 mb-5 px-3 py-2.5 rounded-lg border border-white/8 bg-white/3">
                                    <ArrowRight className="w-3.5 h-3.5 text-brand-text-muted/50 shrink-0" />
                                    <span className="text-xs text-brand-text-muted">That's</span>
                                    <span className="text-sm font-bold text-brand-text tabular-nums">₹{(displayRevenue * 12).toLocaleString()}</span>
                                    <span className="text-xs text-brand-text-muted">lost every year</span>
                                </div>

                                {/* With Buzcall box */}
                                <div className="rounded-xl bg-accent-blue/8 border border-accent-blue/20 p-4 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">With Buzcall</p>
                                    </div>
                                    <p className="text-xl font-black text-accent-blue">₹0 Lost</p>
                                    <div className="space-y-2">
                                        {[
                                            "Every call answered instantly, 24/7",
                                            "Appointments booked in real time",
                                            "Zero hold music, zero voicemail",
                                        ].map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-brand-text-muted">
                                                <Check className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleDemoNavigation}
                                className="btn-primary mt-5 w-full py-3 text-sm justify-center shadow-[0_0_24px_rgba(0,240,255,0.18)]"
                            >
                                Stop Losing Revenue — Try Free
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>
                </div>
                </div>
            </section>

            {/* SOLUTION SECTION */}
            <section ref={solutionRef} className="py-16 sm:py-24 relative bg-brand-bg overflow-hidden">
                <motion.div
                    style={{ y: solutionBgY }}
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/8 via-transparent to-transparent -z-10"
                />
                {/* Dot-grid texture */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,240,255,0.15) 1px, transparent 1px)', backgroundSize: '34px 34px', opacity: 0.045 }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <Bot className="w-3.5 h-3.5" />
                            AI Receptionist Features
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                            Meet Your <span className="text-accent-blue">AI Voice Receptionist</span>
                        </h2>
                        <p className="text-brand-text-muted text-sm sm:text-base max-w-xl mx-auto">
                            A hyper-realistic voice agent that handles your front desk 24 hours a day, every day.
                        </p>
                    </motion.div>

                    {/* ── Bento grid ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">

                        {/* 1 ─ Phone: TALL hero card (spans 2 rows on lg) */}
                        <motion.div
                            className="lg:row-span-2"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="group glass-card h-full min-h-[300px] lg:min-h-0 flex flex-col gap-4 hover:border-accent-blue/50 hover:shadow-[0_0_50px_rgba(0,240,255,0.10)] transition-all duration-300 relative overflow-hidden">
                                {/* Live badge */}
                                <div className="inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 bg-accent-blue/10 border border-accent-blue/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">Live Now</span>
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-accent-blue/12 border border-accent-blue/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-blue/22 transition-all duration-300">
                                    <Phone className="w-6 h-6 text-accent-blue" />
                                </div>

                                {/* Hero stat */}
                                <div>
                                    <p className="text-5xl lg:text-6xl font-black text-brand-text leading-none tabular-nums">&lt;&nbsp;1s</p>
                                    <p className="text-[10px] text-brand-text-muted/50 uppercase tracking-widest mt-1.5">Avg. response time</p>
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-accent-blue transition-colors leading-snug">
                                        Answers on First Ring
                                    </h3>
                                    <p className="text-brand-text-muted text-sm leading-relaxed">
                                        No hold music, no voicemail. AI picks up instantly on every single call, any time of day or night.
                                    </p>
                                </div>

                                {/* Animated waveform */}
                                <div className="flex items-end gap-0.5 h-9 mt-1">
                                    {[4,10,18,7,24,13,20,8,26,16,10,22,6,19,12,28,9,16,7,22,14].map((h, i) => (
                                        <motion.span
                                            key={i}
                                            className="flex-1 min-w-0 bg-gradient-to-t from-accent-blue/25 to-accent-blue rounded-sm"
                                            animate={{ height: [`${Math.max(3, h * 0.28)}px`, `${h}px`, `${Math.max(3, h * 0.28)}px`] }}
                                            transition={{ duration: 0.75 + i * 0.04, repeat: Infinity, delay: i * 0.07, ease: "easeInOut" }}
                                        />
                                    ))}
                                </div>

                                <span className="self-start text-[10px] font-bold uppercase tracking-wide text-accent-blue bg-accent-blue/8 border border-accent-blue/20 rounded-full px-2.5 py-1">
                                    Always First Ring
                                </span>

                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                            </TiltCard>
                        </motion.div>

                        {/* 2 ─ Calendar (purple) */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="group glass-card h-full flex flex-col gap-3 hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(151,112,230,0.08)] transition-all duration-300 relative overflow-hidden">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-accent-purple/12 border border-accent-purple/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-purple/22 transition-all duration-300">
                                        <Calendar className="w-5 h-5 text-accent-purple" />
                                    </div>
                                    <span className="text-accent-purple font-black text-base opacity-50 tabular-nums">24/7</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm sm:text-base font-bold mb-1.5 group-hover:text-accent-purple transition-colors leading-snug">Books Appointments</h3>
                                    <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">Integrates with your live calendar to schedule, reschedule or cancel in real time.</p>
                                </div>
                                <span className="self-start text-[10px] font-bold uppercase tracking-wide text-accent-purple bg-accent-purple/8 border border-accent-purple/20 rounded-full px-2.5 py-1">Real-Time Booking</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                            </TiltCard>
                        </motion.div>

                        {/* 3 ─ Clock (blue) */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="group glass-card h-full flex flex-col gap-3 hover:border-accent-blue/45 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-all duration-300 relative overflow-hidden">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-accent-blue/12 border border-accent-blue/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-blue/22 transition-all duration-300">
                                        <Clock className="w-5 h-5 text-accent-blue" />
                                    </div>
                                    <span className="text-accent-blue font-black text-base opacity-50 tabular-nums">365</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm sm:text-base font-bold mb-1.5 group-hover:text-accent-blue transition-colors leading-snug">Works 24/7/365</h3>
                                    <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">No breaks, no sick days, no holidays — fully operational around the clock, forever.</p>
                                </div>
                                <span className="self-start text-[10px] font-bold uppercase tracking-wide text-accent-blue bg-accent-blue/8 border border-accent-blue/20 rounded-full px-2.5 py-1">Zero Downtime</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                            </TiltCard>
                        </motion.div>

                        {/* 4 ─ Globe (purple) */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: 0.24, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="group glass-card h-full flex flex-col gap-3 hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(151,112,230,0.08)] transition-all duration-300 relative overflow-hidden">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-accent-purple/12 border border-accent-purple/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-purple/22 transition-all duration-300">
                                        <Globe className="w-5 h-5 text-accent-purple" />
                                    </div>
                                    <span className="text-accent-purple font-black text-base opacity-50 tabular-nums">10+</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm sm:text-base font-bold mb-1.5 group-hover:text-accent-purple transition-colors leading-snug">Speaks 10+ Languages</h3>
                                    <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">Fluent in English, Hindi, and regional Indian languages for every caller.</p>
                                </div>
                                <span className="self-start text-[10px] font-bold uppercase tracking-wide text-accent-purple bg-accent-purple/8 border border-accent-purple/20 rounded-full px-2.5 py-1">Multilingual</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                            </TiltCard>
                        </motion.div>

                        {/* 5 ─ Target (blue) */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: 0.32, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="group glass-card h-full flex flex-col gap-3 hover:border-accent-blue/45 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-all duration-300 relative overflow-hidden">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-accent-blue/12 border border-accent-blue/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-blue/22 transition-all duration-300">
                                        <Target className="w-5 h-5 text-accent-blue" />
                                    </div>
                                    <span className="text-accent-blue font-black text-base opacity-50 tabular-nums">100%</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm sm:text-base font-bold mb-1.5 group-hover:text-accent-blue transition-colors leading-snug">Captures Every Lead</h3>
                                    <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">Records caller details instantly and texts follow-up info before the caller hangs up.</p>
                                </div>
                                <span className="self-start text-[10px] font-bold uppercase tracking-wide text-accent-blue bg-accent-blue/8 border border-accent-blue/20 rounded-full px-2.5 py-1">Zero Miss Rate</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                            </TiltCard>
                        </motion.div>

                        {/* 6 ─ Bot: WIDE card — spans 2 cols on sm+, 2 cols on lg */}
                        <motion.div
                            className="sm:col-span-2 lg:col-span-2"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="group glass-card h-full flex flex-col sm:flex-row items-stretch gap-5 hover:border-accent-blue/45 hover:shadow-[0_0_50px_rgba(0,240,255,0.09)] transition-all duration-300 relative overflow-hidden">

                                {/* Left: text */}
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="flex items-start justify-between">
                                        <div className="w-10 h-10 rounded-xl bg-accent-blue/12 border border-accent-blue/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-blue/22 transition-all duration-300">
                                            <Bot className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <span className="text-accent-blue font-black text-base opacity-50">HD</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm sm:text-base font-bold mb-1.5 group-hover:text-accent-blue transition-colors leading-snug">Truly Human-Like Voice</h3>
                                        <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">Natural pauses, tone, and empathy — most callers genuinely cannot tell it's AI.</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-accent-blue text-accent-blue" />)}
                                        <span className="text-[10px] text-brand-text-muted ml-2">Rated 4.9/5 by callers</span>
                                    </div>
                                    <span className="self-start text-[10px] font-bold uppercase tracking-wide text-accent-blue bg-accent-blue/8 border border-accent-blue/20 rounded-full px-2.5 py-1">Neural Voice</span>
                                </div>

                                {/* Divider */}
                                <div className="hidden sm:block w-px bg-brand-border/60 self-stretch" />

                                {/* Right: visual waveform panel */}
                                <div className="hidden sm:flex flex-col items-center justify-center gap-3 px-4 shrink-0 w-48">
                                    <div className="flex items-center gap-0.5 h-12">
                                        {[5,12,22,9,18,30,14,24,7,20,28,11,22,7,16,26,9,20,5,13,22].map((h, i) => (
                                            <motion.span
                                                key={i}
                                                className="w-1 bg-gradient-to-t from-accent-blue/20 to-accent-blue rounded-sm"
                                                animate={{ height: [`${Math.max(3, h * 0.28)}px`, `${h}px`, `${Math.max(3, h * 0.28)}px`] }}
                                                transition={{ duration: 1.0 + i * 0.05, repeat: Infinity, delay: i * 0.065, ease: "easeInOut" }}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-accent-blue">Neural TTS Engine</p>
                                        <p className="text-[10px] text-brand-text-muted/50 mt-0.5">48 kHz · HD Quality</p>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                            </TiltCard>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* HOW IT WORKS ─────────────────────────────────────────────────────── */}
            {/* Antigravity settings: edit props inside the Antigravity block below */}
            <section ref={howRef} id="how-it-works" className="relative overflow-hidden border-y border-brand-border" style={{ minHeight: "860px" }}>

                {/* ↓↓↓ ANTIGRAVITY SETTINGS — edit props below to tune the particle effect ↓↓↓ */}
                <div className="absolute inset-0">
                    <Antigravity
                        count={350}
                        color="#a2f9ff"
                        magnetRadius={14}
                        ringRadius={4}
                        waveSpeed={0.4}
                        waveAmplitude={1}
                        particleSize={2}
                        lerpSpeed={0.06}
                        autoAnimate={true}
                        particleVariance={1}
                        rotationSpeed={0.12}
                        depthFactor={1}
                        pulseSpeed={3}
                        particleShape="capsule"
                        fieldStrength={10}
                    />
                </div>
                {/* ↑↑↑ ANTIGRAVITY SETTINGS ↑↑↑ */}

                <div className="absolute inset-0 bg-brand-bg/72" />

                {/* Decorative depth orbs */}
                <div className="absolute top-1/3 left-[-5%] w-72 h-72 bg-accent-blue/6 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-[-4%] w-80 h-80 bg-accent-purple/6 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 py-24 lg:py-32 container mx-auto px-6 lg:px-12">

                    {/* ── Header ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <Zap className="w-3.5 h-3.5" />
                            How It Works
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Up and running in{" "}
                            <span className="text-accent-blue">3 simple steps</span>
                        </h2>
                        <p className="text-brand-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                            No technical knowledge needed. We handle the full setup — you just answer fewer calls.
                        </p>
                    </motion.div>

                    {/* ── Step cards ── */}
                    <div className="max-w-5xl mx-auto relative">


                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
                            {([
                                {
                                    step: "01",
                                    icon: Phone,
                                    title: "Customer calls your number",
                                    desc: "A patient or client dials your existing business number. Works with any phone line — no porting required.",
                                    detail: "No number porting required",
                                    tags: ["Existing number", "First ring"],
                                    y: howCard1Y, op: howCard1Op,
                                },
                                {
                                    step: "02",
                                    icon: Bot,
                                    title: "AI answers on the first ring",
                                    desc: "Maikus AI greets them naturally, answers FAQs, qualifies the lead, and handles the full conversation.",
                                    detail: "Sounds human — callers rarely know it's AI",
                                    tags: ["Natural voice", "Zero hold"],
                                    y: howCard2Y, op: howCard2Op,
                                },
                                {
                                    step: "03",
                                    icon: Calendar,
                                    title: "Appointment confirmed instantly",
                                    desc: "AI checks your live calendar, locks in the slot, fires an SMS confirmation, and logs the lead to your CRM.",
                                    detail: "Google Calendar, Calendly & more",
                                    tags: ["SMS sent", "CRM updated"],
                                    y: howCard3Y, op: howCard3Op,
                                },
                            ] as const).map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    style={{ y: item.y, opacity: item.op }}
                                    className="group"
                                >
                                    <div className="relative h-full glass-card flex flex-col gap-4 hover:border-accent-blue/45 transition-all duration-300 overflow-hidden">

                                        {/* Step number — plain accent blue */}
                                        <span className="text-[60px] sm:text-[68px] font-black leading-none tracking-tighter select-none text-accent-blue">
                                            {item.step}
                                        </span>

                                        {/* Icon */}
                                        <div className="w-11 h-11 rounded-2xl bg-accent-blue/12 border border-accent-blue/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-blue/22 transition-all duration-300 shrink-0">
                                            <item.icon className="w-5 h-5 text-accent-blue" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold mb-2 group-hover:text-accent-blue transition-colors duration-200 leading-snug text-brand-text">
                                                {item.title}
                                            </h3>
                                            <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-accent-blue bg-accent-blue/10 border border-accent-blue/22 rounded-full px-2 sm:px-2.5 py-1">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-brand-text-muted border-t border-brand-border pt-3">
                                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-blue shrink-0" />
                                            <span className="text-[11px] sm:text-xs">{item.detail}</span>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/3 via-transparent to-accent-purple/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Bottom stat bar ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="mt-16 max-w-3xl mx-auto grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-brand-border bg-brand-border"
                    >
                        {[
                            { value: "< 1s", label: "Response time" },
                            { value: "3–5 days", label: "Go-live setup" },
                            { value: "24/7", label: "Always answering" },
                        ].map(s => (
                            <div key={s.label} className="bg-brand-bg/90 backdrop-blur-sm px-4 sm:px-6 py-5 text-center">
                                <div className="text-xl sm:text-2xl font-extrabold text-accent-blue mb-1">{s.value}</div>
                                <div className="text-[10px] sm:text-xs text-brand-text-muted uppercase tracking-widest font-bold">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* COMPARISON SECTION */}
            <section className="py-16 sm:py-24 relative bg-brand-bg-alt border-y border-brand-border overflow-hidden">
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-blue/6 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                            <Zap className="w-3.5 h-3.5" />
                            Why Switch
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Old Way <span className="text-brand-text-muted/60">vs.</span>{" "}
                            <span className="text-accent-blue">Buzcall Way</span>
                        </h2>
                        <p className="text-brand-text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                            See exactly what changes when AI takes over your front desk.
                        </p>
                    </motion.div>

                    {/* ── MOBILE: stacked before/after cards ── */}
                    <div className="md:hidden space-y-3 max-w-lg mx-auto">
                        {comparisonRows.map((row, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                                className="rounded-2xl border border-brand-border overflow-hidden"
                                style={{ background: "rgba(255,255,255,0.03)" }}
                            >
                                {/* Category label */}
                                <div className="px-4 pt-3 pb-2 border-b border-brand-border">
                                    <span className="text-xs font-black uppercase tracking-widest text-accent-blue">{row.label}</span>
                                </div>
                                {/* Traditional row */}
                                <div className="flex items-start gap-3 px-4 py-3 border-b border-brand-border/50">
                                    <XIcon className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted/50 block mb-0.5">Traditional</span>
                                        <span className="text-sm text-brand-text-muted">{row.traditional}</span>
                                    </div>
                                </div>
                                {/* Buzcall row */}
                                <div className="flex items-start gap-3 px-4 py-3 bg-accent-blue/6">
                                    <Check className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue/70 block mb-0.5">Buzcall AI</span>
                                        <span className="text-sm text-accent-blue font-semibold">{row.maikus}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── DESKTOP: highlighted table ── */}
                    <div className="hidden md:block max-w-5xl mx-auto">
                        {/* Column headers — 3 equal cols */}
                        <div className="grid grid-cols-3 mb-3 px-1">
                            <div className="px-5 text-xs font-bold uppercase tracking-widest text-brand-text-muted/40">
                                Feature
                            </div>
                            <div className="text-center text-xs font-bold uppercase tracking-widest text-brand-text-muted/60">
                                Traditional Receptionist
                            </div>
                            <div className="flex justify-center">
                                <span className="text-xs font-bold uppercase tracking-widest text-accent-blue bg-accent-blue/10 border border-accent-blue/25 rounded-full px-4 py-1.5">
                                    Buzcall AI ✦
                                </span>
                            </div>
                        </div>

                        {/* Table — no overflow-hidden so x-animation isn't clipped */}
                        <div className="rounded-2xl border border-brand-border divide-y divide-brand-border">
                            {comparisonRows.map((row, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.06 }}
                                    className="grid grid-cols-3 items-stretch"
                                    style={{ background: idx === 0 ? "rgba(var(--theme-primary-rgb),0.03)" : idx % 2 === 0 ? "var(--theme-glass)" : "transparent" }}
                                >
                                    {/* Label */}
                                    <div className="px-5 py-4 font-bold text-sm text-brand-text flex items-center border-r border-brand-border/40">
                                        {row.label}
                                    </div>
                                    {/* Traditional */}
                                    <div className="px-5 py-4 flex items-start gap-2.5 border-r border-brand-border/40">
                                        <XIcon className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                        <span className="text-sm text-brand-text-muted">{row.traditional}</span>
                                    </div>
                                    {/* Buzcall — direct bg, no absolute positioning */}
                                    <div className="px-5 py-4 flex items-start gap-2.5 bg-accent-blue/5 border-l border-accent-blue/10">
                                        <Check className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                        <span className="text-sm text-accent-blue font-semibold">{row.maikus}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto glass-card border-accent-blue/20 !py-5 !px-6"
                    >
                        <p className="text-sm sm:text-base font-semibold text-center sm:text-left">
                            Ready to stop losing calls?{" "}
                            <span className="text-accent-blue">Switch in 3–5 business days.</span>
                        </p>
                        <button
                            onClick={handleDemoNavigation}
                            className="btn-primary shrink-0 py-3 px-7 text-sm shadow-[0_0_20px_rgba(0,240,255,0.2)] whitespace-nowrap"
                        >
                            Try Free Demo <ArrowRight className="ml-1.5 w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* REAL CONVERSATION — HIPAA */}
            <section className="py-20 sm:py-28 relative bg-brand-bg overflow-hidden border-y border-brand-border">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/4 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14 sm:mb-18"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(0,240,255,0.12)]">
                            <ShieldCheck className="w-3.5 h-3.5" /> HIPAA-Compliant · End-to-End Encrypted
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Protected by{" "}
                            <span className="text-black bg-white px-4 py-1">HIPAA-compliant</span>
                        </h2>
                        <p className="text-brand-text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                            Every call processed through certified, encrypted infrastructure — patient identity never stored.
                        </p>
                    </motion.div>

                    {/* Two-column layout */}
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

                        {/* ── Left: Trust panel ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full lg:w-[42%] lg:sticky lg:top-28 lg:self-start"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                                Every word,<br className="hidden sm:block" /> locked by default.
                            </h3>
                            <p className="text-brand-text-muted text-sm leading-relaxed mb-8">
                                Buzcall processes calls through HIPAA-compliant infrastructure. Transcripts are fully decoupled from caller identity — no PII is ever linked, stored, or shared.
                            </p>

                            {/* Feature rows */}
                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: ShieldCheck, title: "HIPAA-Compliant Infrastructure", desc: "All data processed via audited, certified channels." },
                                    { icon: Lock,        title: "256-bit AES Encryption",          desc: "Every conversation encrypted in transit and at rest." },
                                    { icon: Eye,         title: "Identity Decoupled",              desc: "Transcripts are never linked to caller identity." },
                                    { icon: RefreshCw,   title: "Auto-purge after 30 Days",        desc: "Retention policies comply with HIPAA standards." },
                                ].map(({ icon: Icon, title, desc }) => (
                                    <div key={title} className="flex items-start gap-3 group">
                                        <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/20 transition-all duration-200">
                                            <Icon className="w-4 h-4 text-accent-blue" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white leading-snug">{title}</p>
                                            <p className="text-xs text-brand-text-muted mt-0.5">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-2">
                                {["HIPAA", "256-bit AES", "SOC 2 Ready", "Zero PII", "GDPR"].map(b => (
                                    <span key={b} className="text-[10px] font-bold uppercase tracking-wider text-accent-blue border border-accent-blue/25 bg-accent-blue/8 rounded-full px-3 py-1">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── Right: Chat mockup ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full lg:w-[58%]"
                        >
                            <div className="rounded-3xl border border-brand-border overflow-hidden" style={{ background: "rgba(var(--theme-bg-card-rgb),0.92)", backdropFilter: "blur(24px)" }}>

                                {/* Chat header */}
                                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
                                    <div className="w-9 h-9 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                                        <Bot style={{ width: 18, height: 18, color: "var(--theme-bg)" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white leading-none mb-0.5">Buzcall Receptionist</p>
                                        <div className="flex items-center gap-1.5 text-[10px] text-accent-blue font-semibold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                            Live Call · 0:42
                                        </div>
                                    </div>
                                    <div className="ml-auto flex items-center gap-1.5 bg-accent-blue/10 border border-accent-blue/25 rounded-full px-3 py-1">
                                        <ShieldCheck className="w-3 h-3 text-accent-blue" />
                                        <span className="text-[10px] font-bold text-accent-blue">Encrypted</span>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="p-5 sm:p-6 space-y-5">

                                    {/* Caller 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="flex gap-3 items-end"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-brand-text-muted shrink-0">R</div>
                                        <div className="max-w-[80%]">
                                            <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest mb-1.5">Rahul · Caller</p>
                                            <div className="rounded-2xl rounded-bl-sm bg-white/8 border border-white/8 px-4 py-3">
                                                <p className="text-sm sm:text-base text-brand-text leading-relaxed">"Hi, I'd like to book a dental cleaning if possible."</p>
                                            </div>
                                            <p className="text-[10px] text-brand-text-muted/40 mt-1 ml-1">2:41 PM</p>
                                        </div>
                                    </motion.div>

                                    {/* AI 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.35 }}
                                        className="flex gap-3 items-end flex-row-reverse"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                                            <Bot style={{ width: 15, height: 15, color: "var(--theme-bg)" }} />
                                        </div>
                                        <div className="max-w-[80%] text-right">
                                            <div className="flex items-center justify-end gap-1.5 mb-1.5">
                                                <p className="text-[10px] text-accent-blue font-bold uppercase tracking-widest">Buzcall AI</p>
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                            </div>
                                            <div className="rounded-2xl rounded-br-sm px-4 py-3 text-left" style={{ background: "linear-gradient(135deg,rgba(var(--theme-primary-rgb),0.14) 0%,rgba(var(--theme-primary-rgb),0.07) 100%)", border: "1px solid rgba(var(--theme-primary-rgb),0.22)" }}>
                                                <div className="text-sm sm:text-base font-semibold text-gradient">
                                                    <DecryptedText text="I'd be happy to help! Are you an existing patient?" speed={30} maxIterations={2} animateOn="view" />
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-brand-text-muted/40 mt-1 mr-1">2:41 PM</p>
                                        </div>
                                    </motion.div>

                                    {/* Caller 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        className="flex gap-3 items-end"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-brand-text-muted shrink-0">R</div>
                                        <div className="max-w-[80%]">
                                            <div className="rounded-2xl rounded-bl-sm bg-white/8 border border-white/8 px-4 py-3">
                                                <p className="text-sm sm:text-base text-brand-text leading-relaxed">"I'm a new patient. My name is Rahul."</p>
                                            </div>
                                            <p className="text-[10px] text-brand-text-muted/40 mt-1 ml-1">2:42 PM</p>
                                        </div>
                                    </motion.div>

                                    {/* AI 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.85 }}
                                        className="flex gap-3 items-end flex-row-reverse"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                                            <Bot style={{ width: 15, height: 15, color: "var(--theme-bg)" }} />
                                        </div>
                                        <div className="max-w-[85%] text-right">
                                            <div className="flex items-center justify-end gap-1.5 mb-1.5">
                                                <p className="text-[10px] text-accent-blue font-bold uppercase tracking-widest">Buzcall AI</p>
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                            </div>
                                            <div className="rounded-2xl rounded-br-sm px-4 py-3 text-left" style={{ background: "linear-gradient(135deg,rgba(var(--theme-primary-rgb),0.14) 0%,rgba(var(--theme-primary-rgb),0.07) 100%)", border: "1px solid rgba(var(--theme-primary-rgb),0.22)" }}>
                                                <div className="text-sm sm:text-base font-semibold text-gradient">
                                                    <DecryptedText text="Nice to meet you, Rahul! I have a slot this Thursday at 2:00 PM. Shall I book it?" speed={30} maxIterations={2} animateOn="view" />
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-brand-text-muted/40 mt-1 mr-1">2:42 PM</p>
                                        </div>
                                    </motion.div>

                                    {/* Booking confirmation card */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.1, duration: 0.4 }}
                                        className="mx-auto max-w-xs rounded-2xl border border-accent-blue/30 p-4 text-center"
                                        style={{ background: "linear-gradient(135deg,rgba(var(--theme-primary-rgb),0.1) 0%,rgba(var(--theme-primary-rgb),0.04) 100%)" }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center mx-auto mb-2">
                                            <Check className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <p className="font-bold text-white text-sm mb-0.5">Appointment Confirmed</p>
                                        <p className="text-accent-blue text-xs font-semibold">Thursday, 2:00 PM · Dental Cleaning</p>
                                        <p className="text-brand-text-muted text-[10px] mt-1.5">SMS confirmation sent · Calendar updated</p>
                                    </motion.div>
                                </div>

                                {/* Chat footer — waveform */}
                                <div className="px-5 py-3 border-t border-white/8 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.02)" }}>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-end gap-0.5 h-5">
                                            {[3, 8, 13, 5, 10, 15, 4, 11, 7, 12].map((h, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="w-0.5 bg-accent-blue/60 rounded-full"
                                                    animate={{ height: [`${h * 0.4}px`, `${h}px`, `${h * 0.4}px`] }}
                                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.09, ease: "easeInOut" }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-brand-text-muted">AI Speaking</span>
                                    </div>
                                    <span className="text-[10px] text-brand-text-muted/50 flex items-center gap-1">
                                        <Lock className="w-3 h-3" /> End-to-end encrypted
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ADDITIONAL AUTOMATIONS */}
            <section className="py-20 sm:py-28 relative bg-brand-bg-alt border-t border-brand-border overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(151,112,230,0.06)_0%,transparent_65%)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/4 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-purple/25 bg-accent-purple/8 text-accent-purple text-xs font-bold uppercase tracking-widest mb-5">
                            <Sparkles className="w-3.5 h-3.5" />
                            The Full Platform
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Additional{" "}
                            <span className="inline-block bg-white text-black px-4 py-0.5">AI Automations</span>
                        </h2>
                        <p className="text-brand-text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                            We're building a complete AI ecosystem for your business. Here's what's launching next.
                        </p>
                    </motion.div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
                        {([
                            {
                                title: "AI Email Automation",
                                icon: Mail,
                                color: "blue",
                                desc: "Smart sequences that nurture leads, follow up missed calls, and book appointments — all on autopilot.",
                                stat: "3× open rates",
                                eta: "Q3 2025",
                                img: "https://picsum.photos/seed/emailai/600/280",
                            },
                            {
                                title: "Smart Lead Funnels",
                                icon: Target,
                                color: "purple",
                                desc: "AI lead scoring and instant routing so your team focuses only on hot, ready-to-convert prospects.",
                                stat: "2× conversions",
                                eta: "Q3 2025",
                                img: "https://picsum.photos/seed/leadfunnel/600/280",
                            },
                            {
                                title: "Website AI Chatbots",
                                icon: MessageSquare,
                                color: "blue",
                                desc: "Converts website visitors into booked appointments 24/7, without any human involvement.",
                                stat: "+40% bookings",
                                eta: "Q4 2025",
                                img: "https://picsum.photos/seed/chatbotai/600/280",
                            },
                            {
                                title: "Social Media Automation",
                                icon: Globe,
                                color: "purple",
                                desc: "Replies to DMs, captures social leads, and schedules appointments directly from Instagram & WhatsApp.",
                                stat: "Zero response lag",
                                eta: "Q4 2025",
                                img: "https://picsum.photos/seed/socialautom/600/280",
                            },
                            {
                                title: "CRM Workflow Automation",
                                icon: Zap,
                                color: "blue",
                                desc: "Auto-syncs every call, note, and appointment to your CRM in real time — zero manual data entry.",
                                stat: "100% auto-sync",
                                eta: "Q1 2026",
                                img: "https://picsum.photos/seed/crmflow/600/280",
                            },
                            {
                                title: "Custom AI Tools",
                                icon: Bot,
                                color: "purple",
                                desc: "Bespoke AI solutions purpose-built for your industry, workflow, and compliance requirements.",
                                stat: "Purpose-built",
                                eta: "Ongoing",
                                img: "https://picsum.photos/seed/customaitools/600/280",
                            },
                        ] as const).map((item, idx) => {
                            const isBlue = item.color === "blue";
                            const accent = isBlue ? "rgba(var(--theme-primary-rgb)," : "rgba(var(--theme-purple-rgb),";
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-2xl border overflow-hidden flex flex-col"
                                    style={{ borderColor: `${accent}0.18)`, background: "rgba(255,255,255,0.03)" }}
                                >
                                    {/* Image header */}
                                    <div className="relative h-36 sm:h-40 overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Color overlay */}
                                        <div
                                            className="absolute inset-0"
                                            style={{ background: `linear-gradient(135deg, ${accent}0.55) 0%, rgba(var(--theme-bg-card-rgb),0.75) 100%)` }}
                                        />
                                        {/* Icon */}
                                        <div
                                            className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center border"
                                            style={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.35)" }}
                                        >
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        {/* ETA badge */}
                                        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[10px] font-bold uppercase tracking-wider"
                                            style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.35)", color: "white" }}>
                                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "white" }} />
                                            {item.eta}
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="flex flex-col flex-1 p-5">
                                        <h3 className="font-bold text-brand-text text-sm sm:text-base mb-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed flex-1 mb-4">
                                            {item.desc}
                                        </p>

                                        {/* Stat + Coming soon row */}
                                        <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: `${accent}0.12)` }}>
                                            <span className="text-xs font-black tabular-nums text-accent-blue">
                                                {item.stat}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted/60 border border-brand-border rounded-full px-2.5 py-0.5">
                                                Coming Soon
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-brand-text-muted/50 text-xs mt-10"
                    >
                        All features available first to early access customers. <Link to="/contact" className="text-accent-blue hover:underline">Join the waitlist →</Link>
                    </motion.p>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="relative bg-brand-bg border-t border-brand-border overflow-hidden">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center pt-20 pb-4 px-6 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/8 text-accent-blue text-xs font-bold uppercase tracking-widest mb-5">
                        <Star className="w-3.5 h-3.5 fill-accent-blue" />
                        Customer Stories
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                        Loved By{" "}
                        <span className="inline-block bg-white text-black px-4 py-0.5">Real Businesses</span>
                    </h2>
                    <p className="text-brand-text-muted text-sm sm:text-base max-w-xl mx-auto">
                        Drag the globe to explore stories from businesses already using Buzcall.
                    </p>
                </motion.div>

                {/* InfiniteMenu globe — full width, height keeps sphere visible */}
                <div style={{ width: '100%', height: '650px', position: 'relative' }}>
                    <InfiniteMenu
                        scale={1.0}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        items={([
                            {
                                image: 'https://picsum.photos/seed/bzdoc1/400/400',
                                link: '/contact',
                                name: 'Dr. Priya Sharma',
                                role: 'Owner, SmileCare Dental',
                                description: '"30% more bookings since going live."',
                            },
                            {
                                image: 'https://picsum.photos/seed/bzsalon2/400/400',
                                link: '/contact',
                                name: 'Rohan Mehta',
                                role: 'Founder, UrbanCuts Salon',
                                description: '"Every caller answered instantly."',
                            },
                            {
                                image: 'https://picsum.photos/seed/bzrealt3/400/400',
                                link: '/contact',
                                name: 'Anjali Verma',
                                role: 'Director, Vista Realty',
                                description: '"Lead capture paid for itself in week one."',
                            },
                            {
                                image: 'https://picsum.photos/seed/bzdoc4/400/400',
                                link: '/contact',
                                name: 'Dr. Kiran Patel',
                                role: 'Director, Patel Multi-Specialty',
                                description: '"After-hours requests handled automatically."',
                            },
                            {
                                image: 'https://picsum.photos/seed/bzlaw5/400/400',
                                link: '/contact',
                                name: 'Suresh Iyer',
                                role: 'Managing Partner, Iyer Law',
                                description: '"Client intake tripled after hours."',
                            },
                            {
                                image: 'https://picsum.photos/seed/bzspa6/400/400',
                                link: '/contact',
                                name: 'Meena Kapoor',
                                role: 'Owner, Bliss Wellness Spa',
                                description: '"No-shows dropped 40% with reminders."',
                            },
                        ] as any[])}
                    />
                </div>

                {/* Hint text */}
                <p className="text-center text-brand-text-muted/40 text-xs py-5">
                    Drag to rotate · Pause on a face to read the story
                </p>
            </section>

        </div>
    );
};

export default Home;
