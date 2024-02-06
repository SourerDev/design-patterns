import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

class Truck extends BaseVehicle {
  type: string = 'Truck'
}

export class CreateTruckFactory extends CreateVehicleFactory {
  type: string = 'Truck'

  createVehicle(): Vehicle {
    return new Truck()
  }
}
