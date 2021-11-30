import { DeepOmit } from '../utils/DeepOmit'
import { GetSlideQuery } from '../API'

export type Slide = DeepOmit<Exclude<GetSlideQuery['getSlide'], null>, '__typename'>
