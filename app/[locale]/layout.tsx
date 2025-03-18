import { routing } from "@/i18n/routing";
import "./globals.css";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
// import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/common/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV - Nguyễn Văn Phần",
  description: "Giới thiệu về bản thân",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          attribute={"class"}
        >
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
