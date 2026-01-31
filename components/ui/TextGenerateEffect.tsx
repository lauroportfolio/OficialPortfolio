"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    highlightIndices = [],
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    highlightIndices?: number[];
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(/\s+/);

    useEffect(() => {
        // Criamos uma flag para evitar animar se o componente for desmontado
        let isMounted = true;

        const runAnimation = async () => {
            // 1. Verificação de Segurança Principal
            if (!scope.current) return;

            try {
                // Reinicia a opacidade
                await animate(
                    "span",
                    { opacity: 0 },
                    { duration: 0 }
                );
                
                // 2. Verifica se o componente ainda existe antes de seguir
                if (isMounted && scope.current) {
                    await animate(
                        "span",
                        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
                        { duration: duration || 1, delay: stagger(0.2) }
                    );
                }
            } catch (error) {
                // Silencia erros de querySelector durante a navegação/hidratação
                console.debug("Animation interrupted");
            }
        };

        runAnimation();

        return () => {
            isMounted = false; // Cleanup para evitar fugas de memória
        };
    }, [words, animate, filter, duration, scope]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    const isHighlighted = highlightIndices.includes(idx);

                    return (
                        <motion.span
                            key={word + idx}
                            className={cn(
                                "opacity-0",
                                isHighlighted ? 'text-purple' : 'dark:text-white text-black'
                            )}
                            style={{ 
                                filter: filter ? "blur(10px)" : "none"
                            } as any}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};