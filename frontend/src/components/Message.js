import React from 'react'
import {Alert} from 'react-bootstrap'

//could we just do variant =?
const Message = ({variant = variant , children}) => {
  return <Alert variant='variant'>{children}</Alert>
}

Message.defaultProps = {
    variant: 'info'
  }

export default Message