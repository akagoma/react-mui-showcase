import {Meta, StoryObj} from '@storybook/react'
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
    count: 10
  }
}
