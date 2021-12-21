// Helper function takes in a parentArray and a targetClassname it will then loop over
// the childrenNodes of the parentArray and add a class 'correct' class if the answer is correct
// and an 'incorrect' class if it is not correct

export const checkAnswerCorrectAddClass = (
  parentArray,
  targetCssClassname,
  userAnswerString,
  correctAnswerString,
  classesToAddArray
) => {
  parentArray.forEach((node) => {
    node.childNodes.forEach((child) => {
      if (child.classList.contains(targetCssClassname)) {
        if (child.textContent === correctAnswerString) {
          child.classList.add(classesToAddArray[0]);

          if (child.previousSibling) child.previousSibling.classList.add(classesToAddArray[0]);
          if (child.nextElementSibling)
            child.nextElementSibling.classList.add(classesToAddArray[0]);
        }

        if (child.textContent === userAnswerString && userAnswerString !== correctAnswerString) {
          child.classList.add(classesToAddArray[1]);

          if (child.previousSibling) child.previousSibling.classList.add(classesToAddArray[1]);
          if (child.nextElementSibling)
            child.nextElementSibling.classList.add(classesToAddArray[1]);
        }
      }
    });
  });
};
