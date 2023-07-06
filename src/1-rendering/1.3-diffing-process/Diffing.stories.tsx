import type { Meta, StoryObj } from '@storybook/react';
import { Diffing } from './Diffing';
import { DiffingFixed } from './DiffingFixed';

const meta = {
  title: '1. Rendering/1.3 Diffing Process',
  component: Diffing,
  tags: ['autodocs']
} satisfies Meta<typeof Diffing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fixed = DiffingFixed.bind({});
