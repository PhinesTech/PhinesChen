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

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
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
