import {Meta, StoryObj} from '@storybook/react'
import {expect, within} from '@storybook/test'
import {Card} from './Card'

const meta = {
  title: 'atoms/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof Card>

export default meta

export const Story: StoryObj<typeof Card> = {
  args: {
    children: <span>children</span>
  },
  play: async ({canvasElement}) => {
    // https://storybook.js.org/docs/writing-tests/component-testing
    const canvas = within(canvasElement)
    await expect(canvas.getByText('children')).toBeInTheDocument()
  }
}
