import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const fire = new Icon({
  iconUrl: "/flame.svg",
  iconSize: [25, 25],
});
const volcanoe = new Icon({
  iconUrl: "/volcano-mountain.svg",
  iconSize: [30, 30],
});
const Map = ({ eventData }) => {
  const fireMarkers = eventData.map((ev) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <Marker
          key={ev.id}
          position={[
            ev.geometry[0].coordinates[1],
            ev.geometry[0].coordinates[0],
          ]}
          icon={fire}
          >
          <Popup >{ev.title}</Popup>
        </Marker>
      );
    }
    return null;
  });
  const volcanoesMarkers = eventData.map((ev) => {
    if (ev.categories[0].id === "volcanoes") {
      return (
        <Marker
          key={ev.id}
          position={[
            ev.geometry[0].coordinates[1],
            ev.geometry[0].coordinates[0],
          ]}
          icon={volcanoe}
        >
          <Popup>{ev.title}</Popup>
        </Marker>
      );
    }
    return null;
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fireMarkers}
      {volcanoesMarkers}
    </MapContainer>
  );
};

export default Map;
