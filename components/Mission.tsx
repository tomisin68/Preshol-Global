export default function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-heading">
      <div className="mission-bg" aria-hidden="true"></div>
      <div className="mission-bg-color" aria-hidden="true"></div>
      <div className="mission-inner container">

        <div className="mission-header reveal">
          <span className="section-tag" style={{ color: 'var(--gold-lt)', justifyContent: 'center' }}>
            Our Foundation
          </span>
          <h2 id="mission-heading">
            We exist to heal, empower,<br />and <em>open doors beyond borders.</em>
          </h2>
          <p>Every program, every mission, every conversation is rooted in three unshakeable commitments.</p>
        </div>

        <div className="mvv-grid reveal">
          <article className="mvv-card">
            <div className="mvv-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24"><use href="#icon-target"></use></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To restore hope, strengthen mental wellbeing, and create pathways for individuals — especially young people — to thrive locally and globally. </p>
          </article>
          <article className="mvv-card">
            <div className="mvv-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24"><use href="#icon-globe"></use></svg>
            </div>
            <h3>Our Vision</h3>
            <p>A world where mental wellness is prioritised, vulnerable communities are supported through sustainable mission interventions, and individuals are equipped to access life-changing global opportunities.</p>
          </article>
          <article className="mvv-card">
            <div className="mvv-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24"><use href="#icon-heart"></use></svg>
            </div>
            <h3>Our Values</h3>
            <p>Compassion. Excellence. Courage. We envision a generation of mentally resilient, purpose-aligned leaders transforming communities and shaping nations.</p>
          </article>
        </div>

      </div>
    </section>
  );
}
