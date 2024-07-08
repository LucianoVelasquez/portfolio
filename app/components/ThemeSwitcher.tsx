// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { SunMoon } from 'lucide-react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="cursor-pointer">
      {
        theme != 'light'? <SunMoon size={30} strokeWidth={1.25} onClick={() => setTheme('light')}>Light Mode</SunMoon> :
        <SunMoon size={30} strokeWidth={1.25} onClick={() => setTheme('dark')}>Dark Mode</SunMoon>
      }
    </div>
  )
};