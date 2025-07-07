import React from 'react';
import { 
  View, 
  Text, 

} from 'react-native';
export const CheckIcon = ({ size = 24, color = '#10B981' }) => (
  <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color, fontSize: size * 0.6, fontWeight: 'bold' }}>✓</Text>
  </View>
);