import type { Meta, StoryObj } from '@storybook/react';
import { ExpensiveComponentOptimization } from './ExpensiveComponentOptimization';

const meta = {
  title: '3. Memoization/3.2 Expensive Component Optimization',
  component: ExpensiveComponentOptimization,
  tags: ['autodocs']
} satisfies Meta<typeof ExpensiveComponentOptimization>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
