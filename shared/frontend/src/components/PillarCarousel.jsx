// src/components/PillarCarousel.jsx
import React from 'react';
import PurchaseCard from './PurchaseCard';

/**
 * A presentational component for a single skeleton card.
 * Uses the styles defined in global.css to render a shimmering placeholder.
 */
const SkeletonCard = () => (
  <div className="skeleton-card" style={{ flexShrink: 0, marginRight: 'var(--spacing-3)' }}>
    <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
    <div className="skeleton skeleton-text-short" style={{ width: '50%' }}></div>
    <div className="skeleton skeleton-button" style={{ marginTop: 'auto' }}></div>
  </div>
);


const PillarCarousel = ({ title, items, emptyMessage, onCardAction, isLoading }) => {
  return (
    <div>
      <h3 style={{
        fontSize: '14px',
        color: 'var(--text-primary)',
        marginBottom: 'var(--spacing-3)',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        {title}
      </h3>

      {/* Main conditional rendering logic */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        // Add some padding to the sides to prevent shadows from being cut off
        padding: '0 var(--spacing-2) var(--spacing-3) var(--spacing-2)',
        // Hide scrollbar for a cleaner look
        scrollbarWidth: 'none', /* Firefox */
      }}>
        {/* Step 1: Check for loading state first */}
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : items.length === 0 ? (
          /* Step 2: If not loading and no items, show empty message */
          /* The container needs to be full width to center the text */
          <div className="dark-glass flex-center" style={{
            padding: 'var(--spacing-4)',
            height: '90px',
            borderRadius: '12px',
            width: '100%',
          }}>
            <p className="text-tertiary" style={{ fontSize: '12px', textAlign: 'center' }}>{emptyMessage}</p>
          </div>
        ) : (
          /* Step 3: If not loading and has items, show them */
          items.map(item => (
            <PurchaseCard
              key={item.id}
              purchase={item}
              onAction={onCardAction}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PillarCarousel;