import {Component} from 'react'

import {
  DivContainer,
  SubContainer,
  HeadingText,
  InputHeading,
  Button,
  Para,
} from './styledComponents'

class Input extends Component {
  state = {showPara: false, text: ''}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      showPara: !prevState.showPara,
    }))
  }

  render() {
    const {showPara, text} = this.state
    const displayText = showPara ? 'Edit' : 'Save'

    return (
      <DivContainer>
        <SubContainer>
          <HeadingText>Editable Text Input</HeadingText>
          <inputContainer>
            {showPara ? (
              <Para>{text}</Para>
            ) : (
              <InputHeading
                type="text"
                value={text}
                onChange={this.onChangeText}
              />
            )}

            <Button type="button" onClick={this.onClickButton}>
              {displayText}
            </Button>
          </inputContainer>
        </SubContainer>
      </DivContainer>
    )
  }
}

export default Input
