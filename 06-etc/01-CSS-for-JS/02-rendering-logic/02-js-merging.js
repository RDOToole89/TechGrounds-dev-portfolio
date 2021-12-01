// In principle, the cascade algorithm works something like this:
const appliedStyles = {
  ...inheritedStyles,
  ...tagStyles,
  ...classStyles,
  ...idStyles,
  ...inlineStyles,
  ...importantStyles,
};

// In our earlier example, we saw this CSS snippet:
/* 
p {
  font-weight: bold;
  color: hsl(0deg 0% 10%);
}
.introduction {
  color: violet;
}
*/

// This could be written in JavaScript as:

const tagStyles = {
  fontWeight: 'bold',
  color: 'hsl(0deg 0% 10%)',
};
const classStyles = {
  color: 'violet',
};
const appliedStyles2 = {
  ...tagStyles,
  ...classStyles,
};
