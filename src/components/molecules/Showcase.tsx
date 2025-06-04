import React from 'react'
import {Box, Grid, GridProps} from '@mui/material'
import {Card, CardProps} from '../atoms/Card'
import {Pagination, PaginationProps} from '../atoms/Pagination'

interface ShowcaseProps {
  page: number
  count: number
  height?: 'auto' | number
  onChange?: (page: number) => void
  onSelect?: (id: string) => void
  color?: PaginationProps['color']
  shape?: PaginationProps['shape']
  variant?: PaginationProps['variant']
  size?: PaginationProps['size']
  gridSize?: GridProps['size']
  items: Items[]
}

interface Items {
  id: string
  children: CardProps['children']
  image?: CardProps['image']
  height?: CardProps['height']
  actions?: CardProps['actions']
  onClick?: CardProps['onClick']
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

  // GridのmarginBottomはspacing=2相当のサイズ
  return (
    <Box
      sx={{
        height: props.height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Grid container spacing={2} marginBottom='16px'>
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
            <Grid key={e.id} size={props.gridSize}>
              <Card image={e.image} onClick={props.onSelect && e.onClick ? handleClick : undefined} actions={e.actions} height={e.height}>
                {e.children}
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Pagination count={Math.ceil(props.items.length / props.count)} page={props.page} onChange={props.onChange} color={props.color} shape={props.shape} variant={props.variant} size={props.size}></Pagination>
    </Box>
  )
}
