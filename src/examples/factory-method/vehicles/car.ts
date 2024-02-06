import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

class Car extends BaseVehicle {
  type: string = 'Car'

}

export class CreateCarFactory extends CreateVehicleFactory {
  type: string = 'Car'
  createVehicle(): Vehicle {
    return new Car()
  }
}
