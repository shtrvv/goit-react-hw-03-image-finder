import { Component } from "react"

class Modal extends Component {
    handleEsc = (e) => {
        if (e.code === 'Escape') {
            this.props.toggleModal();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEsc);
    }

    render() {
        const { largeImg, alt } = this.props;
        return (
            <div className="overlay">
                <div className="modal">
                    <img src={largeImg} alt={alt} />
                </div>
            </div>
        )
    }
}

export default Modal