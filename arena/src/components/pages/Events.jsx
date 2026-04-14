import { Badge, Card, BtnPrimary, BtnSecondary, SectionTitle, Meta } from '../UI';
import styles from './Pages.module.css';

const EVENTS = [
  { badge: 'green',  label: 'Upcoming',    title: 'INCOSE IS 2026',          desc: 'Jun 13–18 · Yokohama, Japan\nSystems engineering practitioners, researchers & educators.', meta: '1,200+ attendees · Free student rate',        cta: 'primary' },
  { badge: 'green',  label: 'Upcoming',    title: 'Grace Hopper 2026',        desc: "Oct 27–30 · Anaheim, CA\nWorld's largest gathering for women in tech.",                  meta: '20,000+ attendees · Career fair included',   cta: 'primary' },
  { badge: 'blue',   label: 'Plan ahead',  title: 'AIAA SciTech 2027',        desc: 'Jan · Orlando, FL\nAerospace R&D, 3,000+ technical presentations.',                     meta: '6,100+ attendees · Young professional track', cta: 'secondary' },
  { badge: 'purple', label: 'Virtual',     title: 'Arena Monthly Hackathon',  desc: 'Every last Saturday\nIndustry challenges across aerospace, defense & tech.',             meta: 'Open to all sectors · Prize pool each month', cta: 'primary' },
  { badge: 'amber',  label: 'Local',       title: 'Phoenix Eng Meetup',       desc: 'May 20 · Tempe, AZ\nEarly-career engineers in the Valley. Drinks + talks.',             meta: '~60 attendees · Free',                        cta: 'primary' },
  { badge: 'blue',   label: 'Upcoming',    title: 'IEEE Aerospace 2027',      desc: 'Mar · Big Sky, MT\nSystems/software focus. Week-long deep dive.',                       meta: '175+ hrs of sessions · Student discounts',    cta: 'secondary' },
];

export default function Events() {
  return (
    <div className={styles.page}>
      <SectionTitle>Events & conferences</SectionTitle>
      <div className={styles.grid3}>
        {EVENTS.map((e, i) => (
          <Card key={i}>
            <Badge variant={e.badge}>{e.label}</Badge>
            <h3 className={styles.cardTitle}>{e.title}</h3>
            <p className={styles.cardDesc}>{e.desc}</p>
            <Meta>{e.meta}</Meta>
            <div style={{ marginTop: '12px' }}>
              {e.cta === 'primary'
                ? <BtnPrimary fullWidth>RSVP</BtnPrimary>
                : <BtnSecondary fullWidth>Remind me</BtnSecondary>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
