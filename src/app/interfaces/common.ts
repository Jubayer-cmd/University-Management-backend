import { IGenericErrorMessage } from './errot'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMeassage: IGenericErrorMessage[]
}
