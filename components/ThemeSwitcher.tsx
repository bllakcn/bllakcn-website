"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { SunMedium, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      size="md"
      color="default"
      defaultSelected={theme === "dark"}
      startContent={<SunMedium />}
      endContent={<Moon />}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
