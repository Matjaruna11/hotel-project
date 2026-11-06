import ServicePage from "../../components/ServicePage";

export default function LaundryPage() {
  return (
    <ServicePage
      title="خدمة المغسلة"
      description="نعتني بملابسك ونقدم لك خدمات الغسيل والكي."
      options={[
        "غسيل الملابس",
        "كي الملابس",
        "غسيل وكي",
        "تنظيف جاف",
      ]}
    />
  );
}