import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { analytics } from "@/firebase";

export default function AnalyticsListener() {
  const location = useLocation();
  const lastPathRef = useRef(null);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    if (lastPathRef.current === path) return;
    lastPathRef.current = path;

    // React 18+ StrictMode can mount effects twice in development.
    // Keep a tiny global de-dupe so page_view isn't double-counted locally.
    if (typeof window !== "undefined") {
      if (window.__fa_last_page_view === path) return;
      window.__fa_last_page_view = path;
    }

    let cancelled = false;

    (async () => {
      if (!analytics || cancelled) return;
      analytics.logEvent("page_view", {
        page_path: path,
        debug_mode: process.env.NODE_ENV !== "production",
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.search]);

  return null;
}
