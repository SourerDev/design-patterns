import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

class Motorcycle extends BaseVehicle{
  type: string = 'Motorcycle'
}

export class CreateMotorCycleFactory extends CreateVehicleFactory {
  type: string = 'Motorcycle'

  createVehicle(): Vehicle {
    return new Motorcycle()
  }
}
