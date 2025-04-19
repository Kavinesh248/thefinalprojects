import React from "react";

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.thefinalprojects.com",
    logo: "https://www.thefinalprojects.com/favicon.png",
    name: "The Final Projects",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;
