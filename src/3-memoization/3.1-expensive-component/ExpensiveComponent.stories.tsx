import type { Meta, StoryObj } from '@storybook/react';
import { ExpensiveComponent } from './ExpensiveComponent';

const meta = {
  title: '3. Memoization/3.1 Expensive Component',
  component: ExpensiveComponent,
  tags: ['autodocs']
} satisfies Meta<typeof ExpensiveComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
