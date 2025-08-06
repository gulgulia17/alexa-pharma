import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

export function cleanCompositionHTML(html: string): string {
    return html
        .replace(/style="[^"]*"/gi, "")
        .replace(/\s?(width|height|border)="[^"]*"/gi, "")
        .replace(/<tr[^>]*>(\s*<td[^>]*>\s*<\/td>\s*)*<\/tr>/gi, "");
}

export function normalizeTable(html: string): string {
    return cleanCompositionHTML(html).replace(
        /<td[^>]*>(.*?)<\/td>\s*<td[^>]*>(.*?)<\/td>/gs,
        (_: string, left: string, right: string): string => {
            const leftLines = left.split(/<br\s*\/?>/i).map((l) => l.trim());
            const rightLines = right.split(/<br\s*\/?>/i).map((l) => l.trim());

            const rows = leftLines
                .map(
                    (l, i) =>
                        `<tr><td>${l}</td><td>${rightLines[i] || ""}</td></tr>`
                )
                .join("");

            return rows;
        }
    );
}
