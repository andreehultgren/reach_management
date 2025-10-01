import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../components/molecules/Tabs/Tabs';
import { Typography } from '../../components/atoms/Typography/Typography';
import { Button } from '../../components/atoms/Button/Button';
import { Email, Phone, Event, Share } from '@mui/icons-material';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline'],
    },
    onChange: { action: 'tab changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    id: 'email',
    label: 'E-post',
    icon: <Email />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4" color="primary">Kontakta oss via e-post</Typography>
        <Typography variant="body1">
          Skicka oss ett meddelande så återkommer vi inom 24 timmar.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Skicka e-post</Button>
          <Button variant="outline">Ladda ner kontaktinfo</Button>
        </div>
      </div>
    ),
  },
  {
    id: 'phone',
    label: 'Telefon',
    icon: <Phone />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4" color="primary">Ring oss direkt</Typography>
        <Typography variant="body1">
          Vi svarar på våra telefoner vardagar 08:00-17:00.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Ring nu</Button>
          <Button variant="outline">Boka uppringning</Button>
        </div>
      </div>
    ),
  },
  {
    id: 'meeting',
    label: 'Boka möte',
    icon: <Event />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4" color="primary">Boka ett möte</Typography>
        <Typography variant="body1">
          Välj ett tid som passar dig för ett personligt möte.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Välj tid</Button>
          <Button variant="outline">Se tillgänglighet</Button>
        </div>
      </div>
    ),
  },
  {
    id: 'social',
    label: 'Sociala medier',
    icon: <Share />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4" color="primary">Följ oss online</Typography>
        <Typography variant="body1">
          Håll dig uppdaterad med våra senaste projekt och nyheter.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">LinkedIn</Button>
          <Button variant="outline">Instagram</Button>
        </div>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    tabs: sampleTabs,
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    tabs: sampleTabs,
  },
};

export const WithDisabledTabs: Story = {
  args: {
    tabs: [
      ...sampleTabs.slice(0, 2),
      {
        ...sampleTabs[2],
        disabled: true,
      },
      ...sampleTabs.slice(3),
    ],
  },
};

export const ContactForm: Story = {
  args: {
    variant: 'pills',
    tabs: [
      {
        id: 'email',
        label: 'E-post',
        icon: <Email />,
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <Typography variant="h6" color="primary">Skicka e-post</Typography>
              <Typography variant="body2" color="secondary" style={{ marginTop: '0.5rem' }}>
                Vi återkommer inom 24 timmar
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="email-subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Ämne
                </label>
                <input 
                  id="email-subject"
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
                <label htmlFor="email-message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Meddelande
                </label>
                <textarea 
                  id="email-message"
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
        ),
      },
      {
        id: 'phone',
        label: 'Telefon',
        icon: <Phone />,
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <Typography variant="h6" color="primary">Ring oss</Typography>
              <Typography variant="body2" color="secondary" style={{ marginTop: '0.5rem' }}>
                Vardagar 08:00-17:00
              </Typography>
            </div>
            <div style={{ 
              background: '#f8fafc', 
              padding: '1.5rem', 
              borderRadius: '12px',
              textAlign: 'center' 
            }}>
              <Typography variant="h4" color="primary">+46 70 108 10 22</Typography>
              <Typography variant="body2" color="secondary" style={{ marginTop: '0.5rem' }}>
                Michael Hultgren, VD
              </Typography>
            </div>
          </div>
        ),
      },
    ],
  },
};

export const Services: Story = {
  args: {
    variant: 'underline',
    tabs: [
      {
        id: 'project-management',
        label: 'Projektledning',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography variant="h4" color="primary">Projektledning</Typography>
            <Typography variant="body1">
              Vi leder projekt med fokus på struktur, kommunikation och resultat. 
              Från planering till uppföljning säkerställer vi att ditt projekt 
              levereras i tid och inom budget.
            </Typography>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                <Typography variant="h6" color="primary">Planering</Typography>
                <Typography variant="body2">Detaljerad projektplanering</Typography>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                <Typography variant="h6" color="primary">Uppföljning</Typography>
                <Typography variant="body2">Kontinuerlig projektuppföljning</Typography>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                <Typography variant="h6" color="primary">Kommunikation</Typography>
                <Typography variant="body2">Tydlig projektkommunikation</Typography>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'design-management',
        label: 'Projekteringsledning',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography variant="h4" color="primary">Projekteringsledning</Typography>
            <Typography variant="body1">
              Vi samordnar projekteringsarbetet för att säkerställa kvalitet och 
              effektivitet, från koncept till byggstart, med kunden i centrum.
            </Typography>
          </div>
        ),
      },
      {
        id: 'construction-management',
        label: 'Byggledning',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography variant="h4" color="primary">Byggledning</Typography>
            <Typography variant="body1">
              På plats leder vi entreprenörerna och övervakar tidplan, ekonomi och 
              säkerhet för att säkerställa ett framgångsrikt projekt.
            </Typography>
          </div>
        ),
      },
    ],
  },
};

export const SimpleTabs: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: <Typography variant="body1">This is content for Tab 1</Typography>,
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        content: <Typography variant="body1">This is content for Tab 2</Typography>,
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        content: <Typography variant="body1">This is content for Tab 3</Typography>,
      },
    ],
  },
};
