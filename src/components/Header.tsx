"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Header() {

  const { t } = useLanguage();

 // التحكم في فتح وإغلاق قائمة الجوال
 const [menuOpen, setMenuOpen] = useState(false);

    return (
       
      <header className="header">
        
        <div className="logo">
        <img
        src="/images/logo.png"
        alt="شعار فندق غرناطة"
        className="logo-image"
        />
          <div>
            <h2>فندق غرناطة</h2>
            <span>Granada HOTEL</span>
          </div>
        </div>

        {/* زر لقائمة الجوال */}
        <button
         className="menu-toggle"
         //هذا السطر يعكس حالة القائمة اذا مغلقة يفتحها واذا مفتوحة يغلقها
         onClick={() => setMenuOpen(!menuOpen)}
         aria-label="فتح وإغلاق القائمة"
         aria-expanded={menuOpen}
         >
          {menuOpen ? "X" : "☰"}
          </button>

          {/* روابط الموقع */}
        <nav className={`navigation ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={() => setMenuOpen(false)}>{t("home")}</a>

          <a href="#services" onClick={() => setMenuOpen(false)}>{t("services")}</a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>{t("contact")}</a>

        </nav>

        <LanguageSwitcher />

      </header> 
        
    );
}