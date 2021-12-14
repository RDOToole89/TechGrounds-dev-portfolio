export const createElement = (
  element: string,
  className: string,
  clickHandler?: EventListener
): HTMLElement => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  console.log(newElement);

  if (clickHandler) newElement.onclick = clickHandler;

  return newElement;
};

export const mountElements = (elements: HTMLElement[], parentElement: HTMLElement): void => {
  elements.forEach((element) => parentElement.appendChild(element));
};
