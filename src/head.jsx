// src/components/Head.jsx
/* global dataLayer */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = ({
  title = "Ato Creative | Creative Marketing Services for Startups",
  description = "Looking for creative marketing services tailored for startups? Ato Creative offers affordable branding, content creation, and web development to boost your business. Contact us now!",
  keywords = "creative marketing for startups, affordable branding, startup web development, content creation services, startup marketing solutions",
  url = "https://atocreative.et/",
  image = "https://atocreative.et/logo.png",
  lang = "en",
}) => {
  useEffect(() => {
    // Google Analytics script
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CSQJ7HDL1B";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); }; // Use window.dataLayer
    window.gtag('js', new Date());
    window.gtag('config', 'G-CSQJ7HDL1B');

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ato Creative" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ato Creative" />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang.toUpperCase()} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@AtoCreative" />
      <meta name="twitter:creator" content="@AtoCreative" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ato Creative",
          "url": url,
          "logo": image,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+251925401353",
            "contactType": "Customer Service",
            "areaServed": "ET",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/AtoCreative",
            "https://twitter.com/AtoCreative",
            "https://www.linkedin.com/company/atocreative",
            "https://instagram.com/AtoCreative"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HeadComponent;
