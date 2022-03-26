module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: [
          "/dashboard",
          "/dashboard/*",
          "/profile",
          "/profile/*",
          "/maintenance",
          "/register/*",
        ],
      },
      {
        userAgent: "*",
        allow: "*",
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}sitemap-index.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL}sitemap-dynamic.xml`,
    ],
  },
  exclude: [
    "/dashboard",
    "/dashboard/*",
    "/profile",
    "/profile/*",
    "/maintenance",
    "/register/*",
    "/artist/*",
    "/artwork/*",
  ],
};
