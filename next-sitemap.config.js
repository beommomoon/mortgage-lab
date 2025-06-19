/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mortgage-lab.co.kr',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: ['/api/*'],
};
