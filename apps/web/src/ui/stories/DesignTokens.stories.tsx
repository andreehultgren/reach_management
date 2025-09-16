import type { Meta, StoryObj } from '@storybook/react';
import { colors, typography, spacing } from '../design-tokens';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

// Colors Story
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <h2>Brand Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ 
            width: '100%', 
            height: '60px', 
            backgroundColor: colors.primary, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Primary
          </div>
          <code>{colors.primary}</code>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ 
            width: '100%', 
            height: '60px', 
            backgroundColor: colors.accent, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Accent
          </div>
          <code>{colors.accent}</code>
        </div>
      </div>

      <h2>Text Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ 
            width: '100%', 
            height: '60px', 
            backgroundColor: colors.textPrimary, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Text Primary
          </div>
          <code>{colors.textPrimary}</code>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ 
            width: '100%', 
            height: '60px', 
            backgroundColor: colors.textSecondary, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Text Secondary
          </div>
          <code>{colors.textSecondary}</code>
        </div>
      </div>

      <h2>Gray Scale</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
        {Object.entries(colors).filter(([key]) => key.startsWith('gray')).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: value, 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: key.includes('50') || key.includes('100') ? 'black' : 'white',
              fontWeight: 'bold',
              fontSize: '12px'
            }}>
              {key}
            </div>
            <code style={{ fontSize: '12px' }}>{value}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Typography Story
export const Typography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>Typography Scale</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['6xl'],
          fontWeight: typography.fontWeight.bold,
          lineHeight: typography.lineHeight.tight,
          margin: 0
        }}>
          Heading 1 - 3.75rem
        </h1>
        <h2 style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['5xl'],
          fontWeight: typography.fontWeight.semibold,
          lineHeight: typography.lineHeight.tight,
          margin: 0
        }}>
          Heading 2 - 3rem
        </h2>
        <h3 style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['4xl'],
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.snug,
          margin: 0
        }}>
          Heading 3 - 2.25rem
        </h3>
        <h4 style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['3xl'],
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.snug,
          margin: 0
        }}>
          Heading 4 - 1.875rem
        </h4>
        <h5 style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['2xl'],
          fontWeight: typography.fontWeight.normal,
          lineHeight: typography.lineHeight.normal,
          margin: 0
        }}>
          Heading 5 - 1.5rem
        </h5>
        <h6 style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.normal,
          margin: 0
        }}>
          Heading 6 - 1.25rem
        </h6>
        <p style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.base,
          fontWeight: typography.fontWeight.normal,
          lineHeight: typography.lineHeight.relaxed,
          margin: 0
        }}>
          Body text - 1rem. This is how regular paragraph text looks with our typography system.
        </p>
        <small style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.normal,
          lineHeight: typography.lineHeight.normal,
          margin: 0
        }}>
          Small text - 0.875rem
        </small>
      </div>
    </div>
  ),
};

// Spacing Story
export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>Spacing Scale</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {Object.entries(spacing).slice(0, 20).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ 
              width: '100%', 
              height: '40px', 
              backgroundColor: colors.primary, 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              {key}
            </div>
            <code style={{ fontSize: '12px' }}>{value}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};
