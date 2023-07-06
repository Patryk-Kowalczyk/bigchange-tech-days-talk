import type { Meta, StoryObj } from '@storybook/react';
import { SimpleReducer } from './SimpleReducer';

const meta = {
  title: '2. Rendering/2.2 Simple Reducer',
  component: SimpleReducer,
  tags: ['autodocs']
} satisfies Meta<typeof SimpleReducer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
