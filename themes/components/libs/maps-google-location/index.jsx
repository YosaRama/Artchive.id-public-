import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { mapStyle } from "./style";

function ThemesMapsGoogleLocation() {
  const googleUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEYS}&libraries=geometry,drawing,places`;
  const MapsComponents = compose(
    withProps({
      googleMapURL: googleUrl,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) => (
    <GoogleMap
      options={{ styles: mapStyle }}
      defaultZoom={15}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      //   defaultCenter={{
      //     lat: lat || null,
      //     lng: lng || null,
      //   }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
          //   position={{
          //     lat: lat || null,
          //     lng: lng || null,
          //   }}
        />
      )}
    </GoogleMap>
  ));

  return <MapsComponents isMarkerShown />;
}

export default ThemesMapsGoogleLocation;
