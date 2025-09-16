export const colors = {
  // Background colors
  background: '#FAFBFC',
  white: '#FFFFFF',
  black: '#000000',
  
  // Text colors - improved contrast
  textPrimary: '#1A1A1A',      // Darker for better contrast
  textSecondary: '#4A4A4A',    // Medium gray
  textLight: '#6B7280',        // Light gray
  textOnDark: '#FFFFFF',       // White text for dark backgrounds
  
  // Brand colors
  primary: '#404040',          // Main brand blue
  primaryLight: '#707070',     // Light blue
  accent: '#D6B861',           // Gold accent
  accentLight: '#FDF4E3',      // Light gold
  
  // Neutral grays - Scandinavian palette
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  
  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // Legacy colors for compatibility
  landingColor: '#ffffff',
  textAccent: '#005B96',
  logoColor: '#005B96',
  logoColorTwo: "#D6B861",
  LandingOverlay: "rgba(0,0,0,0.33)",
  gray: '#F3F4F6',
  darkGray: '#E5E7EB',
  footer: '#1F2937',
  divider: '#D1D5DB',
} as const;

export type ColorKey = keyof typeof colors;
