import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';
import { ConsultantCard } from '../ConsultantCard/ConsultantCard';

const ScrollerContainer = styled.div<{ $variant?: 'default' | 'showcase' | 'grid' }>`
  width: 100%;
  display: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'grid': return 'grid';
      case 'showcase': return 'flex';
      default: return 'flex';
    }
  }};
  ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'grid': return `
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: ${spacing[6]};
      `;
      case 'showcase': return `
        flex-direction: row;
        align-items: flex-start;
        gap: ${spacing[6]};
        justify-content: center;
      `;
      default: return `
        flex-direction: row;
        gap: ${spacing[5]};
        overflow-x: auto;
        padding: ${spacing[2]} 0;
        scroll-snap-type: x mandatory;
        
        &::-webkit-scrollbar {
          height: 6px;
        }
        
        &::-webkit-scrollbar-track {
          background: ${colors.gray100};
          border-radius: 3px;
        }
        
        &::-webkit-scrollbar-thumb {
          background: ${colors.gray300};
          border-radius: 3px;
          
          &:hover {
            background: ${colors.gray400};
          }
        }
      `;
    }
  }};
  
  @media (max-width: ${breakpoints.md}) {
    ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'grid': return `
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: ${spacing[4]};
        `;
        case 'showcase': return `
          flex-direction: row;
          align-items: flex-start;
          gap: ${spacing[4]};
          justify-content: center;
          overflow-x: auto;
          padding: ${spacing[2]} ${spacing[4]};
          scroll-snap-type: x mandatory;
          scroll-padding: 0 ${spacing[4]};
          
          &::-webkit-scrollbar {
            height: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: ${colors.gray100};
            border-radius: 3px;
          }
          
          &::-webkit-scrollbar-thumb {
            background: ${colors.gray300};
            border-radius: 3px;
            
            &:hover {
              background: ${colors.gray400};
            }
          }
        `;
        default: return `
          gap: ${spacing[4]};
        `;
      }
    }};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'grid': return `
          grid-template-columns: 1fr;
          gap: ${spacing[4]};
        `;
        case 'showcase': return `
          flex-direction: row;
          align-items: flex-start;
          gap: ${spacing[4]};
          justify-content: center;
          overflow-x: auto;
          padding: ${spacing[2]} ${spacing[4]};
          scroll-snap-type: x mandatory;
          scroll-padding: 0 ${spacing[4]};
          
          &::-webkit-scrollbar {
            height: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: ${colors.gray100};
            border-radius: 3px;
          }
          
          &::-webkit-scrollbar-thumb {
            background: ${colors.gray300};
            border-radius: 3px;
            
            &:hover {
              background: ${colors.gray400};
            }
          }
        `;
        default: return `
          flex-direction: column;
          gap: ${spacing[4]};
          overflow-x: visible;
        `;
      }
    }};
  }
`;

const ConsultantItem = styled.div<{ $variant?: 'default' | 'showcase' | 'grid' }>`
  flex-shrink: 0;
  scroll-snap-align: start;
  
  ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'showcase': return `
        max-width: 400px;
        width: 100%;
      `;
      case 'grid': return `
        width: 100%;
      `;
      default: return `
        width: 350px;
      `;
    }
  }};
  
  @media (max-width: ${breakpoints.sm}) {
    width: 300px;
    max-width: 300px;
    flex-shrink: 0;
  }
`;

export interface ConsultantData {
  name: string;
  roles?: string[];
  image: string;
  imageAlt?: string;
  experience: string;
  certifications: Array<{
    name: string;
    year: string;
    issuer?: string;
  }>;
  variant?: 'default' | 'featured' | 'minimal';
  email?: string;
  phone?: string;
  onViewProfile?: () => void;
}

export interface ConsultantScrollerProps {
  consultants: ConsultantData[];
  variant?: 'default' | 'showcase' | 'grid';
  className?: string;
}

export const ConsultantScroller: React.FC<ConsultantScrollerProps> = ({
  consultants,
  variant = 'default',
  className,
}) => {
  return (
    <ScrollerContainer $variant={variant} className={className}>
      {consultants.map((consultant) => (
        <ConsultantItem key={consultant.name} $variant={variant}>
          <ConsultantCard
            name={consultant.name}
            roles={consultant.roles}
            image={consultant.image}
            imageAlt={consultant.imageAlt}
            certifications={consultant.certifications}
            variant={consultant.variant}
            email={consultant.email}
            phone={consultant.phone}
            onViewProfile={consultant.onViewProfile}
          />
        </ConsultantItem>
      ))}
    </ScrollerContainer>
  );
};

export default ConsultantScroller;
