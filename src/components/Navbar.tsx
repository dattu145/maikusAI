import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight, Twitter, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark  from '../assets/buzcalllogo.png';
import logoLight from '../assets/buzcallLogoWhite.png';

const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home',            path: '/'                               },
        { name: 'AI Receptionist', path: '/services/ai-voice-receptionist' },
        { name: 'Pricing',         path: '/pricing'                        },
        { name: 'Blog',            path: '/blog'                           },
        { name: 'About',           path: '/about'                          },
        { name: 'Contact',         path: '/contact'                        },
    ];

    const desktopLinks = navLinks.slice(0, 5); // Home → About
    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/80 backdrop-blur-lg py-3 shadow-lg shadow-black/10' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl relative z-10 shrink-0"
                        >
                            <img src={logoDark}  alt="Buzcall Logo" className="w-full h-full object-contain rounded-xl hide-in-light" />
                            <img src={logoLight} alt="Buzcall Logo" className="w-full h-full object-contain rounded-xl show-in-light" />
                        </motion.div>
                        <span className="-ml-3 sm:-ml-4 md:-ml-5 text-base sm:text-lg md:text-xl tracking-wide text-brand-text" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800 }}>
                            Buz<span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>c</span>all
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {desktopLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-accent-blue ${isActive(link.path) ? 'text-accent-blue' : 'text-brand-text-muted'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-glass border border-brand-border text-brand-text hover:text-accent-blue transition-colors overflow-hidden relative"
                            aria-label="Toggle Theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute"
                                >
                                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                        <Link to="/contact" className="btn-secondary px-6 py-2 text-xs">
                            Let's Talk
                        </Link>
                    </nav>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-glass border border-brand-border text-brand-text hover:text-accent-blue transition-colors overflow-hidden relative"
                            aria-label="Toggle Theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute"
                                >
                                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                        {/* Hamburger / Close */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-glass border border-brand-border text-brand-text hover:text-accent-blue transition-colors"
                            aria-label="Toggle Menu"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Custom Mobile Menu Overlay ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 md:hidden flex flex-col"
                        style={{ background: 'var(--theme-bg)', paddingTop: '80px' }}
                    >
                        {/* Decorative accent glow */}
                        <div className="absolute top-1/3 right-[-10%] w-72 h-72 bg-accent-blue/8 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-1/4 left-[-5%] w-56 h-56 bg-accent-purple/6 rounded-full blur-[70px] pointer-events-none" />

                        {/* Nav links — main content area */}
                        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 relative z-10">
                            <div className="space-y-1">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -28 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -28 }}
                                        transition={{ delay: idx * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`group flex items-center gap-4 py-3.5 border-b transition-all duration-200 ${
                                                isActive(link.path)
                                                    ? 'border-accent-blue/30'
                                                    : 'border-brand-border/30 hover:border-accent-blue/20'
                                            }`}
                                        >
                                            {/* Number */}
                                            <span className={`text-[10px] font-black tabular-nums leading-none w-5 shrink-0 transition-colors duration-200 ${
                                                isActive(link.path) ? 'text-accent-blue' : 'text-brand-text-muted/30 group-hover:text-brand-text-muted/60'
                                            }`}>
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>

                                            {/* Link text */}
                                            <span className={`text-3xl sm:text-4xl font-black tracking-tight leading-none flex-1 transition-colors duration-200 ${
                                                isActive(link.path)
                                                    ? 'text-accent-blue'
                                                    : 'text-brand-text group-hover:text-accent-blue'
                                            }`}>
                                                {link.name}
                                            </span>

                                            {/* Arrow / active dot */}
                                            {isActive(link.path) ? (
                                                <span className="w-2.5 h-2.5 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse shrink-0" />
                                            ) : (
                                                <ArrowUpRight className="w-5 h-5 text-brand-text-muted/20 group-hover:text-accent-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 shrink-0" />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom action row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.45, duration: 0.4 }}
                            className="relative z-10 px-8 sm:px-12 pb-10 pt-6 border-t border-brand-border/30 flex items-center justify-between gap-4"
                        >
                            {/* Social links */}
                            <div className="flex items-center gap-2">
                                {[
                                    { icon: Twitter,  href: '#', label: 'Twitter'  },
                                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                    { icon: Github,   href: '#', label: 'GitHub'   },
                                ].map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-10 h-10 rounded-full border border-brand-border bg-brand-glass flex items-center justify-center text-brand-text-muted hover:text-accent-blue hover:border-accent-blue/40 transition-all"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary py-3 px-7 text-sm"
                            >
                                Let's Talk
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
