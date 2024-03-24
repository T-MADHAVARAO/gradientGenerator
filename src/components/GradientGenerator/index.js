import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {Bg, Direction, ColorInput, CustomButton} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    oneColor: '#8ae323',
    twoColor: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: 'top',
    inDirection: 'top',
    activeDirection: gradientDirectionsList[0].directionId,
  }

  onChangeFirst = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecond = event => {
    this.setState({secondColor: event.target.value})
  }

  submitColors = event => {
    event.preventDefault()
    const {firstColor, secondColor, inDirection} = this.state
    this.setState({
      oneColor: firstColor,
      twoColor: secondColor,
      direction: inDirection,
    })
  }

  changeDirection = each => {
    this.setState({
      inDirection: each.value,
      activeDirection: each.directionId,
    })
  }

  render() {
    const {
      firstColor,
      activeDirection,
      secondColor,
      direction,
      oneColor,
      twoColor,
    } = this.state
    return (
      <Bg
        data-testid="gradientGenerator"
        oneColor={oneColor}
        twoColor={twoColor}
        direction={direction}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <Direction>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              each={each}
              changeDirection={this.changeDirection}
              activeDirection={activeDirection}
            />
          ))}
        </Direction>
        <p>Pick the Colors</p>
        <ColorInput onSubmit={this.submitColors}>
          <div>
            <p>{firstColor}</p>
            <input
              type="color"
              value={firstColor}
              onChange={this.onChangeFirst}
            />
          </div>
          <div>
            <p>{secondColor}</p>
            <input
              type="color"
              value={secondColor}
              onChange={this.onChangeSecond}
            />
          </div>
          <CustomButton type="submit">Generate</CustomButton>
        </ColorInput>
      </Bg>
    )
  }
}

export default GradientGenerator
