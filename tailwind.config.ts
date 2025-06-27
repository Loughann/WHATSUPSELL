import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4-5xl": "2.75rem", // Novo tamanho de fonte: 44px
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        whatsappGreen: "#00BFFF", // Blue color for matrix effect and references
        upgradeBlue: "#00BFFF", // Um azul vibrante para o upgrade
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 1px var(--tw-shadow-color), 0 0 2px var(--tw-shadow-color), 0 0 3px var(--tw-shadow-color)", // Brilho reduzido
          },
          "50%": {
            textShadow:
              "0 0 2px var(--tw-shadow-color), 0 0 4px var(--tw-shadow-color), 0 0 6px var(--tw-shadow-color)", // Brilho reduzido
          },
        },
        "pulse-button": {
          "0%, 100%": {
            boxShadow: "0 0 3px 1px var(--tw-shadow-color)", // Brilho mais sutil
          },
          "50%": {
            boxShadow: "0 0 8px 4px var(--tw-shadow-color)", // Brilho intermediário
          },
        },
        "pulse-icon-glow": {
          "0%, 100%": {
            boxShadow: "0 0 1px 0px var(--tw-shadow-color)", // Brilho muito sutil
          },
          "50%": {
            boxShadow: "0 0 4px 2px var(--tw-shadow-color)", // Brilho um pouco mais forte
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-button": "pulse-button 8s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Duração de 8s para pulsação lenta
        "pulse-icon-glow": "pulse-icon-glow 2s ease-in-out infinite", // Animação de brilho para ícones (AGORA SINCRONIZADA)
        "fade-in-up": "fade-in-up 0.8s ease-out forwards", // Animação de surgir
        typing: "typing 2s steps(40, end), blink .75s step-end infinite", // Duração da digitação ajustada para 2s
      },
      textShadow: {
        glow: "0 0 2px var(--tw-shadow-color), 0 0 4px var(--tw-shadow-color), 0 0 6px var(--tw-shadow-color)", // Brilho reduzido
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities, theme }: any) => {
      const newUtilities = {
        ".text-glow": {
          textShadow: theme("textShadow.glow"),
          "--tw-shadow-color": theme("colors.upgradeBlue"),
        },
        ".button-glow": {
          "--tw-shadow-color": theme("colors.upgradeBlue"), // Define a cor da sombra para o brilho do botão
        },
        ".icon-glow": {
          "--tw-shadow-color": theme("colors.upgradeBlue"), // Define a cor da sombra para o brilho do ícone
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
}
export default config
