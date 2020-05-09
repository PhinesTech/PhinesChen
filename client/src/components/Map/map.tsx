import React, { Component, RefObject } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapProps } from './map.types';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcmlhbiIsImEiOiJjam4zdDd1dTQwamthM3BxZ2p0dHRicjMyIn0.EaQADwzB68lFNnJE6UbG8g';

class Map extends Component<MapProps> {
    mapRef: RefObject<any> = React.createRef();

    componentDidMount() {
        const { mapStyle, lng, lat, zoom } = this.props;

        const map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: mapStyle,
            center: [lng, lat],
            zoom: zoom,
        });

        map.on('load', function() {
            map.addSource('points', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.48134, 37.30034],
                            },
                            properties: {
                                title: 'Catholic Charities Diocese',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.853439, 37.058701],
                            },
                            properties: {
                                title: 'Merced Salvation',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.50329438754778, 37.3185086],
                            },
                            properties: {
                                title: 'Merced County Food Bank',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.85054305, 37.06178],
                            },
                            properties: {
                                title: 'Bethel Community Church',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.48218860999472, 37.303889],
                            },
                            properties: {
                                title: 'Merced Resucue Mission',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.5006445013744, 37.3011427],
                            },
                            properties: {
                                title: 'Salvation Army Center',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.47811946200821, 37.29970525],
                            },
                            properties: {
                                title: 'Saint Vincent De Paul',
                                icon: 'triangle',
                            },
                        },
                        {
                            // feature for Mapbox DC
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [-120.496459, 37.297878],
                            },
                            properties: {
                                title: 'Calvary Assembly of God',
                                icon: 'triangle',
                            },
                        },
                    ],
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
