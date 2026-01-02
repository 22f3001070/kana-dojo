# Implementation Plan: Revamped Stats Page

## Overview

This implementation plan transforms the current basic Stats page into a comprehensive dashboard displaying all tracked statistics. The implementation follows an incremental approach, building core utilities first, then components, and finally wiring everything together.

## Tasks

- [x] 1. Create core utility functions and types
  - [x] 1.1 Create stats types and interfaces
    - Create `features/Progress/types/stats.ts` with all TypeScript interfaces
    - Define `AggregatedStats`, `CharacterMasteryItem`, `TimedStats`, `GauntletOverallStats`
    - _Requirements: 1.1-1.5, 2.1-2.7, 3.1-3.4, 4.1-4.6_

  - [x] 1.2 Implement character classification function
    - Create `features/Progress/lib/classifyCharacter.ts`
    - Implement mastery level classification logic (mastered, learning, needs-practice)
    - _Requirements: 2.2, 2.3_

  - [x] 1.3 Write property tests for character classification
    - **Property 2: Character Mastery Classification - Mastered Threshold**
    - **Property 3: Character Mastery Classification - Needs Practice Threshold**
    - **Validates: Requirements 2.2, 2.3**

  - [x] 1.4 Implement content type detection function
    - Create `features/Progress/lib/detectContentType.ts`
    - Implement Unicode range detection for kana, kanji, vocabulary
    - _Requirements: 2.5_

  - [x] 1.5 Write property tests for content type detection
    - **Property 4: Character Filtering by Content Type**
    - **Validates: Requirements 2.5**

  - [x] 1.6 Implement accuracy calculation utility
    - Create `features/Progress/lib/calculateAccuracy.ts`
    - Handle division by zero edge case
    - _Requirements: 1.2, 3.4, 4.4_

  - [x] 1.7 Write property tests for accuracy calculation
    - **Property 10: Accuracy Calculation Correctness**
    - **Validates: Requirements 1.2, 3.4, 4.4**

- [x] 2. Checkpoint - Ensure all utility tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Create stats aggregation hook
  - [x] 3.1 Implement useStatsAggregator hook
    - Create `features/Progress/hooks/useStatsAggregator.ts`
    - Combine data from useStatsStore, useVisitStore, useAchievementStore
    - Load gauntlet stats asynchronously from localforage
    - Calculate derived values (accuracy, mastery levels, distributions)
    - _Requirements: 1.1-1.5, 2.1, 3.1-3.4, 4.1-4.5, 8.1-8.3_

  - [x] 3.2 Write property tests for mastery distribution calculation
    - **Property 8: Mastery Distribution Calculation**
    - **Validates: Requirements 5.1, 5.2**

- [x] 4. Create UI components
  - [x] 4.1 Create OverviewStatsCard component
    - Create `features/Progress/components/stats/OverviewStatsCard.tsx`
    - Display single stat with icon, value, and optional subtitle
    - Use theme variables for styling
    - _Requirements: 1.1-1.5, 7.4_

  - [x] 4.2 Create CharacterMasteryPanel component
    - Create `features/Progress/components/stats/CharacterMasteryPanel.tsx`
    - Display characters grouped by mastery level
    - Include content type filter tabs
    - Show top 5 difficult and top 5 mastered characters
    - _Requirements: 2.1-2.7_

  - [x] 4.3 Write property tests for top characters identification
    - **Property 5: Top Characters Identification**
    - **Validates: Requirements 2.6, 2.7**

  - [x] 4.4 Create TimedModeStatsPanel component
    - Create `features/Progress/components/stats/TimedModeStatsPanel.tsx`
    - Display stats for Kana, Kanji, Vocabulary in tabs or sections
    - Show correct, wrong, streak, best streak, accuracy for each
    - _Requirements: 3.1-3.5_

  - [x] 4.5 Write property tests for timed mode stats display
    - **Property 6: Timed Mode Stats Display**
    - **Validates: Requirements 3.2, 3.3, 3.4**

  - [x] 4.6 Create GauntletStatsPanel component
    - Create `features/Progress/components/stats/GauntletStatsPanel.tsx`
    - Display total sessions, completion rate, best time, accuracy, best streak
    - Handle loading state for async data
    - _Requirements: 4.1-4.6_

  - [x] 4.7 Write property tests for gauntlet stats display
    - **Property 7: Gauntlet Stats Display**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

  - [x] 4.8 Create MasteryDistributionChart component
    - Create `features/Progress/components/stats/MasteryDistributionChart.tsx`
    - Display visual breakdown of mastered/learning/needs-practice
    - Use color coding for performance levels
    - _Requirements: 5.1-5.3_

  - [x] 4.9 Create AchievementSummaryBar component
    - Create `features/Progress/components/stats/AchievementSummaryBar.tsx`
    - Display points, level, unlocked/total achievements
    - Include link to full achievements view
    - _Requirements: 8.1-8.4_

  - [x] 4.10 Write property tests for achievement summary display
    - **Property 9: Achievement Summary Display**
    - **Validates: Requirements 8.1, 8.2, 8.3**

- [x] 5. Checkpoint - Ensure all component tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Create main StatsPage component
  - [x] 6.1 Implement StatsPage component
    - Create `features/Progress/components/stats/StatsPage.tsx`
    - Compose all sub-components in responsive grid layout
    - Implement reset functionality with confirmation dialog
    - Handle empty states
    - _Requirements: 1.1-1.6, 6.1-6.5, 7.1-7.4_

  - [x] 6.2 Write property tests for stats overview display
    - **Property 1: Stats Overview Display Completeness**
    - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

  - [x] 6.3 Create barrel export for stats components
    - Update `features/Progress/components/stats/index.ts`
    - Export all new components
    - _Requirements: N/A (code organization)_

- [x] 7. Integrate with existing Progress feature
  - [x] 7.1 Update SimpleProgress to use new StatsPage
    - Replace content of `features/Progress/components/SimpleProgress.tsx`
    - Import and render new StatsPage component
    - Maintain backward compatibility with existing props
    - _Requirements: 1.1-8.4_

  - [x] 7.2 Update Progress feature exports
    - Update `features/Progress/index.ts` to export new components
    - _Requirements: N/A (code organization)_

- [x] 8. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- All tasks including property tests are required for comprehensive coverage
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation uses TypeScript with strict mode
- All components use the application's theme variables (var(--main-color), etc.)
- Gauntlet stats are loaded asynchronously to avoid blocking the UI
