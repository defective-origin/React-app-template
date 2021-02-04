export interface IGeneralProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export type IPropsWithOptions<TOptions extends {}> = TOptions & {
  options?: TOptions
}
