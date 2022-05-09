// Libs
import propTypes from "prop-types";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// Styles
import { mapStyle } from "./style";

function ThemesMapsGoogleLocation(props) {
  const { lat, lng } = props;

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
      defaultCenter={{
        lat: +lat || -34.397,
        lng: +lng || 150.644,
      }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{
            lat: +lat || -34.397,
            lng: +lng || 150.644,
          }}
        />
      )}
    </GoogleMap>
  ));

  return <MapsComponents isMarkerShown />;
}

ThemesMapsGoogleLocation.propTypes = {
  lat: propTypes.string,
  lng: propTypes.string,
};

export default ThemesMapsGoogleLocation;
