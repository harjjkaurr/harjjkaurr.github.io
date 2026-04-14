import { Badge, Card, SectionTitle } from '../UI';
import styles from './Pages.module.css';

const STATS = [
  { label: 'Challenges completed', value: 4 },
  { label: 'Events attended',      value: 2 },
  { label: 'Teams formed',         value: 1 },
  { label: 'Connections',          value: 12 },
];

const TAGS = [
  { label: 'Systems Engineering', variant: 'blue' },
  { label: 'Software',            variant: 'purple' },
  { label: 'Avionics',            variant: 'green' },
  { label: 'Hackathons',          variant: 'amber' },
];

export default function Profile() {
  return (
    <div className={styles.page}>
      <SectionTitle>My profile</SectionTitle>
      <div className={styles.grid2}>
        <Card>
          <div className={styles.profileTop}>
            <div className={styles.profileAvatar}>YK</div>
            <div>
              <div className={styles.profileName}>Yash K.</div>
              <div className={styles.profileRole}>Systems/Software Engineer · Collins Aerospace</div>
              <div className={styles.profileMeta}>Starting June 2026 · Class of 2026</div>
            </div>
          </div>
          <div className={styles.profileBio}>
            Graduating aerospace/systems engineering student passionate about avionics,
            autonomous systems, and building community for early-career engineers.
          </div>
          <div className={styles.tagRow}>
            {TAGS.map((t, i) => (
              <Badge key={i} variant={t.variant}>{t.label}</Badge>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle>Activity</SectionTitle>
          {STATS.map((s, i) => (
            <div key={i} className={styles.statRow}>
              <span className={styles.statRowLabel}>{s.label}</span>
              <span className={styles.statRowValue}>{s.value}</span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
