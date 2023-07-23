export interface IButton {
  name: string
  className?: string
  onChange?: (e:React.ChangeEvent<HTMLButtonElement>) => void
}