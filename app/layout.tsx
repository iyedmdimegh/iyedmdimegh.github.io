import type { Metadata } from 'next';
import { Anybody, Archivo, Martian_Mono } from 'next/font/google';
import { SITE_ORIGIN, profile, ui } from '@/content';
import './globals.css';

/**
 * Faces are self-hosted by next/font. Anybody carries the display voice on its
 * width axis; Archivo runs the interface; Martian Mono appears only on things
 * that are measured.
 */
// Variable faces: the weight and width axes both ship, which is the point —
// the display voice is set wide and heavy at the top of the page and narrows
// as it recedes. next/font rejects `axes` alongside an explicit `weight`.
const display = Anybody({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--f-display',
  display: 'swap',
});

const body = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--f-body',
  display: 'swap',
});

const data = Martian_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--f-data',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${profile.name} — ${profile.title.en}`,
    template: `%s — ${profile.name}`,
  },
  description: ui.meta.description.en,
  authors: [{ name: profile.name, url: SITE_ORIGIN }],
  alternates: {
    canonical: '/en/',
    languages: { en: '/en/', fr: '/fr/' },
  },
  openGraph: {
    type: 'profile',
    siteName: profile.name,
    title: `${profile.name} — ${profile.title.en}`,
    description: ui.meta.description.en,
    url: SITE_ORIGIN,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${profile.name} — ${profile.title.en}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title.en}`,
    description: ui.meta.description.en,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

/**
 * Theme is resolved before first paint so a dark-default site never flashes
 * light. The old site persisted neither theme nor language and ignored
 * prefers-color-scheme entirely, so every visit started over.
 */
const THEME_BOOTSTRAP = `
(function(){try{
  var s=localStorage.getItem('iyed-theme');
  var d=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
  document.documentElement.setAttribute('data-theme', s==='light'||s==='dark'?s:d);
}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${body.variable} ${data.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
