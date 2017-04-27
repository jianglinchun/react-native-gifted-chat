import React from 'react';
import {
  Linking,
  MapView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import * as BaiduMapView from 'react-native-baidu-map';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'react-native-fetch-blob'
const Sound = require('react-native-sound');

export default class CustomView extends React.Component {

  renderAudioView() {
    // TODO judge whether the path is network or local
    return (
      <Icon name="file-audio-o" size={30}/>
    );
  }

  renderVideoView() {
    // TODO judge whether the path is network or local
    return (
      <Video source={{uri:this.props.currentMessage.video}}
        style={[styles.videoView, this.props.videoViewStyle]}/>
    );
  }

  renderFileView() {
    // TODO judge whether the path is network or local
    return (
      <Text>audio</Text>
    );
  }

  beginDownload() {
    // TODO begin download remote file
  }

  doneDownload() {
    // TODO 下载完成
  }

  beginUpload() {
    // TODO begin update file(audio/video/file/image) to remote
  }

  doneUpload() {
    // TODO 上传完成……
  }

  renderMapView() {
    if(Platform.OS === 'android'){
      // TODO 对于操作系统预装了googleplay service(map)的手机，还是要用airbnb的react-native-maps
      return (
        <BaiduMapView.MapView
          zoomControlsVisible={false}
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
    if (this.props.currentMessage.audio) {
      return (
        <TouchableOpacity style={[styles.container, this.props.containerStyle]}>
          {this.renderAudioView()}
        </TouchableOpacity>
      );
    }
    if (this.props.currentMessage.video) {
      return (
        <TouchableOpacity style={[styles.container, this.props.containerStyle]}>
          {this.renderVideoView()}
        </TouchableOpacity>
      );
    }
    if (this.props.currentMessage.file) {
      return (
        <TouchableOpacity style={[styles.container, this.props.containerStyle]}>
          {this.renderFileView()}
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
  videoView: {
    width: 200,
    height: 200,
    margin: 3,
  },
  audioView: {
    width: 200,
    height: 200,
    margin: 3,
  },
  fileView: {
    width: 200,
    height: 200,
    margin: 3,
  },
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  mapViewStyle: {},
  videoViewStyle: {},
  audioViewStyle: {},
  fileViewStyle: {},
};

CustomView.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  mapViewStyle: View.propTypes.style,
  videoViewStyle: View.propTypes.style,
  audioViewStyle: View.propTypes.style,
  fileViewStyle: View.propTypes.style,
};
