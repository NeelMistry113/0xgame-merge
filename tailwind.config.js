module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  important: true,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
    },

    screens: {
      sm: { min: '320px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px' },
    },

    fontSize: {
      sm: ['0.75rem'], // 12px
      md: ['0.875rem'], // 14px
      base: ['1rem'], // 16px
      lg: ['1.125rem'], // 18px
      xl: ['1.25rem'], // 20px
      '2xl': ['1.5rem'], // 24px
      '3xl': ['2rem'], // 32px
      '4xl': ['2.5rem'], // 40px
      '5xl': ['3rem'], // 48px
      '6xl': ['3.5rem'], // 56px
      '7xl': ['4rem'], // 64px
      '8xl': ['4.75rem'], // 76px
    },

    lineHeight: {
      none: '1',
      tight: '1.2',
      snug: '1.25',
      normal: '1.3',
      relaxed: '1.35',
      loose: '1.4',
      3: '1.5',
      4: '1.6',
      5: '2.2',
    },

    fontFamily: {
      sans: ['Open Sauce One'],
    },

    fontWeight: {
      normal: '400',
      semibold: '600',
      heavy: '800',
    },

    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },

    borderRadius: {
      xs: '0.125rem', //2px
      sm: '0.25rem', // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.625rem', // 10px
      '2xl': '0.75rem', // 12px
      '3xl': '1rem', // 16px
      '4xl': '1.25rem', // 20px
      '5xl': '1.5rem', // 24px
      full: '9999px',
    },

    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',

      gray: {
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
      },

      primary: {
        100: '#FBFEE0',
        200: '#F7FEC2',
        300: '#F1FEA4',
        400: '#EAFD8D',
        500: '#E1FC68',
        600: '#BCD84C',
        700: '#99B534',
        800: '#779221',
        900: '#5E7813',
      },

      success: {
        100: '#CEFBE6',
        200: '#9FF7D5',
        300: '#6CE9C5',
        400: '#46D4B7',
        500: '#14B8A6',
        600: '#0E9E9B',
        700: '#0A7B84',
        800: '#065A6A',
        900: '#034258',
      },

      warning: {
        100: '#FEEED0',
        200: '#FED7A1',
        300: '#FDBB72',
        400: '#FB9F4F',
        500: '#F97316',
        600: '#D65510',
        700: '#B33C0B',
        800: '#902707',
        900: '#771804',
      },

      error: {
        100: '#FEE6D9',
        200: '#FDC7B4',
        300: '#FAA18E',
        400: '#F57D71',
        500: '#EF4444',
        600: '#CD313F',
        700: '#AC223A',
        800: '#8A1534',
        900: '#720D30',
      },
    },

    // spacing system (margin, padding)
    spacing: {
      px: '1px',
      0: '0', // 0
      1: '0.125rem', // 2px
      2: '0.25rem', // 4px
      3: '0.5rem', // 8px
      4: '0.75rem', // 12px
      5: '1rem', // 16px
      6: '1.25rem', // 20px
      7: '1.5rem', // 24px
      8: '2rem', // 32px
      9: '2.5rem', // 40px
      10: '3rem', // 48px
      11: '4rem', // 64px
      12: '5rem', // 80px
      13: '6rem', // 96px
      14: '7rem', // 112px
      15: '9rem', // 144px
      16: '12rem', // 192px
      17: '15rem', // 240px
    },

    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },

    boxShadow: {
      none: 'none',
      xs: '0px 3px 6px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
      sm: '0px 4px 8px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.22)',
      md: '0px 6px 12px rgba(0, 0, 0, 0.14), 0px 3px 6px rgba(0, 0, 0, 0.22)',
      lg: '0px 8px 16px rgba(0, 0, 0, 0.14), 0px 5px 10px rgba(0, 0, 0, 0.22)',
      xl: '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
      xxl: '0px 16px 32px rgba(0, 0, 0, 0.14), 0px 8px 16px rgba(0, 0, 0, 0.22)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
