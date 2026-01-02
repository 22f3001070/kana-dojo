# Implementation Plan: Expanded Achievements

## Overview

This implementation plan adds 70+ new achievements to KanaDojo across all game modes and content types. The implementation preserves all existing achievements while extending the achievement system with new categories, requirement types, and tracking mechanisms.

## Tasks

- [x] 1. Extend Achievement Store Types and Interfaces
  - [x] 1.1 Add new achievement category types to useAchievementStore.ts
    - Add 'kana', 'kanji', 'vocabulary', 'gauntlet', 'blitz', 'speed', 'fun' categories
    - _Requirements: All_
  - [x] 1.2 Add new requirement types to the AchievementRequirement interface
    - Add content_correct, content_mastery, gauntlet_completion, gauntlet_difficulty, gauntlet_perfect, gauntlet_lives, blitz_session, blitz_score, speed, variety, days_trained, time_of_day, wrong_streak, exact_count, achievement_count, total_points types
    - _Requirements: All_
  - [x] 1.3 Add hidden field to Achievement interface for secret achievements
    - _Requirements: 10.3-10.6, 10.10_

- [x] 2. Extend Stats Store with New Tracking Fields
  - [x] 2.1 Add content-specific tracking fields to useStatsStore.ts
    - Add hiraganaCorrect, katakanaCorrect, kanjiCorrectByLevel, vocabularyCorrect fields
    - _Requirements: 1.1-1.8, 2.1-2.10, 3.1-3.6_
  - [x] 2.2 Add Gauntlet-specific tracking fields
    - Add gauntletStats object with totalRuns, completedRuns, difficulty completions, perfectRuns, noDeathRuns, livesRegenerated, bestStreak
    - _Requirements: 4.1-4.10_
  - [x] 2.3 Add Blitz-specific tracking fields
    - Add blitzStats object with totalSessions, bestSessionScore, bestStreak, totalCorrect
    - _Requirements: 5.1-5.8_
  - [x] 2.4 Add time and speed tracking fields
    - Add fastestAnswerMs, answerTimesMs array
    - _Requirements: 6.1-6.5_
  - [x] 2.5 Add variety and exploration tracking fields
    - Add dojosUsed, modesUsed, challengeModesUsed Sets
    - _Requirements: 8.1-8.3_
  - [x] 2.6 Add day tracking field
    - Add trainingDays Set for unique training days
    - _Requirements: 8.4-8.7_
  - [x] 2.7 Add wrong streak tracking
    - Add currentWrongStreak, maxWrongStreak fields
    - _Requirements: 10.2_

- [x] 3. Checkpoint - Verify Store Extensions
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Add New Achievement Definitions
  - [x] 4.1 Add Kana achievements to ACHIEVEMENTS array
    - Add hiragana_apprentice, hiragana_adept, hiragana_master, katakana_apprentice, katakana_adept, katakana_master, hiragana_perfectionist, katakana_perfectionist
    - _Requirements: 1.1-1.8_
  - [x] 4.2 Add Kanji achievements to ACHIEVEMENTS array
    - Add n5_explorer through n1_explorer, n5_graduate through n1_graduate
    - _Requirements: 2.1-2.10_
  - [x] 4.3 Add Vocabulary achievements to ACHIEVEMENTS array
    - Add word_collector, lexicon_builder, dictionary_devotee, vocabulary_virtuoso, word_wizard, linguistic_legend
    - _Requirements: 3.1-3.6_
  - [x] 4.4 Add Gauntlet achievements to ACHIEVEMENTS array
    - Add gauntlet_initiate, gauntlet_survivor, gauntlet_warrior, gauntlet_legend, gauntlet_veteran, gauntlet_champion, flawless_victory, untouchable, phoenix_rising, gauntlet_streak_master
    - _Requirements: 4.1-4.10_
  - [x] 4.5 Add Blitz achievements to ACHIEVEMENTS array
    - Add speed_demon_initiate, blitz_warrior, blitz_champion, lightning_reflexes, blitz_legend, precision_under_pressure, speed_addict, blitz_master
    - _Requirements: 5.1-5.8_
  - [x] 4.6 Add Speed achievements to ACHIEVEMENTS array
    - Add quick_draw, speed_reader, instant_recognition, rapid_fire, efficient_learner
    - _Requirements: 6.1-6.5_
  - [x] 4.7 Add Extended Streak achievements to ACHIEVEMENTS array
    - Add streak_warrior, century_streak, streak_titan, streak_immortal, streak_god
    - _Requirements: 7.1-7.5_
  - [x] 4.8 Add Exploration achievements to ACHIEVEMENTS array
    - Add well_rounded, mode_explorer, triple_threat, consistent_learner, monthly_dedication, century_of_learning, year_of_mastery
    - _Requirements: 8.1-8.7_
  - [x] 4.9 Add Extended Milestone achievements to ACHIEVEMENTS array
    - Add dedicated_scholar, grand_master, legendary_scholar, session_veteran, session_legend, eternal_student
    - _Requirements: 9.1-9.6_
  - [x] 4.10 Add Point-based achievements to ACHIEVEMENTS array
    - Add point_collector, point_hoarder, point_master
    - _Requirements: 9.7-9.9_
  - [x] 4.11 Add Fun/Secret achievements to ACHIEVEMENTS array
    - Add learning_from_mistakes, perseverance, night_owl, early_bird, answer_to_everything, perfect_century, achievement_hunter, achievement_collector, achievement_enthusiast, completionist
    - _Requirements: 10.1-10.10_

