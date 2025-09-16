import type React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography/Typography';

const TabsContainer = styled.div<{ $variant?: 'default' | 'pills' | 'underline' }>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabsHeader = styled.div<{ $variant?: 'default' | 'pills' | 'underline' }>`
  display: flex;
  border-bottom: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return 'none';
      case 'underline': return `2px solid ${colors.gray200}`;
      default: return `1px solid ${colors.gray200}`;
    }
  }};
  background: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return colors.gray50;
      case 'underline': return 'transparent';
      default: return 'transparent';
    }
  }};
  border-radius: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return '12px';
      case 'underline': return '0';
      default: return '0';
    }
  }};
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return spacing[1];
      case 'underline': return '0';
      default: return '0';
    }
  }};
  gap: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return spacing[1];
      case 'underline': return '0';
      default: return '0';
    }
  }};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.gray300};
    border-radius: 2px;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'pills': return 'padding: 0.5rem;';
        case 'underline': return 'padding: 0;';
        default: return 'padding: 0;';
      }
    }}
  }
`;

const TabButton = styled.button<{ 
  $active: boolean; 
  $variant?: 'default' | 'pills' | 'underline';
  $disabled?: boolean;
}>`
  background: ${({ $active, $variant = 'default', $disabled }) => {
    if ($disabled) return 'transparent';
    switch ($variant) {
      case 'pills': return $active ? colors.white : 'transparent';
      case 'underline': return 'transparent';
      default: return 'transparent';
    }
  }};
  border: none;
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return `${spacing[3]} ${spacing[4]}`;
      case 'underline': return `${spacing[4]} ${spacing[5]}`;
      default: return `${spacing[4]} ${spacing[5]}`;
    }
  }};
  border-radius: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return '8px';
      case 'underline': return '0';
      default: return '0';
    }
  }};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  
  color: ${({ $active, $disabled, $variant = 'default' }) => {
    if ($disabled) return colors.gray400;
    switch ($variant) {
      case 'pills': return $active ? colors.primary : colors.textSecondary;
      case 'underline': return $active ? colors.primary : colors.textSecondary;
      default: return $active ? colors.primary : colors.textSecondary;
    }
  }};
  
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  font-size: 1rem;
  
  box-shadow: ${({ $active, $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return $active ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none';
      case 'underline': return 'none';
      default: return 'none';
    }
  }};
  
  &:hover {
    background: ${({ $disabled, $variant = 'default' }) => {
      if ($disabled) return 'transparent';
      switch ($variant) {
        case 'pills': return colors.gray100;
        case 'underline': return colors.gray50;
        default: return colors.gray50;
      }
    }};
    color: ${({ $disabled, $variant = 'default' }) => {
      if ($disabled) return colors.gray400;
      switch ($variant) {
        case 'pills': return colors.primary;
        case 'underline': return colors.primary;
        default: return colors.primary;
      }
    }};
  }
  
  &:active {
    transform: ${({ $disabled }) => $disabled ? 'none' : 'translateY(1px)'};
  }
  
  /* Underline indicator */
  ${({ $active, $variant = 'default' }) => {
    if ($variant === 'underline' && $active) {
      return `&::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${colors.primary};
        border-radius: 1px;
      }`;
    }
    return '';
  }}
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'pills': return `${spacing[2]} ${spacing[3]}`;
        case 'underline': return `${spacing[3]} ${spacing[4]}`;
        default: return `${spacing[3]} ${spacing[4]}`;
      }
    }};
    font-size: 0.875rem;
  }
`;

const TabContent = styled.div<{ $variant?: 'default' | 'pills' | 'underline' }>`
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return spacing[6];
      case 'underline': return spacing[5];
      default: return spacing[5];
    }
  }};
  background: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return colors.white;
      case 'underline': return 'transparent';
      default: return 'transparent';
    }
  }};
  border-radius: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return '0 0 12px 12px';
      case 'underline': return '0';
      default: return '0';
    }
  }};
  box-shadow: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'pills': return '0 4px 12px rgba(0, 0, 0, 0.1)';
      case 'underline': return 'none';
      default: return 'none';
    }
  }};
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'pills': return spacing[4];
        case 'underline': return spacing[4];
        default: return spacing[4];
      }
    }};
  }
`;

const TabIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  onChange?: (activeTabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  variant = 'default',
  onChange,
  className,
}) => {
  // Ensure we have a valid initial tab
  const initialTab = defaultActiveTab || (tabs.length > 0 ? tabs[0].id : '');
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
      onChange?.(tabId);
    }
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <TabsContainer $variant={variant} className={className}>
      <TabsHeader $variant={variant}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            $active={activeTab === tab.id}
            $variant={variant}
            $disabled={tab.disabled}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-disabled={tab.disabled}
          >
            {tab.icon && <TabIcon>{tab.icon}</TabIcon>}
            <Typography variant="body1" style={{ margin: 0 }}>
              {tab.label}
            </Typography>
          </TabButton>
        ))}
      </TabsHeader>
      
      <TabContent $variant={variant} role="tabpanel">
        {activeTabData?.content || (tabs.length > 0 ? tabs[0].content : null)}
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
