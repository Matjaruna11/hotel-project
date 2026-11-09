"use client";

import { translations } from "../lib/translations";
import { useLanguage } from "../components/LanguageProvider";
import Link from "next/link";

{/*للوصول للخدمات واضافة خدمة جديدة */}
const services = [
  {
    number: "01", 
    title: "rooms",
    description: "كل ما تحتاجه لراحة وإقامة أكثر رفاهية.",
    image:
      "/images/rooms.jpg",
    link: "/rooms",
  },
  {
    number: "02",
    title: "laundry",
    description: "خدمات غسيل وكي الملابس بعناية واحترافية.",
    image:
      "/images/laundry.jpg",
    link: "/laundry",
  },
  {
    number: "03",
    title: "cafe",
    description: "استمتع بمشروباتك وأطباقك المفضلة.",
    image:
      "/images/cafe.jpg",
    link: "/cafe",
  },
  {
    number: "04",
    title: "hotel",
    description: "اكتشف المزيد من الخدمات والمرافق.",
    image:
      "/images/hotel.jpg",
    link: "/hotel",
  },
  {
     number: "05",
    title: "wifi",
    description: "ابقَ على اتصال بالإنترنت طوال فترة إقامتك.",
    image: "/images/wifi.jpg",
    link: "/wifi",
  },
  {
    number: "06",
    title: "reviews",
    description: "رأيك يهمنا ويساعدنا على تقديم الأفضل.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    link: "/reviews",
  },
];

export default function Home() {

  const { t } = useLanguage();


  return (
    <main className="website">

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="welcome-label">
            {t("welcome")}
          </span>

          <h1>
            {t("comfort")}
            <br />
            <span>{t("fromHere")}</span>
          </h1>

          <p>
            نسعد باستضافتك، ونسعى لتقديم تجربة إقامة
            استثنائية تجمع بين الراحة والرفاهية.
          </p>

          <a href="#services" className="hero-btn">
            {t("discover")}
            <span>←</span>
          </a>
        </div>

        <div className="room-card">
          <span>أهلاً بك في غرفتك</span>
          <h3>الغرفة 308</h3>
          <p>نتمنى لك إقامة سعيدة ومريحة</p>
        </div>

        <div className="hero-bottom">
          <span>HOSPITALITY • COMFORT • LUXURY</span>
          <span>01 / 04</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction">
        <span className="section-label">
          YOUR COMFORT IS OUR PRIORITY
        </span>

        <h2>
          كل ما تحتاجه،
          <span> بين يديك.</span>
        </h2>

        <p>
          صممنا هذه المساحة لتسهيل تجربتك معنا.
          استعرض الخدمات، واختر ما يناسبك،
          وسيتولى فريقنا الاهتمام بطلبك.
        </p>
      </section>

      {/* Services */}
      <section className="services-section" id="services">

        <div className="section-heading">
          <div>
            <span className="section-label">
              OUR SERVICES
            </span>
            <h2>خدماتنا من أجلك</h2>
          </div>

          <p>
            مجموعة من الخدمات المصممة
            لتجعل إقامتك أكثر راحة.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              href={service.link}
              className="service-card"
              key={service.number}
            >
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              <div className="service-info">
                <h3>{t(service.title as keyof typeof translations.ar)}</h3>
                <p>{service.description}</p>

                 <span className="service-link">
                 {t("details")}
                 <span> ← </span>
               </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div>
          <span className="section-label">
            WE ARE HERE FOR YOU
          </span>

          <h2>هل تحتاج إلى مساعدة؟</h2>

          <p>
            فريق الاستقبال جاهز لمساعدتك
            والإجابة عن استفساراتك.
          </p>
        </div>

        <a href="tel:+966000000000" className="contact-btn">
          ☎ {t("receptionContact")}
        </a>
      </section>

    
    </main>
  );
}
