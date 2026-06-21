import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FlowingMenu from './FlowingMenu';

const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // Delay pointer events so cursor position on open doesn't trigger a menu item hover
    const [menuInteractive, setMenuInteractive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    // Prevent body scroll + control pointer events timing
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        if (isOpen) {
            const t = setTimeout(() => setMenuInteractive(true), 520);
            return () => clearTimeout(t);
        } else {
            setMenuInteractive(false);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'AI Receptionist', path: '/services/ai-voice-receptionist' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const flowingItems = [
        {
            link: '/',
            text: 'Home',
            image: 'https://picsum.photos/600/400?random=11',
            isActive: location.pathname === '/',
            onClick: () => { navigate('/'); setIsOpen(false); },
        },
        {
            link: '/services/ai-voice-receptionist',
            text: 'AI Receptionist',
            image: 'https://picsum.photos/600/400?random=22',
            isActive: location.pathname === '/services/ai-voice-receptionist',
            onClick: () => { navigate('/services/ai-voice-receptionist'); setIsOpen(false); },
        },
        {
            link: '/pricing',
            text: 'Pricing',
            image: 'https://picsum.photos/600/400?random=33',
            isActive: location.pathname === '/pricing',
            onClick: () => { navigate('/pricing'); setIsOpen(false); },
        },
        {
            link: '/blog',
            text: 'Blog',
            image: 'https://picsum.photos/600/400?random=44',
            isActive: location.pathname === '/blog',
            onClick: () => { navigate('/blog'); setIsOpen(false); },
        },
        {
            link: '/about',
            text: 'About',
            image: 'https://picsum.photos/600/400?random=55',
            isActive: location.pathname === '/about',
            onClick: () => { navigate('/about'); setIsOpen(false); },
        },
        {
            link: '/contact',
            text: 'Contact',
            image: 'https://picsum.photos/600/400?random=66',
            isActive: location.pathname === '/contact',
            onClick: () => { navigate('/contact'); setIsOpen(false); },
        },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/80 backdrop-blur-lg py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl relative z-10 shrink-0"
                        >
                            <img src="src/assets/buzcalllogo.png"      alt="BUZCALL Logo" className="w-full h-full object-contain rounded-xl hide-in-light" />
                            <img src="src/assets/buzcallLogoWhite.png" alt="BUZCALL Logo" className="w-full h-full object-contain rounded-xl show-in-light" />
                        </motion.div>
                        <span className="-ml-3 sm:-ml-4 md:-ml-5 text-base sm:text-lg md:text-xl tracking-wide text-brand-text" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800 }}>
                            Buz<span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>c</span>all
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
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

            {/* Full-screen FlowingMenu overlay — mobile only */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 md:hidden"
                        style={{
                            top: '100px',
                            pointerEvents: menuInteractive ? 'auto' : 'none',
                        }}
                    >
                        <FlowingMenu
                            items={flowingItems}
                            speed={14}
                            bgColor={theme === 'dark' ? '#060A18' : '#f0f4f8'}
                            textColor={theme === 'dark' ? '#ffffff' : '#0f172a'}
                            marqueeBgColor={theme === 'dark' ? '#00f0ff' : '#0369a1'}
                            marqueeTextColor={theme === 'dark' ? '#060A18' : '#ffffff'}
                            borderColor={theme === 'dark' ? 'rgba(0,240,255,0.12)' : 'rgba(0,0,0,0.08)'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
