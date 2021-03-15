import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/users', component: '@/pages/users/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'https://public-api-v1.aspirantzhang.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
