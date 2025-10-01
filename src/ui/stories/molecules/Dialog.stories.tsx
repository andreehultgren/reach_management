import type { Meta, StoryObj } from '@storybook/react';
import { useState, memo, useCallback } from 'react';
import { Dialog } from '../../components/molecules/Dialog/Dialog';
import { Button } from '../../components/atoms/Button/Button';
import { Typography } from '../../components/atoms/Typography/Typography';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Molecules/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'fullscreen', 'compact'],
    },
    onClose: { action: 'dialog closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogWrapper = memo(({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  
  return (
    <div>
      <Button onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog
        {...props}
        isOpen={isOpen}
        onClose={handleClose}
      >
        {children}
      </Dialog>
    </div>
  );
});

export const Default: Story = {
  render: (args) => (
    <DialogWrapper {...args}>
      <Typography variant="body1">
        This is a default dialog with some content. It has a nice backdrop blur
        effect and smooth animations.
      </Typography>
    </DialogWrapper>
  ),
  args: {
    title: 'Default Dialog',
    actions: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
};

export const Compact: Story = {
  render: (args) => (
    <DialogWrapper {...args}>
      <Typography variant="body1">
        This is a compact dialog perfect for simple confirmations or quick actions.
      </Typography>
    </DialogWrapper>
  ),
  args: {
    title: 'Compact Dialog',
    variant: 'compact',
    actions: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save</Button>
      </>
    ),
  },
};

export const Fullscreen: Story = {
  render: (args) => (
    <DialogWrapper {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography variant="h4" color="primary">Fullscreen Dialog</Typography>
        <Typography variant="body1">
          This is a fullscreen dialog that takes up the entire viewport. Perfect for
          complex forms or detailed content that needs more space.
        </Typography>
        <div style={{ 
          background: '#f8fafc', 
          padding: '2rem', 
          borderRadius: '12px',
          marginTop: '2rem'
        }}>
          <Typography variant="h6" color="primary">Content Section</Typography>
          <Typography variant="body2" color="secondary" style={{ marginTop: '1rem' }}>
            This is an example of how you can structure content within a fullscreen dialog.
            You can include forms, images, tables, or any other content that needs more space.
          </Typography>
        </div>
      </div>
    </DialogWrapper>
  ),
  args: {
    title: 'Fullscreen Dialog',
    variant: 'fullscreen',
    actions: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </>
    ),
  },
};

export const ContactDialog: Story = {
  render: (args) => (
    <DialogWrapper {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography variant="h4" color="primary">Kontakta oss</Typography>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <Typography variant="h6" color="primary">E-post</Typography>
            <Typography variant="body2" color="secondary">
              Vi återkommer inom 24 timmar
            </Typography>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor="contact-subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Ämne
              </label>
              <input 
                id="contact-subject"
                type="text" 
                placeholder="Vad gäller ditt ärende?"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
              />
            </div>
            
            <div>
              <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Meddelande
              </label>
              <textarea 
                id="contact-message"
                placeholder="Beskriv ditt ärende..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical',
                }}
              />
            </div>
          </div>
        </div>
        
        <div style={{ 
          background: '#f8fafc', 
          padding: '1.5rem', 
          borderRadius: '12px',
          textAlign: 'center' 
        }}>
          <Typography variant="h6" color="primary">Ring oss direkt</Typography>
          <Typography variant="h4" color="primary" style={{ marginTop: '0.5rem' }}>+46 70 108 10 22</Typography>
          <Typography variant="body2" color="secondary" style={{ marginTop: '0.5rem' }}>
            Vardagar 08:00-17:00
          </Typography>
        </div>
      </div>
    </DialogWrapper>
  ),
  args: {
    title: 'Kontakta oss',
    variant: 'default',
    actions: (
      <>
        <Button variant="outline">Stäng</Button>
        <Button variant="primary">Skicka</Button>
      </>
    ),
  },
};

export const ConfirmationDialog: Story = {
  render: (args) => (
    <DialogWrapper {...args}>
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: '#fef3c7', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1rem',
          fontSize: '2rem'
        }}>
          ⚠️
        </div>
        <Typography variant="h5" color="primary" style={{ marginBottom: '0.5rem' }}>
          Är du säker?
        </Typography>
        <Typography variant="body1" color="secondary">
          Denna åtgärd kan inte ångras. Alla data kommer att raderas permanent.
        </Typography>
      </div>
    </DialogWrapper>
  ),
  args: {
    title: 'Bekräfta åtgärd',
    variant: 'compact',
    actions: (
      <>
        <Button variant="outline">Avbryt</Button>
        <Button variant="primary" style={{ background: '#dc2626' }}>
          Radera
        </Button>
      </>
    ),
  },
};

export const NoCloseButton: Story = {
  render: (args) => (
    <DialogWrapper {...args}>
      <Typography variant="body1">
        This dialog doesn't have a close button in the header. Users must use the
        action buttons or click outside to close it.
      </Typography>
    </DialogWrapper>
  ),
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    actions: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Continue</Button>
      </>
    ),
  },
};

