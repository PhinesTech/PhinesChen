import { Style } from 'mapbox-gl';

export type MapProps = {
    style: string | Style | undefined;
    lng: number;
    lat: number;
    zoom: number;
};
