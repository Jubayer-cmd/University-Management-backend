import { IUser } from './user.interface'
import { User } from './user.model'

const createuser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Faild to create User!')
  }
  return createUser
}

export default { createuser }
