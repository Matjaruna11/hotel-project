import LanguageSwitcher from "./LanguageSwitcher";
export default function Header(){
    return (
        <header>

   { <header className="header">
        <div className="logo">
          <span className="logo-icon">J</span>
          <div>
            <h2>فندق الجابري</h2>
            <span>AL JABRI HOTEL</span>
          </div>
        </div>

        <nav className="navigation">
          <a href="#home">الرئيسية</a>
          <a href="#services">الخدمات</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
        <LanguageSwitcher />

      </header> }
        </header>
    );
}