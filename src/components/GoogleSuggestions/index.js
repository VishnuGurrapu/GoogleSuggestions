import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  onClickSearch = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          className="GoogleLogo"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="Container">
          <div className="search-input-container">
            <img
              className="icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(Suggestion => (
              <SuggestionItem
                key={Suggestion.id}
                details={Suggestion}
                onClickSearch={this.onClickSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
