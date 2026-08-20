"use client";

import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { useTheme } from "next-themes";

type ThemeImageProps = Omit<ImageProps, "src"> & {
  /** A single path - shown in every theme. */
  src?: string;
  /** Light/dark pair - the matching one is rendered for the active theme. */
  srcByTheme?: { light: string; dark: string };
};

/**
 * Image that optionally swaps between a light and dark variant based on the
 * viewer's resolved theme. Falls back to `src` (or `srcByTheme.light`) during
 * SSR and the brief pre-hydration window to avoid theme flicker.
 */
export function ThemeImage({
  src,
  srcByTheme,
  alt,
  ...rest
}: ThemeImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedSrc =
    srcByTheme && mounted
      ? resolvedTheme === "dark"
        ? srcByTheme.dark
        : srcByTheme.light
      : src ?? srcByTheme?.light ?? "";

  return <Image src={resolvedSrc} alt={alt} {...rest} />;
}
