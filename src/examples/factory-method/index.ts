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
console.log(nissan.getName())
const carOne = nissan.createVehicle('NISSAN-RS45', Colors.BLACK)

carOne.turnOn()
console.log(carOne.props.model)

/*carOne.move()
carOne.brake()
carOne.park()

const honda = new CreateMotorCycleFactory() 
const motorcycleOne = honda.createVehicle()
motorcycleOne.turnOn()


const international = new CreateTruckFactory()
const truckOne = international.createVehicle()
truckOne.turnOn() */
