import { useState } from "react";

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { activeLink, onUpdateActiveLink };
};
