// Write your code here
import {ActiveButton, InActiveBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, changeDirection, activeDirection} = props

  const onChangeDirection = () => {
    changeDirection(each)
  }

  return (
    <li>
      {activeDirection === each.directionId ? (
        <ActiveButton onClick={onChangeDirection} type="button">
          {each.displayText}
        </ActiveButton>
      ) : (
        <InActiveBtn onClick={onChangeDirection} type="button">
          {each.displayText}
        </InActiveBtn>
      )}
    </li>
  )
}

export default GradientDirectionItem
