import type React from 'react';
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints, zIndex } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography/Typography';
import { Close } from '@mui/icons-material';

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: ${zIndex.modal};
  display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]};
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing[2]};
  }
`;

const DialogContainer = styled.div<{ 
  $variant?: 'default' | 'fullscreen' | 'compact';
  $isOpen: boolean;
}>`
  background: ${colors.white};
  border-radius: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return '0';
      case 'compact': return '12px';
      default: return '16px';
    }
  }};
  box-shadow: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return 'none';
      case 'compact': return '0 8px 24px rgba(0, 0, 0, 0.15)';
      default: return '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)';
    }
  }};
  width: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return '100vw';
      case 'compact': return '400px';
      default: return '500px';
    }
  }};
  max-width: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return '100vw';
      case 'compact': return '90vw';
      default: return '90vw';
    }
  }};
  max-height: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return '100vh';
      case 'compact': return '80vh';
      default: return '90vh';
    }
  }};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: ${({ $isOpen }) => $isOpen ? 'scale(1)' : 'scale(0.95)'};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  @media (max-width: ${breakpoints.sm}) {
    width: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'fullscreen': return '100vw';
        case 'compact': return '100vw';
        default: return '100vw';
      }
    }};
    max-width: 100vw;
    max-height: 100vh;
    border-radius: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'fullscreen': return '0';
        case 'compact': return '8px';
        default: return '8px';
      }
    }};
  }
`;

const DialogHeader = styled.div<{ $variant?: 'default' | 'fullscreen' | 'compact' }>`
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return `${spacing[4]} ${spacing[6]}`;
      case 'compact': return `${spacing[4]} ${spacing[5]}`;
      default: return `${spacing[5]} ${spacing[6]}`;
    }
  }};
  border-bottom: 1px solid ${colors.gray200};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[4]};
  flex-shrink: 0;
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'fullscreen': return `${spacing[3]} ${spacing[4]}`;
        case 'compact': return `${spacing[3]} ${spacing[4]}`;
        default: return `${spacing[4]} ${spacing[4]}`;
      }
    }};
  }
`;

const DialogTitle = styled(Typography)`
  margin: 0;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: ${spacing[2]};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textSecondary};
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    background: ${colors.gray100};
    color: ${colors.textPrimary};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const DialogContent = styled.div<{ $variant?: 'default' | 'fullscreen' | 'compact' }>`
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return `${spacing[6]}`;
      case 'compact': return `${spacing[4]} ${spacing[5]}`;
      default: return `${spacing[6]}`;
    }
  }};
  flex: 1;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.gray300};
    border-radius: 3px;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'fullscreen': return `${spacing[4]}`;
        case 'compact': return `${spacing[3]} ${spacing[4]}`;
        default: return `${spacing[4]}`;
      }
    }};
  }
`;

const DialogActions = styled.div<{ $variant?: 'default' | 'fullscreen' | 'compact' }>`
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'fullscreen': return `${spacing[4]} ${spacing[6]}`;
      case 'compact': return `${spacing[3]} ${spacing[5]}`;
      default: return `${spacing[5]} ${spacing[6]}`;
    }
  }};
  border-top: 1px solid ${colors.gray200};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${spacing[3]};
  flex-shrink: 0;
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'fullscreen': return `${spacing[3]} ${spacing[4]}`;
        case 'compact': return `${spacing[2]} ${spacing[4]}`;
        default: return `${spacing[4]} ${spacing[4]}`;
      }
    }};
    flex-direction: column;
    
    & > * {
      width: 100%;
    }
  }
`;

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  variant?: 'default' | 'fullscreen' | 'compact';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  variant = 'default',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}) => {
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape') {
      onClose();
    }
  }, [closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const dialogContent = (
    <Overlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <DialogContainer $variant={variant} $isOpen={isOpen} className={className}>
        {(title || showCloseButton) && (
          <DialogHeader $variant={variant}>
            {title && (
              <DialogTitle variant="h5" color="primary">
                {title}
              </DialogTitle>
            )}
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label="Close dialog">
                <Close />
              </CloseButton>
            )}
          </DialogHeader>
        )}
        
        <DialogContent $variant={variant}>
          {children}
        </DialogContent>
        
        {actions && (
          <DialogActions $variant={variant}>
            {actions}
          </DialogActions>
        )}
      </DialogContainer>
    </Overlay>
  );

  return createPortal(dialogContent, document.body);
};

export default Dialog;
