"use client";

import { useLanguage } from "../components/LanguageProvider";
import { useState } from "react";

type ServicePageProps = {
  title: string;
  description: string;
  options: string[];
};

export default function ServicePage({
  title,
  description,
  options,
}: ServicePageProps) {

  const { t } = useLanguage();
  const [selected, setSelected] = useState(options[0]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert(
      `تم تسجيل طلبك التجريبي\nالخدمة: ${title}\nالطلب: ${selected}\nالكمية: ${quantity}`
    );
  }

  return (
    <main className="service-page">
      <div className="service-page-header">
        <span className="section-label">Granada HOTEL</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <form className="service-form" onSubmit={handleSubmit}>
        <label>اختر الخدمة المطلوبة</label>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>{t("quantity")}</label>

        <div className="quantity-control">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <label>{t("notes")}</label>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="اكتب ملاحظاتك هنا..."
        />

        <button type="submit" className="service-submit">
          {t("send")}
        </button>

        <p className="demo-notice">
          ملاحظة: إرسال الطلب تجريبي حالياً، وسيتم ربطه بلوحة الإدارة لاحقاً.
        </p>
      </form>
    </main>
  );
}