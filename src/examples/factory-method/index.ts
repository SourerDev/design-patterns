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
