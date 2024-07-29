// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {details ,onClickSearch} = props
  const {id,suggestion} = details
  const onClick = () => {
    onClickSearch(suggestion)
  }
  return (
    <li key={id} className="suggestion-item">
      <div className="suggestion-container">
        <p className="name">{suggestion}</p>
        <img
          alt="arrow"
          onClick={onClick}
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
