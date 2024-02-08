import { Colors, Props } from '../interfaces'
import { Vehicle } from '../interfaces'
import { BaseVehicle, CreateVehicleFactory } from './vehicle'

type TransmissionType = (typeof transmissionType)[number]
const transmissionType = ['Manual', 'Automatic'] as const
class Motorcycle extends BaseVehicle {
  type: string = 'Motorcycle'
  private engineDisplacement: number = 125
  private transmissionType: TransmissionType = 'Manual'
  private weight: number = 125
  private offRoadCapability: boolean = false

  constructor(public props: Props) {
    super(props)
  }

  setEngineDisplacement(engineDisplacement: number) {
    this.engineDisplacement = engineDisplacement
  }

  setTransmissionType(transmissionType: TransmissionType) {
    this.transmissionType = transmissionType
  }
  setWeight(weight: number) {
    this.weight = weight
  }
  setOffRoadCapability(offRoadCapability: boolean) {
    this.offRoadCapability = offRoadCapability
  }

  getInformation(): object {
    return {
      ...this.props,
      engineDisplacement: this.engineDisplacement,
      transmissionType: this.transmissionType,
      weight: this.weight,
      offRoadCapability: this.offRoadCapability,
    }
  }
}

export class CreateMotorCycleFactory extends CreateVehicleFactory {
  type: string = 'Motorcycle'
  constructor(private name: string) {
    console.log()
    console.log(name + ' is open.')

    super()
  }
  createVehicle(model: string, color: Colors): Vehicle & Motorcycle {
    return new Motorcycle({ brand: this.name, model, color })
  }
}
