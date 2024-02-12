import { Colors, Props } from '../interfaces'
import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

const trailerType = ['platform', 'cistern', 'crane'] as const
type TrailerType = (typeof trailerType)[number]
class Truck extends BaseVehicle {
  type: string = 'Truck'
  private trailerType: TrailerType = 'platform'
  private maximumLoadWeight: number = 10000
  private dimensions: {
    _length?: number
    width?: number
    height?: number
  } = {
    _length: 8,
    width: 2.5,
    height: 3.5,
  }
  private fuelConsumption: {
    L: number
    Km?: number
  } = {
    L: 25,
    Km: 100,
  }

  constructor(public props: Props) {
    super(props)
  }

  setTrailerType(trailerType: TrailerType) {
    this.trailerType = trailerType
  }
  setMaximumLoadWeight(maximumLoadWeight: number) {
    this.maximumLoadWeight = maximumLoadWeight
  }
  setDimensions(dimensions: typeof this.dimensions) {
    if (dimensions.height) this.dimensions.height = dimensions.height
    if (dimensions.width) this.dimensions.width = dimensions.width
    if (dimensions._length) this.dimensions._length = dimensions._length
  }
  setFuelConsumption(fuelConsumption: typeof this.fuelConsumption) {
    this.fuelConsumption.L = fuelConsumption.L
  }

  getInformation() {
    return {
      ...this.props,
      trailerType: this.trailerType,
      maximumLoadWeight: this.maximumLoadWeight,
      dimensions: this.dimensions,
      fuelConsumption: this.fuelConsumption,
    }
  }
}

export class CreateTruckFactory extends CreateVehicleFactory {
  type: string = 'Truck'
  constructor(private name: string) {
    console.log()
    console.log(name + ' is open.')
    super()
  }
  createVehicle(model: string, color: Colors): Vehicle & Truck {
    return new Truck({ brand: this.name, model, color })
  }
}
