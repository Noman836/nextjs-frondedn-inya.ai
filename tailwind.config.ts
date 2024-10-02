import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
		  },
		  keyframes: {
			"border-beam": {
			  "100%": {
				"offset-distance": "100%",
			  },
			},
		  },	
  		colors: {
  			primary:'#EDEDED',
			secondary:'#A1A1A1',
			border:'#000000',
			navbarColor:'rgba(193, 193, 193)',
			textColor:'#0A0A0A',
            bgColor:'#0A0A0A',
			hoverBg:'#171717',
			customgray: '#f5f5f5',
            customblack: '#333333',
			boxbgColor:'#111111',
			boxBorderColor:'#323232',
			navBgColor:'rgba(193, 193, 193, 0.12)',
			colorBlack:'#0A0A0A',
			tabColor:'#1d195d',
			grcolor:'rgba(0, 0, 0, 0.5)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		container:{
			center:true,
			padding:"20px",
		},
		screens: {
			sm: "640px",  // min-width: 640px
			md: "768px",  // min-width: 768px
			lg: "1200px", // min-width: 1024px
			xl: "1600px", // min-width: 1280px
			'2xl': "1920px", // min-width: 1536px
		  },
		fontFamily:{
			primary:"var(--font-figtree)",
			secondary:"var(--font-comfortaa)"
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
