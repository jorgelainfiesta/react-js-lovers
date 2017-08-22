import * as React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div className="container">
            <h2>¡Hola!</h2>
            <ul>
                <li><Link to="image-gallery">Image Gallery</Link></li>
                <li><Link to="image-slider">Image Slider</Link></li>
                <li><Link to="choice-list">Choice list</Link></li>
            </ul>
        </div>
    );
}