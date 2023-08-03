import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const defaultCenter = {
  lat: 49.5198605, lng: 17.0856296
}

export default function ContactMap (): JSX.Element {
  const mapStyles = {
    height: '100%', // Toto zajistí, že mapa zabere celou výšku obsahu karty
    width: '100%' // Toto zajistí, že mapa zabere celou šířku obsahu karty
  }

  return (
    <div className="card w-[500px] shadow-xl bg-white">
      {/* <div className="card-body">
        <h2 className="card-title text-green-600 uppercase">Výdej dřeva</h2>
        <p className='text-black'>Pod Kosířem 333, 798 16 Čelechovice na Hané</p>
        </div> */}
        <div className='' style={{ height: '570px' }}> {/* Přidáme vnější kontejner, který určí výšku mapy */}
          <LoadScript googleMapsApiKey='AIzaSyDTfDO8K3WJ0fzu2UPGii--OXQxKV0o6iM'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={14}
              center={defaultCenter}>
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>

    </div>
  )
}
