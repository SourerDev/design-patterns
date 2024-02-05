import fs from 'fs'
import { runCommand, runInquirer } from './utils'
const publicFolderPath = './src/examples'

runCommand('clear')

const folders = fs
  .readdirSync(publicFolderPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
const folderList = folders.map((dirent) => {
  const name = dirent.name.split('-').join(' ')
  return name.charAt(0).toUpperCase() + name.slice(1)
})

let exit = false

runInquirer().then((prompt) =>
  prompt({
    type: 'list',
    name: 'pattern',
    message: 'Select the design pattern you want to run:',
    default: folderList[0],
    choices: folderList,
  }).then((answer) => {
    runCommand('clear')
    let name: string = answer.pattern
    name = name.charAt(0).toLowerCase() + name.slice(1).split(' ').join('-')
    runCommand(`ts-node-dev ./src/examples/${name}`)
  })
)

