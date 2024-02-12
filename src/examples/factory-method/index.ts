import { runCommand } from '../../utils'
import { Colors } from './interfaces'
import {
  CreateCarFactory,
  CreateMotorCycleFactory,
  CreateTruckFactory,
} from './vehicles'
runCommand('clear')
console.log('Welcome to Factory Method')

const nissan = new CreateCarFactory('nissan')
const carOne = nissan.createVehicle('NISSAN-RS45', 'Blue')
const basicInfo = carOne.getBasicInformation()
carOne.setDoors(2)
carOne.setFuelType('Electric')

const Info = carOne.getInformation()

console.log('Basic Information:', basicInfo)
console.log('Information:', Info)

const yamaha = new CreateMotorCycleFactory('Yamaha')
const motoOne = yamaha.createVehicle('XTZ 250', 'Blue')

motoOne.setOffRoadCapability(true)
console.log('Information: ', motoOne.getInformation())

const international = new CreateTruckFactory('International')
const truckOne = international.createVehicle('INT 34N', 'Black')

truckOne.setTrailerType('crane')
truckOne.setDimensions({ _length: 5, width: 2, height: 3 })
console.log('Information: ', truckOne.getInformation())
