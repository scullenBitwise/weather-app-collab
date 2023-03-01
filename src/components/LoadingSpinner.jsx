import React from 'react';

function LoadingSpinner() {
  return (
    <div className="d-flex loading-spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
