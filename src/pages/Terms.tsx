import { motion } from 'framer-motion';
import { FileText, Mail, Phone } from 'lucide-react';

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: [
            {
                subtitle: "Agreement",
                text: "By accessing our website, signing up for our services, or using our AI Voice Receptionist platform (collectively, the \"Service\"), you agree to be bound by these Terms and Conditions. If you do not agree, you must not use the Service.",
            },
            {
                subtitle: "Eligibility",
                text: "You must be at least 18 years of age and have the legal authority to enter into a binding contract on behalf of your business to use our Service.",
            },
        ],
    },
    {
        title: "2. Description of Service",
        content: [
            {
                subtitle: "AI Voice Receptionist",
                text: "Buzcall provides an AI-powered voice receptionist service that answers inbound telephone calls, books appointments, captures leads, and responds to caller enquiries on behalf of your business, 24 hours a day, 7 days a week.",
            },
            {
                subtitle: "Service Configuration",
                text: "We configure the Service according to your specific business requirements, including custom scripts, voice personas, calendar integrations, and CRM connections. Final configuration is reviewed and approved by you before going live.",
            },
            {
                subtitle: "Service Availability",
                text: "We target 99.9% uptime for our AI receptionist infrastructure. Planned maintenance windows will be communicated in advance. We are not liable for downtime caused by third-party telephony providers or circumstances outside our control.",
            },
        ],
    },
    {
        title: "3. Subscription and Payment",
        content: [
            {
                subtitle: "Plans and Fees",
                text: "The Service is offered on a subscription basis with a one-time setup fee and a recurring monthly platform fee. Details of applicable fees are set out in your service agreement or the pricing page on our website.",
            },
            {
                subtitle: "Overage Charges",
                text: "Each plan includes a specified number of free minutes per month. Calls exceeding this allocation are billed at the per-minute overage rate stated in your plan. Usage reports are provided monthly so you can monitor consumption.",
            },
            {
                subtitle: "Payment Terms",
                text: "Monthly subscription fees are billed on the 1st of each calendar month. Overage charges from the previous month are included in the following month's invoice. All amounts are exclusive of GST and applicable taxes unless stated otherwise.",
            },
            {
                subtitle: "Late Payment",
                text: "Accounts with overdue invoices may have their service suspended after 14 days. We reserve the right to charge interest on overdue amounts at 2% per month.",
            },
        ],
    },
    {
        title: "4. Setup and Onboarding",
        content: [
            {
                subtitle: "Setup Process",
                text: "Upon payment of the one-time setup fee, we will begin configuration of your AI receptionist. The standard go-live timeline is 3–5 business days from the date we receive all required information from you.",
            },
            {
                subtitle: "Your Responsibilities",
                text: "You are responsible for providing accurate business information, approving scripts and voice personas, and ensuring that your existing phone number or a number we provision is correctly configured to route calls to our system.",
            },
        ],
    },
    {
        title: "5. Cancellation and Termination",
        content: [
            {
                subtitle: "Cancellation by You",
                text: "You may cancel your subscription at any time by providing 30 days' written notice to maikusai@gmail.com. No penalty or exit fee applies. You will continue to receive service during the notice period and will be billed for that period.",
            },
            {
                subtitle: "Termination by Us",
                text: "We may terminate your account immediately if you: breach these Terms and fail to remedy the breach within 7 days of notice; engage in fraudulent or illegal use of the Service; or fail to pay invoices after 30 days. In such cases, no refund of paid fees will be issued.",
            },
            {
                subtitle: "Effect of Termination",
                text: "Upon termination, your access to the Service will cease, your phone number routing will be removed, and your data will be retained for 90 days before being securely deleted, unless you request earlier deletion.",
            },
        ],
    },
    {
        title: "6. Acceptable Use",
        content: [
            {
                subtitle: "Permitted Use",
                text: "You may use the Service only for lawful business purposes, including answering customer enquiries, booking appointments, and capturing legitimate business leads.",
            },
            {
                subtitle: "Prohibited Use",
                text: "You must not use the Service to: impersonate other individuals or organisations; collect caller data for purposes not disclosed to callers; violate any applicable privacy or consumer protection law; or engage in any form of fraud, harassment, or illegal activity.",
            },
            {
                subtitle: "Compliance",
                text: "You are responsible for ensuring that your use of the Service complies with all applicable laws in your jurisdiction, including those governing call recording, caller disclosure, and data protection.",
            },
        ],
    },
    {
        title: "7. Intellectual Property",
        content: [
            {
                subtitle: "Our IP",
                text: "All software, AI models, algorithms, scripts, and systems developed by Buzcall remain our exclusive intellectual property. You receive a limited, non-transferable licence to use the Service during the term of your subscription.",
            },
            {
                subtitle: "Your Data",
                text: "You retain ownership of all business data and call data generated through your use of the Service. We claim no ownership over your caller information, appointment records, or business content.",
            },
            {
                subtitle: "Custom Content",
                text: "Scripts, personas, and configurations created specifically for your business remain your property upon termination of the agreement.",
            },
        ],
    },
    {
        title: "8. Limitation of Liability",
        content: [
            {
                subtitle: "No Guarantee of Business Outcomes",
                text: "We do not guarantee specific business outcomes such as a minimum number of bookings, leads, or revenue from use of the Service. Results depend on factors outside our control including call volume, business type, and market conditions.",
            },
            {
                subtitle: "Cap on Liability",
                text: "To the maximum extent permitted by law, our total liability to you for any claim arising from or related to these Terms or the Service shall not exceed the total fees paid by you in the 3 months preceding the claim.",
            },
            {
                subtitle: "Exclusion of Consequential Damages",
                text: "We are not liable for any indirect, incidental, special, or consequential damages, including lost profits, loss of data, or business interruption, even if we have been advised of the possibility of such damages.",
            },
        ],
    },
    {
        title: "9. Indemnification",
        content: [
            {
                subtitle: "Your Indemnity",
                text: "You agree to indemnify and hold harmless Buzcall and its employees, contractors, and directors from any claims, damages, or expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.",
            },
        ],
    },
    {
        title: "10. Confidentiality",
        content: [
            {
                subtitle: "Mutual Confidentiality",
                text: "Each party agrees to keep confidential all proprietary or sensitive information received from the other party in connection with the Service, and not to disclose such information to any third party without prior written consent.",
            },
        ],
    },
    {
        title: "11. Governing Law and Disputes",
        content: [
            {
                subtitle: "Governing Law",
                text: "These Terms are governed by and construed in accordance with the laws of India. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.",
            },
            {
                subtitle: "Dispute Resolution",
                text: "Before initiating formal proceedings, the parties agree to attempt to resolve any dispute in good faith through direct negotiation for a period of 30 days. If unresolved, disputes shall be referred to binding arbitration in accordance with Indian arbitration law.",
            },
        ],
    },
    {
        title: "12. Changes to These Terms",
        content: [
            {
                subtitle: "Updates",
                text: "We reserve the right to modify these Terms at any time. Material changes will be communicated by email or prominent notice on our website at least 14 days before they take effect. Continued use of the Service after the effective date constitutes acceptance.",
            },
        ],
    },
    {
        title: "13. Contact",
        content: [
            {
                subtitle: "Legal Enquiries",
                text: "For any questions regarding these Terms and Conditions, please contact us at maikusai@gmail.com or +91 800 899 8312. Buzcall is operated from Hyderabad, Telangana, India.",
            },
        ],
    },
];

