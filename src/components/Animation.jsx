import React from 'react';
import { motion } from 'framer-motion';

const animationConfig = {
  initial: { opaity: 0, width: '100%', overflow: 'hidden' },
  animate: { opaity: 1, width: '100%', overflow: 'hidden' },
  exit: { opaity: 0, width: '100%', overflow: 'hidden' }

};

const Animation = ({ children }) => {
  return (
    <motion.div
      variants={animationConfig}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default Animation;