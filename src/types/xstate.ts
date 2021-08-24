import { EventObject, StateMachine, StateValue } from 'xstate'

export type XStateMachine<
  TContext,
  TStates extends StateValue,
  TEvents extends EventObject
> = StateMachine<TContext, any, TEvents, { value: TStates; context: TContext }>
