import React from 'react'
import {Grid} from '@mui/material'
import {Card, CardProps} from '../atoms/Card'
import {Pagination, PaginationProps} from '../atoms/Pagination'

interface ShowcaseProps {
  page: number
  count: number
  onChange?: (page: number) => void
  onSelect?: (id: string) => void
  color?: PaginationProps['color']
  shape?: PaginationProps['shape']
  variant?: PaginationProps['variant']
  size?: PaginationProps['size']
  items: Items[]
}

interface Items {
  id: string
  children: CardProps['children']
  onClick?: CardProps['onClick']
  image?: CardProps['image']
}

/**
 * Showcase
 *
 * @param {ShowcaseProps} props props
 * @returns {React.JSX.Element} element
 */
export const Showcase = (props: ShowcaseProps): React.JSX.Element => {
  const startIndex = (props.page - 1) * props.count
  const endIndex = Math.min(props.page * props.count, props.items.length) - 1
  const items = props.items.slice(startIndex, endIndex + 1)

  return (
    <>
      <Grid container spacing={2}>
        {items.map((e) => {
          const handleClick = () => {
            if (props.onSelect) {
              props.onSelect(e.id)
            }
            if (e.onClick) {
              e.onClick()
            }
          }

          return (
            <Grid key={e.id} size={{xs: 12, sm: 6, md: 4}}>
              <Card image={e.image} onClick={handleClick}>
                {e.children}
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Pagination count={props.items.length / props.count}></Pagination>
    </>
  )
}
