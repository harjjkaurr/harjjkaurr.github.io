import { Badge, Card, BtnPrimary, BtnSecondary, SectionTitle, Meta } from '../UI';
import styles from './Pages.module.css';

const COMPANIES    = ['Collins Aerospace', 'Boeing', 'Raytheon', 'Northrop Grumman', 'Lockheed Martin'];
const CO_VARIANTS  = ['green', 'blue', 'purple', 'amber', 'blue'];

const OTHER = [
  { badge: 'purple', label: 'Open', title: 'Early-Career Software Eng 2025–2026', desc: 'Cross-industry cohort for 0–2 yr software engineers. Big tech, defense, startups — all welcome.', meta: '83 members' },
  { badge: 'green',  label: 'Open', title: 'Women in Aerospace 2026',             desc: 'Support network for women entering aerospace and defense in 2026. Mentorship, events, and visibility.', meta: '29 members' },
];

export default function Cohorts() {
  return (
    <div className={styles.page}>
      <SectionTitle>Cohorts — your graduating class, in the industry</SectionTitle>

      <Card featured style={{ marginBottom: '1rem' }}>
        <Badge variant="blue">Your cohort</Badge>
        <h3 className={styles.cardTitle}>Aerospace & Systems Engineers — Class of 2026</h3>
        <p className={styles.cardDesc}>
          47 members who graduated in 2026 and entered aerospace/systems/defense roles.
          Monthly check-ins, shared challenges, and a mentor from each company.
        </p>
        <div className={styles.tagRow}>
          {COMPANIES.map((c, i) => (
            <Badge key={i} variant={CO_VARIANTS[i]}>{c}</Badge>
          ))}
        </div>
        <div style={{ marginTop: '14px' }}>
          <BtnPrimary>View cohort →</BtnPrimary>
        </div>
      </Card>

      <div className={styles.grid2}>
        {OTHER.map((c, i) => (
          <Card key={i}>
            <Badge variant={c.badge}>{c.label}</Badge>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <Meta>{c.meta}</Meta>
            <div style={{ marginTop: '12px' }}>
              <BtnSecondary>Request to join</BtnSecondary>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
