import React from "react";
import styles from "./ProductCard.module.css";
import { FavoriteIcon } from "@/ui";
import Image from "next/image";
import test from "@/public/test.jpg";

export const ProductCard = () => {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} alt="Диван" src={test} />
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <b className={styles.name}>Вентилятор</b>
          <span className={styles.date}>12 июль</span>
          <span className={styles.geo}>Грозный</span>
        </div>

        <FavoriteIcon />
      </div>
    </div>
  );
};
