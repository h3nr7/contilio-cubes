export interface IButton {
  name: string
  className?: string
  disabled?: boolean
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
  onChange?: (e:React.ChangeEvent<HTMLButtonElement>) => void
}