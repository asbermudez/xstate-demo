import React, { FC, ComponentProps } from 'react'
import { useMachine } from '@xstate/react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { useUserMachine, UserMachineState } from '../states/user.machine'

export const PrivateRoute: FC<Omit<ComponentProps<typeof Route>, 'component'>> =
  ({ children, ...rest }) => {
    const [state] = useUserMachine()

    return (
      <Route
        {...rest}
        render={({ location }) =>
          state.name === UserMachineState.LOGGED_IN ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }
