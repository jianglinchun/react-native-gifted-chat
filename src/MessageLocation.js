import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Lightbox from 'react-native-lightbox';

export default class MessageLocation extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Text>地图……</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  location: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  locationActive: {
    resizeMode: 'contain',
  },
});

MessageLocation.defaultProps = {
  currentMessage: {
    location: null,
  },
  containerStyle: {},
  locationStyle: {},
  locationProps: {},
  lightboxProps: {},
};

MessageLocation.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  locationStyle: Image.propTypes.style,
  locationProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};