- [x] 5. Checkpoint - Verify Achievement Definitions
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement Achievement Checking Logic
  - [x] 6.1 Implement content_correct requirement checker
    - Check correct answers for specific content types (hiragana, katakana, kanji by level, vocabulary)
    - _Requirements: 1.1-1.6, 2.1-2.5, 3.1-3.4_
  - [x] 6.2 Implement content_mastery requirement checker
    - Check accuracy across all characters in a content set
    - _Requirements: 1.7-1.8, 2.6-2.10, 3.5-3.6_
  - [x] 6.3 Implement gauntlet requirement checkers
    - Check gauntlet_completion, gauntlet_difficulty, gauntlet_perfect, gauntlet_lives requirements
    - _Requirements: 4.1-4.9_
  - [x] 6.4 Implement blitz requirement checkers
    - Check blitz_session, blitz_score requirements
    - _Requirements: 5.1-5.3, 5.7-5.8_
  - [x] 6.5 Implement speed requirement checker
    - Check time-based achievements (total time, average time, single answer time)
    - _Requirements: 6.1-6.5_
  - [x] 6.6 Implement variety requirement checker
    - Check dojo variety, mode variety, challenge mode variety
    - _Requirements: 8.1-8.3_
  - [x] 6.7 Implement days_trained requirement checker
    - Check unique training days count
    - _Requirements: 8.4-8.7_
  - [x] 6.8 Implement time_of_day requirement checker
    - Check current hour against time windows for Night Owl/Early Bird
    - _Requirements: 10.3-10.4_
  - [x] 6.9 Implement wrong_streak requirement checker
    - Check consecutive wrong answers
    - _Requirements: 10.2_
  - [x] 6.10 Implement exact_count requirement checker
    - Check for exact session correct counts (42, 100)
    - _Requirements: 10.5-10.6_
  - [x] 6.11 Implement achievement_count requirement checker
    - Check number of unlocked achievements for meta achievements
    - _Requirements: 10.7-10.10_
  - [x] 6.12 Implement total_points requirement checker
    - Check total achievement points earned
    - _Requirements: 9.7-9.9_

- [x] 7. Checkpoint - Verify Achievement Checking Logic
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Integrate Stats Tracking into Game Components
  - [x] 8.1 Update Kana training to track hiragana/katakana separately
    - Modify incrementCorrectAnswers to track content type
    - _Requirements: 1.1-1.8_
  - [x] 8.2 Update Kanji training to track by JLPT level
    - Modify incrementCorrectAnswers to track JLPT level
    - _Requirements: 2.1-2.10_
  - [x] 8.3 Update Vocabulary training to track vocabulary stats
    - Modify incrementCorrectAnswers to track vocabulary
    - _Requirements: 3.1-3.6_
  - [x] 8.4 Update Gauntlet component to save extended stats
    - Track difficulty, lives, regeneration, perfect runs
    - _Requirements: 4.1-4.10_
  - [x] 8.5 Update Blitz component to save extended stats
    - Track session scores, streaks, total correct
    - _Requirements: 5.1-5.8_
  - [x] 8.6 Add answer time tracking to game components
    - Track individual answer times for speed achievements
    - _Requirements: 6.1-6.5_
  - [x] 8.7 Add dojo/mode tracking on session start
    - Track which dojos and modes user has tried
    - _Requirements: 8.1-8.3_
  - [x] 8.8 Add training day tracking on session save
    - Add current date to trainingDays set
    - _Requirements: 8.4-8.7_
  - [x] 8.9 Add wrong streak tracking
    - Track consecutive wrong answers
    - _Requirements: 10.2_

- [x] 9. Checkpoint - Verify Stats Integration
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Write Property Tests for Achievement System
  - [x] 10.1 Write property test for threshold achievement unlocking
    - **Property 1: Threshold Achievement Unlocking**
    - **Validates: Requirements 1.1-1.6, 2.1-2.5, 3.1-3.4, 4.5-4.6, 5.2-5.3, 5.7-5.8, 7.1-7.5, 8.4-8.7, 9.1-9.6, 9.7-9.9**
  - [x] 10.2 Write property test for mastery achievement unlocking
    - **Property 2: Mastery Achievement Unlocking**
    - **Validates: Requirements 1.7-1.8, 2.6-2.10, 3.5-3.6**
  - [x] 10.3 Write property test for mode completion achievements
    - **Property 3: Mode Completion Achievement Unlocking**
    - **Validates: Requirements 4.1-4.4, 4.7-4.8, 5.1**
  - [x] 10.4 Write property test for streak achievements
    - **Property 4: Streak Achievement Unlocking**
    - **Validates: Requirements 4.10, 5.4-5.5, 7.1-7.5**
  - [x] 10.5 Write property test for time-based achievements
    - **Property 5: Time-Based Achievement Unlocking**
    - **Validates: Requirements 6.1-6.5**
  - [x] 10.6 Write property test for variety achievements
    - **Property 6: Variety Achievement Unlocking**
    - **Validates: Requirements 8.1-8.3**
  - [x] 10.7 Write property test for meta achievements
    - **Property 7: Meta Achievement Unlocking**
    - **Validates: Requirements 10.7-10.10**

- [x] 11. Update Documentation
  - [x] 11.1 Update docs/ACHIEVEMENTS.md with new achievements
    - Document all new achievement categories and individual achievements
    - _Requirements: All_

- [x] 12. Final Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- All existing achievements must be preserved - only additions, no modifications to existing
