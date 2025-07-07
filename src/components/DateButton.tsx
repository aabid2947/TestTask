import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  View
} from 'react-native';



interface DateButtonProps {
  date: number;
  isSelected: boolean;
  onPress: () => void;
  isDarkMode: boolean;
}
export const DateButton: React.FC<DateButtonProps> = ({ date, isSelected, onPress, isDarkMode })=> {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = dayNames[new Date(2024, 0, date).getDay()];
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.dateButton,
        isSelected ? styles.dateButtonSelected : styles.dateButtonDefault,
        isDarkMode && !isSelected && styles.dateButtonDark
      ]}
    >
      <Text style={[
        styles.dayText,
        isSelected ? styles.dayTextSelected : (isDarkMode ? styles.dayTextDark : styles.dayTextDefault)
      ]}>
        {dayName}
      </Text>
      {/* <View style={styles.dateContainer}> */}

      <Text style={[
        styles.dateText,
        isSelected ? styles.dateTextSelected : (isDarkMode ? styles.dateTextDark : styles.dateTextDefault)
      ]}>
        {date}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles =StyleSheet.create({

  datePickerContainer: {
    marginHorizontal: -16,
  },
  datePicker: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    
    gap: 8,
  },
  dateButton: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 48,
    height: 64,
    borderRadius: 20,
    marginRight: 8,
  },
  // dateContainer:{
  //   backgroundColor:"#E9E9E9",
  // },
  dateButtonDefault: {
    backgroundColor: '#F4F4F4',
  },
  dateButtonSelected: {
    backgroundColor: '#2C3399',
  },
  dateButtonDark: {
    backgroundColor: '#374151',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
   
  },
  dayTextDefault: {
    color: '#6B7280',
  },
  dayTextSelected: {
    color: '#FFFFFF',
  },
  dayTextDark: {
    color: '#D1D5DB',
  },
  dateText: {
   borderWidth:1,
    backgroundColor:"#E9E9E9",
    fontSize: 16,
    fontWeight: '600',
    textAlign:'center',
    width:"100%",
    height:"50%",
    borderRadius:16
  },
  dateTextDefault: {
    color: '#111827',
  },
  dateTextSelected: {

    color: '#FFFFFF',
  },
  dateTextDark: {
    color: '#FFFFFF',
  },
});