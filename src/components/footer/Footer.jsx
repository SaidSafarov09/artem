import React from "react";
import { motion } from "framer-motion";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <motion.p
          className={styles.textLeft}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Аделина дуреет от этой прикормки !!!<br/>
          <br/>
         <span> На этой фотографии причина распадов семей в России по инициативе женщин</span>
        </motion.p>
        <motion.img
          className={styles.imageTop}
          src="/sticker2.png"
          alt=""
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </div>
  );
};
