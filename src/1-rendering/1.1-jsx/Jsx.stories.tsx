import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Jsx';
import { Button } from '@/ui';

const meta = {
  title: '1. Rendering/1.1 JSX',
  component: Page,
  tags: ['autodocs']
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LoggedReactElementObject = () => {
  console.log(<Button>Children</Button>);
  console.log(
    <div>
      <span>Text</span>
    </div>
  );
  return <Page />;
};
