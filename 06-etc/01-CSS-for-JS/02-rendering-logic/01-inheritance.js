{
  /* <main style="color: black;">
  <p style="color: red;">
    Hello <span>World</span>
  </p>
</main> */
}

class Main {
  color = 'black';
}
class Paragraph extends Main {
  backgroundColor = 'red';
}
class Span extends Paragraph {}
const s = new Span();
console.log(s.color);
