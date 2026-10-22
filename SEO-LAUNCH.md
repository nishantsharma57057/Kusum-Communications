# Kusum Communications — search launch handoff

## Implemented

- Larger COMMUNICATIONS brand descriptor on desktop and mobile.
- React + Vite remains a static frontend. `npm run build` generates complete HTML for seven routes and hydrates it in the browser; no runtime server is required.
- Unique page titles, descriptions, canonical URLs, Open Graph/Twitter metadata and JSON-LD use https://kusumcommunications.com as the intended primary domain.
- Organization/WebSite/WebPage information, breadcrumbs, journal Article, vertical-production Service and FAQPage markup. FAQ answers are also visible to visitors. Markup does not guarantee rich results or AI citations.
- All six existing page URLs preserved. New page: /vertical-drama-production-house-india/.
- Sitemap: /sitemap.xml. Compatibility sitemap index: /sitemap_index.xml.
- robots.txt allows crawling, including OAI-SearchBot. Vercel preview builds receive a noindex meta tag; production builds are indexable.
- Existing video interaction rules, carousel settings, all nine services and 166 gallery photos retained.

## Keyword focus

| Page | Search intent |
| --- | --- |
| Home | Vertical drama production house in India; Indian production studio |
| Vertical drama page | Vertical production houses in India; microdrama production company; short-form fiction production; how to compare top vertical production houses |
| Services | Web series production; branded content; corporate films; podcast production; animation and VFX |
| About and Journal | Kusum Communications; Ritu Vaidya; production credentials and published coverage |
| Contact | Branded project enquiries |

No invented rankings, awards, reviews, office street addresses, budgets or guarantees were added. Portfolio information and company details come from the existing site.

## Required when the domain goes live

1. Connect kusumcommunications.com to the chosen host and confirm HTTPS. Set the preferred host to https://kusumcommunications.com, and redirect www to it using your host's domain controls. DNS and account settings have not been changed by this code update.
2. Deploy the result of `npm run build` from dist/. Do not upload the source index.html by itself: the finished crawlable HTML is in dist/.
3. Verify the homepage, seven page URLs, robots.txt and sitemap.xml on the actual domain. Check that production responses have no noindex meta/header, login wall or crawler challenge. Ensure the production build did not inherit VERCEL_ENV=preview.
4. Preserve the existing WordPress URLs. Before retiring WordPress, export its complete URL list and compare with this site's routes. Add individual permanent redirects for any additional indexed URLs that change; do not redirect all missing pages to the homepage.
5. Verify a domain property in Google Search Console through the provided DNS token. Submit https://kusumcommunications.com/sitemap.xml and inspect/request indexing for the homepage and vertical-drama page. Search Console access and DNS verification are still required; submission has not been performed.
6. Verify/import the property in Bing Webmaster Tools and submit the same sitemap. Check CDN/firewall rules allow legitimate crawlers as well as robots.txt.
7. Validate live structured data and test mobile/desktop performance. The automated build checks validate local HTML/links/JSON, not an external rich-result guarantee or browser performance score.

## Ongoing work for visibility

- Publish client-approved case studies with the title, actual production role, scope, stills, platform and verifiable results. Prefer substantive work evidence over generic articles repeating the same keywords.
- Keep figures and company details consistent and dated. The existing portfolio's view counts were retained, not independently audited.
- Maintain accurate social and relevant business profiles. Pursue genuine partner credits and editorial mentions; do not buy bulk links or manufacture reviews.
- Track branded/non-branded impressions, ranking queries, qualified enquiries and any observable AI referrals. A crawlable page is eligible for discovery, not guaranteed a top result.
- Review actual search queries before creating additional pages. Avoid near-duplicate city/keyword pages without distinct information.

## Official references reviewed

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- OpenAI crawler controls: https://developers.openai.com/api/docs/bots

Google states that its normal SEO fundamentals apply to AI features and that no special AI file/schema is required. OAI-SearchBot access supports eligibility for ChatGPT search; it does not ensure selection or ranking.

## Maintenance

- SEO settings: src/siteConfig.js
- Landing-page questions and schema source: src/data/verticalFaqs.json
- Metadata/sitemap generation: scripts/prepare-html.mjs
- HTML generation: scripts/prerender.jsx
- Validation: npm run build and npm run check:render

Keep build-time HTML and client content generated from the same components. All seven routes must remain in src/routes.jsx, src/siteConfig.js and the Vite build inputs.
