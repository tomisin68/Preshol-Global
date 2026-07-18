export const ngoSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": "https://www.presholGlobal.org/#organization",
  "name": "Preshol Global",
  "description": "Non-profit organisation focused on community mission interventions, mental health advocacy, and global opportunity guidance.",
  "url": "https://www.presholGlobal.org",
  "logo": "https://www.presholGlobal.org/logo.png",
  "foundingDate": "2020",
  "founder": { "@id": "https://www.presholGlobal.org/#david-ademide-adebanjo" },
  "areaServed": ["Nigeria", "Ghana", "Uganda", "Niger", "Côte d'Ivoire", "Benin", "Zimbabwe"],
  "sameAs": [
    "https://facebook.com/presholGlobal",
    "https://instagram.com/presholGlobal",
    "https://linkedin.com/company/presholGlobal"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "General Enquiry",
    "availableLanguage": "English"
  }
};

export const founderSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.presholGlobal.org/#david-ademide-adebanjo",
  "name": "David Ademide Adebanjo",
  "url": "https://www.presholGlobal.org/#founder",
  "image": "https://www.presholGlobal.org/preshol-founder.jpeg",
  "jobTitle": "Founder & Executive Director",
  "description": "David Ademide Adebanjo is a Nigerian public health advocate, mental health educator, UN SDGs Ambassador, youth development leader, and social entrepreneur. He is the Founder and Executive Director of Preshol Global.",
  "nationality": { "@type": "Country", "name": "Nigeria" },
  "worksFor": [
    { "@type": "NGO", "@id": "https://www.presholGlobal.org/#organization", "name": "Preshol Global" },
    { "@type": "Organization", "name": "Youth Creative Consortium (YCC)" }
  ],
  "knowsAbout": [
    "Mental Health Advocacy",
    "Public Health",
    "Youth Leadership Development",
    "Sustainable Development Goals",
    "Community Development",
    "International Relations"
  ],
  "sameAs": [
    "https://ng.linkedin.com/in/david-adebanjo-097737226",
    "https://www.instagram.com/adepreshol"
  ]
};
