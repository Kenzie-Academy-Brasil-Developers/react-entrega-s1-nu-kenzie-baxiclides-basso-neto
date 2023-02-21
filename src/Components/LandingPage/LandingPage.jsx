import "/src/reset.css";
import { useState } from "react";
import styles from "./landingpage.module.css";
function LandingPage({ setPages }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>
            <span>Nu </span>Kenzie
          </h1>
          <h2>Centralize o controle das suas finanças</h2>
          <h3>de forma rápida e segura</h3>
          <button type="button" onClick={() => setPages("Dashboard")}>
            Iniciar
          </button>
        </header>
        <main>
          <div className={styles.app__container}></div>
          <div className={styles.containerBox}>
            <div className={styles.boxInside}></div>
            <div className={styles.boxInside}></div>
            <div className={styles.boxInside}></div>
            <div className={styles.boxInside}></div>
            <div className={styles.boxInside}></div>
            <div className={styles.boxOutside1}>
              <div className={styles.image1}></div>
            </div>
            <div className={styles.boxOutside2}>
              <div className={styles.image2}></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
