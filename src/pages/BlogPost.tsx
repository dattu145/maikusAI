import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) return <Navigate to="/blog" replace />;

    const currentIdx = blogPosts.findIndex(p => p.slug === slug);
    const prevPost = blogPosts[currentIdx - 1] ?? null;
    const nextPost = blogPosts[currentIdx + 1] ?? null;
    const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);

    const renderContent = (content: string) => {
        const lines = content.trim().split('\n');
        const elements: JSX.Element[] = [];
        let key = 0;
        for (const line of lines) {
            const t = line.trim();
            if (!t) { key++; continue; }
            if (t.startsWith('## ')) {
                elements.push(<h2 key={key} className="text-xl sm:text-2xl font-black text-brand-text mt-10 mb-4 leading-snug">{t.slice(3)}</h2>);
            } else if (t.startsWith('**') && t.endsWith('**')) {
                elements.push(<p key={key} className="font-bold text-brand-text text-sm sm:text-base leading-relaxed mb-2">{t.replace(/\*\*/g, '')}</p>);
            } else if (t.startsWith('- ')) {
                elements.push(<li key={key} className="text-brand-text-muted text-sm sm:text-base leading-relaxed ml-5 mb-1.5 list-disc">{t.slice(2)}</li>);
            } else {
                elements.push(<p key={key} className="text-brand-text-muted text-sm sm:text-base leading-[1.9] mb-5">{t}</p>);
            }
            key++;
        }
        return elements;
    };

    return (
        <div className="bg-brand-bg text-brand-text min-h-screen pt-32 lg:pt-40 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─── Back link — plain, always clickable ─── */}
                <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <Link to="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-text-muted hover:text-accent-blue transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        All Articles
                    </Link>
                </motion.div>

                {/* ─── Article header ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8"
                >
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/25 bg-accent-blue/8 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                            <Tag className="w-3 h-3" /> {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-brand-text-muted">
                            <Calendar className="w-3.5 h-3.5 text-brand-text-muted/50" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-brand-text-muted">
                            <Clock className="w-3.5 h-3.5 text-brand-text-muted/50" /> {post.readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text leading-[1.05] tracking-tight mb-6">
                        {post.title}
                    </h1>

                    {/* Lead — accent border */}
                    <p className="text-brand-text text-base sm:text-lg leading-relaxed font-medium border-l-4 border-accent-blue/40 pl-5">
                        {post.excerpt}
                    </p>
                </motion.div>

                {/* ─── Hero image — below the header, not overlaid ─── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="rounded-2xl overflow-hidden mb-12 border border-brand-border"
                    style={{ aspectRatio: '16/7' }}
                >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* ─── Article body ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    {renderContent(post.content)}
                </motion.div>

                {/* ─── CTA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card border-accent-blue/20 p-6 sm:p-8 mb-14 relative overflow-hidden"
                    style={{ background: `rgba(var(--theme-primary-rgb),0.04)` }}
                >
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-blue" />
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-blue mb-3">Ready to implement?</p>
                    <h3 className="text-lg sm:text-xl font-black text-brand-text mb-2">See the AI Voice Receptionist in action.</h3>
                    <p className="text-brand-text-muted text-sm mb-5 max-w-md">Enter your number and our AI calls you back instantly — hear exactly how it sounds.</p>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/services/ai-voice-receptionist"
                            className="btn-primary py-3 px-7 text-sm flex items-center gap-2"
                            style={{ boxShadow: `0 0 20px rgba(var(--theme-primary-rgb),0.25)` }}>
                            Try Live Demo <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/contact" className="btn-secondary py-3 px-7 text-sm">Get Free AI Audit</Link>
                    </div>
                </motion.div>

                {/* ─── Prev / Next ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                    {prevPost ? (
                        <Link to={`/blog/${prevPost.slug}`}
                            className="glass-card !p-5 group hover:border-accent-blue/30 transition-all duration-200">
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/40 mb-2 flex items-center gap-1.5">
                                <ArrowLeft className="w-3 h-3" /> Previous
                            </p>
                            <p className="text-sm font-bold text-brand-text group-hover:text-accent-blue transition-colors leading-snug line-clamp-2">{prevPost.title}</p>
                        </Link>
                    ) : <div />}
                    {nextPost ? (
                        <Link to={`/blog/${nextPost.slug}`}
                            className="glass-card !p-5 group hover:border-accent-blue/30 transition-all duration-200 sm:text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/40 mb-2 flex items-center sm:justify-end gap-1.5">
                                Next <ArrowRight className="w-3 h-3" />
                            </p>
                            <p className="text-sm font-bold text-brand-text group-hover:text-accent-blue transition-colors leading-snug line-clamp-2">{nextPost.title}</p>
                        </Link>
                    ) : <div />}
                </div>

                {/* ─── Related posts ─── */}
                {related.length > 0 && (
                    <div>
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-brand-border/40">
                            <div className="h-px w-8 bg-accent-blue" />
                            <span className="text-accent-blue text-[11px] font-black uppercase tracking-[0.25em]">More in {post.category}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                            {related.map(rp => (
                                <Link key={rp.slug} to={`/blog/${rp.slug}`}
                                    className="group glass-card !p-0 overflow-hidden hover:border-accent-blue/30 transition-all duration-200">
                                    <div className="h-32 overflow-hidden">
                                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-[10px] text-brand-text-muted mb-1.5">{rp.date} · {rp.readTime}</p>
                                        <p className="text-sm font-black text-brand-text group-hover:text-accent-blue transition-colors leading-snug line-clamp-2">{rp.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link to="/blog"
                                className="inline-flex items-center gap-2 text-sm font-bold text-accent-blue border border-accent-blue/25 bg-accent-blue/8 rounded-full px-6 py-3 hover:bg-accent-blue/15 transition-colors">
                                View all articles <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPost;
