import React, {Component} from 'react'
import {connect} from 'react-redux'
import {simpleAction} from './actions/simpleAction'

import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'


const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppTitle = styled.h1`
  font-size: 1.3em;
`
const AppIntro = styled.p`
  font-size: large;
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction()
  }

  render() {
    return (
        <AppWrapper>
          <AppHeader className="App-header">
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <pre>
           {
             JSON.stringify(this.props)
           }
          </pre>
          <button onClick={this.simpleAction}>Test redux action</button>
          <AppIntro className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload
          </AppIntro>
          <AppIntro>
            Components styled with <code>styled-components</code>{' '}
            <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
          </AppIntro>
        </AppWrapper>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
