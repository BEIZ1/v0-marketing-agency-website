import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { DynamicBackground } from '@/components/dynamic-background'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'BEIZ Studio | Premium Creative & Marketing Agency',
  description: 'We craft exceptional digital experiences through content production, design, and web development. Speed, quality, and measurable results.',
  keywords: ['creative agency', 'marketing agency', 'web development', 'design', 'content production', 'Dubai'],
  authors: [{ name: 'BEIZ Studio' }],
  openGraph: {
    title: 'BEIZ Studio | Premium Creative & Marketing Agency',
    description: 'We craft exceptional digital experiences through content production, design, and web development.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0f0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Blocking script: apply saved theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('beiz-theme');var c=t==='light'?'light':'dark';document.documentElement.classList.add(c);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <DynamicBackground />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
