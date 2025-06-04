import {useState} from 'react'
import {Meta, StoryObj} from '@storybook/react'
import {expect, within} from '@storybook/test'
import {Showcase} from './Showcase'

const meta = {
  title: 'molecules/Showcase',
  component: Showcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {},
  render: (args) => {
    const [page, setPage] = useState<number>(args.page)
    const onChange = (page: number) => {
      setPage(page)
    }

    return <Showcase {...args} page={page} onChange={onChange} />
  }
} satisfies Meta<typeof Showcase>

export default meta

export const Story: StoryObj<typeof Showcase> = {
  args: {
    page: 2,
    count: 3,
    height: 200,
    items: [
      {id: '1', children: <span>1</span>},
      {id: '2', children: <span>2</span>},
      {id: '3', children: <span>3</span>},
      {id: '4', children: <span>4</span>},
      {id: '5', children: <span>5</span>},
      {id: '6', children: <span>6</span>},
      {id: '7', children: <span>7</span>},
      {id: '8', children: <span>8</span>},
      {id: '9', children: <span>9</span>}
    ]
  },
  play: async ({canvasElement}) => {
    // https://storybook.js.org/docs/writing-tests/component-testing
    const canvas = within(canvasElement)
    await expect(canvas.getByText('4')).toBeInTheDocument()
    await expect(canvas.getByText('5')).toBeInTheDocument()
    await expect(canvas.getByText('6')).toBeInTheDocument()
  }
}

export const Example: StoryObj<typeof Showcase> = {
  args: {
    page: 1,
    count: 3,
    height: 300,
    gridSize: {xs: 12, sm: 4},
    items: [
      {id: '1', children: <span>1</span>, image: 'https://picsum.photos/id/1/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '2', children: <span>2</span>, image: 'https://picsum.photos/id/2/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '3', children: <span>3</span>, image: 'https://picsum.photos/id/3/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '4', children: <span>4</span>, image: 'https://picsum.photos/id/4/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '5', children: <span>5</span>, image: 'https://picsum.photos/id/5/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '6', children: <span>6</span>, image: 'https://picsum.photos/id/6/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '7', children: <span>7</span>, image: 'https://picsum.photos/id/7/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '8', children: <span>8</span>, image: 'https://picsum.photos/id/8/100/100', height: 100, actions: <span>ActionArea</span>},
      {id: '9', children: <span>9</span>, image: 'https://picsum.photos/id/9/100/100', height: 100, actions: <span>ActionArea</span>}
    ]
  }
}
