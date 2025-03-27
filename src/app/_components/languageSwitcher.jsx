"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher({ logoWhite }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en"); // Default to 'en'

  // Initialize the locale from localStorage or URL
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale"); // Get the saved locale from localStorage
    const localeFromPath = pathname.split("/")[1]; // Get the first segment of the path

    // Determine the locale to use
    const locale =
      localeFromPath === "en" || localeFromPath === "ar"
        ? localeFromPath
        : savedLocale || "en";

    setCurrentLocale(locale); // Update the current locale
    localStorage.setItem("locale", locale); // Save the locale to localStorage
  }, [pathname]);

  const switchLanguage = (locale) => {
    // Remove any existing locale segment to avoid duplication
    const cleanedPath = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
    const newPath = `/${locale}${cleanedPath}`;
    router.push(newPath);

    // Save the new locale to localStorage
    localStorage.setItem("locale", locale);
    setCurrentLocale(locale);
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => switchLanguage(e.target.value)}
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        color: "white !important",
      }}
    >
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
}
