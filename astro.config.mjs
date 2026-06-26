// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/growthbook-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'GrowthBook — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/growthbook-from-zero-to-hero/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/growthbook-from-zero-to-hero/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/growthbook-from-zero-to-hero/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/growthbook-from-zero-to-hero/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#7C3AED' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "GrowthBook" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/growthbook-from-zero-to-hero/sw.js',{scope:'/growthbook-from-zero-to-hero/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/growthbook-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Setup', collapsed: true, items: [{ autogenerate: { directory: 'intro-setup' } }] },
        { label: 'Feature Flags', collapsed: true, items: [{ autogenerate: { directory: 'feature-flags' } }] },
        { label: 'SDK Integration', collapsed: true, items: [{ autogenerate: { directory: 'sdk-integration' } }] },
        { label: 'Targeting & Rollouts', collapsed: true, items: [{ autogenerate: { directory: 'targeting-rollouts' } }] },
        { label: 'A/B Testing & Experiments', collapsed: true, items: [{ autogenerate: { directory: 'ab-testing' } }] },
        { label: 'Metrics & Data Sources', collapsed: true, items: [{ autogenerate: { directory: 'metrics-data' } }] },
        { label: 'Advanced & Production', collapsed: true, items: [{ autogenerate: { directory: 'advanced-production' } }] },
      ],
      }), preact()],
});