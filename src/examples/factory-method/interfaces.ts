export interface Vehicle {
  props: Props
  isOn: boolean
  turnOff(): void
  turnOn(): void
  move(): void
  brake(): void
  park(): void
}

export type Props = {
  brand: string
  model: string
  color: Colors
}

export type Colors = (typeof _colors)[number]
const _colors = ['Red', 'Blue', 'Black'] as const
