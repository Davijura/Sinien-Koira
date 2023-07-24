import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useWindowSize from '../hooks/useWindowSize';

const defaultCenter = {
    lat: 49.5198605, lng: 17.0856296
}

export default function ContactMap() {
    const size = useWindowSize();

    const mapStyles = {
        height: "400px",
        width: size.width ? (size.width <= 820 ? `${size.width}px` : "800px") : "800px"
    };

    return (
        <div className='mx-auto items-center pt-10' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className='items-center text-black'>
                <div>
                    {/* <LoadScript googleMapsApiKey='AIzaSyDTfDO8K3WJ0fzu2UPGii--OXQxKV0o6iM'> */}
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={14}
                            center={defaultCenter}>
                            <Marker position={defaultCenter} />
                        </GoogleMap>
                    {/* </LoadScript> */}
                </div>
            </div>
        </div>
    )
}