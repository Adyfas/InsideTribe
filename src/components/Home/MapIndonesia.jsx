import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import indoProv from "../../assets/mapindonesia.json";
import { tribes } from "../items/Tribes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const provinceStyle = {
  fillColor: "#679926",
  weight: 1.5,
  color: "#e5e7eb",
  fillOpacity: 0.85,
  dashArray: "2 4",
};

export default function MapSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  function onEachProv(feature, layer) {
    layer.on({
      mouseover: (e) => {
        const l = e.target;
        l.setStyle({
          fillColor: "#fde68a",
          color: "#f59e42",
          weight: 2.5,
          dashArray: "",
          fillOpacity: 0.95,
        });
        l.bringToFront();
        l._path.style.filter = "drop-shadow(0 0 8px #f59e42aa)";
      },
      mouseout: (e) => {
        indoGeoLayer.resetStyle(e.target);
        e.target._path.style.filter = "";
      },
      click: () => {
        layer.bindPopup(feature.properties.NAME_1).openPopup();
      },
    });
  }

  let indoGeoLayer;

  return (
    <section className="py-12 bg-white z-10 relative h-screen">
      <h2 className="text-center text-3xl font-bold mb-6" data-aos="fade-up">
        Mapping Indonesia's Hidden Cultures
      </h2>

      <MapContainer
        center={[-2, 117]}
        zoom={4}
        scrollWheelZoom={false}
        className="h-[500px] w-full max-w-5xl mx-auto rounded-2xl shadow"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <div data-aos="zoom-in">
          <GeoJSON
            data={indoProv}
            style={provinceStyle}
            onEachFeature={onEachProv}
            ref={(layer) => (indoGeoLayer = layer)}
          />
        </div>
        {tribes.map((t) => (
          <Marker key={t.name} position={t.position} icon={tribeIcon()}>
            <Popup>
              <b>{t.name}</b>
              <br />
              {t.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
function tribeIcon() {
  return L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}
