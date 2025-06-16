import {Meta, StoryObj} from '@storybook/react'
import {expect, fn, userEvent, within} from '@storybook/test'
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

export const Image: StoryObj<typeof Card> = {
  args: {
    children: <span>children</span>,
    image: 'https://picsum.photos/id/1/100/100'
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('children')).toBeInTheDocument()
    await expect(canvas.getByRole('img')).toBeInTheDocument()
    await expect(canvas.getByRole('img')).toHaveAttribute('src', 'https://picsum.photos/id/1/100/100')
  }
}

export const Actions: StoryObj<typeof Card> = {
  args: {
    children: <span>children</span>,
    actions: <span>actions</span>
  },
  play: async ({canvasElement}) => {
    // https://storybook.js.org/docs/writing-tests/component-testing
    const canvas = within(canvasElement)
    await expect(canvas.getByText('children')).toBeInTheDocument()
    await expect(canvas.getByText('actions')).toBeInTheDocument()
  }
}

export const OnClick: StoryObj<typeof Card> = {
  args: {
    children: <span>children</span>,
    onClick: fn()
  },
  play: async ({canvasElement, args}) => {
    // https://storybook.js.org/docs/writing-tests/component-testing
    const canvas = within(canvasElement)
    await expect(canvas.getByText('children')).toBeInTheDocument()

    const user = userEvent.setup()

    await user.click(canvas.getByText('children'))
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  }
}
