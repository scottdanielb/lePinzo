import React, {useContext} from 'react'
import styled from 'styled-components'

import { UserContext } from '../context/user_context';

const AuthWrapper = ({children}) => {
  return <h4>AuthWrapper Component</h4>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
