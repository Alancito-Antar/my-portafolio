module.exports = {
  content: ["./**/*.{tsx,jsx}", "**/use*.{ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter-Regular"],
        "sans-medium": ["Inter-Medium"],
        "sans-bold": ["Inter-Bold"],
        "sans-semibold": ["Inter-Semibold"],
      },
      colors: {
        primary: "#1C1C1E",
        secondary: "#007BFF",
        success: "#34C759",
        info: "#007BFF",
        warning: "#FF9F0A",
        error: "#FF3B30",
        brand_green: "#5eeecd", // Dark mode
        brand_blue: "#027BFF", // Light mode
        background: "#FFFFFF",
        dark_background: "#1E1E1E",
        gray: {
          900: "#202123",
          800: "#343541",
          700: "#444654",
          600: "#C9C9C9",
          500: "#E4E5E8",
          400: "#E5E5E5",
          300: "#F7F7F8",
          200: "#FFFFFF",
          100: "#FFFFFF",
        },
        red: {
          800: "#C62828",
          700: "#D32F2F",
          600: "#E53935",
          500: "#F44336",
          400: "#EF5350",
          300: "#E57373",
          200: "#EF9A9A",
          100: "#FFCDD2",
          50: "#FEEBEE",
        },
        orange: {
          900: "#E65100",
          800: "#EF6C00",
          700: "#F57C00",
          600: "#FB8C00",
          500: "#FF9800",
          400: "#FFA726",
          300: "#FFB74D",
          200: "#FFCC80",
          100: "#FFE0B2",
          50: "#FFF3E0",
        },
        lightBlue: {
          900: "#01579B",
          800: "#0277BD",
          700: "#0288D1",
          600: "#039BE5",
          500: "#03A9F4",
          400: "#29B6F6",
          300: "#4FC3F7",
          200: "#81D4FA",
          100: "#B3E5FC",
          50: "#E1F5FE",
        },
        green: {
          900: "#1B5E20",
          800: "#2E7D32",
          700: "#388E3C",
          600: "#43A047",
          500: "#4CAF50",
          400: "#66BB6A",
          300: "#81C784",
          200: "#A5D6A7",
          100: "#C8E6C9",
          50: "#E8F5E9",
        },
        blueGrey: {
          900: "#263238",
          800: "#37474F",
          700: "#455A64",
          600: "#546E7A",
          500: "#607D8B",
          400: "#78909C",
          300: "#90A4AE",
          200: "#B0BEC5",
          100: "#CFD8DC",
          50: "#ECEFF1",
        },
        white: {
          DEFAULT: "#FFFFFF",
          "87%": "#FFFFFFDE",
          "70%": "#FFFFFFB2",
          "56%": "#FFFFFF8F",
          "23%": "#FFFFFF3B",
          "12%": "#FFFFFF1F",
        },
        black: {
          DEFAULT: "#000000",
          "87%": "#000000DE",
          "60%": "#00000099",
          "56%": "#0000008F",
          "12%": "#0000001F",
        },
        custom: {
          blue: {
            900: "#1F47CD",
            800: "#1269EC",
            700: "#007BFF",
            600: "#008FFF",
            500: "#009EFF",
            400: "#1DADFF",
            300: "#56BDFF",
            200: "#8DD0FF",
            100: "#BBE2FF",
            50: "#E3F4FF",
          },
          teal: {
            900: "#006649",
            800: "#008468",
            700: "#009578",
            600: "#00A68A",
            500: "#00B498",
            400: "#00C2A9",
            300: "#00D0BB",
            200: "#40E0D0",
            100: "#9DECE3",
            50: "#D8F8F5",
          },
          green: {
            900: "#004727",
            800: "#00653D",
            700: "#007548",
            600: "#008655",
            500: "#00945F",
            400: "#3DA376",
            300: "#61B28C",
            200: "#8FC7AC",
            100: "#BBDDCC",
            50: "#E3F1EA",
          },
        },
      },
    },
  },
  plugins: [],
};
