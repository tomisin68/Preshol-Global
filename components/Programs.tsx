const PROGRAMS = [
  {
    num: 'Program 01',
    title: 'Community Mission Interventions',
    body: 'Strategic outreach initiatives designed to meet emotional, educational, and social needs in underserved communities across Africa. Our interventions focus on sustainable impact, not temporary relief.',
    imgLabel: 'Community Mission Interventions — outreach in underserved communities',
    bg: "url('/images/programs/comm-intervention.jpeg')",
    bgPosition: undefined as string | undefined,
  },
  {
    num: 'Program 02',
    title: 'Mental Health Awareness Campaigns',
    body: 'School engagements, symposiums, faith-based discussions, and workplace conversations focused on breaking stigma and building emotional resilience in communities that need it most.',
    imgLabel: 'Mental Health Awareness — workshops, symposiums, faith-based discussions',
    bg: "url('/images/programs/mental-health.jpeg')",
    bgPosition: undefined as string | undefined,
  },
  {
    num: 'Program 03',
    title: 'Global Pathway Guidance',
    body: 'Advisory sessions and structured guidance for individuals seeking international education, professional growth, and ethical global exposure. We believe your background should not limit your future.',
    imgLabel: 'Global Pathway Guidance — international education and professional growth',
    bg: "url('/images/programs/global-pathway.jpeg')",
    bgPosition: 'center 22%',
  },
  {
    num: 'Program 04',
    title: 'Youth Leadership & Development Forums',
    body: 'Capacity-building programs equipping young leaders with clarity, confidence, and character. Shaping a generation of purpose-driven change-makers across Africa and beyond.',
    imgLabel: 'Youth Leadership Forums — capacity building for young leaders',
    bg: "url('/images/programs/youth-leadership.jpeg')",
    bgPosition: undefined as string | undefined,
  },
];

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading">
      <div className="container">
        <div className="programs-header">
          <div className="reveal-left">
            <span className="section-tag">Programs &amp; Services</span>
            <h2 id="programs-heading">How We Change<br /><em>Lives on the Ground</em></h2>
          </div>
          <div className="reveal-right">
            <p>
              Four transformative programs designed to meet real human needs — emotional, educational,
              social, and developmental. We go where the need is greatest.
            </p>
          </div>
        </div>

        <div className="programs-grid">
          {PROGRAMS.map((program) => (
            <article className="program-card reveal" key={program.num}>
              <div
                className="program-card-img"
                role="img"
                aria-label={program.imgLabel}
                style={{ backgroundImage: program.bg, backgroundPosition: program.bgPosition }}
              >
                <div className="program-card-img-overlay" aria-hidden="true"></div>
              </div>
              <div className="program-card-body">
                <p className="program-num">{program.num}</p>
                <h3>{program.title}</h3>
                <p>{program.body}</p>
              </div>
              <div className="program-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
