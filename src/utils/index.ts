import { execSync } from 'child_process'

export function runCommand(command: string) {
  const output = execSync(command)
  console.log(output.toString())
}
