import { createMachine, assign, DoneInvokeEvent, Interpreter } from 'xstate'
import { getUser } from '../apis/user'
import { UserDTO } from '../dtos/user-dto'
import { XStateMachine } from '../types/xstate'
import { useIntepretedMachine } from '../utils/useInterpretedMachine'

export type UserMachineContext = Partial<UserDTO>

export enum UserMachineAction {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export type UserMachineEvent =
  | { type: UserMachineAction.LOGIN; user: string; password: string }
  | { type: UserMachineAction.LOGOUT }

export enum UserMachineState {
  LOGGED_OUT = 'LOGGED_OUT',
  LOADING = 'LOADING',
  LOGGED_IN = 'LOGGED_IN',
}

const userMachine: XStateMachine<
  UserMachineContext,
  UserMachineState,
  UserMachineEvent
> = createMachine({
  initial: UserMachineState.LOGGED_OUT,
  context: {},
  states: {
    [UserMachineState.LOGGED_OUT]: {
      on: {
        [UserMachineAction.LOGIN]: UserMachineState.LOADING,
      },
    },
    [UserMachineState.LOADING]: {
      invoke: {
        src: () => getUser(),
        onDone: {
          target: UserMachineState.LOGGED_IN,
          actions: assign((ctx, event: DoneInvokeEvent<UserDTO>) => event.data),
        },
        onError: UserMachineState.LOGGED_OUT,
      },
    },
    [UserMachineState.LOGGED_IN]: {
      on: {
        [UserMachineAction.LOGOUT]: {
          target: UserMachineState.LOGGED_OUT,
          actions: assign((ctx) => ({ id: undefined, name: undefined })),
        },
      },
    },
  },
})

const interpreter = new Interpreter(userMachine).start()

export const useUserMachine = () =>
  useIntepretedMachine<UserMachineState, UserMachineContext, UserMachineEvent>(
    interpreter
  )
