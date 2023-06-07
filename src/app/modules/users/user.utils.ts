import { User } from './user.model'

export const findLastUserId = async () => {
  const lastuser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastuser
}
export const generateUserId = async () => {
  const currentID = await findLastUserId()
  let lastID = 0

  if (currentID) {
    lastID = parseInt(currentID.id)
    if (isNaN(lastID)) {
      lastID = 0
    }
  }

  const incrementedId = (lastID + 1).toString().padStart(5, '0')
  return incrementedId
}
