# Implementation Plan

- [x] 1. Set up feature structure and core types
  - [x] 1.1 Create feature directory structure
    - Create `features/Calligraphy/` with subdirectories: `components/`, `data/`, `lib/`, `services/`, `store/`, `__tests__/`
    - Create barrel export `features/Calligraphy/index.ts`
    - _Requirements: N/A (infrastructure)_

  - [x] 1.2 Define TypeScript interfaces and types
    - Create `features/Calligraphy/types.ts` with StrokeData, Point, StrokeOrderData, ReferenceStroke, CharacterData, PracticeResult, CalligraphyProgress, CalligraphySettings, SimilarityResult interfaces
    - _Requirements: 1.3, 1.4, 3.1, 5.1_

  - [x] 1.3 Write property test for stroke data types
    - **Property 19: Stroke data round-trip serialization**
    - **Validates: Requirements 9.1, 9.2, 9.3**

- [x] 2. Implement stroke serialization service
  - [x] 2.1 Create strokeSerializer service
    - Implement `serialize(strokes: StrokeData[]): string` function
    - Implement `deserialize(json: string): StrokeData[]` function
    - Create `features/Calligraphy/services/strokeSerializer.ts`
    - _Requirements: 9.1, 9.2, 9.3_

  - [x] 2.2 Write property test for serialization round-trip
    - **Property 19: Stroke data round-trip serialization**
    - **Validates: Requirements 9.1, 9.2, 9.3**

- [x] 3. Implement stroke validation and scoring
  - [x] 3.1 Create strokeValidator service
    - Implement `calculateSimilarity(userStrokes, referenceStrokes): SimilarityResult` function
    - Implement `compareStrokeCounts(userCount, referenceCount): StrokeCountComparison` function
    - Use point-to-path distance calculations for similarity scoring
    - Create `features/Calligraphy/services/strokeValidator.ts`
    - _Requirements: 3.1, 3.2, 3.4_

  - [x] 3.2 Write property test for similarity score bounds
    - **Property 6: Similarity score bounds**
    - **Validates: Requirements 3.1, 3.2**

  - [x] 3.3 Write property test for stroke count discrepancy
    - **Property 8: Stroke count discrepancy detection**
    - **Validates: Requirements 3.4, 4.4**

- [x] 4. Implement stroke smoothing utility
  - [x] 4.1 Create stroke smoothing function
    - Implement Catmull-Rom spline interpolation for smooth curves
    - Create `features/Calligraphy/lib/strokeSmoothing.ts`
    - _Requirements: 8.4_

  - [x] 4.2 Write property test for smoothing
    - **Property 18: Stroke smoothing reduces angles**
    - **Validates: Requirements 8.4**

- [x] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement Zustand stores
  - [x] 6.1 Create calligraphy settings store
    - Implement `useCalligraphySettingsStore` with strokeWidth, smoothingEnabled, showStrokeNumbers, showDirectionHints, defaultMode
    - Persist to localStorage with key `calligraphy-settings`
    - Create `features/Calligraphy/store/useCalligraphySettingsStore.ts`
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 6.2 Create calligraphy practice store
    - Implement `useCalligraphyStore` with currentCharacter, currentStrokes, currentMode, currentStrokeIndex, practiceHistory
    - Include actions: addStroke, clearStrokes, setCharacter, setMode, savePracticeResult
    - Persist progress to localStorage with key `calligraphy-progress`
    - Create `features/Calligraphy/store/useCalligraphyStore.ts`
    - _Requirements: 1.4, 1.5, 5.1, 6.1, 6.4_

  - [x] 6.3 Write property test for mode switch character preservation
    - **Property 13: Mode switch preserves character**
    - **Validates: Requirements 6.4**

  - [x] 6.4 Write property test for clear action
    - **Property 4: Clear action removes all strokes**
    - **Validates: Requirements 1.5**

