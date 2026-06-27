import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tabrez Dal",
    "url": "https://tabrezdal.com",
    "image": "https://tabrezdal.com/og-image.webp",
    "jobTitle": "Product Engineer — Software & UX",
    "description": "Product Engineer specialising in Software Engineering and UX/UI Design with 6+ years of experience building scalable frontend systems and product-driven experiences across SaaS, healthcare, and e-commerce.",
    "sameAs": [
      "https://www.linkedin.com/in/tabrezdal",
      "https://github.com/tabrezdal",
      "https://twitter.com/tabrezdal",
      "https://www.facebook.com/tabrezdal",
      "https://www.instagram.com/tabrezdal",
      "https://dribbble.com/tabrezdal",
      "https://www.behance.net/tabrezdal",
      "https://www.pinterest.com/tabrezdal",
      "https://calendly.com/tabrez-dal"
    ],
    "knowsAbout": [
      "React",
      "Redux",
      "GraphQL",
      "Node.js",
      "ChatGPT",
      "HTML5",
      "CSS3",
      "Sass",
      "Less",
      "Material UI",
      "Bootstrap",
      "MySQL",
      "JSON",
      "JavaScript",
      "TypeScript",
      "Axios",
      "jQuery",
      "UX Design",
      "Design Systems",
      "Frontend Architecture",
      "Product Engineering"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "availableLanguage": ["English", "Hindi", "Urdu"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tabrez Dal — Portfolio",
    "url": "https://tabrezdal.com",
    "description": "Portfolio of Tabrez Dal — Product Engineer specialising in Software Engineering and UX/UI Design.",
    "author": {
      "@type": "Person",
      "name": "Tabrez Dal"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tabrezdal.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Tabrez Dal",
      "alternateName": "Tabrez Dal Portfolio",
      "description": "Product Engineer specialising in Software Engineering and UX/UI Design.",
      "url": "https://tabrezdal.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
