import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './ReactElements';

const meta = {
  title: '1. Rendering/1.2 React Elements',
  component: Page,
  tags: ['autodocs']
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
