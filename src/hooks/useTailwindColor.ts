/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import resolveConfig from 'tailwindcss/resolveConfig'

import config from '../../tailwind.config'

export const useTailwindColor = (colorName: string, colorValue: number) => {
  const fullConfig = resolveConfig(config)

  const colorArr = (fullConfig.theme as any).colors[colorName] as string[]
  const color = colorArr[colorValue]

  return color
}
