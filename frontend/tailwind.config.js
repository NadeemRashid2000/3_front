// import typography from "@tailwindcss/typography";

// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
//   theme: {
    
//     extend: {
      
//       fontFamily: {
//         sans: ["Inter", "sans-serif"], // optional font customization
//       },
//     },
//   },
//   plugins: [
//     typography(), 
//   ],
// };


import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // A strong blue for branding
        secondary: "#f59e0b", // A warm amber/orange
        accent: "#10b981", // A green accent for tags/buttons
        muted: "#6b7280", // Neutral gray for secondary text
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.primary"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.secondary"),
              },
            },
            h1: { fontFamily: theme("fontFamily.heading").join(", ") },
            h2: { fontFamily: theme("fontFamily.heading").join(", ") },
            h3: { fontFamily: theme("fontFamily.heading").join(", ") },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "2px 4px",
              borderRadius: "4px",
            },
            blockquote: {
              borderLeftColor: theme("colors.primary"),
              fontStyle: "italic",
              color: theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography()],
};
