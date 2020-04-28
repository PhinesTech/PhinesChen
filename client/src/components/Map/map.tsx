import React, { Component, RefObject } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapProps } from './map.types';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuam90OTAiLCJhIjoiY2s5NmVvOWt4MGlzazNlbzV1MjkyYTZxYiJ9.uBWNQNV6y53ItQob-0jbkQ';

class Map extends Component<MapProps> {
    mapRef: RefObject<string | HTMLElement> = React.createRef();

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
