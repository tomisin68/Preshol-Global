import Image from 'next/image';

export default function SDG() {
  return (
    <section id="sdg" aria-labelledby="sdg-heading">
      <div className="container">
        <div className="sdg-layout">

          <div className="sdg-intro reveal-left">
            <span className="section-tag">Our Work &amp; Alignment</span>
            <h2 id="sdg-heading">
              Our Work Aligns With<br />the Sustainable<br /><em>Development Goals</em>
            </h2>
            <p className="sdg-lead">
              At Preshol Global, our commitment to mental health advocacy goes beyond conversations—it is a mission rooted in healing, awareness, and sustainable impact across communities.
            </p>
            <p className="sdg-copy">
              Our work aligns strongly with the United Nations Sustainable Development Goals, particularly in advancing human well-being, promoting dignity, and strengthening resilient communities. Through strategic interventions and grassroots engagement, we contribute to a world where mental wellness is prioritized and every individual has access to support.
            </p>
            <div className="sdg-visual reveal">
              <Image
                src="/images/sdg.jpeg"
                alt="Preshol Global mental health dialogue illustrating SDG-aligned impact"
                loading="lazy"
                width={640}
                height={480}
              />
              <div className="sdg-visual-badge">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-network"></use></svg>
                SDG Focus
              </div>
              <div className="sdg-visual-copy">
                <strong>Well-being backed by practical community action.</strong>
                <span>Health, education, equity, and partnership come together in one field-facing mission.</span>
              </div>
            </div>
            <div className="sdg-rail" aria-label="Key alignment areas">
              <div className="sdg-pill-row">
                <span className="sdg-pill">SDG 3</span>
                <span className="sdg-pill">SDG 4</span>
                <span className="sdg-pill">SDG 10</span>
                <span className="sdg-pill">SDG 17</span>
              </div>
              <p className="sdg-note">
                <strong>Note:</strong> These four SDGs represent our primary focus areas, though our work intersects with multiple development goals across health, education, equity, and partnership.
              </p>
            </div>
          </div>

          <div className="sdg-grid reveal-right">

            <article className="sdg-card sdg-card-health">
              <span className="sdg-card-tag"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-brain"></use></svg> SDG 3</span>
              <h3>Good Health &amp; Well-being</h3>
              <p>
                Mental health is at the core of everything we do. Through awareness campaigns, community engagements, and advocacy initiatives, we work to:
              </p>
              <ul className="sdg-points">
                <li>Reduce stigma around mental health challenges</li>
                <li>Encourage early help-seeking behaviours</li>
                <li>Promote emotional and psychological well-being</li>
              </ul>
              <p className="sdg-card-close">
                We believe that true health is not only physical but also deeply mental and emotional.
              </p>
            </article>

            <article className="sdg-card sdg-card-education">
              <span className="sdg-card-tag"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-cap"></use></svg> SDG 4</span>
              <h3>Quality Education</h3>
              <p>
                We provide mental health education that is simple, relatable, and practical. By equipping individuals—especially young people—with knowledge, we empower them to:
              </p>
              <ul className="sdg-points">
                <li>Understand their emotions</li>
                <li>Build resilience</li>
                <li>Support others within their circles</li>
              </ul>
              <p className="sdg-card-close">
                Education, in this sense, becomes a tool for both prevention and transformation.
              </p>
            </article>

            <article className="sdg-card sdg-card-equity">
              <span className="sdg-card-tag"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-scales"></use></svg> SDG 10</span>
              <h3>Reduced Inequalities</h3>
              <p>
                Mental health care is often inaccessible or overlooked in many communities. Our advocacy focuses on:
              </p>
              <ul className="sdg-points">
                <li>Reaching underserved and grassroots populations</li>
                <li>Amplifying voices that are often unheard</li>
                <li>Promoting inclusive access to mental health support</li>
              </ul>
              <p className="sdg-card-close">
                Everyone deserves to be seen, heard, and supported.
              </p>
            </article>

            <article className="sdg-card sdg-card-partnership">
              <span className="sdg-card-tag"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-handshake"></use></svg> SDG 17</span>
              <h3>Partnerships for the Goals</h3>
              <p>
                We recognize that sustainable impact cannot happen in isolation. Through collaborations with organizations, institutions, and community leaders, we:
              </p>
              <ul className="sdg-points">
                <li>Expand the reach of mental health awareness</li>
                <li>Strengthen advocacy efforts</li>
                <li>Build a network of shared responsibility for well-being</li>
              </ul>
              <p className="sdg-card-close">
                Together, we create lasting change across communities.
              </p>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}
