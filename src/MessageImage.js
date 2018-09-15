/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes, Text } from 'react-native';
import Lightbox from 'react-native-lightbox';

export default function MessageImage({
  containerStyle,
  lightboxProps,
  imageProps,
  imageStyle,
  currentMessage,
}) {
  return (
    <View>
      {currentMessage.text.indexOf('プレゼントを送りました！') > -1 ?
        <View style={{alignItems: 'center', paddingTop: 20, marginBottom: -16}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Image
              {...imageProps}
              style={{width: 120, height: 120}}
              source={{ uri: currentMessage.image }}
            />
          </View>
          <View style={{marginTop: 24, marginBottom: -60}}>
            <Text style={{fontWeight: 'bold', textAlign: 'center', height: 32, fontSize: 12}}>{currentMessage.text}</Text>
          </View>
        </View>
        :
        <View style={[styles.container, containerStyle]}>
          <Lightbox
            activeProps={{
              style: styles.imageActive,
            }}
            {...lightboxProps}
          >
            <Image
              {...imageProps}
              style={[styles.image, imageStyle]}
              source={{ uri: currentMessage.image }}
            />
          </Lightbox>
        </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageImage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object,
};
