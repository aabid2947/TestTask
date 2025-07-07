// src/components/TaskItem.tsx

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { CheckIcon } from './CheckIcon';
import { CircleIcon } from './CircleIcon';

interface TaskItemProps {
  icon: string;
  title: string;
  time: string;
  tags: string[];
  status: 'completed' | 'pending';
  isDarkMode: boolean;
  onToggleStatus: () => void;
  // Color customization props
  iconBackgroundColor?: string;
  titleColor?: string;
  timeColor?: string;
  timeIconColor?: string;
}

// Helper function to get appropriate clock emoji based on hour
const getClockEmoji = (timeString: string): string => {
  const hour = parseInt(timeString.split(':')[0]);
  const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  
  const clockEmojis = {
    1: '🕐', 2: '🕑', 3: '🕒', 4: '🕓', 5: '🕔', 6: '🕕',
    7: '🕖', 8: '🕗', 9: '🕘', 10: '🕙', 11: '🕚', 12: '🕛'
  };
  
  return clockEmojis[hour12] || '🕐';
};

// Helper function to format time to 12-hour format
const formatTime = (time: string): string => {
  // If time is already in 12-hour format, return as is
  if (time.includes('AM') || time.includes('PM')) {
    return time;
  }
  
  // Convert 24-hour to 12-hour format
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  
  return `${displayHour}:${minutes} ${ampm}`;
};

export const TaskItem: React.FC<TaskItemProps> = ({
  icon,
  title,
  time,
  tags,
  status,
  isDarkMode,
  onToggleStatus,
  iconBackgroundColor,
  titleColor,
  timeColor,
  timeIconColor,
}) => {
  const formattedTime = formatTime(time);
  const clockEmoji = getClockEmoji(time);

  return (
    <View style={[
      styles.taskItem,
      isDarkMode ? styles.taskItemDark : styles.taskItemLight
    ]}>
      <View style={styles.taskContent}>
        <View style={[
          styles.iconContainer,
          isDarkMode ? styles.iconContainerDark : styles.iconContainerLight,
       
        ]}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
        <View style={styles.taskDetails}>
          <Text style={[
            styles.taskTitle,
            isDarkMode ? styles.taskTitleDark : styles.taskTitleLight,
           
          ]}>
            {title}
          </Text>
          <View style={styles.taskMeta}>
            <View style={[
                styles.timeContainer,
                  iconBackgroundColor && { backgroundColor: `${timeIconColor}B3` }
            ]}>
              <Text style={[
                styles.timeEmoji,
                timeIconColor && { color: timeIconColor },
              
              ]}>
                {clockEmoji}
              </Text>
              <Text style={[
                styles.taskTime,
                isDarkMode ? styles.taskTimeDark : styles.taskTimeLight,
                timeColor && { color: timeColor }
              ]}>
                {formattedTime}
              </Text>
            </View>
            {tags.map((tag, index) => (
              <View key={index} style={[
                styles.tag,
               
              ]}>
                <Text style={[
                  styles.tagText,
                 
                ]}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {/* Wrap status icons in a TouchableOpacity */}
      <TouchableOpacity onPress={onToggleStatus} style={styles.taskActions}>
        {status === 'completed' ? (
          <CheckIcon size={24} />
        ) : (
          <CircleIcon size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  taskItemLight: {
    // backgroundColor: '#FFFFFF',
    // borderWidth:1,
  },
  taskItemDark: {
    backgroundColor: '#1F2937',
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: 44,
    height: 44,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconContainerLight: {
    backgroundColor: '#FFF',
  },
  iconContainerDark: {
    backgroundColor: '#374151',
  },
  iconText: {
    fontSize: 16,
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color:'#434343',
    marginBottom: 4,
  },
  taskTitleLight: {
    color: '#111827',
  },
  taskTitleDark: {
    color: '#FFFFFF',
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeContainer: {
    padding:4,
    borderRadius:8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeEmoji: {
    fontSize: 12,
  },
  taskTime: {
    fontSize: 12,
    fontWeight: '500',
  },
  taskTimeLight: {
    color: '#6B7280',
  },
  taskTimeDark: {
    color: '#9CA3AF',
  },
  tag: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 12,
   
  },

  tagText: {
    fontSize: 10,
    fontWeight: '500',
    color:"#6C6C6C"
  },

  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chevron: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  chevronLight: { color: '#9CA3AF' },
  chevronDark: { color: '#6B7280' },
});

// Example usage:
/*
<TaskItem
  icon="💪"
  title="Morning Workout"
  time="08:00"
  tags={['Habit', 'Important']}
  status="pending"
  isDarkMode={false}
  onToggleStatus={() => console.log('Toggle status')}
  iconBackgroundColor="#E3F2FD"
  titleColor="#1976D2"
  timeColor="#FF9800"
  timeIconColor="#FF9800"
/>
*/