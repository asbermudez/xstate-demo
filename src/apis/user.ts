import { UserDTO } from '../dtos/user-dto'

export async function getUser(): Promise<UserDTO> {
  return Promise.resolve({ id: 'mockId', name: 'Username' })
}
