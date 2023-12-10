import { Component } from "react";
import Notiflix from "notiflix";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

import { fetchImages } from "services/api";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    page: 1,
    searchImage: '',
    totalPages: 0,
  }

  async componentDidUpdate(_, prevState) {
    if ( prevState.searchImage !== this.state.searchImage || prevState.page !== this.state.page ) {
      try {
      this.setState({ isLoading: true, error: '' });
      const data = await fetchImages(this.state.searchImage, this.state.page);
      
      if (data.hits.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images')
      }
      
      this.setState(prev => ({
        images: prev.searchImage === this.state.searchImage ? [...prev.images, ...data.hits] : [...data.hits],
        totalPages: Math.floor(data.totalHits / 12),
      }));
      } catch (error) {
      this.setState({ error: error.message });
      } finally {
      this.setState({ isLoading: false });
      }
    }
  }

  getSearch = searchImage => {
    this.setState(prev => {
      if (prev.searchImage === searchImage) {
        Notiflix.Notify.warning('You have recently searched for this image');
      }
    })
    this.setState({
      searchImage,
      images: [],
      page: 1,
    });
  }

  handleClick = () => {
    if (this.state.images.length > 0) {
      this.setState(prev => ({
        page: prev.page + 1,
      }))
    }
  }

    render() {
      return (
        <div className="app">
          <Searchbar getSearch={this.getSearch} />
          {this.state.isLoading && <Loader/>}
          <ImageGallery images={this.state.images} />
          {this.state.images.length > 0 && this.state.page <= this.state.totalPages &&
            <Button handleClick={this.handleClick} />}
        </div>
      )
    }
  }

export default App