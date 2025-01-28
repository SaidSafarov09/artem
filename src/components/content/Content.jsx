import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { contentData } from "./helpers";
import styles from "./content.module.scss";

export const Content = () => {
  return (
    <div className={styles.content}>
      {contentData.map((item, index) => (
        <ContentBlock
          key={index}
          text={item.text}
          imageUrl={item.imageUrl}
          index={index}
        />
      ))}
    </div>
  );
};

const ContentBlock = ({ text, imageUrl, index }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const blockRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={blockRef}
      className={`${styles.contentBlock} ${hasAnimated ? styles.animated : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasAnimated ? 1 : 0 }}
      transition={{ duration: 1, delay: index * 0.3 }}
    >
      <motion.img
        src={imageUrl}
        alt={text}
        className={styles.image}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : "-100%", opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      <motion.p
        className={styles.text}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : "100%", opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
