export default function WifiPage() {
  return (
    <main className="service-page">
      <div className="service-page-header">
        <span className="section-label">AL JABRI HOTEL</span>

        <h1>خدمة الواي فاي</h1>

        <p>ابقَ على اتصال بالإنترنت طوال فترة إقامتك.</p>
      </div>

      <div className="wifi-card">
        <h2>بيانات الاتصال</h2>

        <p>اسم الشبكة</p>
        <strong>Hotel-WiFi</strong>

        <p>كلمة المرور</p>
        <strong>سيتم توفيرها من إدارة الفندق</strong>
      </div>
    </main>
  );
}