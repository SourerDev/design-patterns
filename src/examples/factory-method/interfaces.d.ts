export interface Vehicle {
  isOn: boolean
  turnOff(): void
  turnOn(): void
  move(): void
  brake(): void
  park(): void
}
