import { runCommand } from '../../utils'
import { CreateCarFactory, CreateMotorCycleFactory, CreateTruckFactory } from './vehicles'
runCommand('clear')
console.log('Welcome to Factory Method')

const nissan = new CreateCarFactory()
const carOne = nissan.createVehicle()

carOne.turnOn()
carOne.move()

const honda = new CreateMotorCycleFactory() 
const motorcycleOne = honda.createVehicle()
motorcycleOne.turnOn()


const international = new CreateTruckFactory()
const truckOne = international.createVehicle()
truckOne.turnOn()
