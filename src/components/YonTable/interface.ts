import type * as React from 'react'

export interface ColumnType<CurrentRowData> {
  name?: string
  key?: any
  width?: string
  align?: 'left' | 'right' | 'center'
  className?: string
  isFixedLeft?: boolean
  isFixedRight?: boolean
  isMust?: boolean
  render?: (
    value?: any,
    currentRowData?: CurrentRowData,
    currentColumn?: any
  ) => React.ReactNode
}
