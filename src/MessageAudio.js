import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

export default class MessageAudio extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Text>Audio</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  audio: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  }
});

MessageAudio.defaultProps = {
  currentMessage: {
    audio: null,
  },
  containerStyle: {},
  audioStyle: {},
  audioProps: {}
};

MessageAudio.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  audioStyle: Image.propTypes.style,
  audioProps: React.PropTypes.object
};
