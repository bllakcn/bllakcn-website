"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <Switch
          size="md"
          color="primary"
          defaultSelected={theme === "dark"}
          startContent={<IoSunnyOutline />}
          endContent={<IoMoonOutline />}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : null}
    </>
  );
}
