'use client';

import { LucideLaptop, LucideMoon, LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // empty array = runs exactly once, right after first client render

  /** @deprecated ⚠️ This function is being CREATED FRESH on every single render of ModeToggle */
  function LucideButtonIconUnhoisted() {
    if (!mounted) return null;

    if (theme === 'system')
      return (
        <LucideLaptop className="size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      );

    /*
        🐞 Issue:
        The icons are getting unmounted and remounted on every re-render, 
        not just re-styled. That's why the CSS transition never gets a chance to animate: 
        a transition needs the same DOM node to persist while a class/style changes.

        🛠️ Fix — hoist it out, or just inline the JSX directly 
        See "Option 1" and "Option 2" below
    */
    return (
      <>
        <LucideSun className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <LucideMoon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Option 1 — separate component, defined outside ModeToggle */}
          {/* <LucideButtonIcon mounted={mounted} theme={theme} /> */}

          {/* Option 2 — even simpler, since this component is small: just inline it (no separate function at all) */}
          {mounted &&
            (theme === 'system' ? (
              <LucideLaptop className="size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            ) : (
              <>
                <LucideSun className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <LucideMoon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </>
            ))}
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Option 1 — separate component, defined outside ModeToggle:
interface Props {
  mounted: boolean;
  theme?: string;
}

function LucideButtonIcon({ mounted, theme }: Props) {
  if (!mounted) return null;

  if (theme === 'system')
    return (
      <LucideLaptop className="size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    );

  /*
        The icons are getting unmounted and remounted on every re-render, 
        not just re-styled. That's why the CSS transition never gets a chance to animate: 
        a transition needs the same DOM node to persist while a class/style changes.
    */
  return (
    <>
      <LucideSun className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <LucideMoon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </>
  );
}
