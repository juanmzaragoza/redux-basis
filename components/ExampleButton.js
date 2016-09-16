import React, { PropTypes } from 'react'

const ExampleButton = ({text, onButtonClick}) => (
	<button type="button" onClick={onButtonClick}>Mostrar texto {text? 'Muestro':null}</button>
)

ExampleButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.bool.isRequired
}

export default ExampleButton