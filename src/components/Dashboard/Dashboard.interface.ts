import { NavigateFunction } from "react-router-dom"

export interface Attrib {
  name: string
  value: number
  unit: string
}

export interface Data {
  title: string
  attributes: Attrib[]
}

export interface IDashboard {
  navigate: NavigateFunction
}

export interface IDashboardState {
  data: Data[]
  curPage: number
  totPage: number
}

