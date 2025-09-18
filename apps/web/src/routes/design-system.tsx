import { createFileRoute } from '@tanstack/react-router';
import DesignSystemTest from '../pages/DesignSystemTest';

export const Route = createFileRoute('/design-system')({
  component: DesignSystemTest,
});

export default DesignSystemTest;
