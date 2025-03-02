import React from 'react'
import {Card as MuiCard, CardActionArea as MuiCardActionArea} from '@mui/material'

interface CardProps {
  children: React.ReactNode
}

interface ActionCardProps extends CardProps {
  onClick?: () => void
}

/**
 * Card
 * @param {CardProps} props props
 * @returns {React.JSX.Element} element
 */
export const Card = (props: CardProps): React.JSX.Element => {
  return <MuiCard>{props.children}</MuiCard>
}

/**
 * ActionCard
 * @param {ActionCardProps} props props
 * @returns {React.JSX.Element} element
 */
export const ActionCard = (props: ActionCardProps): React.JSX.Element => {
  return (
    <Card>
      <MuiCardActionArea onClick={props.onClick}>{props.children}</MuiCardActionArea>
    </Card>
  )
}
