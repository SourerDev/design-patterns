import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicle } from './vehicle'

class Motorcycle extends BaseVehicle{
  type: string = 'Motorcycle'
}

export class CreateMotorCycle extends CreateVehicle {
  createVehicle(): Vehicle {
    return new Motorcycle()
  }
}
