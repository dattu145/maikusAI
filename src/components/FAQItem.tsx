import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                    ? 'border-accent-blue/40'
                    : 'border-brand-border hover:border-accent-blue/25'
            }`}
            style={{
                background: 'var(--theme-glass)',
                backdropFilter: 'blur(12px)',
            }}
        >
            <div className="flex items-start gap-4 p-5 sm:p-6">
                {/* Number badge */}
                <span
                    className={`text-xs font-black tabular-nums leading-none mt-1 shrink-0 w-6 transition-colors duration-300 ${
                        isOpen ? 'text-accent-blue' : 'text-brand-text-muted/35 group-hover:text-brand-text-muted/60'
                    }`}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                        <h3
                            className={`text-sm sm:text-base font-bold leading-snug transition-colors duration-300 ${
                                isOpen ? 'text-accent-blue' : 'text-brand-text'
                            }`}
                        >
                            {question}
                        </h3>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                                isOpen
                                    ? 'bg-accent-blue text-brand-bg'
                                    : 'bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue/20'
                            }`}
                        >
                            <ChevronDown className="w-3.5 h-3.5" />
                        </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed pt-3 pr-2">
                                    {answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom accent bar — only when open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="h-px bg-gradient-to-r from-accent-blue/60 via-accent-blue/20 to-transparent origin-left"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQItem;
