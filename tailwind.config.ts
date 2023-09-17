import type { Config } from 'tailwindcss'
import * as defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      animation: {
        'blink': 'blink 2s steps(5, start) infinite',
        'hide-logo': 'hide-logo 1s 2s forwards',
        'hide-splash': 'hide-splash 1s 2s forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "blink": {
          "to": {"visibility":"hidden"}
        },
        "hide-logo": {
            "0%": {
              "transform": "scale(1)"
            },
            "100%": {
              "transform": "scale(0)"
            }
        },
        "hide-splash": {
          "to": {"visibility":"hidden"}
        }
      }
    },
  },
  plugins: [],
}
export default config
