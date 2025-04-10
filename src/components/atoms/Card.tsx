import React from 'react'
import {CardActions, CardContent, CardMedia, CardMediaProps, Card as MuiCard, CardActionArea as MuiCardActionArea} from '@mui/material'

export interface CardProps {
  children: React.ReactNode
  image?: CardMediaProps['image']
  height?: number
  actions?: React.ReactNode
  onClick?: () => void
}

/**
 * Card
 *
 * @param {CardProps} props props
 * @returns {React.JSX.Element} element
 */
export const Card = (props: CardProps): React.JSX.Element => {
  const media = props.image ? <CardMedia component='img' image={props.image} sx={{height: props.height}}></CardMedia> : <></>
  const actions = props.actions ? <CardActions>{props.actions}</CardActions> : <></>
  const contents = <CardContent>{props.children}</CardContent>

  const body = props.onClick ? (
    <MuiCardActionArea onClick={props.onClick}>
      {media}
      {contents}
    </MuiCardActionArea>
  ) : (
    <>
      {media}
      {contents}
    </>
  )

  return (
    <MuiCard>
      {body}
      {actions}
    </MuiCard>
  )
}
