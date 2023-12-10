import { Component } from "react"
import Modal from "components/Modal/Modal"

class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  }

  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  }

  render() {
    const { src, alt, largeImg } = this.props;

    return (
      <li className="imageGalleryItem" onClick={this.toggleModal}>
        <img src={src} alt={alt} loading="lazy" className="img" />
        {this.state.isShowModal && <Modal largeImg={largeImg} alt={alt} toggleModal={this.toggleModal} />}
      </li>
    )
  }  
}

export default ImageGalleryItem