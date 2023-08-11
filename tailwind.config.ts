import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'main': "url('/mainBG.webp')",
          'home1': "url('/thumbnails/featured1.jpg')",
          'home2': "url('/thumbnails/featured5.jpg')",
          'home3': "url('/thumbnails/featured3.jpg')",
          'home4': "url('/thumbnails/featured4.jpg')",
          'cap': "url('/samplecap.PNG')",
      },
   
      colors: {
        'primaryGreen': '#355030',
        'activeOrange': '#eb5424'
      }
    },
  },
  plugins: [],
}
export default config
