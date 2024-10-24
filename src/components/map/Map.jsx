import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Correct import for Leaflet CSS
import './map.scss'; 
import Pin from '../pin/Pin';

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({items}) {
    return (
        <MapContainer center={[52.4797, -1.90269]} zoom={6} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item=>(
                <Pin item={item} key={item.id}/>
            ))}
        </MapContainer>
    )
}

export default Map;