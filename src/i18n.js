import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!["en", "ar"].includes(locale)) notFound();

  return {
    messages: (await import(`./locales/${locale}/common.json`)).default,
  };
});
