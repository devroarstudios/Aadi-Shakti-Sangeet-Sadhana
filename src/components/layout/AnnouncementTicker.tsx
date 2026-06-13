// src/components/layout/AnnouncementTicker.tsx

export default function AnnouncementTicker() {
  const text =
    'Admissions Open 2025–26 \u00a0|\u00a0 Classical Vocal · Semi-Classical Dance · Kids Batch · Ladies Batch · Adults Batch \u00a0|\u00a0 Kharghar & Ulwe Centers \u00a0|\u00a0 Kharghar: +91 91377 86462 \u00a0|\u00a0 Ulwe: +91 91374 05818 \u00a0|\u00a0 Join Us Today \u00a0|';

  return (
    <div className="ticker">
      <div className="ticker-inner">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}