import React, { Component } from 'react';
import SimpleMap from './SimpleMap';
import MapWithMarker from './MapWithMarker';
import MarkerWithPopup from './MarkerWithPopup';
import CustomMarkerOnOver from './CustomMarkerOnOver';
import AllInOne from './AllInOne';
import './App.css';

/**
 * Public access token retrieved from https://github.com/mapbox/mapbox-gl-supported/blob/gh-pages/diagnostics.html.
 * @type {String}
 */
global.ACCESS_TOKEN =
  'pk.eyJ1IjoibHVjYXN3b2oiLCJhIjoiY2l5Nmg4cWU1MDA0ejMzcDJtNHJmZzJkcyJ9.WhcEdTYQH6sSw2pm0RSP9Q';

/**
 * Default coordinates for example (in Paris)
 * @type {Object}
 */
global.DEFAULT_COORDINATES = { lat: 48.872198, lng: 2.3366308 };

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-mapbox-wrapper</h1>
        </header>

        <div className="App-content">
          <div>
            <h2>SimpleMap</h2>
            <SimpleMap />
          </div>

          <div>
            <h2>Marker</h2>
            <MapWithMarker />
          </div>

          <div>
            <h2>Marker with Popup on Click</h2>
            <MarkerWithPopup />
          </div>

          <div>
            <h2>Custom Marker with Popup on Over</h2>
            <CustomMarkerOnOver />
          </div>

          <div>
            <h2>Radius, Marker, Popup and fitBounds</h2>
            <AllInOne />
          </div>
        </div>
      </div>
    );
  }
}