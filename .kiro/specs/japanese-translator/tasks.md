# Implementation Plan

- [x] 1. Set up feature structure and data models
  - [x] 1.1 Create feature directory structure
    - Create `features/Translator/` with subdirectories: `components/`, `services/`, `store/`, `__tests__/`
    - Create barrel export `features/Translator/index.ts`
    - _Requirements: 7.1, 7.2_

  - [x] 1.2 Define TypeScript interfaces and types
    - Create `features/Translator/types.ts` with Language, TranslationEntry, TranslatorState, API types
    - _Requirements: 2.1, 3.1_

  - [x] 1.3 Write property test for language auto-swap
    - **Property 2: Language auto-swap**
    - **Validates: Requirements 2.2**

- [x] 2. Implement translation history service
  - [x] 2.1 Create history service with localforage
    - Implement `features/Translator/services/historyService.ts`
    - Functions: loadHistory, saveEntry, deleteEntry, clearAll
    - Use localforage with key `kanadojo-translation-history`
    - _Requirements: 3.1, 3.2, 3.4, 3.5_

  - [x] 2.2 Write property test for history round-trip
    - **Property 5: Translation history round-trip**
    - **Validates: Requirements 3.1, 3.2**

  - [x] 2.3 Write property test for history delete
    - **Property 7: History delete removes entry**
    - **Validates: Requirements 3.4**

  - [x] 2.4 Write property test for clear all history
    - **Property 8: Clear all empties history**
    - **Validates: Requirements 3.5**

- [x] 3. Implement translation API service
  - [x] 3.1 Create API route for Google Translation
    - Create `app/api/translate/route.ts`
    - Handle POST requests with text, sourceLanguage, targetLanguage
    - Integrate with Google Cloud Translation API
    - Return translated text and handle errors
    - _Requirements: 2.1, 2.4, 5.1, 5.3_

  - [x] 3.2 Create client-side translation service
    - Implement `features/Translator/services/translationAPI.ts`
    - Function: translate(text, sourceLang, targetLang)
    - Handle network errors, rate limits, validation
    - _Requirements: 2.1, 5.1, 5.2, 5.3_

  - [x] 3.3 Write property test for API error handling
    - **Property 11: API errors show messages**
    - **Validates: Requirements 5.1**

- [x] 4. Implement Zustand store
  - [x] 4.1 Create translator store
    - Implement `features/Translator/store/useTranslatorStore.ts`
    - State: sourceText, sourceLanguage, targetLanguage, translatedText, romanization, isLoading, error, isOffline, history
    - Actions: setSourceText, setSourceLanguage, swapLanguages, translate, clearInput, loadHistory, addToHistory, deleteFromHistory, clearHistory, restoreFromHistory
    - _Requirements: 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 3.4, 3.5, 4.2_

  - [x] 4.2 Write property test for swap preserves content
    - **Property 3: Swap preserves content**
    - **Validates: Requirements 2.3**

  - [x] 4.3 Write property test for clear button
    - **Property 9: Clear button empties fields**
    - **Validates: Requirements 4.2**

  - [x] 4.4 Write property test for history click restores
    - **Property 6: History click restores state**
    - **Validates: Requirements 3.3**

- [x] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement UI components
  - [x] 6.1 Create TranslatorInput component
    - Implement `features/Translator/components/TranslatorInput.tsx`
    - Text area with character count (max 5000)
    - Language selector dropdown
    - Clear button
    - Keyboard shortcut (Ctrl/Cmd+Enter)
    - _Requirements: 4.2, 4.3, 4.4, 4.5_

  - [x] 6.2 Write property test for character count accuracy
    - **Property 10: Character count accuracy**
    - **Validates: Requirements 4.3**

  - [x] 6.3 Create TranslatorOutput component
    - Implement `features/Translator/components/TranslatorOutput.tsx`
    - Display translated text
    - Display romanization when source is Japanese
    - Copy to clipboard button
    - Loading state indicator
    - _Requirements: 2.5, 4.1, 7.3_

  - [x] 6.4 Write property test for romanization display
    - **Property 4: Japanese input shows romanization**
    - **Validates: Requirements 2.5**

  - [x] 6.5 Create TranslationHistory component
    - Implement `features/Translator/components/TranslationHistory.tsx`
    - List of history entries with timestamp
    - Click to restore entry
    - Delete individual entry button
    - Clear all button with confirmation
    - _Requirements: 3.2, 3.3, 3.4, 3.5_

  - [x] 6.6 Create SEOContent component
    - Implement `features/Translator/components/SEOContent.tsx`
    - Collapsible educational content section
    - "How to use" guide
    - "About Japanese writing systems" section
    - FAQ with common translation questions
    - _Requirements: 1.4_

  - [x] 6.7 Create main TranslatorPage component
    - Implement `features/Translator/components/TranslatorPage.tsx`
    - Orchestrate all sub-components
    - Responsive layout (stacked mobile, side-by-side desktop)
    - Swap languages button between input/output
    - Offline indicator
    - _Requirements: 2.3, 5.2, 6.1, 6.2, 7.1, 7.2_

- [x] 7. Implement page route with SEO
  - [x] 7.1 Create translate page route
    - Create `app/[locale]/translate/page.tsx`
    - Server component with comprehensive metadata
    - JSON-LD structured data (WebApplication schema)
    - Proper heading hierarchy with target keywords
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 7.2 Create loading state
    - Create `app/[locale]/translate/loading.tsx`
    - Skeleton loader consistent with KanaDojo design
    - _Requirements: 7.3_

  - [x] 7.3 Update sitemap configuration
    - Update `next-sitemap.config.js` to include `/translate` with priority 0.9 and daily changefreq
    - _Requirements: 1.5_

- [x] 8. Add translations
  - [x] 8.1 Add English translations
    - Create `core/i18n/locales/en/translator.json`
    - Keys for all UI text, error messages, SEO content
    - _Requirements: 1.4, 5.1, 5.2, 5.3, 5.4_

  - [x] 8.2 Add Spanish translations
    - Create `core/i18n/locales/es/translator.json`
    - Translate all keys from English
    - _Requirements: 1.4_

  - [x] 8.3 Add Japanese translations
    - Create `core/i18n/locales/ja/translator.json`
    - Translate all keys from English
    - _Requirements: 1.4_

- [x] 9. Final integration and polish
  - [x] 9.1 Add navigation link
    - Add translate link to main navigation/menu
    - _Requirements: 1.1_

  - [x] 9.2 Write property test for translation produces result
    - **Property 1: Translation produces result**
    - **Validates: Requirements 2.1**

- [x] 10. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
