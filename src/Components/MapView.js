import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
export default function MapView() {
    return (
        <MapContainer className='map-view' center={[13,100]} zoom={5}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}
