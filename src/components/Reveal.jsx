import { motion } from 'framer-motion';

/** Fades content up as it scrolls into view (once). */
function Reveal({ children, delay = 0, y = 28, as = 'div', className, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
