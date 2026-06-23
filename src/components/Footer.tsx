import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideTwitter, LucideLinkedin, LucideGithub, Mail, Phone, ArrowRight } from "lucide-react";
import logoDark  from "../assets/buzcalllogo.png";
import logoLight from "../assets/buzcallLogoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-brand-bg relative border-t border-brand-border overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-purple/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-16 pb-10">

        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-16 p-6 sm:p-8 rounded-2xl border border-accent-blue/20 bg-accent-blue/5"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div>
            <p className="text-base sm:text-lg font-bold text-brand-text mb-1">Ready to stop missing calls?</p>
            <p className="text-brand-text-muted text-sm">Get your AI receptionist live in 3–5 business days.</p>
          </div>
          <Link
            to="/contact"
            className="btn-primary shrink-0 py-3 px-7 text-sm shadow-[0_0_20px_rgba(0,240,255,0.2)] flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
          >
            Book Free Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center w-14 h-14 rounded-xl relative z-10 shrink-0"
              >
                <img src={logoDark}  alt="BUZCALL Logo" className="w-full h-full object-contain rounded-xl hide-in-light" />
                <img src={logoLight} alt="BUZCALL Logo" className="w-full h-full object-contain rounded-xl show-in-light" />
              </motion.div>
              <span
                className="-ml-3 text-xl tracking-wide text-brand-text"
                style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800 }}
              >
                Buz<span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>c</span>all
              </span>
            </Link>

            <p className="text-brand-text-muted text-sm max-w-xs mb-6 leading-relaxed">
              AI-powered voice receptionist that answers every call, books appointments, and captures leads — 24/7, so you never miss a customer.
            </p>

            <div className="space-y-2 mb-6">
              <a
                href="mailto:maikusai@gmail.com"
                className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-accent-blue transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                maikusai@gmail.com
              </a>
              <a
                href="tel:+918008998312"
                className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-accent-blue transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +91 800 899 8312
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[{ icon: LucideTwitter, href: "#" }, { icon: LucideLinkedin, href: "#" }, { icon: LucideGithub, href: "#" }].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.15 }}
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-accent-blue hover:border-accent-blue/50 hover:bg-accent-blue/8 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-accent-blue">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "AI Receptionist", to: "/services/ai-voice-receptionist" },
                { label: "All Services", to: "/services" },
                { label: "Pricing", to: "/pricing" },
                { label: "Blog", to: "/blog" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-brand-text-muted hover:text-accent-blue transition-colors hover:translate-x-1 inline-block duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-accent-blue">Contact</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Book a Call", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-brand-text-muted hover:text-accent-blue transition-colors hover:translate-x-1 inline-block duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-brand-text-muted text-xs">
            &copy; {new Date().getFullYear()} Buzcall. All rights reserved.
          </p>
          <p className="text-brand-text-muted/40 text-xs">Built with ❤️ for Indian businesses</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
