import * as React from 'react';
import '../styles/components/image-gallery.css';

export interface ImageGalleryProps {
    images: string[];
}

export default function(props: ImageGalleryProps) {
    return (
        <div className="image-gallery">
            <ul className="row">
                <li className="col-md-3">
                    <img />
                </li>
            </ul>
        </div>
    );
}
