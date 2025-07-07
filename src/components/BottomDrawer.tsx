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

export const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose, isDarkMode }) => {
  const options = [
    {
      icon: Clock,
      title: "Habit",
      subtitle: "Activity that repeats over time.",
      iconColor: "#2563EB", 
      iconBgStyle: styles.blueBg,
    },
    {
      icon: RotateCcw,
      title: "Recurring Task",
      subtitle: "A task that happens more than once.",
      iconColor: "#7C3AED", 
      iconBgStyle: styles.purpleBg,
    },
    {
      icon: Check,
      title: "Task",
      subtitle: "A one-time activity to be completed.",
      iconColor: "#16A34A",
      iconBgStyle: styles.greenBg,
    },
    {
      icon: Target,
      title: "Goal of the Day",
      subtitle: "A specific target for a single day.",
      iconColor: "#D97706", 
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
    backgroundColor: '#1F2937', 
  },
  handle: {
    width: 48,
    height: 4,
    backgroundColor: '#D1D5DB', 
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
    borderBottomColor: '#F3F4F6', 
  },
  listItemDark: {
    borderBottomColor: '#374151',
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
    fontSize: 16,
    color:"#141414",
    fontWeight: '600',
  },
  subtitle: {
    color:"#4C4C4C",
    fontSize: 10,
    marginTop: 2,
    lineHeight: 16,
  },
  titleLight: { color: '#111827' }, 
  titleDark: { color: '#F9FAFB' }, 
  subtitleLight: { color: '#6B7280' }, 
  subtitleDark: { color: '#9CA3AF' }, 
  chevron: {
    color: '#9CA3AF', 
  },
  // Colors for option icons
  blueBg: { backgroundColor: '#DBEAFE' },
  purpleBg: { backgroundColor: '#EDE9FE' }, 
  greenBg: { backgroundColor: '#D1FAE5' }, 
  orangeBg: { backgroundColor: '#FFEDD5' }, 
});