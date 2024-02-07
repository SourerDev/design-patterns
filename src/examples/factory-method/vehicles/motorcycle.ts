import { Colors } from '../interfaces'
import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

class Motorcycle extends BaseVehicle {
  type: string = 'Motorcycle'
}

export class CreateMotorCycleFactory extends CreateVehicleFactory {
  type: string = 'Motorcycle'
  constructor(private name: string) {
    super()
  }
  createVehicle(model: string, color: Colors): Vehicle {
    return new Motorcycle({ brand: this.name, model, color })
  }
}
