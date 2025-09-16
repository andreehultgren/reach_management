import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, designValues } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography';

const ImageTextContainer = styled.div<{ $orientation: 'left' | 'right' | 'center' }>`
  display: grid;
  grid-template-columns: ${({ $orientation }) => {
    switch ($orientation) {
      case 'left':
        return '1fr 1fr';
      case 'right':
        return '1fr 1fr';
      case 'center':
        return '1fr';
      default:
        return '1fr 1fr';
    }
  }};
  gap: ${spacing[8]};
  align-items: center;
  max-width: ${designValues.maxWidth["7xl"]};
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
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
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${designValues.boxShadow.cardHover};
  }
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/10;
  display: block;
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
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: ${spacing[6]};
`;

const Title = styled(Typography)`
  margin-bottom: ${spacing[4]} !important;
`;

const Divider = styled.div`
  width: 60px;
  height: 2px;
  background-color: ${colors.primary};
  border-radius: 1px;
  margin-bottom: ${spacing[4]};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
`;

const Text = styled(Typography)`
  font-size: ${designValues.fontSize.lg};
  line-height: 1.7;
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
          <Divider />
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
