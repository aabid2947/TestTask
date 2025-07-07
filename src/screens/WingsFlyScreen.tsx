// src/screens/WingsFlyScreen.tsx

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { PlusIcon } from "../components/PlusIcon"
import { DateButton } from '../components/DateButton';
import { BottomDrawer } from '../components/BottomDrawer';
import { TaskItem } from '../components/TaskItem';

// Get screen dimensions for responsive design
const { width } = Dimensions.get('window');

// Initial Data
const initialTasks = [
  {
    icon: '📅',
    title: 'Schedule a meeting with Harshit Sir',
    time: '2:30 PM',
    tags: ['Habit','Must'],
    status: 'completed',
    iconBackgroundColor: '#E0F2FE', // Light Blue
    titleColor: '#0284C7',          // Dark Blue
    timeColor: '#475569',           // Slate Gray
    timeIconColor: '#475569',       // Slate Gray
  },
  {
    icon: '🧘',
    title: '2.5 Hours Simran and Meditation',
    time: '6:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
    iconBackgroundColor: '#F5F3FF', // Light Purple
    titleColor: '#7C3AED',          // Dark Purple
    timeColor: '#F97316',           // Orange
    timeIconColor: '#F97316',       // Orange
  },
  {
    icon: '💰',
    title: 'Save 200 Rupees Daily',
    time: '11:30 AM',
    tags: ['Habit','Important'],
    status: 'pending',
    iconBackgroundColor: '#D1FAE5', // Light Green
    titleColor: '#059669',          // Dark Green
    timeColor: '#E11D48',           // Rose Red
    timeIconColor: '#E11D48',       // Rose Red
  },
  {
    icon: '🚶',
    title: 'Walk 10k Step Daily',
    time: '7:00 AM',
    tags: ['Habit', 'Important'],
    status: 'pending',
    iconBackgroundColor: '#FEF3C7', // Light Amber
    titleColor: '#D97706',          // Dark Amber
    timeColor: '#14B8A6',           // Teal
    timeIconColor: '#14B8A6',       // Teal
  },
  {
    icon: '🌻',
    title: 'Buy Sunflower for Mummy',
    time: '12:30 PM',
    tags: ['Task', 'Important'],
    status: 'pending',
    iconBackgroundColor: '#FEF9C3', // Light Yellow
    titleColor: '#CA8A04',          // Dark Yellow
    timeColor: '#5B21B6',           // Deep Purple
    timeIconColor: '#5B21B6',       // Deep Purple
  },
  {
    icon: '🎨',
    title: 'Make Mandala and Colour Daily',
    time: '2:00 PM',
    tags: ['Task', 'Important'],
    status: 'pending',
    iconBackgroundColor: '#FCE7F3', // Light Pink
    titleColor: '#DB2777',          // Dark Pink
    timeColor: '#2563EB',           // Bright Blue
    timeIconColor: '#2563EB',       // Bright Blue
  }
];
// Main App Component
const WingsFlyApp = () => {
  const [selectedDate, setSelectedDate] = useState(18);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState(initialTasks); // Manage tasks in state

  const dates = [15, 16, 17, 18, 19, 20, 21];

  // Function to toggle the status of a task
  const toggleTaskStatus = (taskIndex: number) => {
    const newTasks = [...tasks];
    const currentStatus = newTasks[taskIndex].status;
    newTasks[taskIndex].status = currentStatus === 'pending' ? 'completed' : 'pending';
    setTasks(newTasks);
  };

  // Calculate progress based on the current state of tasks
  const progressPercentage = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    return Math.round((completedTasks / tasks.length) * 100);
  }, [tasks]);

  return (
    <SafeAreaView style={[
      styles.container,
      isDarkMode ? styles.containerDark : styles.containerLight
    ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#1F2937' : '#FFFFFF'}
      />

      {/* Header */}
      <View style={[
        styles.header,
        isDarkMode ? styles.headerDark : styles.headerLight
      ]}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <View style={styles.appIcon}>
              <Text style={styles.appIconText}>W</Text>
            </View>
            <Text style={[
              styles.appTitle,
              isDarkMode ? styles.appTitleDark : styles.appTitleLight
            ]}>
              WingsFly
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsDarkMode(!isDarkMode)}
            style={[
              styles.themeToggle,
              isDarkMode ? styles.themeToggleDark : styles.themeToggleLight
            ]}
          >
            <Text style={styles.themeToggleText}>
              {isDarkMode ? '☀️' : '🌙'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date Picker */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.datePickerContainer}
        >
          <View style={styles.datePicker}>
            {dates.map(date => (
              <DateButton
                key={date}
                date={date}
                isSelected={selectedDate === date}
                onPress={() => setSelectedDate(date)}
                isDarkMode={isDarkMode}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Today's Quote */}
        <View style={[
          styles.quoteContainer,
          isDarkMode ? styles.quoteContainerDark : styles.quoteContainerLight
        ]}>
          <Text style={[
            styles.quoteTitle,
            isDarkMode ? styles.quoteTitleDark : styles.quoteTitleLight
          ]}>
            Today's Quote
          </Text>
          <Text style={[
            styles.quoteText,
            isDarkMode ? styles.quoteTextDark : styles.quoteTextLight
          ]}>
            "You must do the things you think you cannot do."
          </Text>
          <View style={styles.progressContainer}>
            <Text style={[
              styles.progressText,
              isDarkMode ? styles.progressTextDark : styles.progressTextLight
            ]}>
              Progress: {progressPercentage}%
            </Text>
            <View style={styles.progressBarContainer}>
              <View style={[
                styles.progressBar,
                isDarkMode ? styles.progressBarDark : styles.progressBarLight
              ]}>
                {/* Dynamically set the width of the progress fill */}
                <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Tasks */}
        <View style={styles.tasksContainer}>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              {...task}
              isDarkMode={isDarkMode}
              // Pass the toggle function to each item
              onToggleStatus={() => toggleTaskStatus(index)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={() => setIsDrawerOpen(true)}
        style={styles.fab}
      >
        <PlusIcon size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Bottom Drawer */}
      <BottomDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: '#F9FAFB',
  },
  containerDark: {
    backgroundColor: '#111827',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerLight: {
    backgroundColor: '#FFFFFF',
  },
  headerDark: {
    backgroundColor: '#1F2937',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  appIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  appTitleLight: {
    color: '#111827',
  },
  appTitleDark: {
    color: '#FFFFFF',
  },
  themeToggle: {
    padding: 8,
    borderRadius: 8,
  },
  themeToggleLight: {
    backgroundColor: '#F3F4F6',
  },
  themeToggleDark: {
    backgroundColor: '#374151',
  },
  themeToggleText: {
    fontSize: 16,
  },
  datePickerContainer: {
    marginHorizontal: -16,
  },
  datePicker: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  quoteContainer: {
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  quoteContainerLight: {
    backgroundColor: '#FFFFFF',
  },
  quoteContainerDark: {
    backgroundColor: '#1F2937',
  },
  quoteTitle: {
    fontSize: 16,
    textAlign:'center',
    color:"#3B3B3B",
    fontWeight: '600',
    marginBottom: 12,
  },
  quoteTitleLight: {
    color: '#111827',
  },
  quoteTitleDark: {
    color: '#FFFFFF',
  },
  quoteText: {
    color:"#5B5B5B",
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 16,
    lineHeight: 20,
  },
  quoteTextLight: {
    color: '#6B7280',
  },
  quoteTextDark: {
    color: '#D1D5DB',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 12,
    marginRight: 16,
  },
  progressTextLight: {
    color: '#6B7280',
  },
  progressTextDark: {
    color: '#9CA3AF',
  },
  progressBarContainer: {
    flex: 1,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarLight: {
    backgroundColor: '#E5E7EB',
  },
  progressBarDark: {
    backgroundColor: '#374151',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  // tasksContainer: {
  //   gap: "-32",
  // },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default WingsFlyApp;