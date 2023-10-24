import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImagehGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ImageGalleryList>
        {images.length >= 1 &&
          images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImage={webformatURL}
                largeImage={largeImageURL}
                tags={tags}
              />
            );
          })()}
      </ImageGalleryList>
    );
  }
}
