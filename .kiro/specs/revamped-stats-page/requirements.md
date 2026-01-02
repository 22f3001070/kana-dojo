# Requirements Document

## Introduction

This document defines the requirements for a revamped Stats page in KanaDojo. The current Stats page (`SimpleProgress.tsx`) displays basic statistics but lacks comprehensive visualization of all the data being tracked across the application. The new Stats page will provide a modern, visually appealing dashboard that showcases all tracked statistics including session data, character mastery, timed mode performance, gauntlet stats, visit streaks, and achievements progress.

## Glossary

- **Stats_Dashboard**: The main container component that displays all statistics in an organized, visually appealing layout
- **Character_Mastery_Panel**: A component that displays per-character performance data with accuracy and attempt counts
- **Session_Stats_Panel**: A component showing session-based statistics like total sessions, correct/incorrect answers
- **Timed_Mode_Panel**: A component displaying Blitz/Timed challenge statistics for Kana, Kanji, and Vocabulary
- **Gauntlet_Stats_Panel**: A component showing Gauntlet mode performance including best times and completion rates
- **Performance_Chart**: A visual chart component showing accuracy trends or character performance distribution
- **Content_Type**: One of 'kana', 'kanji', or 'vocabulary' representing the three learning categories
- **Mastery_Level**: A classification of character proficiency based on accuracy and attempt thresholds

## Requirements

### Requirement 1: Overview Statistics Display

**User Story:** As a learner, I want to see my overall learning statistics at a glance, so that I can quickly understand my progress.

#### Acceptance Criteria

1. THE Stats_Dashboard SHALL display total sessions completed
2. THE Stats_Dashboard SHALL display overall accuracy percentage with correct/total breakdown
3. THE Stats_Dashboard SHALL display best answer streak achieved
4. THE Stats_Dashboard SHALL display total unique characters learned
5. THE Stats_Dashboard SHALL display total correct and incorrect answers
6. WHEN the user has no statistics THEN THE Stats_Dashboard SHALL display appropriate empty state messages

### Requirement 2: Character Mastery Visualization

**User Story:** As a learner, I want to see detailed information about my character mastery, so that I can identify which characters need more practice.

#### Acceptance Criteria

1. THE Character_Mastery_Panel SHALL display characters grouped by mastery level (mastered, learning, needs practice)
2. WHEN a character has 90%+ accuracy with 10+ attempts THEN THE Character_Mastery_Panel SHALL classify it as mastered
3. WHEN a character has less than 70% accuracy with 5+ attempts THEN THE Character_Mastery_Panel SHALL classify it as needs practice
4. THE Character_Mastery_Panel SHALL display accuracy percentage and attempt count for each character
5. THE Character_Mastery_Panel SHALL allow filtering characters by Content_Type (kana, kanji, vocabulary)
6. THE Character_Mastery_Panel SHALL display the top 5 most difficult characters prominently
7. THE Character_Mastery_Panel SHALL display the top 5 best mastered characters prominently

### Requirement 3: Timed Mode Statistics

**User Story:** As a learner, I want to see my performance in timed challenges, so that I can track my speed improvement.

#### Acceptance Criteria

1. THE Timed_Mode_Panel SHALL display statistics for each Content_Type separately (Kana, Kanji, Vocabulary)
2. THE Timed_Mode_Panel SHALL display correct answers, wrong answers, and current streak for each Content_Type
3. THE Timed_Mode_Panel SHALL display best streak achieved for each Content_Type
4. THE Timed_Mode_Panel SHALL calculate and display accuracy percentage for each Content_Type
5. WHEN a Content_Type has no timed mode data THEN THE Timed_Mode_Panel SHALL display zero values

### Requirement 4: Gauntlet Mode Statistics

**User Story:** As a learner, I want to see my Gauntlet mode performance, so that I can track my endurance and speed.

#### Acceptance Criteria

1. THE Gauntlet_Stats_Panel SHALL display total gauntlet sessions attempted
2. THE Gauntlet_Stats_Panel SHALL display completion rate percentage
3. THE Gauntlet_Stats_Panel SHALL display best time achieved for completed runs
4. THE Gauntlet_Stats_Panel SHALL display overall gauntlet accuracy
5. THE Gauntlet_Stats_Panel SHALL display best streak achieved in gauntlet mode
6. THE Gauntlet_Stats_Panel SHALL allow viewing stats per Content_Type

### Requirement 5: Performance Visualization

**User Story:** As a learner, I want to see visual representations of my performance, so that I can better understand my learning patterns.

#### Acceptance Criteria

1. THE Performance_Chart SHALL display character mastery distribution as a visual breakdown
2. THE Performance_Chart SHALL show the proportion of mastered vs learning vs needs-practice characters
3. THE Stats_Dashboard SHALL use color coding to indicate performance levels (green for good, yellow for moderate, red for needs improvement)
4. THE Stats_Dashboard SHALL display progress indicators for key metrics

### Requirement 6: Statistics Reset Functionality

**User Story:** As a learner, I want to be able to reset my statistics, so that I can start fresh if needed.

#### Acceptance Criteria

1. THE Stats_Dashboard SHALL provide a reset button to clear all progress
2. WHEN the reset button is clicked THEN THE Stats_Dashboard SHALL display a confirmation dialog
3. THE confirmation dialog SHALL warn that the action cannot be undone
4. WHEN the user confirms reset THEN THE Stats_Dashboard SHALL clear all statistics data
5. WHEN the user cancels reset THEN THE Stats_Dashboard SHALL maintain current statistics

### Requirement 7: Responsive Design

**User Story:** As a learner, I want the stats page to work well on different screen sizes, so that I can view my progress on any device.

#### Acceptance Criteria

1. THE Stats_Dashboard SHALL display in a single column layout on mobile devices
2. THE Stats_Dashboard SHALL display in a multi-column grid layout on larger screens
3. THE Stats_Dashboard SHALL maintain readability at all supported screen sizes
4. THE Stats_Dashboard SHALL use the application's theme variables for consistent styling

### Requirement 8: Achievement Integration

**User Story:** As a learner, I want to see my achievement progress alongside my statistics, so that I can understand how close I am to unlocking achievements.

#### Acceptance Criteria

1. THE Stats_Dashboard SHALL display total achievement points earned
2. THE Stats_Dashboard SHALL display current achievement level
3. THE Stats_Dashboard SHALL display count of unlocked achievements vs total available
4. THE Stats_Dashboard SHALL provide a link or navigation to the full achievements view
