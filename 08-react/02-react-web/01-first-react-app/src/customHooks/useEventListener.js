import { useEffect, useRef } from 'react';

// Hook to easily attach an event listener
// Targets the window by default
const useEventListener = (
  eventType = '',
  listener = () => null,
  target = window,
  options = null
) => {
  // creates a ref object to persist the listening function across renders
  const savedListener = useRef();

  useEffect(() => {
    // saves the listener on page render
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    // if the target does not support the addEventListener method return
    if (!target?.addEventListener) return;

    // We only update this reference if the listener changes
    const eventListener = (event) => savedListener.current(event);

    target.addEventListener(eventType, listener, options);

    // cleanup function in the return that removes the eventListener
    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);

  // We don't have to return anything from this hook because we are just
  // listening for events and running the handler function as an argument.
};

export default useEventListener;
