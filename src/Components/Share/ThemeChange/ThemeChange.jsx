import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeChange() {
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", isChange ? "light" : "dark");
  }, [isChange]);

  return (
    <div onClick={() => setIsChange(!isChange)}>
      {isChange ? (
        <span>
          <MdOutlineLightMode />
        </span>
      ) : (
        <span>
          <MdDarkMode />
        </span>
      )}
    </div>
  );
}
