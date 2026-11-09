const MAP_ID = '17Ni6H3jkkDX-a8c48yCv0II50-ZjOoA'
const VIEW = 'll=-25.6819,27.3769&z=12'
const EMBED = `https://www.google.com/maps/d/embed?mid=${MAP_ID}&${VIEW}`
const OPEN = `https://www.google.com/maps/d/viewer?mid=${MAP_ID}&${VIEW}`

// Straight-line distances from Photsaneng village, read off our Google map and rounded.
const nearby = [
  { km: '2', name: 'Siphumelele 1 Mine' },
  { km: '2', name: 'Bleskop Mines' },
  { km: '2', name: 'Glencore Wonderkop Smelter' },
  { km: '4', name: 'Klipfontein Andru Mining' },
  { km: '5', name: 'Clover Alloys chrome mine' },
  { km: '5', name: 'Valterra Waterval' },
  { km: '7', name: 'Kroondal Mine' },
  { km: '7', name: 'Bathopele Mine' },
]

export default function LocationMap() {
  return (
    <section className="sec sec-black" id="location">
      <div className="eyebrow">Where we are</div>
      <h2 className="h2">On the doorstep of the mines.</h2>
      <p className="loc-lead">
        Our base is Photsaneng village, in the middle of the Rustenburg and Marikana mining area.
        These are the mines around us, measured from our village.
      </p>

      <div className="loc-map">
        <iframe
          src={EMBED}
          title="Map of OGP Services in Photsaneng and the mines around it"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="loc-list">
        {nearby.map(m => (
          <div className="loc-item" key={m.name}>
            <div className="loc-km">
              {m.km}
              <span> km</span>
            </div>
            <div className="loc-name">{m.name}</div>
          </div>
        ))}
      </div>

      <p className="loc-note">
        Distances are approximate straight-line distances from Photsaneng village.{' '}
        <a href={OPEN} target="_blank" rel="noopener noreferrer">
          Open the map in Google Maps
        </a>
      </p>
    </section>
  )
}
