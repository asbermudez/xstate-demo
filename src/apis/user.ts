import { UserDTO } from '../dtos/user-dto'

export async function getUser(): Promise<UserDTO> {
  return new Promise((resolve) =>
    // Added two seconds delay to simulate BE
    setTimeout(() => resolve({ id: 'mockId', name: 'Username' }), 2000)
  )
}
