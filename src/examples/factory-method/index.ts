import { runCommand } from '../../utils'
import { CreateCar, CreateMotorCycle } from './vehicles'
runCommand('clear')
console.log('Hola')

const new_car = new CreateCar()
new_car.turnOnVehicle()
new_car.turnOffVehicle()

const new_motorcycle = new CreateMotorCycle()
new_motorcycle.turnOnVehicle()

/* 
type CarProps = {
  doors?: number
  getDoors(): number
}
interface Vehicle {
  move(): void
  brake(): void
  park(): void
}
abstract class BaseVehicle implements Vehicle {
  abstract type: string

  move(): void {
    console.log(`The ${this.type} is moving.`)
  }

  brake(): void {
    console.log(`The ${this.type} is braking.`)
  }

  park(): void {
    console.log(`The ${this.type} is parking.`)
  }
}

class Car extends BaseVehicle {
  type = 'Car'

  constructor(public doors: number) {
    super()
  }
  public getDoors(): number {
    return this.doors
  }
}

class Motorcycle extends BaseVehicle {
  type = 'Motorcycle'
}

class Truck extends BaseVehicle {
  type = 'Truck'
}

interface VehicleFactory {
  createVehicle(): Vehicle
}

abstract class BaseFactoryVehicle implements VehicleFactory {
  abstract type: string

  abstract createVehicle(): Vehicle
}

class CarFactory extends BaseFactoryVehicle {
  type = 'car'
  createVehicle(): Vehicle & CarProps {
    return new Car(2)
  }

  getDoors(): number {
    return 2
  }
}

class MotorcycleFactory extends BaseFactoryVehicle {
  type = 'Motorcycle'

  createVehicle(): Vehicle {
    return new Motorcycle()
  }
}

class TruckFactory extends BaseFactoryVehicle {
  type = 'Truck'

  createVehicle(): Vehicle {
    return new Truck()
  }
}

function CreateFactory(type: string): VehicleFactory {
  switch (type) {
    case 'Car':
      return new CarFactory(2)
    case 'Motorcycle':
      return new MotorcycleFactory()
    case 'Truck':
      return new TruckFactory()
    default:
      throw new Error(`Type of vehicle unknown: ${type}`)
  }
}

const VehicleType = 'Car'
const factory = CreateFactory(VehicleType)
const Vehicle = factory.createVehicle()

Vehicle.move()
Vehicle.brake()
Vehicle.park()
 */
