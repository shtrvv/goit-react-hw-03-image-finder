import { Component } from "react"

class Searchbar extends Component {
  state = {
    value: '',
  }

  handleChange = ({target:{value}}) => {
    this.setState({ value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.getSearch(this.state.value);

    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            Search
          </button>
          <input
            onChange={this.handleChange}
            value={this.state.value}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}

export default Searchbar