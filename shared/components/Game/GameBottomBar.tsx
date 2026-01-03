'use client';
import { ReactNode } from 'react';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { ActionButton } from '@/shared/components/ui/ActionButton';

export type BottomBarState = 'check' | 'correct' | 'wrong';

interface GameBottomBarProps {
  state: BottomBarState;
  onAction: () => void;
  canCheck: boolean;
  feedbackTitle?: string;
  feedbackContent: ReactNode;
  actionLabel?: string;
  secondaryAction?: ReactNode;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
  className?: string;
}

export const GameBottomBar = ({
  state,
  onAction,
  canCheck,
  feedbackTitle,
  feedbackContent,
  actionLabel,
  secondaryAction,
  buttonRef,
  className
}: GameBottomBarProps) => {
  const isCorrect = state === 'correct';
  const showFeedback = state !== 'check';
  const showContinue = isCorrect;

  // Default titles if not provided
  const defaultTitle = isCorrect ? 'Nicely done!' : 'Wrong! Correct answer:';
  const displayTitle = feedbackTitle || defaultTitle;

  return (
    <div
      className={clsx(
        'right-0 left-0 w-full',
        'border-t-2 border-[var(--border-color)] bg-[var(--card-color)]',
        'absolute bottom-0 z-10 px-2 py-2 sm:py-3 md:bottom-6 md:px-12 md:pt-2 md:pb-4',
        'flex min-h-20 flex-row items-center justify-center',
        className
      )}
    >
      {/* Left Container: 50% width, aligned right */}
      <div className='flex w-1/2 items-center justify-center'>
        <div
          className={clsx(
            'flex items-center gap-2 transition-all duration-500 sm:gap-3 md:gap-4',
            showFeedback
              ? 'translate-x-0 opacity-100'
              : 'pointer-events-none -translate-x-4 opacity-0 sm:-translate-x-8'
          )}
        >
          {isCorrect ? (
            <CircleCheck className='h-10 w-10 text-[var(--main-color)] sm:h-12 sm:w-12' />
          ) : (
            <CircleX className='h-10 w-10 text-[var(--main-color)] sm:h-12 sm:w-12' />
          )}
          <div className='flex flex-col'>
            <span className='text-lg text-[var(--secondary-color)] sm:text-xl'>
              {displayTitle}
            </span>
            <span className='text-sm text-[var(--main-color)] sm:text-lg'>
              {feedbackContent}
            </span>
          </div>
        </div>
      </div>

      {/* Right Container: 50% width */}
      <div className='flex w-1/2 flex-row items-end justify-center gap-2 sm:gap-3'>
        {/* Fixed-height wrapper prevents layout shift when button is pressed */}
        <div className='flex h-[68px] items-end sm:h-[72px]'>
          <ActionButton
            ref={buttonRef}
            borderBottomThickness={12}
            borderRadius='3xl'
            className={clsx(
              'w-auto px-6 py-2.5 text-lg font-medium transition-all duration-150 sm:px-12 sm:py-3 sm:text-xl',
              !canCheck && !showContinue && 'cursor-default opacity-60'
            )}
            onClick={onAction}
          >
            <span className='max-sm:hidden'>
              {actionLabel || (showContinue ? 'continue' : 'check')}
            </span>
            {showContinue ? (
              <CircleArrowRight className='h-8 w-8' />
            ) : (
              <CircleCheck className='h-8 w-8' />
            )}
          </ActionButton>
        </div>

        {secondaryAction}
      </div>
    </div>
  );
};
