import React from 'react';
import {Dimensions} from 'react-native';

interface ScreenDimensions {
  width: number;
  height: number;
}


export const {width, height}: ScreenDimensions = Dimensions.get('window');

