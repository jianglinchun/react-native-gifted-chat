import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class MessageVideo extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Icon name="video-camera" size={30}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  video: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  }
});

MessageVideo.defaultProps = {
  currentMessage: {
    video: null,
  },
  containerStyle: {},
  videoStyle: {},
  videoProps: {}
};

MessageVideo.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  videoStyle: Image.propTypes.style,
  videoProps: React.PropTypes.object
};
