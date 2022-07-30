import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'https://6cxx9pggi4.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
