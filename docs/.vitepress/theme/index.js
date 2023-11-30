// https://vitepress.dev/guide/custom-theme
import { VPBTheme } from '@chunge16/vitepress-blogs-theme';

import './style.css'

export default {
  extends: VPBTheme,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
