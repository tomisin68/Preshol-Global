'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Tiny client component whose only job is to run useScrollReveal() once
 * the page has mounted. Rendered once from app/page.tsx alongside the
 * server-rendered sections so the observer can find their .reveal /
 * .reveal-left / .reveal-right elements in the DOM.
 */
export default function ScrollRevealInit() {
  useScrollReveal();
  return null;
}
