export const COLORS = {
  // Background colors
  background: '#FAFBFC',
  white: '#FFFFFF',
  black: '#000000',
  
  // Text colors - improved contrast
  textPrimary: '#1A1A1A',      // Darker for better contrast
  textSecondary: '#4A4A4A',    // Medium gray
  textLight: '#6B7280',        // Light gray
  textOnDark: '#FFFFFF',       // White text for dark backgrounds
  
  // Brand colors - White/Grey/Gold scheme
  primary: '#2C2C2C',          // Dark grey for primary
  primaryLight: '#F8F9FA',     // Light grey/white
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
  textAccent: '#2C2C2C',
  logoColor: '#2C2C2C',
  logoColorTwo: "#D6B861",
  LandingOverlay: "rgba(0,0,0,0.33)",
  gray: '#F3F4F6',
  darkGray: '#E5E7EB',
  footer: '#1F2937',
  divider: '#D1D5DB',
} as const;

export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
} as const;

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
} as const;

export const Z_INDEX = {
  navbar: 100,
  modal: 1000,
  tooltip: 1100,
} as const;

export const COMPANY_INFO = {
  name: "Reach Management",
  email: "info@reachmanagement.se",
  orgNumber: "556677-8899",
  website: "https://reach-management-ab.web.app",
} as const;
