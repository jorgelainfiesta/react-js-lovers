import * as React from 'react';
import '../styles/components/image-slider.css';

interface ImageGalleryProps {
    images: string[];
    startingImage?: number;
}

interface ImageGalleryState {
    currentImage: number;
}

class ImageSlider extends React.Component<ImageGalleryProps, ImageGalleryState> {
    state = {
        currentImage: 0
    };

    render() {
        return (
            <div className="image-slider">
                <nav>
                    <button className="button">
                        Prev
                    </button>
                    <button className="button">
                        Next
                    </button>
                </nav>
                <div className="row">
                    <div className="selected-image col-md-5">
                        <img />
                    </div>
                </div>
            </div>
        );
    }

}

export default ImageSlider;