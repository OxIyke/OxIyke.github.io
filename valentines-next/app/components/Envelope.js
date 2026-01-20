"use client";
import { useState } from 'react';
import styles from './Envelope.module.css';

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`} onClick={toggleOpen}>

      <div className={styles.letter}>
        <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>To My Valentine</div>
        <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>You make my heart smile.</p>
        <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>Love you!</p>

        <a href="#" className={styles.kosmiBtn} target="_blank" rel="noopener noreferrer">
          Let's go on a date?
        </a>
      </div>

      <div className={styles.pocketBody}></div>
      <div className={styles.flap}>
        {/* Optional heart sticker could go here if properly positioned, but CSS circles/pseudo elements are safer for simple geometry */}
      </div>
    </div>
  );
}