- [x] 7. Implement stroke data service
  - [x] 7.1 Create strokeDataService
    - Implement `getStrokeOrder(character, type): Promise<StrokeOrderData>` function
    - Implement caching mechanism similar to kanjiDataService pattern
    - Create `features/Calligraphy/services/strokeDataService.ts`
    - _Requirements: 4.2_

  - [x] 7.2 Create stroke order data files
    - Create `public/strokes/hiragana.json` with stroke order data for all hiragana
    - Create `public/strokes/katakana.json` with stroke order data for all katakana
    - Note: Kanji stroke data will use existing kanji JSON files extended with stroke paths
    - _Requirements: 2.1, 2.2, 4.2_

- [x] 8. Implement CalligraphyCanvas component
  - [x] 8.1 Create base canvas component
    - Implement HTML5 Canvas with 2D context
    - Handle canvas sizing with 1:1 aspect ratio
    - Implement resize observer for responsive behavior
    - Create `features/Calligraphy/components/CalligraphyCanvas.tsx`
    - _Requirements: 7.3_

  - [x] 8.2 Implement touch and mouse input handling
    - Handle touchstart, touchmove, touchend events
    - Handle mousedown, mousemove, mouseup events
    - Prevent default scroll on touch events
    - Capture coordinates and build StrokeData
    - _Requirements: 1.3, 7.1, 7.2, 7.4_

  - [x] 8.3 Implement stroke rendering
    - Render strokes in real-time during drawing
    - Apply stroke width from settings
    - Apply smoothing when enabled
    - _Requirements: 1.3, 8.2_

  - [x] 8.4 Write property test for input event processing
    - **Property 14: Input event processing**
    - **Validates: Requirements 7.1, 7.2**

  - [x] 8.5 Write property test for stroke data capture
    - **Property 2: Stroke data capture preserves coordinates**
    - **Validates: Requirements 1.3**

  - [x] 8.6 Write property test for stroke completion
    - **Property 3: Stroke completion creates discrete strokes**
    - **Validates: Requirements 1.4**

  - [x] 8.7 Write property test for aspect ratio
    - **Property 15: Canvas aspect ratio preservation**
    - **Validates: Requirements 7.3**

  - [x] 8.8 Write property test for touch scroll prevention
    - **Property 16: Touch scroll prevention**
    - **Validates: Requirements 7.4**

- [x] 9. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Implement StrokeGuide component
  - [x] 10.1 Create stroke guide overlay
    - Render reference character as background
    - Display numbered stroke indicators
    - Show directional arrows when enabled
    - Highlight current ghost stroke
    - Create `features/Calligraphy/components/StrokeGuide.tsx`
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 10.2 Implement ghost stroke advancement
    - Track current stroke index
    - Advance to next stroke on completion
    - _Requirements: 2.3_

  - [x] 10.3 Write property test for ghost stroke advancement
    - **Property 5: Ghost stroke advances correctly**
    - **Validates: Requirements 2.2, 2.3**

- [x] 11. Implement FeedbackDisplay component
  - [x] 11.1 Create feedback display component
    - Display similarity score as percentage
    - Show stroke count comparison
    - Display improvement areas when score < 50
    - Show positive reinforcement when score >= 80
    - Highlight personal best achievements
    - Create `features/Calligraphy/components/FeedbackDisplay.tsx`
    - _Requirements: 3.2, 3.3, 3.4, 3.5, 5.4_

  - [x] 11.2 Write property test for score-based feedback
    - **Property 7: Score-based feedback consistency**
    - **Validates: Requirements 3.3, 3.5**

  - [x] 11.3 Write property test for personal best detection
    - **Property 12: Personal best detection**
    - **Validates: Requirements 5.4**

