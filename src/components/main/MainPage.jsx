import React from "react";
import { motion } from "framer-motion";
import styles from "./main.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <motion.p
          className={styles.textLeft}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          happy bday
        </motion.p>

        <motion.img
          className={styles.imageTop}
          src="/sticker.png"
          alt=""
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <motion.p
          className={styles.textRight}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ur a gay
        </motion.p>
      </div>
    </div>
  );
};
