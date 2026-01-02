# Requirements Document

## Introduction

The Calligraphy feature provides an interactive drawing-based practice mode for KanaDojo users to learn and practice writing Japanese characters (Hiragana, Katakana, and Kanji). Unlike existing training modes that focus on recognition and typing, this feature enables users to practice the physical act of writing characters using touch or mouse input on a digital canvas. The system provides stroke order guidance, real-time feedback, and tracks progress to help users develop proper handwriting skills.

## Glossary

- **Calligraphy_System**: The complete calligraphy practice feature including canvas, stroke detection, and feedback mechanisms
- **Drawing_Canvas**: The HTML5 canvas element where users draw characters using touch or mouse input
- **Stroke**: A single continuous line drawn by the user from pen-down to pen-up
- **Stroke_Order**: The correct sequence in which strokes should be drawn to form a character
- **Stroke_Data**: The coordinate points and timing information captured during a stroke
- **Reference_Character**: The target character displayed as a guide for the user to trace or copy
- **Ghost_Stroke**: A semi-transparent visual guide showing the next stroke to draw
- **Practice_Mode**: A mode where users draw characters with visual guidance and hints
- **Free_Draw_Mode**: A mode where users draw characters without guidance for self-assessment
- **Character_Set**: A collection of characters (Hiragana, Katakana, or Kanji) available for practice
- **Stroke_Validator**: The component that compares user strokes against reference stroke data
- **Similarity_Score**: A numerical value (0-100) representing how closely a user's drawing matches the reference

## Requirements

### Requirement 1

**User Story:** As a Japanese learner, I want to practice drawing Hiragana and Katakana characters on a digital canvas, so that I can develop proper handwriting skills.

#### Acceptance Criteria

1. WHEN a user selects a character set (Hiragana or Katakana) THEN the Calligraphy_System SHALL display a character selection interface showing available characters organized by group
2. WHEN a user selects a character to practice THEN the Calligraphy_System SHALL display the Drawing_Canvas with the Reference_Character visible
3. WHEN a user draws on the Drawing_Canvas using touch or mouse input THEN the Calligraphy_System SHALL capture Stroke_Data including coordinates and render the stroke in real-time
4. WHEN a user completes a stroke (lifts finger or releases mouse) THEN the Calligraphy_System SHALL store the Stroke_Data as a discrete stroke
5. WHEN the Drawing_Canvas contains strokes THEN the Calligraphy_System SHALL provide a clear button to erase all strokes and restart

### Requirement 2

**User Story:** As a Japanese learner, I want to see stroke order guidance while practicing, so that I can learn the correct way to write each character.

#### Acceptance Criteria

1. WHEN Practice_Mode is active THEN the Calligraphy_System SHALL display numbered stroke order indicators on the Reference_Character
2. WHEN a user is about to draw a stroke THEN the Calligraphy_System SHALL highlight the next expected stroke as a Ghost_Stroke
3. WHEN a user completes a stroke in Practice_Mode THEN the Calligraphy_System SHALL advance the Ghost_Stroke indicator to the next stroke in the sequence
4. WHEN a user requests stroke animation THEN the Calligraphy_System SHALL animate the complete stroke order sequence at a readable pace
5. WHERE stroke order hints are enabled THEN the Calligraphy_System SHALL display directional arrows indicating stroke direction

### Requirement 3

**User Story:** As a Japanese learner, I want to receive feedback on my character drawings, so that I can understand how to improve my handwriting.

#### Acceptance Criteria

1. WHEN a user completes drawing a character THEN the Calligraphy_System SHALL calculate a Similarity_Score comparing the user's strokes to the reference
2. WHEN the Similarity_Score is calculated THEN the Calligraphy_System SHALL display the score as a percentage (0-100)
3. WHEN the Similarity_Score is below 50 THEN the Calligraphy_System SHALL provide visual feedback highlighting areas that need improvement
4. WHEN a user's stroke count differs from the reference stroke count THEN the Calligraphy_System SHALL indicate the stroke count discrepancy
5. WHEN a user achieves a Similarity_Score of 80 or higher THEN the Calligraphy_System SHALL display positive reinforcement feedback

