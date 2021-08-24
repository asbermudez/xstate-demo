import { useEffect, useMemo, useState } from 'react'
import { EventObject, Interpreter, StateValue } from 'xstate'

interface MachineState<TStates, TContext> {
  name: TStates
  context: TContext
}

export function useIntepretedMachine<
  TStates extends StateValue,
  TContext,
  TEvents extends EventObject
>(
  machine: Interpreter<TContext, any, TEvents>
): [MachineState<TStates, TContext>, typeof machine.send] {
  const { value, context } = machine.state
  const [machineState, setMachineState] = useState<
    MachineState<TStates, TContext>
  >({
    name: value as TStates,
    context,
  })

  const subscription = useMemo(
    () =>
      machine.subscribe((state) =>
        setMachineState({
          name: state.value as any,
          context: state.context,
        })
      ),
    [machine]
  )

  useEffect(() => {
    return function cleanup() {
      console.log('unsubscribe!')
      subscription.unsubscribe()
    }
  }, [subscription])

  return [machineState, machine.send]
}
