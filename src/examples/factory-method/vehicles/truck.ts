import { Colors } from '../interfaces'
import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

class Truck extends BaseVehicle {
  type: string = 'Truck'
}

export class CreateTruckFactory extends CreateVehicleFactory {
  type: string = 'Truck'
  constructor(private name: string) {
    super()
  }
  createVehicle(model: string, color: Colors): Vehicle {
    return new Truck({ brand: this.name, model, color })
  }
}