### Requirement 4

**User Story:** As a Japanese learner, I want to practice Kanji characters with stroke order guidance, so that I can learn to write more complex characters correctly.

#### Acceptance Criteria

1. WHEN a user selects Kanji practice THEN the Calligraphy_System SHALL display Kanji characters organized by JLPT level (N5, N4, N3, N2, N1)
2. WHEN a user selects a Kanji character THEN the Calligraphy_System SHALL load the corresponding Stroke_Order data for that character
3. WHEN displaying a Kanji Reference_Character THEN the Calligraphy_System SHALL show the character's readings (onyomi and kunyomi) and meanings
4. WHILE a user practices a Kanji character THEN the Calligraphy_System SHALL track the number of strokes and compare against the expected count

### Requirement 5

**User Story:** As a Japanese learner, I want to track my calligraphy practice progress, so that I can see my improvement over time.

#### Acceptance Criteria

1. WHEN a user completes a character practice session THEN the Calligraphy_System SHALL record the Similarity_Score and timestamp to local storage
2. WHEN a user views their progress THEN the Calligraphy_System SHALL display statistics including characters practiced, average scores, and practice frequency
3. WHEN a user has practiced a character multiple times THEN the Calligraphy_System SHALL display the score trend for that character
4. WHEN a user achieves a personal best score for a character THEN the Calligraphy_System SHALL highlight the achievement

### Requirement 6

**User Story:** As a Japanese learner, I want different practice modes, so that I can choose the level of guidance that suits my skill level.

#### Acceptance Criteria

1. WHEN a user starts calligraphy practice THEN the Calligraphy_System SHALL offer Practice_Mode (with guidance) and Free_Draw_Mode (without guidance)
2. WHEN Practice_Mode is selected THEN the Calligraphy_System SHALL display Ghost_Strokes, stroke numbers, and directional hints
3. WHEN Free_Draw_Mode is selected THEN the Calligraphy_System SHALL display only the Reference_Character without stroke guidance
4. WHEN switching between modes THEN the Calligraphy_System SHALL preserve the currently selected character

### Requirement 7

**User Story:** As a user, I want the calligraphy canvas to work well on both desktop and mobile devices, so that I can practice anywhere.

#### Acceptance Criteria

1. WHEN the Calligraphy_System loads on a touch device THEN the Drawing_Canvas SHALL respond to touch events for drawing
2. WHEN the Calligraphy_System loads on a desktop device THEN the Drawing_Canvas SHALL respond to mouse events for drawing
3. WHEN the viewport size changes THEN the Drawing_Canvas SHALL resize appropriately while maintaining aspect ratio
4. WHILE drawing on a touch device THEN the Calligraphy_System SHALL prevent page scrolling to avoid accidental navigation

### Requirement 8

**User Story:** As a user, I want to customize my drawing experience, so that I can practice in a way that feels comfortable.

#### Acceptance Criteria

1. WHEN a user accesses calligraphy settings THEN the Calligraphy_System SHALL provide options for stroke width (thin, medium, thick)
2. WHEN a user changes stroke width THEN the Drawing_Canvas SHALL immediately apply the new width to subsequent strokes
3. WHEN a user accesses calligraphy settings THEN the Calligraphy_System SHALL provide an option to toggle stroke smoothing
4. WHEN stroke smoothing is enabled THEN the Calligraphy_System SHALL apply curve interpolation to reduce jagged lines

### Requirement 9

**User Story:** As a developer, I want stroke data to be serializable, so that practice sessions can be saved and replayed.

#### Acceptance Criteria

1. WHEN Stroke_Data is captured THEN the Calligraphy_System SHALL serialize the data to a JSON-compatible format
2. WHEN serialized Stroke_Data is loaded THEN the Calligraphy_System SHALL deserialize and render the strokes accurately on the Drawing_Canvas
3. WHEN Stroke_Data is serialized then deserialized THEN the resulting stroke rendering SHALL be visually identical to the original
