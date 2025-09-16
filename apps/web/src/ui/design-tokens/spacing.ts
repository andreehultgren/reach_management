export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",  // 2px
  1: "0.25rem",     // 4px
  1.5: "0.375rem",  // 6px
  2: "0.5rem",      // 8px
  2.5: "0.625rem",  // 10px
  3: "0.75rem",     // 12px
  3.5: "0.875rem",  // 14px
  4: "1rem",        // 16px
  5: "1.25rem",     // 20px
  6: "1.5rem",      // 24px
  7: "1.75rem",     // 28px
  8: "2rem",        // 32px
  9: "2.25rem",     // 36px
  10: "2.5rem",     // 40px
  11: "2.75rem",    // 44px
  12: "3rem",       // 48px
  14: "3.5rem",     // 56px
  16: "4rem",       // 64px
  20: "5rem",       // 80px
  24: "6rem",       // 96px
  28: "7rem",       // 112px
  32: "8rem",       // 128px
  36: "9rem",       // 144px
  40: "10rem",      // 160px
  44: "11rem",      // 176px
  48: "12rem",      // 192px
  52: "13rem",      // 208px
  56: "14rem",      // 224px
  60: "15rem",      // 240px
  64: "16rem",      // 256px
  72: "18rem",      // 288px
  80: "20rem",      // 320px
  96: "24rem",      // 384px
} as const;

// Common design values
export const designValues = {
  borderRadius: {
    sm: "0.25rem",    // 4px
    md: "0.5rem",     // 8px
    lg: "0.75rem",    // 12px
    xl: "1rem",       // 16px
    "2xl": "1.5rem",  // 24px
    "3xl": "2rem",    // 32px
    full: "9999px",
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    card: "0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)",
    cardHover: "0 25px 50px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.08)",
  },
  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
    "6xl": "3.75rem", // 60px
  },
  maxWidth: {
    xs: "20rem",      // 320px
    sm: "24rem",      // 384px
    md: "28rem",      // 448px
    lg: "32rem",      // 512px
    xl: "36rem",      // 576px
    "2xl": "42rem",   // 672px
    "3xl": "48rem",   // 768px
    "4xl": "56rem",   // 896px
    "5xl": "64rem",   // 1024px
    "6xl": "72rem",   // 1152px
    "7xl": "80rem",   // 1280px
    full: "100%",
    screen: "100vw",
  },
  grid: {
    cols: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      auto: "repeat(auto-fit, minmax(300px, 1fr))",
      autoSm: "repeat(auto-fit, minmax(250px, 1fr))",
    }
  }
} as const;

export type SpacingKey = keyof typeof spacing;
