import { Vehicle, Colors, Props } from '../interfaces'

export abstract class CreateVehicleFactory {
  abstract type: string
  abstract createVehicle(model: string, color: Colors): Vehicle
}
export abstract class BaseVehicle implements Vehicle {
  abstract type: string
  public isOn: boolean = false
  constructor(public props: Props) {
    console.log(`A new ${this.props.brand} model has been created`);
    
  }

  turnOn(): void {
    if (this.isOn) console.log(`${this.type} is already on`)
    else {
      this.isOn = true
      console.log(`${this.type} on: ${this.isOn}`)
    }
  }
  turnOff(): void {
    if (this.isOn) {
      this.isOn = false
      console.log(`${this.type} off: ${this.isOn}`)
    } else console.log(`${this.type} isn't running`)
  }
  move(): void {
    if (this.isOn) console.log(`${this.type} is moving`)
    else {
      this.turnOn()
      console.log(`${this.type} is moving`)
    }
  }
  brake(): void {
    console.log(`${this.type} is stop`)
  }
  park(): void {
    console.log(`${this.type} is parking`)
  }

  getBasicInformation(): object {
    return {
      ...this.props,
    }
  }
}
