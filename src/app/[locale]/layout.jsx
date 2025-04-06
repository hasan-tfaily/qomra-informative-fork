import localFont from "next/font/local";
import "./globals.css";
import "@styles/css/plugins/font-awesome.min.css";
import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/scss/style.scss";
import { register } from "swiper/element/bundle";
register();
import AppData from "@data/app.json";

const caros = localFont({
  src: [
    // Regular variants
    {
      path: "../../../public/fonts/cretypeCaros.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/cretypeCarosItalic.otf",
      weight: "400",
      style: "italic",
    },

    // Bold variants
    {
      path: "../../../public/fonts/cretypeCarosBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/cretypeCarosBoldItalic.otf",
      weight: "700",
      style: "italic",
    },

    // Other weights
    {
      path: "../../../public/fonts/cretypeCarosLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/cretypeCarosMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/cretypeCarosExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-primary",
});

// Define Droid Arabic Kufi
const droidArabic = localFont({
  src: [
    {
      path: "../../../public/fonts/ArbFONTS-Droid Arabic Kufi.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/ArbFONTS-Droid Arabic Kufi Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-arabic",
  preload: true,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF" }],
});

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = ({ children, params }) => {
  const { locale } = params;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${caros.variable} ${droidArabic.variable}`}
      style={{
        "--bs-font-sans-serif":
          locale === "ar"
            ? "var(--font-arabic), var(--bs-font-sans-serif)"
            : "var(--font-primary), var(--bs-font-sans-serif)",
      }}
    >
      <body>
        <div id="smooth-wrapper" className="mil-page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layouts;
