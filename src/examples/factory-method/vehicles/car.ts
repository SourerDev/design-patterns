import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicle } from './vehicle'

class Car extends BaseVehicle {
  type: string = 'Car'
}

export class CreateCar extends CreateVehicle {
  createVehicle(): Vehicle {
    return new Car()
  }
}
