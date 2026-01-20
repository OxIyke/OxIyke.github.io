"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Envelope.module.css';

export default function Envelope() {
  const router = useRouter();
  const [isPartiallyOpen, setIsPartiallyOpen] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isPartiallyOpen) {
      setIsPartiallyOpen(true);
    }
  };

  const handlePaperClick = (e) => {
    e.stopPropagation(); // Prevent envelope click
    router.push('/letter');
  };

  return (
    <div className={`${styles.container} ${isPartiallyOpen ? styles.open : ''}`} onClick={handleEnvelopeClick}>

      <div className={styles.letter} onClick={handlePaperClick}>
        <div className={styles.letterPreview}>
          <div className={styles.iLoveYou}>i love you</div>
          <div className={styles.clickMe}>click me</div>
        </div>
      </div>

      <div className={styles.pocketBody}></div>
      <div className={styles.flap}></div>
    </div>
  );
}
