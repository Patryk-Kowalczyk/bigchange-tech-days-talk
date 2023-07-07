import type { Meta, StoryObj } from '@storybook/react';
import { Memo } from './Memo';

const meta = {
  title: '3. Memoization/3.4 Memo Function',
  component: Memo,
  tags: ['autodocs']
} satisfies Meta<typeof Memo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
