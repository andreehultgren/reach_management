import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';

const CardContainer = styled.div<{ $variant?: 'default' | 'featured' | 'minimal' }>`
  width: 100%;
  max-width: 380px;
  background: ${colors.white};
  border-radius: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return '20px';
      case 'minimal': return '8px';
      default: return '16px';
    }
  }};
  box-shadow: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)';
      case 'minimal': return '0 2px 8px rgba(0, 0, 0, 0.08)';
      default: return '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)';
    }
  }};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    transform: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'featured': return 'translateY(-8px) scale(1.02)';
        case 'minimal': return 'translateY(-2px)';
        default: return 'translateY(-4px) scale(1.01)';
      }
    }};
    box-shadow: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'featured': return '0 32px 64px rgba(0, 0, 0, 0.2), 0 16px 32px rgba(0, 0, 0, 0.15)';
        case 'minimal': return '0 4px 16px rgba(0, 0, 0, 0.12)';
        default: return '0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.12)';
      }
    }};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    margin: 0;
  }
`;

const ImageContainer = styled.div<{ $variant?: 'default' | 'featured' | 'minimal' }>`
  width: 100%;
  height: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return '200px';
      case 'minimal': return '140px';
      default: return '180px';
    }
  }};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${colors.primaryLight}20 0%,
      transparent 50%,
      ${colors.accentLight}20 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  ${CardContainer}:hover &::before {
    opacity: 1;
  }
`;

const ConsultantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const StatusBadge = styled.div<{ $status: 'available' | 'employed' | 'busy' | 'unavailable' }>`
  position: absolute;
  top: ${spacing[3]};
  right: ${spacing[3]};
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${({ $status }) => {
    switch ($status) {
      case 'available': return colors.success;
      case 'employed': return colors.warning;
      case 'busy': return colors.error;
      case 'unavailable': return colors.gray400;
      default: return colors.success;
    }
  }};
  color: ${colors.white};
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div<{ $variant?: 'default' | 'featured' | 'minimal' }>`
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return spacing[5];
      case 'minimal': return spacing[4];
      default: return spacing[4];
    }
  }};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing[2]};
`;

const ConsultantName = styled(Typography)`
  margin: 0;
  line-height: 1.3;
  flex: 1;
`;

const Experience = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[1]};
  color: ${colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const Title = styled(Typography)`
  margin: 0;
  line-height: 1.4;
  color: ${colors.textSecondary};
  font-size: 0.9rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  margin: ${spacing[2]} 0;
`;

const SkillTag = styled.span`
  background: ${colors.gray100};
  color: ${colors.textPrimary};
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${colors.gray200};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${colors.primaryLight};
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
`;

const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
  margin: ${spacing[2]} 0;
`;

const CertificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  padding: ${spacing[2]};
  background: ${colors.gray50};
  border-radius: 8px;
  border-left: 3px solid ${colors.accent};
`;

const CertificationIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 0.75rem;
  font-weight: bold;
`;

const CertificationText = styled.div`
  flex: 1;
`;

const CertificationName = styled(Typography)`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

const CertificationYear = styled(Typography)`
  margin: 0;
  font-size: 0.75rem;
  color: ${colors.textSecondary};
`;

const Actions = styled.div`
  display: flex;
  gap: ${spacing[2]};
  margin-top: ${spacing[3]};
  padding-top: ${spacing[3]};
  border-top: 1px solid ${colors.gray200};
`;

const ContactButton = styled(Button)`
  flex: 1;
`;

const ViewProfileButton = styled(Button)`
  flex: 1;
`;

export interface ConsultantCardProps {
  name: string;
  title: string;
  image: string;
  imageAlt?: string;
  experience: string;
  skills: string[];
  certifications: Array<{
    name: string;
    year: string;
    issuer?: string;
  }>;
  status: 'available' | 'employed' | 'busy' | 'unavailable';
  variant?: 'default' | 'featured' | 'minimal';
  onContact?: () => void;
  onViewProfile?: () => void;
  className?: string;
}

export const ConsultantCard: React.FC<ConsultantCardProps> = ({
  name,
  title,
  image,
  imageAlt,
  experience,
  skills,
  certifications,
  status,
  variant = 'default',
  onContact,
  onViewProfile,
  className,
}) => {
  return (
    <CardContainer $variant={variant} className={className}>
      <ImageContainer $variant={variant}>
        <ConsultantImage
          src={image}
          alt={imageAlt || name}
        />
        <StatusBadge $status={status}>
          {status}
        </StatusBadge>
      </ImageContainer>
      
      <Content $variant={variant}>
        <Header>
          <div style={{ flex: 1 }}>
            <ConsultantName variant="h4" color="primary">
              {name}
            </ConsultantName>
            <Title variant="body2">
              {title}
            </Title>
          </div>
          <Experience>
            <span>⏱️</span>
            <span>{experience}</span>
          </Experience>
        </Header>
        
        {skills.length > 0 && (
          <div>
            <Typography variant="caption" color="secondary" style={{ marginBottom: spacing[1], display: 'block' }}>
              Skills
            </Typography>
            <SkillsContainer>
              {skills.slice(0, 6).map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
              {skills.length > 6 && (
                <SkillTag>+{skills.length - 6} more</SkillTag>
              )}
            </SkillsContainer>
          </div>
        )}
        
        {certifications.length > 0 && (
          <div>
            <Typography variant="caption" color="secondary" style={{ marginBottom: spacing[1], display: 'block' }}>
              Certifications
            </Typography>
            <CertificationsContainer>
              {certifications.slice(0, 2).map((cert) => (
                <CertificationItem key={`${cert.name}-${cert.year}`}>
                  <CertificationIcon>
                    ✓
                  </CertificationIcon>
                  <CertificationText>
                    <CertificationName variant="body2">
                      {cert.name}
                    </CertificationName>
                    <CertificationYear variant="caption">
                      {cert.year} {cert.issuer && `• ${cert.issuer}`}
                    </CertificationYear>
                  </CertificationText>
                </CertificationItem>
              ))}
              {certifications.length > 2 && (
                <Typography variant="caption" color="secondary" style={{ textAlign: 'center' }}>
                  +{certifications.length - 2} more certifications
                </Typography>
              )}
            </CertificationsContainer>
          </div>
        )}
        
        {(onContact || onViewProfile) && (
          <Actions>
            {onContact && (
              <ContactButton 
                variant="primary" 
                size="small" 
                onClick={onContact}
                disabled={status === 'unavailable'}
              >
                Contact
              </ContactButton>
            )}
            {onViewProfile && (
              <ViewProfileButton 
                variant="outline" 
                size="small" 
                onClick={onViewProfile}
              >
                Profile
              </ViewProfileButton>
            )}
          </Actions>
        )}
      </Content>
    </CardContainer>
  );
};

export default ConsultantCard;
