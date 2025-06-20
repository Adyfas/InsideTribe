// src/components/MapSection.jsx
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ------- data -------
import indoProv from "../../assets/mapindonesia.json"; 
const tribes = [
  {
    name: "Ammatoa Kajang Tribe",
    position: [-5.5167, 119.6167], // South Sulawesi
    description:
      "Closed off from outside influences, living in the forest, required to wear black clothing. Philosophy: Kamase-masea (total simplicity). Visual: forest, wooden houses, all-black attire, ritual customs."
  },
  {
    name: "Inner Baduy Tribe",
    position: [-6.4925, 106.2780], // Banten
    description:
      "Prohibited from using technology, electricity, or vehicles. Philosophy: unity with nature, simple living. Visual: long walks, white clothing, selfie ban."
  },
  {
    name: "Tiwah Ritual (Dayak Tribe)",
    position: [-1.6815, 113.3824], // Central Kalimantan
    description:
      "Death ceremony involving the transfer of bones to a sandung. Involves traditional music, dance, and a long procession. Visual: traditional cemetery, fire procession, community in traditional attire."
  },
  {
    name: "Toraja Tribe",
    position: [-3.0258, 119.8682], // South Sulawesi
    description:
      "Unique death culture: corpses are stored for a long time, can be 'revived' (Ma'nene). Tradition: burial in cliffs, traditional tongkonan houses. Visual: peaked houses, buffalo, hollowed-out cliff graves."
  },
  {
    name: "Waria Bissu Tradition (Bugis)",
    position: [-4.5386, 119.6317], // Around Sidenreng Rappang, South Sulawesi
    description:
      "Spiritual role connecting humans with the divine. Combination of masculine and feminine elements, kept sacred. Visual: ceremonial attire, dance, spiritual moments."
  },
  {
    name: "Anak Dalam Tribe",
    position: [-1.9386, 103.5498], // Jambi
    description:
      "Nomadic life in the forest, hunting, avoiding modernization. Often referred to as 'Orang Rimba'. Visual: forest, hunting activities, natural attire."
  }
];

// ------- style helper -------
const provinceStyle = {
  fillColor: "#F7ECDE",
  weight: 1,
  color: "#ffffff",
  fillOpacity: 0.8
};

// ------- main component -------
export default function MapSection() {
  // highlight on hover
  function onEachProv(feature, layer) {
    layer.on({
      mouseover: (e) => {
        const l = e.target;
        l.setStyle({ fillColor: "#D97706" });
        l.bringToFront();
      },
      mouseout: (e) => {
        indoGeoLayer.resetStyle(e.target);
      },
      click: () => {
        layer.bindPopup(feature.properties.NAME_1).openPopup();
      }
    });
  }

  let indoGeoLayer; 

  return (
    <section className="py-12 bg-white z-10 relative h-screen">
      <h2 className="text-center text-3xl font-bold mb-6">
        Mapping Indonesia's Hidden Cultures
      </h2>

      <MapContainer
        center={[-2, 117]}
        zoom={4}
        scrollWheelZoom={false}
        className="h-[500px] w-full max-w-5xl mx-auto rounded-2xl shadow"
      >
        {/* base tile (light grayscale) */}
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* provinces */}
        <GeoJSON
          data={indoProv}
          style={provinceStyle}
          onEachFeature={onEachProv}
          ref={(layer) => (indoGeoLayer = layer)}
        />

        {/* tribe markers */}
        {tribes.map((t) => (
          <Marker key={t.name} position={t.position} icon={tribeIcon()}>
            <Popup>
              <b>{t.name}</b><br />
              {t.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

// custom orange icon (optional)
function tribeIcon() {
  return L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"
  });
}
