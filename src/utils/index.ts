import { execSync } from 'child_process'
const inquirer = import('inquirer')

export async function runInquirer() {
  return (await inquirer).default.prompt
}
export function runCommand(command: string) {
  const output = execSync(command)
  console.log(output.toString())
}
