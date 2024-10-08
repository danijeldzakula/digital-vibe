import type { Metadata } from 'next';
import { StoreProvider } from '@/utils/redux/StoreProvider';
import { Main } from '@/content/Content';
import { Inter } from 'next/font/google';
import Header from '@/components/header/header';
import NextTopLoader from 'nextjs-toploader';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    default: 'Digital',
    template: '%s | Digital'
  },
  metadataBase: new URL("https://digital-vibe.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#f00" showSpinner={false} />
        
        <StoreProvider>
          <Header />
          <Main>{children}</Main>
        </StoreProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
        />
      </body>
    </html>
  )
}
