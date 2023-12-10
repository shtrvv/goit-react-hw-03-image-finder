import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({images}) => {
  return (
      <ul className="imageGallery">
          {images.map(img => ( 
              <ImageGalleryItem
                  key={img.id}
                  src={img.webformatURL}
                  alt={img.tags}
                  largeImg={img.largeImageURL}
              />
          ))}
    </ul>
  )
}

export default ImageGallery