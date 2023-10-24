import { Component } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { smallImage, largeImage, tags } = this.props;
    return (
      <ImageItem>
        <Image src={smallImage} alt={tags} />
      </ImageItem>
    );
  }
}
