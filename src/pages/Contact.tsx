import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';
import FallingText from '../components/FallingText';

const fieldClass =
    'w-full bg-brand-glass border border-brand-border hover:border-accent-blue/40 rounded-xl px-4 py-3.5 text-brand-text placeholder:text-brand-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue/50 transition-all';

const Contact = () => {
    // When any input is focused, also fire the FallingText
    const [formFocused, setFormFocused] = useState(false);

    const handleFocus = () => { if (!formFocused) setFormFocused(true); };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">

            {/* ══ LEFT — theme-aware vivid panel, sticky on desktop ══ */}
            <div className="contact-left-panel lg:w-[44%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-10 px-7 sm:px-10 lg:px-12 relative overflow-hidden">

                {/* Dot-grid texture */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.12 }} />
                {/* Glow orb */}
                <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full blur-[90px] pointer-events-none bg-white/8" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[70px] pointer-events-none bg-white/5" />

                {/* ── Top: Label + Headline + Contact ── */}
                <div className="relative z-10">
                    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-8 sm:mb-10">
                        <div className="h-px w-8 bg-white/60" />
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.28em] text-white/80">
                            Get in Touch
                        </span>
                    </motion.div>

                    {/* Giant headline */}
                    <div className="overflow-hidden mb-8 sm:mb-10">
                        {["Let's", "Talk."].map((word, i) => (
                            <motion.h1
                                key={word}
                                initial={{ y: "105%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.75, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`block font-black leading-[0.88] tracking-tighter select-none ${i === 1 ? 'contact-talk-color' : 'text-white'}`}
                                style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
                            >
                                {word}
                            </motion.h1>
                        ))}
                    </div>

                    {/* Contact links */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="space-y-3 mb-6">
                        {[
                            { icon: Mail,          href: "mailto:maikusai@gmail.com",   text: "maikusai@gmail.com"        },
                            { icon: MessageSquare, href: "https://wa.me/918008998312", text: "+91 8008998312 · WhatsApp" },
                            { icon: MapPin,        href: null,                           text: "Hyderabad, Telangana"      },
                        ].map(({ icon: Icon, href, text }) => {
                            const Tag = href ? 'a' : 'div';
                            return (
                                <Tag key={text}
                                    {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                                    className="flex items-center gap-3 group contact-panel-link transition-colors cursor-pointer"
                                >
                                    <Icon className="w-3.5 h-3.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity text-white" />
                                    <span className="text-sm">{text}</span>
                                </Tag>
                            );
                        })}
                    </motion.div>

                    {/* Promise pills */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                        className="flex flex-wrap gap-2">
                        {["24h reply", "Free demo", "No commitment", "We call you"].map(t => (
                            <span key={t} className="text-[10px] font-bold text-white/75 border border-white/35 rounded-full px-3 py-1">
                                {t}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* ── Bottom: FallingText — hover OR form focus triggers ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 mt-6 lg:mt-0"
                    style={{ height: 'clamp(140px, 22vh, 220px)' }}
                >
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45 mb-2">
                        ↑ hover to interact
                    </p>
                    <FallingText
                        text="Every Call Answered 24/7 AI Receptionist HIPAA Compliant Appointment Booking Lead Capture Zero Missed Calls Fully Managed"
                        highlightWords={["Every", "24/7", "HIPAA", "Zero", "Fully"]}
                        highlightClass="word-highlighted"
                        trigger="hover"
                        forceStart={formFocused}
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.65}
                        fontSize="clamp(0.72rem, 1.5vw, 0.9rem)"
                        mouseConstraintStiffness={0.3}
                    />
                </motion.div>
            </div>

            {/* ══ RIGHT — Scrollable form ══ */}
            <div className="lg:w-[56%] bg-brand-bg px-7 sm:px-10 lg:px-14 pt-10 lg:pt-36 pb-16 relative">
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 55% 35% at 100% 0%, rgba(var(--theme-primary-rgb),0.04) 0%, transparent 70%)" }} />

                <motion.form
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-10 max-w-lg relative z-10"
                    onSubmit={e => { e.preventDefault(); alert("Message sent! We'll be in touch within 24 hours."); }}
                >
                    {/* Section 01 */}
                    <div>
                        <div className="flex items-center gap-4 pb-4 border-b border-brand-border/40 mb-5">
                            <span className="text-3xl sm:text-4xl font-black tabular-nums text-brand-border/20 leading-none select-none">01</span>
                            <h2 className="text-lg sm:text-xl font-black text-brand-text">Your Details</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Full Name",          type: "text",  ph: "Dr. John Smith"   },
                                { label: "Work Email",         type: "email", ph: "john@clinic.com"  },
                                { label: "Phone / WhatsApp",   type: "tel",   ph: "+91 98765 43210"  },
                                { label: "Practice / Company", type: "text",  ph: "SmileCare Dental" },
                            ].map(f => (
                                <div key={f.label}>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-brand-text-muted/60 mb-2">{f.label}</label>
                                    <input type={f.type} required className={fieldClass} placeholder={f.ph} onFocus={handleFocus} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 02 */}
                    <div>
                        <div className="flex items-center gap-4 pb-4 border-b border-brand-border/40 mb-5">
                            <span className="text-3xl sm:text-4xl font-black tabular-nums text-brand-border/20 leading-none select-none">02</span>
                            <h2 className="text-lg sm:text-xl font-black text-brand-text">Your Business</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    label: "Industry",
                                    opts: ["Dental Clinic","Medical / GP","Real Estate","Law Firm","Salon / Spa","eCommerce","Other"],
                                },
                                {
                                    label: "Service Needed",
                                    opts: ["AI Voice Receptionist","Email Automation","Lead Generation","CRM Automation","Custom AI Build","Not sure — advise me"],
                                },
                            ].map(s => (
                                <div key={s.label}>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-brand-text-muted/60 mb-2">{s.label}</label>
                                    <select required className="w-full bg-brand-glass border border-brand-border hover:border-accent-blue/40 rounded-xl px-4 py-3.5 text-brand-text focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all appearance-none cursor-pointer" onFocus={handleFocus}>
                                        <option value="">Select…</option>
                                        {s.opts.map(o => <option key={o} className="bg-brand-bg text-brand-text">{o}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 03 */}
                    <div>
                        <div className="flex items-center gap-4 pb-4 border-b border-brand-border/40 mb-5">
                            <span className="text-3xl sm:text-4xl font-black tabular-nums text-brand-border/20 leading-none select-none">03</span>
                            <h2 className="text-lg sm:text-xl font-black text-brand-text">Tell Us More</h2>
                        </div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-brand-text-muted/60 mb-2">What do you want to automate?</label>
                        <textarea
                            rows={5}
                            required
                            className={`${fieldClass} resize-none`}
                            placeholder="e.g. We miss calls after hours and want an AI that books appointments automatically…"
                            onFocus={handleFocus}
                        />
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2"
                            style={{ boxShadow: `0 0 28px rgba(var(--theme-primary-rgb),0.25)` }}
                        >
                            Send Message <ArrowRight className="w-4 h-4" />
                        </button>
                        <p className="text-center text-xs text-brand-text-muted/50 mt-4">
                            We review every submission and respond within 24 hours.
                        </p>
                    </div>
                </motion.form>
            </div>

        </div>
    );
};

export default Contact;
