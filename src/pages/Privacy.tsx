import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

const sections = [
    {
        title: "1. Information We Collect",
        content: [
            {
                subtitle: "1.1 Information You Provide",
                text: "When you engage our services or fill out our contact forms, we collect: your name, business name, email address, phone number, industry type, and details about your business operations. This information is used solely to set up, configure, and manage your AI Voice Receptionist.",
            },
            {
                subtitle: "1.2 Call Data",
                text: "Our AI Voice Receptionist records and processes inbound phone calls on your behalf. Call transcripts, recordings, caller information, and appointment data are processed to fulfil the service. This data is stored on HIPAA-compliant infrastructure and is encrypted at rest and in transit.",
            },
            {
                subtitle: "1.3 Usage Data",
                text: "We collect technical data including call volumes, response times, system performance metrics, and usage reports. This data is used to monitor and improve our service quality.",
            },
        ],
    },
    {
        title: "2. How We Use Your Information",
        content: [
            {
                subtitle: "Service Delivery",
                text: "We use your information to configure, deploy, and manage your AI receptionist, including setting up phone integrations, calendar connections, and custom scripts.",
            },
            {
                subtitle: "Communication",
                text: "We use your contact details to send usage reports, service updates, billing information, and important announcements related to your account.",
            },
            {
                subtitle: "Service Improvement",
                text: "Aggregated and anonymised data may be used to improve our AI models, call quality, and service reliability. Individual call data is never used to train models without explicit consent.",
            },
        ],
    },
    {
        title: "3. HIPAA Compliance",
        content: [
            {
                subtitle: "Protected Health Information (PHI)",
                text: "If you are a healthcare provider, certain call data may constitute Protected Health Information (PHI) under HIPAA. We operate HIPAA-compliant infrastructure, employ encryption at rest and in transit, and maintain strict access controls. We enter into Business Associate Agreements (BAAs) with qualifying healthcare clients upon request.",
            },
            {
                subtitle: "Data Minimisation",
                text: "We process only the minimum necessary PHI to deliver the service. Call data is retained for the period specified in your service agreement and then securely purged.",
            },
        ],
    },
    {
        title: "4. Data Sharing and Disclosure",
        content: [
            {
                subtitle: "No Sale of Data",
                text: "We do not sell, rent, or trade your personal information or call data to any third party, ever.",
            },
            {
                subtitle: "Service Providers",
                text: "We may share data with trusted infrastructure partners (cloud hosting, telephony providers) who are contractually bound to protect your data and use it only to provide services to us.",
            },
            {
                subtitle: "Legal Requirements",
                text: "We may disclose information if required to do so by law, court order, or governmental authority. We will notify you of such requests unless prohibited by law.",
            },
        ],
    },
    {
        title: "5. Data Retention",
        content: [
            {
                subtitle: "Retention Periods",
                text: "Call recordings and transcripts are retained for 30 days by default, unless a longer period is agreed in your service contract. Account data is retained for the duration of your subscription and for 90 days after termination.",
            },
            {
                subtitle: "Deletion Requests",
                text: "You may request deletion of your data at any time by contacting us at maikusai@gmail.com. Requests will be fulfilled within 30 days, subject to any legal retention obligations.",
            },
        ],
    },
    {
        title: "6. Security",
        content: [
            {
                subtitle: "Technical Safeguards",
                text: "We implement industry-standard security measures including TLS 1.3 encryption in transit, AES-256 encryption at rest, multi-factor authentication for internal systems, and regular security audits.",
            },
            {
                subtitle: "Breach Notification",
                text: "In the event of a data breach that affects your personal data, we will notify you within 72 hours of becoming aware of the breach, in compliance with applicable laws.",
            },
        ],
    },
    {
        title: "7. Your Rights",
        content: [
            {
                subtitle: "Access and Portability",
                text: "You have the right to request a copy of the personal data we hold about you and to receive it in a structured, machine-readable format.",
            },
            {
                subtitle: "Correction and Deletion",
                text: "You may request correction of inaccurate data or deletion of your personal data, subject to our legal obligations to retain certain records.",
            },
            {
                subtitle: "Opt-Out",
                text: "You may opt out of non-essential communications at any time by contacting us or using the unsubscribe link in any email we send.",
            },
        ],
    },
    {
        title: "8. Cookies",
        content: [
            {
                subtitle: "Website Cookies",
                text: "Our website uses essential cookies required for the site to function and optional analytics cookies to understand how visitors use our site. You may disable non-essential cookies through your browser settings without affecting core functionality.",
            },
        ],
    },
    {
        title: "9. Changes to This Policy",
        content: [
            {
                subtitle: "Updates",
                text: "We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our website at least 14 days before the change takes effect. Your continued use of our services after the effective date constitutes acceptance of the updated policy.",
            },
        ],
    },
    {
        title: "10. Contact Us",
        content: [
            {
                subtitle: "Privacy Queries",
                text: "For any questions, requests, or concerns regarding this Privacy Policy or our data practices, please contact us at maikusai@gmail.com or call +91 800 899 8312. We will respond within 5 business days.",
            },
        ],
    },
];

const Privacy = () => {
    return (
        <div className="bg-brand-bg text-brand-text min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 pb-24">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-10 bg-accent-blue" />
                        <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Legal</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-tight leading-none mb-5">
                        Privacy <span className="text-accent-blue">Policy</span>
                    </h1>
                    <p className="text-brand-text-muted text-base leading-relaxed max-w-2xl">
                        This Privacy Policy explains how Buzcall ("we", "our", "us") collects, uses, stores, and protects your personal information and call data when you use our AI Voice Receptionist services.
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="glass-card !p-4 flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-accent-blue shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50">Effective Date</p>
                                <p className="text-sm font-bold text-brand-text">1 January 2025</p>
                            </div>
                        </div>
                        <div className="glass-card !p-4 flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-accent-blue shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50">Last Updated</p>
                                <p className="text-sm font-bold text-brand-text">June 2025</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sections */}
                <div className="space-y-10">
                    {sections.map(({ title, content }, idx) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.04, duration: 0.5 }}
                            className="pb-10 border-b border-brand-border/40 last:border-b-0"
                        >
                            <h2 className="text-lg sm:text-xl font-black text-brand-text mb-6">{title}</h2>
                            <div className="space-y-5">
                                {content.map(({ subtitle, text }) => (
                                    <div key={subtitle}>
                                        <h3 className="text-sm font-bold text-accent-blue mb-2">{subtitle}</h3>
                                        <p className="text-brand-text-muted text-sm leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact strip */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 glass-card border-accent-blue/20 p-6 sm:p-8"
                    style={{ background: `rgba(var(--theme-primary-rgb),0.04)` }}
                >
                    <h3 className="text-base font-black text-brand-text mb-4">Questions about this policy?</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="mailto:maikusai@gmail.com"
                            className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-accent-blue transition-colors">
                            <Mail className="w-4 h-4 text-accent-blue shrink-0" /> maikusai@gmail.com
                        </a>
                        <a href="tel:+918008998312"
                            className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-accent-blue transition-colors">
                            <Phone className="w-4 h-4 text-accent-blue shrink-0" /> +91 800 899 8312
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
