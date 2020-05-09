import React, { Component, RefObject } from 'react';
import mapboxgl from 'mapbox-gl';

import { MapProps } from './map.types';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcmlhbiIsImEiOiJjam4zdDd1dTQwamthM3BxZ2p0dHRicjMyIn0.EaQADwzB68lFNnJE6UbG8g';

class Map extends Component<MapProps> {
    mapRef: RefObject<any> = React.createRef();

    componentDidMount() {
        const { mapStyle, lng, lat, zoom, data } = this.props;

        const map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: mapStyle,
            center: [lng, lat],
            zoom: zoom,
        });

        map.on('load', () => {
            map.addSource('points', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: data,
                },
            });
            map.addLayer({
                id: 'points',
                type: 'symbol',
                source: 'points',
                layout: {
                    // get the icon name from the source's "icon" property
                    // concatenate the name to get an icon from the style's sprite sheet
                    'icon-image': ['concat', ['get', 'icon'], '-15'],
                    // get the title name from the source's "title" property
                    'text-field': ['get', 'title'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 0.6],
                    'text-anchor': 'top',
                },
            });
        });
    }

    render() {
        return (
            <div>
                <div ref={this.mapRef} />
            </div>
        );
    }
}

export default Map;
