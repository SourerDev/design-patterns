import { Colors, Props, Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

const FuelType = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'] as const

class Car extends BaseVehicle {
  type: string = 'Car'
  private doors: number = 2
  private fuelType: (typeof FuelType)[number] = 'Gasoline'
  private maxSpeed: number = 150
  private loadCapacity: number = 50

  constructor(public props: Props) {
    super(props)
  }

  setDoors(doors: number): void {
    this.doors = doors
  }
  setFuelType(fuelType: (typeof FuelType)[number]) {
    this.fuelType = fuelType
  }
  setMaxSpeed(maxSpeed: number) {
    this.maxSpeed = maxSpeed
  }
  setLoadCapacity(loadCapacity: number) {
    this.loadCapacity = loadCapacity
  }

  getInformation(): object {
    return {
      ...this.props,
      doors: this.doors,
      fuelType: this.fuelType,
      maxSpeed: this.maxSpeed,
      loadCapacity: this.loadCapacity,
    }
  }
}

export class CreateCarFactory extends CreateVehicleFactory {
  type: string = 'Car'
  constructor(private name: string) {
    console.log('Nissan is open')
    super()
  }

  createVehicle(model: string, color: Colors): Vehicle & Car {
    return new Car({ brand: this.name, model, color })
  }

  getName(): string {
    return this.name
  }
}
