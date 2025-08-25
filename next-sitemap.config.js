module.exports = {
  siteUrl: 'https://www.mortgage-lab.co.kr',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'), // 메인페이지 강제 포함
  ],
};
