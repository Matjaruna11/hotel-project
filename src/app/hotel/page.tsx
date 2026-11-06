import ServicePage from "../../components/ServicePage";

export default function HotelPage() {
  return (
    <ServicePage
      title="خدمات الفندق"
      description="اكتشف الخدمات والمرافق المتاحة خلال إقامتك."
      options={[
        "طلب مساعدة من الاستقبال",
        "طلب صيانة",
        "الاستفسار عن مرافق الفندق",
        "طلب خدمة نقل",
        "خدمات أخرى",
      ]}
    />
  );
}