const COUNTRIES = [
  { name: 'Nigeria', desc: 'Missions across 5 Geo-political zones in underserved communities', trips: 'Multiple' },
  { name: 'Ghana', desc: 'Dabala Community, Volta Region', trips: 'Mission' },
  { name: "Côte d'Ivoire", desc: 'Bondoukou Community', trips: 'Mission' },
  { name: 'Niger', desc: 'Niamey Deux Mille Community', trips: 'Mission' },
  { name: 'Uganda', desc: 'Kabale & Rubirizi Districts', trips: 'Mission' },
  { name: 'Benin', desc: 'Community mission interventions', trips: 'Mission' },
  { name: 'Zimbabwe', desc: 'Outreach and advocacy programs', trips: 'Mission' },
];

export default function Footprint() {
  return (
    <section id="footprint" aria-labelledby="footprint-heading">
      <div className="container">
        <div className="footprint-inner">

          <div className="reveal-left">
            <span className="section-tag">Global Footprint</span>
            <h2 id="footprint-heading">Our Impact Spans<br /><em>7 Countries Across Africa</em></h2>
            <p>
              Thousands of lives impacted and still counting. Each outreach represents
              restored hope, strengthened minds, and communities empowered for sustainable growth.
              Seven countries,thousands of lives impacted and still counting.
            </p>
            <div className="map-visual">
              <div className="map-placeholder" role="img" aria-label="Map of Africa showing countries where Preshol Global operates">
                <div style={{ backgroundImage: "url('/images/africa-map.jpg')", width: '100%', height: '320px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="map-placeholder-overlay" aria-hidden="true">
                  <div className="map-globe">
                    <svg className="icon" viewBox="0 0 24 24"><use href="#icon-globe"></use></svg>
                  </div>
                  <div className="map-label">7 Countries and still counting </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <nav className="country-list" aria-label="Countries where Preshol Global operates">
              {COUNTRIES.map((country) => (
                <div className="country-item" key={country.name}>
                  <span className="country-flag" aria-hidden="true"><svg className="icon" viewBox="0 0 24 24"><use href="#icon-map-pin"></use></svg></span>
                  <div className="country-info">
                    <h4>{country.name}</h4>
                    <p>{country.desc}</p>
                  </div>
                  <span className="country-trips">{country.trips}</span>
                </div>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </section>
  );
}
