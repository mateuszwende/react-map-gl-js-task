import React, { PureComponent } from "react";
import ReactMapGL from "react-map-gl";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { tagActions } from "../state";
import { TagType } from "task/types";
import Pins from "./Pins";

class MapComponent extends PureComponent {
  state = {
    viewport: {
      latitude: 52.228,
      longitude: 20.962,
      zoom: 8,
    },
  };

  _onMapClick = (e) => {
    this.props.dispatchTags({
      type: tagActions.ADD,
      payload: {
        id: uuidv4(),
        longitude: e.lngLat[0],
        latitude: e.lngLat[1],
      },
    });
  };

  _onMarkerDragEnd = (e, id) => {
    this.props.dispatchTags({
      type: tagActions.UPDATE,
      payload: {
        id: id,
        longitude: e.lngLat[0],
        latitude: e.lngLat[1],
      },
    });
  };

  render() {
    const { width, height } = this.props;

    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibGV0b3V0IiwiYSI6ImNrOGxiamdxejAwbG4zZm83bHZ1aHVhNnkifQ.Pvz5iOHGNQt8uo9_ilavtA"
        }
        width={width}
        height={height}
        onClick={this._onMapClick}
      >
        <Pins data={this.props.tags} onDragEnd={this._onMarkerDragEnd} />
      </ReactMapGL>
    );
  }
}

export default MapComponent;

MapComponent.propTypes = {
  tags: PropTypes.arrayOf(TagType).isRequired,
  dispatchTags: PropTypes.func.isRequired,
};
