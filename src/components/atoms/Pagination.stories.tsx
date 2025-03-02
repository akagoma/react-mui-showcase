import {Meta, StoryObj} from '@storybook/react'
import {expect, within} from '@storybook/test'
import {Pagination} from './Pagination'

const meta = {
  title: 'atoms/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof Pagination>

export default meta

export const Story: StoryObj<typeof Pagination> = {
  args: {
    count: 10,
    onChange: (page: number) => {
      console.log(page)
    }
  },
  play: async ({canvasElement}) => {
    // https://storybook.js.org/docs/writing-tests/component-testing
    const canvas = within(canvasElement)
    await expect(canvas.getByText('1')).toBeInTheDocument()
    await expect(canvas.getByText('10')).toBeInTheDocument()
  }
}
