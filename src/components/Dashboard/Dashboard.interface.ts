export interface Attrib {
  name: string
  value: number
  unit: 'm' | 'kg'
}

export interface Data {
  title: string
  attributes: Attrib[]
}

export interface IDashboard {
  data: Data[]
}