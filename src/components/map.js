import React from "react"
import Container from "@material-ui/core/Container"
import { Map, GoogleApiWrapper } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "100%",
}

const GoogleMap = ({ google }) => (
  <Map
    google={google}
    zoom={8}
    style={mapStyles}
    initialCenter={{ lat: 39.9936, long: 105.0897 }}
  ></Map>
)

export default GoogleApiWrapper({
  apiKey: "AIzaSyDOpG45bkfRsA6gCq4xoy2VJ7TwHOsfEzQ",
})(GoogleMap)
