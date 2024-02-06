import { Vehicle } from '../interfaces'

export abstract class CreateVehicle {
  protected vehicle: Vehicle
  abstract createVehicle(): Vehicle
  constructor() {
    this.vehicle = this.createVehicle()
  }
  turnOnVehicle(): void {
    if (this.vehicle.isOn) console.log('Car is already on')
    else {
      this.vehicle.isOn = true
      this.vehicle.turnOn()
    }
  }
  turnOffVehicle(): void {
    if (this.vehicle.isOn) {
      this.vehicle.isOn = false
      this.vehicle.turnOff()
    } else console.log("Car isn't running")
  }
}
export abstract class BaseVehicle implements Vehicle {
  abstract type: string
  public isOn: boolean = false

  turnOn(): void {
    console.log(`${this.type} on: ${this.isOn}`)
  }
  turnOff(): void {
    console.log(`${this.type} off: ${this.isOn}`)
  }
}
