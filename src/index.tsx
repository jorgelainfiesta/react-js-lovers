import * as React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppHeader from './components/app-header';
import './styles/modules/app-main.css';
import { 
  BrowserRouter, 
  Route
} from 'react-router-dom';
import indexRoute from './routes/index';
import imageGalleryRoute from './routes/image-gallery';
import imageSliderRoute from './routes/image-slider';
import choiceRoute from './routes/choice-list';

render(
  (
    <div className="App">
        <AppHeader />

        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={indexRoute} />
            <Route path="/image-gallery" component={imageGalleryRoute} />
            <Route path="/image-slider" component={imageSliderRoute} />
            <Route path="/choice-list" component={choiceRoute} />
          </div>
        </BrowserRouter>

        <footer className="app-footer">
          <div className="container">
          Built by <a href="https://thisdot.co" target="_blank">This Dot</a>.
          </div>
        </footer>
      </div>
  ),
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
