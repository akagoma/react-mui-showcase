import {Pagination as MuiPagination, PaginationProps as MuiPaginationProps} from '@mui/material'
import React from 'react'

interface PaginationProps {
  count: number
  disabled?: boolean
  color?: MuiPaginationProps['color']
  shape?: MuiPaginationProps['shape']
  variant?: MuiPaginationProps['variant']
  size?: MuiPaginationProps['size']
}

/**
 * Pagination
 *
 * @param {PagenationProps} props
 * @return {JSX.Element} Pagination
 */
export const Pagination = (props: PaginationProps): React.JSX.Element => {
  return <MuiPagination count={props.count} color={props.color} variant={props.variant} shape={props.shape} size={props.size} disabled={props.disabled} />
}