- [x] 12. Implement CharacterSelector component
  - [x] 12.1 Create character selector grid
    - Display characters organized by type (hiragana/katakana/kanji)
    - Organize by groups (kana) or JLPT levels (kanji)
    - Handle character selection
    - Create `features/Calligraphy/components/CharacterSelector.tsx`
    - _Requirements: 1.1, 4.1_

  - [x] 12.2 Integrate with existing kana and kanji data
    - Use existing `features/Kana/data/kana.ts` for kana characters
    - Use existing `kanjiDataService` for kanji characters
    - Display kanji readings and meanings
    - _Requirements: 4.1, 4.3_

  - [x] 12.3 Write property test for character selection
    - **Property 1: Character selection displays correct characters**
    - **Validates: Requirements 1.1, 4.1**

  - [x] 12.4 Write property test for kanji metadata
    - **Property 9: Kanji metadata display**
    - **Validates: Requirements 4.3**

- [x] 13. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Implement progress tracking
  - [x] 14.1 Create progress calculation utilities
    - Implement statistics calculation (total practiced, average score, practice frequency)
    - Implement score trend calculation for individual characters
    - Create `features/Calligraphy/lib/progressCalculations.ts`
    - _Requirements: 5.2, 5.3_

  - [x] 14.2 Write property test for statistics calculation
    - **Property 11: Statistics calculation accuracy**
    - **Validates: Requirements 5.2**

  - [x] 14.3 Write property test for practice result persistence
    - **Property 10: Practice result persistence**
    - **Validates: Requirements 5.1**

- [x] 15. Implement CalligraphyMenu page
  - [x] 15.1 Create calligraphy menu component
    - Display character type selection (Hiragana, Katakana, Kanji)
    - Display mode selection (Practice, Free Draw)
    - Include settings access
    - Create `features/Calligraphy/components/CalligraphyMenu.tsx`
    - _Requirements: 6.1_

- [x] 16. Implement CalligraphyPractice page
  - [x] 16.1 Create practice page component
    - Integrate CalligraphyCanvas, StrokeGuide, FeedbackDisplay
    - Handle practice flow (draw -> validate -> feedback -> next)
    - Include clear and undo controls
    - Create `features/Calligraphy/components/CalligraphyPractice.tsx`
    - _Requirements: 1.2, 1.5, 3.1_

- [x] 17. Create Next.js routes
  - [x] 17.1 Create calligraphy menu route
    - Create `app/[locale]/calligraphy/page.tsx`
    - Create `app/[locale]/calligraphy/loading.tsx`
    - _Requirements: N/A (routing)_

  - [x] 17.2 Create calligraphy practice route
    - Create `app/[locale]/calligraphy/practice/page.tsx`
    - Create `app/[locale]/calligraphy/practice/loading.tsx`
    - _Requirements: N/A (routing)_

- [x] 18. Add translations
  - [x] 18.1 Add calligraphy translations
    - Add translations to `core/i18n/locales/en/calligraphy.json`
    - Add translations to `core/i18n/locales/es/calligraphy.json`
    - Add translations to `core/i18n/locales/ja/calligraphy.json`
    - Include: menu labels, mode names, feedback messages, settings labels
    - _Requirements: N/A (i18n)_

- [x] 19. Implement stroke width settings UI
  - [x] 19.1 Create settings UI component
    - Add stroke width selector (thin/medium/thick)
    - Add smoothing toggle
    - Add stroke number toggle
    - Add direction hints toggle
    - Create `features/Calligraphy/components/CalligraphySettings.tsx`
    - _Requirements: 8.1, 8.3_

  - [x] 19.2 Write property test for stroke width application
    - **Property 17: Stroke width application**
    - **Validates: Requirements 8.2**

- [x] 20. Final integration and polish
  - [x] 20.1 Add audio feedback integration
    - Use existing `useClick`, `useCorrect`, `useError` hooks
    - Play sounds on stroke completion, success, and errors
    - _Requirements: N/A (UX enhancement)_

  - [x] 20.2 Add navigation links
    - Add calligraphy link to main menu
    - Add calligraphy to navigation components
    - _Requirements: N/A (navigation)_

- [x] 21. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
