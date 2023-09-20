import { useState, useEffect } from "react";

export default function useVisited() {
  const key = "visited-adams-portfolio";
  const initialValue = typeof window !== "undefined" ? (
    localStorage.getItem(key) || "false"
  ) : "false";
  const [hasVisited, setHasVisited] = useState(JSON.parse(initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(hasVisited));
  }, [hasVisited]);

  return [hasVisited, setHasVisited];
}
