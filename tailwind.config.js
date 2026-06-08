/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container": "#e2dfde",
        "inverse-on-surface": "#f2f0f0",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed": "#1a1c1c",
        "surface-bright": "#fbf9f9",
        "on-secondary-container": "#636262",
        "primary-fixed-dim": "#82cfff",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#37393a",
        "outline": "#6e7881",
        "on-surface": "#1b1c1c",
        "error": "#ba1a1a",
        "tertiary-fixed-dim": "#c6c6c7",
        "secondary": "#5f5e5e",
        "primary-container": "#00aeef",
        "on-secondary-fixed-variant": "#474746",
        "primary": "#00658d",
        "surface": "#fbf9f9",
        "inverse-primary": "#82cfff",
        "surface-variant": "#e3e2e2",
        "on-surface-variant": "#3e4850",
        "outline-variant": "#bdc8d1",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-dim": "#dbdad9",
        "surface-tint": "#00658d",
        "background": "#fbf9f9",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "on-primary-fixed": "#001e2d",
        "on-error-container": "#93000a",
        "tertiary": "#5d5f5f",
        "tertiary-fixed": "#e2e2e2",
        "on-secondary-fixed": "#1c1b1b",
        "on-primary-fixed-variant": "#004c6b",
        "on-background": "#1b1c1c",
        "surface-container-low": "#f5f3f3",
        "on-tertiary-fixed-variant": "#454747",
        "surface-container-highest": "#e3e2e2",
        "inverse-surface": "#303031",
        "surface-container": "#efeded",
        "on-primary-container": "#003e58",
        "tertiary-container": "#a2a3a3",
        "primary-fixed": "#c6e7ff",
        "surface-container-high": "#e9e8e7",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "secondary-fixed": "#e5e2e1"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "base": "8px",
        "container-max-width": "1200px",
        "section-padding": "80px",
        "margin-desktop": "40px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-md": ["Montserrat"],
        "body-lg": ["Montserrat"],
        "headline-lg-mobile": ["Montserrat"],
        "headline-lg": ["Montserrat"],
        "label-md": ["Montserrat"],
        "display-lg": ["Montserrat"],
        "caption": ["Montserrat"],
        "headline-md": ["Montserrat"]
      },
      fontSize: {
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
        "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "caption": ["12px", {"lineHeight": "16px", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
