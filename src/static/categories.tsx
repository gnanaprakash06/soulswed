/**
 * src/static/categories.tsx
 * ──────────────────────────────────────────────────────────────
 * Static data for the Browse by Category section.
 * .tsx extension is required because this file contains JSX (inline SVGs).
 * Import the CATEGORIES array from here — never define it in a component.
 */
import type { Category } from "@/types";

export const CATEGORIES: Category[] = [
    {
        id: "venues",
        name: "Venues & Banquet Halls",
        description: "Grand spaces for your big day",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <rect
                    x="6"
                    y="22"
                    width="36"
                    height="20"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 22L24 6L46 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect
                    x="19"
                    y="30"
                    width="10"
                    height="12"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M14 22V42"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                />
                <path
                    d="M34 22V42"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                />
            </svg>
        ),
    },
    {
        id: "planners",
        name: "Wedding Planners",
        description: "Expert orchestrators of your dream",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <rect
                    x="8"
                    y="6"
                    width="32"
                    height="36"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M16 6V4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M32 6V4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path d="M8 16H40" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M16 24H28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M16 30H24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle
                    cx="34"
                    cy="33"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M32 33L33.5 34.5L36 32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "photographers",
        name: "Photographers",
        description: "Capturing moments, forever",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <rect
                    x="4"
                    y="14"
                    width="40"
                    height="28"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <circle
                    cx="24"
                    cy="28"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <circle
                    cx="24"
                    cy="28"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.5"
                />
                <path
                    d="M17 14L20 8H28L31 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <circle
                    cx="36"
                    cy="20"
                    r="2"
                    fill="currentColor"
                    opacity="0.6"
                />
            </svg>
        ),
    },
    {
        id: "decorators",
        name: "Decorators",
        description: "Transforming spaces into magic",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <path
                    d="M24 4L26.5 10H33L27.8 14L30 20L24 16.5L18 20L20.2 14L15 10H21.5L24 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 26C10 26 8 30 10 34C12 38 16 38 16 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M38 26C38 26 40 30 38 34C36 38 32 38 32 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M16 38C16 38 18 42 24 42C30 42 32 38 32 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M12 26H36"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle
                    cx="24"
                    cy="26"
                    r="2"
                    fill="currentColor"
                    opacity="0.5"
                />
            </svg>
        ),
    },
    {
        id: "makeup",
        name: "Make-up Artists",
        description: "Bridal glam & beyond",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <circle
                    cx="24"
                    cy="18"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M20 16C20 16 21 19 24 19C27 19 28 16 28 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <circle
                    cx="20"
                    cy="14"
                    r="1.5"
                    fill="currentColor"
                    opacity="0.6"
                />
                <circle
                    cx="28"
                    cy="14"
                    r="1.5"
                    fill="currentColor"
                    opacity="0.6"
                />
                <path
                    d="M14 28C14 28 16 32 24 32C32 32 34 28 34 28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M24 32V42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M18 42H30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M38 6L40 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M38 6C38 6 40 8 40 10C42 10 44 12 44 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        id: "rooms",
        name: "Rooms",
        description: "Stay & celebrate in style",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <rect
                    x="4"
                    y="22"
                    width="40"
                    height="20"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path d="M4 28H44" stroke="currentColor" strokeWidth="2" />
                <rect
                    x="8"
                    y="28"
                    width="14"
                    height="8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <rect
                    x="26"
                    y="28"
                    width="14"
                    height="8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <circle
                    cx="18"
                    cy="17"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M14 22H22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                />
                <path
                    d="M30 14H40V22H30V14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "caterers",
        name: "Caterers",
        description: "Flavours that leave impressions",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <path
                    d="M8 28C8 19.163 15.163 12 24 12C32.837 12 40 19.163 40 28"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M4 28H44"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <rect
                    x="10"
                    y="30"
                    width="28"
                    height="4"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M14 34V40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M34 34V40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M24 4V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M20 6C20 6 20 10 24 10C28 10 28 6 28 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        id: "mehndi",
        name: "Mehndi Artists",
        description: "Intricate art on your canvas",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <path
                    d="M10 38C10 38 14 32 20 30C26 28 32 30 36 26C40 22 38 16 34 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M10 38C14 34 18 36 22 34C26 32 28 28 30 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                />
                <circle
                    cx="34"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <circle
                    cx="34"
                    cy="12"
                    r="1.5"
                    fill="currentColor"
                    opacity="0.4"
                />
                <path
                    d="M16 42C16 42 12 40 10 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M24 14C24 14 22 18 20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                />
                <path
                    d="M30 10C30 10 26 12 24 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                />
            </svg>
        ),
    },
    {
        id: "invitations",
        name: "Invitation Cards",
        description: "First impressions, beautifully crafted",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <rect
                    x="6"
                    y="10"
                    width="36"
                    height="28"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M6 14L24 26L42 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 30H32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                />
                <path
                    d="M20 34H28"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                />
                <circle
                    cx="24"
                    cy="18"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.4"
                />
            </svg>
        ),
    },
    {
        id: "priests",
        name: "Priests",
        description: "Sacred rituals, performed with devotion",
        icon: (
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7"
            >
                <path
                    d="M24 4L24 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M16 12H32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle
                    cx="24"
                    cy="26"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M20 24L22.5 27L28 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14 36C14 36 16 42 24 42C32 42 34 36 34 36"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M10 36H38"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                />
            </svg>
        ),
    },
];
