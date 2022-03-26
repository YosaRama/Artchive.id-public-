// Libs
import moment from "moment";

function SitemapIndex() {}

export default SitemapIndex;

export async function getServerSideProps({ res }) {
  const currentDate = moment().format("YYYY-MM-DDTHH:mm:ss+00:00");
  res.setHeader("Content-Type", "text/xml");
  res.write(`<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <sitemap>
                <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml</loc>
                <lastmod>${currentDate}</lastmod>
            </sitemap>
            <sitemap>
                <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap-dynamic.xml</loc>
                <lastmod>${currentDate}</lastmod>
            </sitemap>
        </sitemapindex>`);
  res.end();
  return {
    props: {},
  };
}
