import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-heading">
      <div className="container">

        <div className="founder-header reveal">
          <span className="section-tag">About the Founder</span>
          <h2 id="founder-heading">Meet the Man Behind <em>Preshol Global</em></h2>
        </div>

        <div className="founder-layout">

          <div className="founder-card reveal-left">
            <div className="founder-photo-frame">
              <div className="founder-photo-crop">
                <Image
                  src="/preshol-founder.jpeg"
                  alt="David Ademide Adebanjo, Founder and Executive Director of Preshol Global"
                  loading="lazy"
                  width={828}
                  height={938}
                />
              </div>
              <div className="founder-photo-badge">Founder &amp; Executive Director</div>
            </div>
            <div className="founder-name-plate">
              <h3>David Ademide Adebanjo</h3>
              <p className="founder-role">Founder &amp; Executive Director, Preshol Global</p>
              <div className="founder-social" aria-label="David Ademide Adebanjo's official profiles">
                <a href="https://ng.linkedin.com/in/david-adebanjo-097737226" className="founder-social-icon" target="_blank" rel="me noopener" aria-label="David Ademide Adebanjo on LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/adepreshol" className="founder-social-icon" target="_blank" rel="me noopener" aria-label="David Ademide Adebanjo on Instagram">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            <ul className="founder-roles-list">
              <li className="founder-role-item">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-handshake"></use></svg>
                <span><strong>Senior Special Assistant</strong> — International Relations &amp; Partnerships, Youth Creative Consortium (YCC)</span>
              </li>
              <li className="founder-role-item">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-network"></use></svg>
                <span><strong>United Nations SDGs Ambassador</strong> — SDG 3, 4, 11, 16 &amp; 17</span>
              </li>
              <li className="founder-role-item">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-brain"></use></svg>
                <span><strong>Public Health Advocate</strong> &amp; Mental Health Educator</span>
              </li>
              <li className="founder-role-item">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-heart"></use></svg>
                <span><strong>Youth Development Leader</strong> &amp; Social Entrepreneur, Nigeria</span>
              </li>
            </ul>
          </div>

          <div className="founder-content reveal-right">
            <p>
              David Ademide Adebanjo is the Founder and Executive Director of Preshol Global. He is a Nigerian public health advocate, mental health educator, SDG Ambassador, youth development leader, and social entrepreneur.
            </p>
            <p>
              David founded Preshol Global with a clear vision: to build a generation of mentally resilient Africans equipped to lead healthier, more productive, and purpose-driven lives while contributing meaningfully to sustainable development. Under his leadership, the organisation has continued to champion initiatives that strengthen mental well-being, improve access to health information, empower young people, promote education, and foster community resilience through practical and collaborative interventions.
            </p>

            <blockquote className="founder-pull-quote">
              &ldquo;Sustainable development begins with healthy minds, informed communities, and empowered leaders.&rdquo;
            </blockquote>

            <p>
              Through Preshol Global, he has led and supported mental health awareness campaigns, school outreach programmes, public health education, free medical outreaches, youth leadership initiatives, humanitarian projects, community development programmes, and strategic partnerships that create lasting social impact.
            </p>
            <p>
              David has undertaken professional training in mental health, global health, leadership, and community development. His interdisciplinary background enables him to bridge health, education, policy, and community engagement into practical solutions that address real societal challenges.
            </p>
            <p>
              Beyond Preshol Global, David serves as the <strong>Senior Special Assistant on International Relations and Partnerships</strong> to the Convener of the Youth Creative Consortium (YCC), a civil society organisation aligned with the African Union&apos;s Agenda 2063 through the Political Affairs, Peace and Security (PAPS) framework. In this capacity, he facilitates strategic partnerships, strengthens international engagement, and promotes youth participation in advancing peace, democracy, good governance, and sustainable development across Africa.
            </p>
            <p>
              He also serves as a <strong>United Nations Sustainable Development Goals (SDGs) Ambassador</strong>, championing SDG 3 (Good Health and Well-being), SDG 4 (Quality Education), SDG 11 (Sustainable Cities and Communities), SDG 16 (Peace, Justice and Strong Institutions), and SDG 17 (Partnerships for the Goals). His advocacy focuses on building cross-sector collaborations that translate global commitments into measurable community impact.
            </p>
            <div className="founder-sdg-row" aria-label="SDGs championed by David Ademide Adebanjo">
              <span className="sdg-pill">SDG 3</span>
              <span className="sdg-pill">SDG 4</span>
              <span className="sdg-pill">SDG 11</span>
              <span className="sdg-pill">SDG 16</span>
              <span className="sdg-pill">SDG 17</span>
            </div>
            <p>
              David has represented youth and civil society at national and international forums, contributing to conversations on mental health, public health, youth leadership, international cooperation, sustainable development, and social innovation. His work has connected him with government institutions, development partners, diplomatic missions, civil society organisations, international networks, and youth-led initiatives committed to improving lives and strengthening communities.
            </p>

            <div className="founder-callout">
              <span className="founder-callout-tag">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-globe"></use></svg>
                International Recognition — June 2026
              </span>
              <p>
                In June 2026, Preshol Global was recognised during the International Leadership Programme hosted at the United Nations Economic and Social Commission for Asia and the Pacific (UN ESCAP) Conference Centre in Bangkok, Thailand, where the organisation&apos;s work was featured alongside initiatives from different parts of the world. The recognition reflected Preshol Global&apos;s growing contribution to community development and global collaboration.
              </p>
            </div>

            <p>
              David believes that leadership is measured by service, integrity, collaboration, and the ability to create opportunities that improve lives. His vision extends beyond organisational growth; it is centred on raising leaders, strengthening institutions, promoting mental resilience, and building partnerships that deliver sustainable solutions for Africa&apos;s development.
            </p>
            <p>
              Under his leadership, Preshol Global continues to expand its impact across mental health advocacy, public health promotion, education, youth development, humanitarian response, climate and sustainability initiatives, research, policy engagement, and strategic partnerships.
            </p>
            <p>
              His long-term aspiration is to position Preshol Global as one of Africa&apos;s leading organisations for mental health, public health, youth leadership, and sustainable development, contributing to the achievement of the Sustainable Development Goals and the aspirations of Africa&apos;s Agenda 2063 through innovative, community-driven solutions.
            </p>

            <a href="#contact" className="btn-primary" style={{ marginTop: '.5rem' }}>Connect With Our Founder</a>
          </div>

        </div>
      </div>
    </section>
  );
}
