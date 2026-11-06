"use client";

import { useLanguage } from "./LanguageProvider";
import { Language } from "../lib/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      aria-label="اختيار اللغة"
    >
      <option value="ar">العربية</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="id">Indonesia</option>
      <option value="tr">Türkçe</option>
      <option value="uz">O‘zbekcha</option>
    </select>
  );
}