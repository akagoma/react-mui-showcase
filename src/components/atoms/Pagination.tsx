import React from 'react'
import {Pagination as MuiPagination, PaginationProps as MuiPaginationProps} from '@mui/material'

export interface PaginationProps {
  count: MuiPaginationProps['count']
  onChange?: (page: number) => void
  disabled?: MuiPaginationProps['disabled']
  color?: MuiPaginationProps['color']
  shape?: MuiPaginationProps['shape']
  variant?: MuiPaginationProps['variant']
  size?: MuiPaginationProps['size']
}

/**
 * Pagination
 * @param {PaginationProps} props props
 * @returns {React.JSX.Element} element
 */
export const Pagination = (props: PaginationProps): React.JSX.Element => {
  const onChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (props.onChange) {
      props.onChange(page)
    }
  }

  return <MuiPagination count={props.count} onChange={onChange} disabled={props.disabled} color={props.color} shape={props.shape} variant={props.variant} size={props.size} />
}
