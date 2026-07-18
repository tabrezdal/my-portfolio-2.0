const fs = require('fs');
const path = require('path');

const BASE = 'https://tabrezdal.com';

// URL builders matching ConstantHelper
const buildAbsoluteCaseStudiesUrl = () => `${BASE}/case-studies/`;
const buildAbsoluteCaseStudyUrl = (slug) => `${BASE}/case-study/${slug}/`;
const buildAbsoluteUiUxProjectUrl = (id) => `${BASE}/ui-ux-project/${id}/`;

// Static URLs
const staticUrls = [
  { loc: `${BASE}/`, changefreq: 'monthly', priority: '1.0' },
  { loc: buildAbsoluteCaseStudiesUrl(), changefreq: 'monthly', priority: '0.9' },
];

// Case study slugs from FeaturedProjectsData
const caseStudySlugs = [
  'mycricle',
  'jobzshala',
  'eatexpress',
  'iehp-cmm',
  'iehp-hsf',
  'myhabit',
  'menuonline',
  'edxplore',
  'meco-motorsports',
  'hotel-resort-management',
  'asin-vault',
  'mobiotics',
];

// UI/UX project URL suffixes from PortfolioDataUiUx
const uiuxSuffixes = [
  'uiux01', 'uiux02', 'uiux03', 'uiux04', 'uiux05', 'uiux06',
  'uiux07', 'uiux08', 'uiux09', 'uiux10', 'uiux11', 'uiux12', 'uiux13', 'uiux14',
  'uiux15', 'uiux16', 'uiux17', 'uiux18', 'uiux19', 'uiux20', 'uiux21', 'uiux22',
  'uiux23', 'uiux24', 'uiux25', 'uiux26', 'uiux27', 'uiux28', 'uiux29', 'uiux30',
  'uiux31', 'uiux32', 'uiux33', 'uiux34', 'uiux35', 'uiux36', 'uiux37', 'uiux38',
  'uiux39', 'uiux40', 'uiux41',
];

const caseStudyUrls = caseStudySlugs.map((slug) => ({
  loc: buildAbsoluteCaseStudyUrl(slug),
  changefreq: 'yearly',
  priority: '0.8',
}));

const uiuxUrls = uiuxSuffixes.map((suffix) => ({
  loc: buildAbsoluteUiUxProjectUrl(suffix),
  changefreq: 'yearly',
  priority: '0.7',
}));

const all = [...staticUrls, ...caseStudyUrls, ...uiuxUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((u) => `  <url><loc>${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml);
console.log(`Wrote sitemap.xml with ${all.length} URLs`);
