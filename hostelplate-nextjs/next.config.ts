import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,     // Remove X-Powered-By: Next.js header
  productionBrowserSourceMaps: false,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },

  // Trailing slashes for canonical URL consistency
  trailingSlash: true,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(svg|png|jpg|jpeg|gif|ico|webp|avif|woff|woff2)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for old static site URLs (without trailing slash → with)
  async redirects() {
    return [
      {
        source: "/high-protein-meals-under-100-rupees",
        destination: "/high-protein-meals-under-100-rupees/",
        permanent: true,
      },
      {
        source: "/no-cook-meals-for-hostel",
        destination: "/no-cook-meals-for-hostel/",
        permanent: true,
      },
      {
        source: "/kettle-recipes-for-hostel-students",
        destination: "/kettle-recipes-for-hostel-students/",
        permanent: true,
      },
      {
        source: "/budget-grocery-list-students-india",
        destination: "/budget-grocery-list-students-india/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
