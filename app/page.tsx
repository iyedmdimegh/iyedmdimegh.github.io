import type { Metadata } from 'next';
import { DEFAULT_LOCALE, SITE_ORIGIN } from '@/content';

/**
 * The root of a statically exported site cannot issue a real redirect, so it
 * ships as a tiny document that forwards immediately and still offers a real
 * link — which is what a crawler and a no-script visitor both need.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}/${DEFAULT_LOCALE}/` },
};

export default function RootRedirect() {
  const target = `/${DEFAULT_LOCALE}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var l=localStorage.getItem('iyed-locale');location.replace(l==='fr'?'/fr/':'${target}');}catch(e){location.replace('${target}');}})();`,
        }}
      />
      <main style={{ padding: '4rem 1.5rem', fontFamily: 'system-ui, sans-serif' }}>
        <a href={target}>Continue to iyedmdimegh.github.io</a>
      </main>
    </>
  );
}
