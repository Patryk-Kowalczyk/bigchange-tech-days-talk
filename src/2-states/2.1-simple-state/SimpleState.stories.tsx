import type { Meta, StoryObj } from '@storybook/react';
import { SimpleState } from './SimpleState';

const meta = {
  title: '2. Rendering/2.1 Simple State',
  component: SimpleState,
  tags: ['autodocs']
} satisfies Meta<typeof SimpleState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
