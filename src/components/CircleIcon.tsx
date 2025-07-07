import React from 'react';
import { View } from 'react-native';
export const CircleIcon = ({ size = 24, color = '#D1D5DB' }) => (
  <View style={{ 
    width: size, 
    height: size, 
    borderRadius: size / 2, 
    borderWidth: 2, 
    borderColor: color 
  }} />
);