import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const featured = blogPosts.find(p => p.featured)!;
    const rest = blogPosts.filter(p => !p.featured);
    const filtered = activeCategory === 'All' ? rest : rest.filter(p => p.category === activeCategory);

    return (
        <div className="bg-brand-bg text-brand-text">

            {/* ─── HERO ─── */}
            <section className="relative pt-36 pb-16 overflow-hidden border-b border-brand-border">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(var(--theme-primary-rgb),0.07) 0%, transparent 65%)" }} />
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(var(--theme-primary-rgb),0.12) 1px, transparent 1px)', backgroundSize: '36px 36px', opacity: 0.045 }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-end">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px w-10 bg-accent-blue" />
                                <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">The Automation Archive</span>
                            </div>
                            <div className="overflow-hidden">
                                {["Insights for the", "AI-Powered", "Business."].map((line, i) => (
                                    <motion.h1 key={line}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.75, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className={`block font-black leading-[0.88] tracking-tighter select-none text-5xl sm:text-6xl md:text-7xl ${i === 1 ? 'text-accent-blue' : 'text-brand-text'}`}>
                                        {line}
                                    </motion.h1>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="pb-2">
                            <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed mb-6">
                                Strategies, case studies, and frameworks on leveraging AI to radically scale your operations.
                            </p>
                            <div className="flex items-center gap-3 text-xs text-brand-text-muted">
                                <span className="font-bold text-brand-text">{blogPosts.length} articles</span>
                                <span className="w-1 h-1 rounded-full bg-brand-border" />
                                <span>Automation · Case Studies · Strategy</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── FEATURED POST ─── */}
            <section className="py-14 sm:py-20 border-b border-brand-border bg-brand-bg-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div {...fadeUp()} className="flex items-center gap-4 mb-8">
                        <div className="h-px w-10 bg-accent-blue" />
                        <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">Featured</span>
                    </motion.div>

                    <motion.div {...fadeUp(0.1)}>
                        <Link to={`/blog/${featured.slug}`}
                            className="group grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-12 items-center glass-card !p-0 overflow-hidden hover:border-accent-blue/30 transition-all duration-300">
                            {/* Image */}
                            <div className="relative h-64 sm:h-72 lg:h-full min-h-[300px] overflow-hidden">
                                <img src={featured.image} alt={featured.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg/20 lg:to-brand-bg/60" />
                                <span className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-widest bg-accent-blue text-white rounded-full px-3 py-1.5">
                                    {featured.category}
                                </span>
                            </div>
                            {/* Content */}
                            <div className="p-7 sm:p-10 lg:py-12 lg:pr-12">
                                <div className="flex items-center gap-3 text-xs text-brand-text-muted mb-5">
                                    <span>{featured.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-brand-border" />
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-brand-text group-hover:text-accent-blue transition-colors duration-200 leading-snug mb-4">
                                    {featured.title}
                                </h2>
                                <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed mb-8">{featured.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-accent-blue group-hover:gap-3 transition-all duration-200">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── CATEGORY FILTER + GRID ─── */}
            <section className="py-14 sm:py-20 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Category filter */}
                    <motion.div {...fadeUp()} className="flex items-center gap-3 flex-wrap mb-12 pb-6 border-b border-brand-border/40">
                        <Tag className="w-4 h-4 text-brand-text-muted/40 shrink-0" />
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 border transition-all duration-200 ${
                                    activeCategory === cat
                                        ? 'border-accent-blue bg-accent-blue/10 text-accent-blue'
                                        : 'border-brand-border bg-brand-glass text-brand-text-muted hover:border-accent-blue/30'
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Articles grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((post, idx) => (
                            <motion.div key={post.id} {...fadeUp(idx * 0.07)}>
                                <Link to={`/blog/${post.slug}`}
                                    className="group flex flex-col glass-card !p-0 overflow-hidden hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(var(--theme-primary-rgb),0.07)] transition-all duration-300 h-full">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden shrink-0">
                                        <img src={post.image} alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent" />
                                        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-brand-glass backdrop-blur border border-brand-border rounded-full px-3 py-1 text-brand-text">
                                            {post.category}
                                        </span>
                                    </div>
                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-[11px] text-brand-text-muted mb-3">
                                            <span>{post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-black text-brand-text group-hover:text-accent-blue transition-colors duration-200 leading-snug mb-3 flex-1">
                                            {post.title}
                                        </h3>
                                        <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue group-hover:gap-2.5 transition-all duration-200 mt-auto">
                                            Read <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-brand-text-muted">
                            No articles in this category yet.
                        </div>
                    )}
                </div>
            </section>

            {/* ─── CTA strip ─── */}
            <section className="py-14 sm:py-20 bg-brand-bg-alt border-t border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div {...fadeUp()}
                        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 glass-card p-7 sm:p-10 relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-blue mb-3">Ready to Implement?</p>
                            <h2 className="text-2xl sm:text-3xl font-black text-brand-text leading-tight">
                                Stop Reading. Start <span className="text-accent-blue">Automating.</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm mt-2">Get a free AI audit of your business operations — no commitment.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <Link to="/services/ai-voice-receptionist"
                                className="btn-primary py-3.5 px-8 text-sm flex items-center gap-2 justify-center"
                                style={{ boxShadow: `0 0 24px rgba(var(--theme-primary-rgb),0.25)` }}>
                                Try Live Demo <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="btn-secondary py-3.5 px-8 text-sm justify-center">
                                Get Free AI Audit
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
