import React from 'react'

export interface YonTransitionProps {
  /**
   * 用于控制进厂、出厂之间的转换
   */
  in?: boolean
  /**
   * 子组件
   */
  children?: React.ReactNode
  /**
   * 动画执行时间
   */
  timeout?: number
  /**
   * 进场动画开始执行时调用
   */
  onEnter?: (node: Element, isAppearing: boolean) => void
  /**
   * 进场动画执行中调用
   */
  onEntering?: (node: Element, isAppearing: boolean) => void
  /**
   * 进场动画执行完毕时调用
   */
  onEntered?: (node: Element, isAppearing: boolean) => void
  /**
   * 退场动画开始执行时调用
   */
  onLeave?: (node: Element) => void
  /**
   * 退场动画执行中调用
   */
  onLeaveing?: (node: Element) => void
  /**
   * 退场动画结束时调用
   */
  onLeaved?: (node: Element) => void
}

export enum YonTransitionStatus {
  unmount = 'unmount',
  enter = 'enter',
  entering = 'entering',
  entered = 'entered',
  leave = 'leave',
  leaveing = 'leaveing',
  leaved = 'leaved'
}
