import { Colors, Props, Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

class Car extends BaseVehicle {
  type: string = 'Car'
  constructor(public props: Props) {
    super(props)
  }
}

export class CreateCarFactory extends CreateVehicleFactory {
  type: string = 'Car'
  constructor(private name: string) {
    super()
  }
  createVehicle(model: string, color: Colors): Vehicle & Car {
    return new Car({ brand: this.name, model, color })
  }

  getName(): string {
    return this.name
  }
}
