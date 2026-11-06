import ServicePage from "../../components/ServicePage";

export default function CafePage() {
  return (
    <ServicePage
      title="كافيه الفندق"
      description="استمتع بمجموعة من المشروبات والأصناف المميزة."
      options={[
        "قهوة عربية",
        "قهوة أمريكية",
        "شاي",
        "عصير",
        "مياه",
        "وجبة خفيفة",
      ]}
    />
  );
}