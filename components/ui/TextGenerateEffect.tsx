"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    highlightIndices = [], // Mudamos para um array
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    highlightIndices?: number[]; // Array de números
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(/\s+/);

    useEffect(() => {
        const runAnimation = async () => {
            if (scope.current) {
                await animate("span", { opacity: 0 }, { duration: 0 });
                await animate(
                    "span",
                    { opacity: 1, filter: filter ? "blur(0px)" : "none" },
                    { duration: duration || 1, delay: stagger(0.2) }
                );
            }
        };
        runAnimation();
    }, [words, animate, filter, duration, scope]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    const isHighlighted = highlightIndices.includes(idx);

                    return (
                        <motion.span
                            key={word + idx}
                            className={`${isHighlighted ? 'text-purple' : 'dark:text-white text-black'
                                } opacity-0`}
                            style={{ filter: filter ? "blur(10px)" : "none" }}
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
                <div className=" dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};