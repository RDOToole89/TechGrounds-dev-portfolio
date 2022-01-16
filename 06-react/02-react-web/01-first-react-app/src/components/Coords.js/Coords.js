import React, { useState, useCallback } from 'react';
import useEventListener from '../../hooks/useEventListener2';

function Coords() {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.

  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates

      return setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener('mousemove', handler);

  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}

export default Coords;
