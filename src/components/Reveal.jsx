import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Reveal = ({ children, width = "fit-content", delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay, type: "spring", stiffness: 100 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
