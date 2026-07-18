export default function WhatWeDo() {
  return (
    <section id="whatwedo" aria-labelledby="whatwedo-heading">
      <div className="container">
        <div className="whatwedo-inner">

          <div className="reveal-left">
            <span className="section-tag">What We Do</span>
            <h2 id="whatwedo-heading">Transformative Work<br /><em>From the Inside Out</em></h2>
            <p>
              We design and implement community-based outreach programs that address real human needs —
              emotional, educational, social, and developmental. Three pillars, one vision.
            </p>
            <div className="what-list">
              <div className="what-item">
                <div className="what-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24"><use href="#icon-handshake"></use></svg>
                </div>
                <div>
                  <h4>Non-Profit Mission Interventions</h4>
                  <p>Community-based outreach with a focus on sustainable impact. Not temporary relief — lasting transformation for individuals and communities.</p>
                </div>
              </div>
              <div className="what-item">
                <div className="what-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24"><use href="#icon-brain"></use></svg>
                </div>
                <div>
                  <h4>Mental Health Advocacy</h4>
                  <p>Breaking stigma through symposiums, workshops, school engagements, and faith-based conversations. Equipping individuals with tools for mental wellness and self-awareness.</p>
                </div>
              </div>
              <div className="what-item">
                <div className="what-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24"><use href="#icon-globe"></use></svg>
                </div>
                <div>
                  <h4>Global Opportunity Guidance</h4>
                  <p>Educational pathways, professional development, strategic global positioning, and ethical travel advisory. Your background should not limit your future.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="whatwedo-visual reveal-right">
            <div className="whatwedo-img" role="img" aria-label="Preshol Global team in the field during a community mission">
            </div>
            <div className="whatwedo-badge" aria-label="15 plus mission trips executed">
              <div className="whatwedo-badge-top">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-plane"></use></svg>
                Cross-Border Reach
              </div>
              <div className="num">15+</div>
              <div className="lbl">Mission Trips Executed</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
