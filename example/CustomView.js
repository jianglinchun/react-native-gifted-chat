import React from 'react';
import {
  Linking,
  MapView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import * as BaiduMapView from 'react-native-baidu-map';

export default class CustomView extends React.Component {
  renderMapView() {
    if(Platform.OS === 'android'){
      return (
        <BaiduMapView.MapView
          style={[styles.mapView, this.props.mapViewStyle]}
          center={this.props.currentMessage.location}
        />
      );
    }
    return (
      <MapView
        style={[styles.mapView, this.props.mapViewStyle]}
        region={{
          latitude: this.props.currentMessage.location.latitude,
          longitude: this.props.currentMessage.location.longitude,
        }}
        annotations={[{
          latitude: this.props.currentMessage.location.latitude,
          longitude: this.props.currentMessage.location.longitude,
        }]}
        scrollEnabled={false}
        zoomEnabled={false}
      />
    );
  }
  render() {
    if (this.props.currentMessage.location) {
      return (
        <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={() => {
          const url = Platform.select({
            ios: `http://maps.apple.com/?ll=${this.props.currentMessage.location.latitude},${this.props.currentMessage.location.longitude}`,
            android: `http://maps.google.cn/?q=${this.props.currentMessage.location.latitude},${this.props.currentMessage.location.longitude}`
          });
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              return Linking.openURL(url);
            }
          }).catch(err => {
            console.error('An error occurred', err);
          });
        }}>
        {this.renderMapView()}
        </TouchableOpacity>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
  },
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  mapViewStyle: {},
};

CustomView.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  mapViewStyle: View.propTypes.style,
};
