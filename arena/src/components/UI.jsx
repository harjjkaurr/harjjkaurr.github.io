import styles from './UI.module.css';

export function Badge({ variant = 'blue', children }) {
  return <span className={`${styles.badge} ${styles[`badge_${variant}`]}`}>{children}</span>;
}

export function Card({ children, className = '', featured = false }) {
  return (
    <div className={`${styles.card} ${featured ? styles.cardFeatured : ''} ${className}`}>
      {children}
    </div>
  );
}

export function BtnPrimary({ children, onClick, fullWidth = false }) {
  return (
    <button
      className={`${styles.btnPrimary} ${fullWidth ? styles.fullWidth : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function BtnSecondary({ children, onClick, fullWidth = false }) {
  return (
    <button
      className={`${styles.btnSecondary} ${fullWidth ? styles.fullWidth : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ProgressBar({ value }) {
  return (
    <div className={styles.progressTrack}>
      <div className={styles.progressFill} style={{ width: `${value}%` }} />
    </div>
  );
}

export function StatCard({ number, label }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNum}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export function Avatar({ initials, color = 'blue' }) {
  return (
    <div className={`${styles.avatar} ${styles[`avatar_${color}`]}`}>
      {initials}
    </div>
  );
}

export function SectionTitle({ children }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

export function Meta({ children }) {
  return <p className={styles.meta}>{children}</p>;
}
