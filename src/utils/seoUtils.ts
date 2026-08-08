/**
 * SEO Utility functions for the website
 */

/**
 * The site's base URL for canonical links and other absolute URLs
 */
export const BASE_URL = "https://www.spectrum-education.com";

/**
 * Generates an absolute canonical URL from a relative path
 * @param relativePath - The relative path (e.g., "/courses")
 * @returns The absolute canonical URL
 */
export const getCanonicalUrl = (relativePath: string): string => {
  // Handle root path special case
  if (relativePath === "/") {
    return BASE_URL;
  }
  
  // Remove leading slash if present to avoid double slashes
  const path = relativePath.startsWith("/") ? relativePath.substring(1) : relativePath;
  
  return `${BASE_URL}/${path}`;
}; 