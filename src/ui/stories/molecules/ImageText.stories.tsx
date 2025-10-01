import type { Meta, StoryObj } from '@storybook/react';
import { ImageText } from '../../components/molecules/ImageText';

const meta: Meta<typeof ImageText> = {
  title: 'Molecules/ImageText',
  component: ImageText,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['left', 'right', 'center'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageText>;

export const LeftOrientation: Story = {
  args: {
    image: {
      src: '/assets/reach_hand_desktop.jpg',
      alt: 'Reach Management'
    },
    title: 'Om Reach Management',
    content: [
      'Reach Management är ett konsultföretag inom bygg- och fastighetsbranschen. Vi är din partner genom hela byggprocessen - från idé till färdigställd produkt. Med engagemang, struktur och innovation driver vi projekt som skapar långsiktigt värde.',
      'Vårt namn symboliserar vår filosofi: <strong>Reach</strong> står för att sträcka sig bortom det förväntade, och <strong>Management</strong> representerar vår expertis inom projektledning och samordning. Tillsammans når vi längre.'
    ],
    orientation: 'left',
  },
};

export const RightOrientation: Story = {
  args: {
    image: {
      src: '/assets/titanic.jpg',
      alt: 'Titanic'
    },
    title: 'Därför Reach Management',
    content: [
      'Hos oss får du en partner som tar ansvar för helheten. Vi utmanar, inspirerar och driver projekt med ärlighet, struktur och innovation. Vår styrka ligger i att förstå din vision och omsätta den i verklighet.',
      'Vi tror på att bygga långsiktiga relationer med våra kunder och leverantörer. Genom att förstå dina behov och mål kan vi skapa lösningar som verkligen gör skillnad.'
    ],
    orientation: 'right',
  },
};

export const CenterOrientation: Story = {
  args: {
    image: {
      src: '/assets/rise.png',
      alt: 'Rise Certification'
    },
    title: 'Certifieringar',
    content: [
      'Vi arbetar enligt branschstandarder och lagkrav. Vi är certifierade enligt Plan- och bygglagen (PBL) och säkerställer att ditt projekt uppfyller alla lagkrav.',
      'Vår certifiering garanterar att vi följer de senaste reglerna och standarderna inom byggbranschen.'
    ],
    orientation: 'center',
  },
};

export const SingleContent: Story = {
  args: {
    image: {
      src: '/michael.webp',
      alt: 'Michael Hultgren'
    },
    title: 'Våra konsulter',
    content: 'Erfarna experter som driver dina projekt framåt. Med över 10 års erfarenhet inom byggbranschen specialiserar vi oss på hållbara bygglösningar och effektiv projektledning.',
    orientation: 'left',
  },
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <ImageText
        image={{
          src: '/assets/reach_hand_desktop.jpg',
          alt: 'Reach Management'
        }}
        title="Om Reach Management"
        content={[
          'Reach Management är ett konsultföretag inom bygg- och fastighetsbranschen. Vi är din partner genom hela byggprocessen - från idé till färdigställd produkt.',
          'Vårt namn symboliserar vår filosofi: <strong>Reach</strong> står för att sträcka sig bortom det förväntade, och <strong>Management</strong> representerar vår expertis inom projektledning.'
        ]}
        orientation="left"
      />
      
      <ImageText
        image={{
          src: '/assets/titanic.jpg',
          alt: 'Titanic'
        }}
        title="Därför Reach Management"
        content={[
          'Hos oss får du en partner som tar ansvar för helheten. Vi utmanar, inspirerar och driver projekt med ärlighet, struktur och innovation.',
          'Vi tror på att bygga långsiktiga relationer med våra kunder och leverantörer.'
        ]}
        orientation="right"
      />
      
      <ImageText
        image={{
          src: '/assets/rise.png',
          alt: 'Rise Certification'
        }}
        title="Certifieringar"
        content="Vi arbetar enligt branschstandarder och lagkrav. Vi är certifierade enligt Plan- och bygglagen (PBL) och säkerställer att ditt projekt uppfyller alla lagkrav."
        orientation="center"
      />
    </div>
  ),
};
