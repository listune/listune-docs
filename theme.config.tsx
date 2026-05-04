import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <strong>Listune</strong>,
  project: {
    link: 'https://github.com/listune/listune-docs',
  },
  docsRepositoryBase: 'https://github.com/listune/listune-docs/tree/main',
  footer: {
    text: `© ${new Date().getFullYear()} Listune. All Rights Reserved.`,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const titleTemplate = asPath !== '/' ? '%s - Listune Docs' : 'Listune Docs';

    return {
      titleTemplate,
    };
  },
};

export default config;
