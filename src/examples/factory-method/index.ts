import { runCommand } from '../../utils'
runCommand('clear')

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
  createVehicle(): Vehicle {
    return new Car()
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
      return new CarFactory()
    case 'Motorcycle':
      return new MotorcycleFactory()
    case 'Truck':
      return new TruckFactory()
    default:
      throw new Error(`Type of vehicle unknown: ${type}`)
  }
}

const VehicleType = 'Truck'
const factory = CreateFactory(VehicleType)
const Vehicle = factory.createVehicle()

Vehicle.move()
Vehicle.brake()
Vehicle.park()
