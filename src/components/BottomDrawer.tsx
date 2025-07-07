import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal,
  StyleSheet,
  Pressable
} from 'react-native';
import { Clock, RotateCcw, Check, Target, ChevronRight } from 'lucide-react-native';

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

// New data structure matching the desired design

export const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose, isDarkMode }) => {
  const options = [
    {
      icon: Clock,
      title: "Habit",
      subtitle: "Activity that repeats over time.",
      iconColor: "#2563EB", // blue-600
      iconBgStyle: styles.blueBg,
    },
    {
      icon: RotateCcw,
      title: "Recurring Task",
      subtitle: "A task that happens more than once.",
      iconColor: "#7C3AED", // purple-600
      iconBgStyle: styles.purpleBg,
    },
    {
      icon: Check,
      title: "Task",
      subtitle: "A one-time activity to be completed.",
      iconColor: "#16A34A", // green-600
      iconBgStyle: styles.greenBg,
    },
    {
      icon: Target,
      title: "Goal of the Day",
      subtitle: "A specific target for a single day.",
      iconColor: "#D97706", // amber-600
      iconBgStyle: styles.orangeBg,
    }
  ];
  return (
    <Modal
      transparent={true}
      visible={isOpen}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} style={styles.modalBackdrop}>
        <Pressable style={[
          styles.drawerContainer,
          isDarkMode ? styles.drawerDark : styles.drawerLight
        ]}>
          <View style={styles.handle} />

          {/* Render the list of options */}
          {options.map((option, index) => {
            const IconComponent = option.icon;
            const isLastItem = index === options.length - 1;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.listItem,
                  isDarkMode ? styles.listItemDark : styles.listItemLight,
                  isLastItem && { borderBottomWidth: 0 }
                ]}
                onPress={() => {
                  console.log(`Selected: ${option.title}`);
                  onClose();
                }}
              >
                <View style={styles.leftContent}>
                  <View style={[styles.iconContainer, option.iconBgStyle]}>
                    <IconComponent size={18} color={option.iconColor} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={[styles.title, isDarkMode ? styles.titleDark : styles.titleLight]}>
                      {option.title}
                    </Text>
                    <Text style={[styles.subtitle, isDarkMode ? styles.subtitleDark : styles.subtitleLight]}>
                      {option.subtitle}
                    </Text>
                  </View>
                </View>
                <ChevronRight size={20}  />
              </TouchableOpacity>
            );
          })}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
    paddingTop: 12,
  },
  drawerLight: {
    backgroundColor: '#FFFFFF',
  },
  drawerDark: {
    backgroundColor: '#1F2937', // gray-800
  },
  handle: {
    width: 48,
    height: 4,
    backgroundColor: '#D1D5DB', // gray-300
    borderRadius: 9999,
    alignSelf: 'center',
    marginBottom: 12,
  },
  // New List Item Styles
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  listItemLight: {
    borderBottomColor: '#F3F4F6', // gray-100
  },
  listItemDark: {
    borderBottomColor: '#374151', // gray-700
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
  },
  titleLight: { color: '#111827' }, // gray-900
  titleDark: { color: '#F9FAFB' }, // gray-50
  subtitleLight: { color: '#6B7280' }, // gray-600
  subtitleDark: { color: '#9CA3AF' }, // gray-400
  chevron: {
    color: '#9CA3AF', // gray-400
  },
  // Colors for option icons
  blueBg: { backgroundColor: '#DBEAFE' }, // blue-100
  purpleBg: { backgroundColor: '#EDE9FE' }, // purple-100
  greenBg: { backgroundColor: '#D1FAE5' }, // green-100
  orangeBg: { backgroundColor: '#FFEDD5' }, // orange-100
});