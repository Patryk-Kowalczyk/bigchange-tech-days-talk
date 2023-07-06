import type { Meta, StoryObj } from '@storybook/react';
import { CallbackMemoization } from './CallbackMemoization';

const meta = {
  title: '3. Memoization/3.3 Callback Memoization',
  component: CallbackMemoization,
  tags: ['autodocs']
} satisfies Meta<typeof CallbackMemoization>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
