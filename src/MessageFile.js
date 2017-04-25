import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

export default class MessageFile extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Text>File</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  file: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  }
});

MessageFile.defaultProps = {
  currentMessage: {
    file: null,
  },
  containerStyle: {},
  fileStyle: {},
  fileProps: {}
};

MessageFile.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  fileStyle: Image.propTypes.style,
  fileProps: React.PropTypes.object
};
