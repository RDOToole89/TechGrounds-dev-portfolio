export const createElement = (element, className, clickHandler, text) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  console.log(newElement);

  if (text) newElement.textContent = text;
  if (clickHandler) newElement.onclick = clickHandler;

  return newElement;
};

export const mountElements = (elements, parentElement) => {
  elements.forEach((element) => parentElement.appendChild(element));
};
