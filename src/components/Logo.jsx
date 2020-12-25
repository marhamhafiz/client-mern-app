import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className : 'navbar-brand',
})``

class Logo extends Component{
    render(){
        return(
            <Wrapper href="http://172.16.91.187:5001">
                <img src={logo} width="50" height="50" alt="MERN_APP" title="MERN_APP"/>
            </Wrapper>
        )
    }
}

export default Logo