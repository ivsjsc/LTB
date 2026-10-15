/** Tailwind config — khớp 100% cấu hình Stitch (long_thanh_beer_enterprise_design_system/DESIGN.md).
 *  Màu khóa: #171916 (charcoal), #183B2B (forest), #D99A35 (amber, chỉ accent), #F6F2E9 (cream). */
const inter = ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'];
const t = (size, lh, fw, ls) => [size, { lineHeight: lh, fontWeight: fw, ...(ls ? { letterSpacing: ls } : {}) }];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface': '#fdf9f0', 'surface-dim': '#dddad1', 'surface-bright': '#fdf9f0',
        'surface-container-lowest': '#ffffff', 'surface-container-low': '#f7f3ea', 'surface-container': '#f1eee5',
        'surface-container-high': '#ece8df', 'surface-container-highest': '#e6e2d9',
        'on-surface': '#1c1c16', 'on-surface-variant': '#414844', 'inverse-surface': '#31302b',
        'inverse-on-surface': '#f4f0e7', 'outline': '#727973', 'outline-variant': '#c1c8c2', 'surface-tint': '#436653',
        'primary': '#002517', 'on-primary': '#ffffff', 'primary-container': '#183b2b', 'on-primary-container': '#80a690',
        'inverse-primary': '#a9cfb9',
        'secondary': '#825500', 'on-secondary': '#ffffff', 'secondary-container': '#feba52', 'on-secondary-container': '#724a00',
        'tertiary': '#171916', 'on-tertiary': '#ffffff', 'tertiary-container': '#333532', 'on-tertiary-container': '#9c9d99',
        'error': '#ba1a1a', 'on-error': '#ffffff', 'error-container': '#ffdad6', 'on-error-container': '#93000a',
        'primary-fixed': '#c4ecd4', 'primary-fixed-dim': '#a9cfb9', 'on-primary-fixed': '#002113', 'on-primary-fixed-variant': '#2b4e3d',
        'secondary-fixed': '#ffddb2', 'secondary-fixed-dim': '#feba52', 'on-secondary-fixed': '#291800', 'on-secondary-fixed-variant': '#624000',
        'tertiary-fixed': '#e3e3dd', 'tertiary-fixed-dim': '#c6c7c2', 'on-tertiary-fixed': '#1a1c19', 'on-tertiary-fixed-variant': '#464744',
        'background': '#fdf9f0', 'on-background': '#1c1c16', 'surface-variant': '#e6e2d9',
        // Màu thương hiệu đã khóa
        'ltb-charcoal': '#171916', 'ltb-forest': '#183B2B', 'ltb-amber': '#D99A35', 'ltb-cream': '#F6F2E9',
      },
      borderRadius: { DEFAULT: '0.125rem', lg: '0.25rem', xl: '0.5rem', full: '0.75rem' },
      spacing: {
        'gutter': '1.5rem', 'gutter-mobile': '1rem', 'margin': '3rem', 'margin-tablet': '2rem', 'margin-mobile': '1.25rem',
        'space-xs': '0.25rem', 'space-sm': '0.5rem', 'space-md': '1rem', 'space-lg': '1.5rem', 'space-xl': '2.5rem',
      },
      fontFamily: Object.fromEntries(
        ['display-lg', 'headline-xl', 'headline-xl-mobile', 'headline-lg', 'headline-md', 'headline-sm', 'body-lg', 'body-md', 'body-sm', 'label-lg', 'label-md', 'label-sm'].map((k) => [k, inter]),
      ),
      fontSize: {
        'display-lg': t('48px', '56px', '700', '-0.02em'),
        'headline-xl': t('36px', '44px', '700', '-0.015em'),
        'headline-xl-mobile': t('28px', '36px', '700', '-0.01em'),
        'headline-lg': t('28px', '36px', '600', '-0.01em'),
        'headline-md': t('22px', '30px', '600', '-0.005em'),
        'headline-sm': t('18px', '26px', '600'),
        'body-lg': t('16px', '26px', '400'),
        'body-md': t('14px', '22px', '400'),
        'body-sm': t('12px', '18px', '400'),
        'label-lg': t('14px', '20px', '600', '0.01em'),
        'label-md': t('12px', '16px', '600', '0.02em'),
        'label-sm': t('11px', '14px', '500', '0.03em'),
      },
    },
  },
  plugins: [],
};
