import type { Meta, StoryObj } from '@storybook/react';
import { StateObject } from './StateObject';

const meta = {
  title: '2. Rendering/2.3 State with object',
  component: StateObject,
  tags: ['autodocs']
} satisfies Meta<typeof StateObject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
