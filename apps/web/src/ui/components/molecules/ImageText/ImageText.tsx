import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, designValues } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography';

const ImageTextContainer = styled.div<{ $orientation: 'left' | 'right' | 'center' }>`
  display: grid;
  grid-template-columns: ${({ $orientation }) => {
    switch ($orientation) {
      case 'left':
        return '1fr 1.2fr';
      case 'right':
        return '1.2fr 1fr';
      case 'center':
        return '1fr';
      default:
        return '1fr 1.2fr';
    }
  }};
  gap: ${({ $orientation }) => $orientation === 'center' ? spacing[4] : spacing[6]};
  align-items: center;
  max-width: ${({ $orientation }) => 
    $orientation === 'center' ? designValues.maxWidth["4xl"] : designValues.maxWidth["5xl"]
  };
  margin: 0 auto;
  padding: ${({ $orientation }) => 
    $orientation === 'center' 
      ? `${spacing[6]} ${spacing[5]}`
      : `${spacing[4]} 0`
  };
  background: ${({ $orientation }) => 
    $orientation === 'center' 
      ? `linear-gradient(135deg, ${colors.gray50} 0%, ${colors.white} 100%)`
      : 'transparent'
  };
  border-radius: ${({ $orientation }) => $orientation === 'center' ? '16px' : '0'};
  border: ${({ $orientation }) => 
    $orientation === 'center' 
      ? `1px solid ${colors.gray200}`
      : 'none'
  };
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing[4]};
    padding: ${spacing[2]} 0;
  }
`;

const ImageWrapper = styled.div<{ $orientation: 'left' | 'right' | 'center' }>`
  border-radius: ${designValues.borderRadius["2xl"]};
  overflow: hidden;
  box-shadow: ${designValues.boxShadow.card};
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  order: ${({ $orientation }) => {
    switch ($orientation) {
      case 'left':
        return 1;
      case 'right':
        return 2;
      case 'center':
        return 1;
      default:
        return 1;
    }
  }};
  max-width: ${({ $orientation }) => $orientation === 'center' ? '400px' : 'none'};
  margin: ${({ $orientation }) => $orientation === 'center' ? '0 auto' : '0'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${designValues.boxShadow.cardHover};
  }
  
  @media (max-width: 768px) {
    order: 1;
    max-width: none;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 4/3;
  display: block;
  transition: transform 0.3s ease;
  
  ${ImageWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const ContentWrapper = styled.div<{ $orientation: 'left' | 'right' | 'center' }>`
  order: ${({ $orientation }) => {
    switch ($orientation) {
      case 'left':
        return 2;
      case 'right':
        return 1;
      case 'center':
        return 2;
      default:
        return 2;
    }
  }};
  text-align: ${({ $orientation }) => $orientation === 'center' ? 'center' : 'left'};
  max-width: ${({ $orientation }) => $orientation === 'center' ? '600px' : 'none'};
  margin: ${({ $orientation }) => $orientation === 'center' ? '0 auto' : '0'};
  
  @media (max-width: 768px) {
    order: 2;
    text-align: left;
    max-width: none;
    margin: 0;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: ${spacing[4]};
`;

const Title = styled(Typography)`
  margin-bottom: ${spacing[3]} !important;
  line-height: 1.2;
`;

const Divider = styled.div<{ $orientation?: 'left' | 'right' | 'center' }>`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%);
  border-radius: 2px;
  margin-bottom: ${spacing[3]};
  margin-left: ${({ $orientation }) => $orientation === 'center' ? 'auto' : '0'};
  margin-right: ${({ $orientation }) => $orientation === 'center' ? 'auto' : '0'};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const Text = styled(Typography)`
  font-size: ${designValues.fontSize.base};
  line-height: 1.6;
  color: ${colors.textSecondary};
`;

const Highlight = styled.strong`
  color: ${colors.primary};
`;

export interface ImageTextProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  content: string | string[];
  orientation?: 'left' | 'right' | 'center';
  className?: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  image,
  title,
  content,
  orientation = 'left',
  className
}) => {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <ImageTextContainer $orientation={orientation} className={className}>
      <ImageWrapper $orientation={orientation}>
        <Image src={image.src} alt={image.alt} />
      </ImageWrapper>
      
      <ContentWrapper $orientation={orientation}>
        <TitleWrapper>
          <Title variant="h2" color="primary">
            {title}
          </Title>
          <Divider $orientation={orientation} />
        </TitleWrapper>
        
        <TextContent>
          {contentArray.map((text) => {
            const textKey = `content-${text.slice(0, 20).replace(/\s+/g, '-')}`;
            return (
              <Text key={textKey} variant="body1" color="secondary">
                {text.split(/(<strong>.*?<\/strong>)/g).map((part, partIndex) => {
                  if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
                    const strongText = part.replace(/<\/?strong>/g, '');
                    const partKey = `part-${textKey}-${partIndex}`;
                    return <Highlight key={partKey}>{strongText}</Highlight>;
                  }
                  return part;
                })}
              </Text>
            );
          })}
        </TextContent>
      </ContentWrapper>
    </ImageTextContainer>
  );
};
