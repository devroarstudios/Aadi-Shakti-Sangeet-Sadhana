"use client";

import { useEffect, useState } from "react";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="site-loader">
        <div className="loader-content">
          <div className="loader-logo">✦</div>

          <h2>Aadi Shakti</h2>

          <span className="loader-hindi">
            आदि शक्ति संगीत साधना
          </span>

          <div className="loader-line">
            <span />
          </div>

          <p>Preparing your experience...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}