import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				spa: {
					cream: '#f2f0e6',
					beige: '#e6e0d0',
					green: {
						light: '#e5e8de',
						DEFAULT: '#4d5d4e',
						dark: '#2c392d',
					},
					black: '#1a1a1a',
					gray: '#707070',
					white: '#ffffff',
				},
				violet: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065',
				},
				purple: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
					950: '#3b0764',
				}
			},
			fontFamily: {
				'lora': ['Lora', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'wave-flow': {
					'0%': { 
						transform: 'translateX(0) translateY(0)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'translateX(-25%) translateY(10%)',
						opacity: '0.6'
					},
					'100%': { 
						transform: 'translateX(0) translateY(0)',
						opacity: '0.8'
					}
				},
				'floating': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'wave-flow': 'wave-flow 8s ease-in-out infinite',
				'floating': 'floating 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out'
			},
			backgroundImage: {
                'wave-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iNTAwIj48c3R5bGU+LndhdmUge29wYWNpdHk6IDAuMTt9PC9zdHlsZT48cGF0aCBjbGFzcz0id2F2ZSIgZD0iTTAgMjUwYzUwIDAgNzUgLTI1IDEyNSAtMjVzNzUgMjUgMTI1IDI1IDc1IC0yNSAxMjUgLTI1IDc1IDI1IDEyNSAyNSA3NSAtMjUgMTI1IC0yNSA3NSAyNSA3NSAyNXYyNTBIMHoiIGZpbGw9IiM0ZDVkNGUiLz48L3N2Zz4=')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'green-gradient': 'linear-gradient(135deg, #4d5d4e 0%, #2c392d 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
