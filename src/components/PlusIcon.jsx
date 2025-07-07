import React from 'react';
import { 
  View, 
  Text, 
} from 'react-native';

export const PlusIcon = ({ size = 24, color = '#fff' }) => (
  <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color, fontSize: size * 0.8, fontWeight: 'bold' }}>+</Text>
  </View>
);