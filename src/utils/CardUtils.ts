import { Slide } from '../models/Slide'

export class NumberConvertor {
  static toLetterNotation(value: number): string {
    let str = value.toString()
    let count = str.length
    let result = ''
    let i = 0

    switch (count) {
      case 4:
      case 5:
      case 6:
        for (i; i < count - 3; i++) {
          result += str.charAt(i)
        }
        result += '.' + str.charAt(i + 1) + 'K'
        return result
      case 7:
      case 8:
      case 9:
        for (i; i < count - 6; i++) {
          result += str.charAt(i)
        }
        result += '.' + str.charAt(i) + 'M'
        return result
      default:
        return str
    }
  }
}

export const sortSlideByLocation = (a: Slide | null, b: Slide | null): number => {
  if (a === undefined || a === null || b === undefined || b === null) {
    return 0
  }

  return a.locationInDeck - b.locationInDeck
}
