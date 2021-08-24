import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { UserMachineAction, useUserMachine } from '../states/user.machine'

export const About: React.FC = () => {
  const [, send] = useUserMachine()
  const history = useHistory()

  return (
    <Fragment>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        possimus doloribus error cumque autem asperiores, ullam deserunt quidem
        omnis doloremque itaque eius eaque sint facilis unde tenetur reiciendis
        aliquam soluta?
      </p>
      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>

      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => send({ type: UserMachineAction.LOGOUT })}
      >
        Logout
      </button>
    </Fragment>
  )
}
