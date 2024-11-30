import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS classes safely
 * @param {...(string|Object|Array)} inputs - CSS class names, objects, or arrays to merge
 * @returns {string} - Merged and deduped class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