const Terms = () => {
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
                        Terms &amp; <span className="text-accent-blue">Conditions</span>
                    </h1>
                    <p className="text-brand-text-muted text-base leading-relaxed max-w-2xl">
                        These Terms and Conditions govern your access to and use of Buzcall's AI Voice Receptionist services. Please read them carefully before engaging our services.
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="glass-card !p-4 flex items-center gap-3">
                            <FileText className="w-4 h-4 text-accent-blue shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50">Effective Date</p>
                                <p className="text-sm font-bold text-brand-text">1 January 2025</p>
                            </div>
                        </div>
                        <div className="glass-card !p-4 flex items-center gap-3">
                            <FileText className="w-4 h-4 text-accent-blue shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50">Last Updated</p>
                                <p className="text-sm font-bold text-brand-text">June 2025</p>
                            </div>
                        </div>
                        <div className="glass-card !p-4 flex items-center gap-3">
                            <FileText className="w-4 h-4 text-accent-blue shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/50">Jurisdiction</p>
                                <p className="text-sm font-bold text-brand-text">Hyderabad, India</p>
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
                            transition={{ delay: idx * 0.03, duration: 0.5 }}
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
                    <h3 className="text-base font-black text-brand-text mb-4">Questions about these Terms?</h3>
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

export default Terms;
