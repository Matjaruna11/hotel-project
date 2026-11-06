import ServicePage from "../../components/ServicePage";

export default function RoomsPage() {
  return (
    <ServicePage
      title="خدمات الغرف"
      description="اختر ما تحتاجه وسنحرص على توفيره لك."
      options={[
        "مناشف إضافية",
        "وسائد إضافية",
        "بطانية إضافية",
        "مياه شرب",
        "أدوات النظافة الشخصية",
        "تنظيف الغرفة",
        "خدمة ترتيب السرير",
      ]}
    />
  );
}