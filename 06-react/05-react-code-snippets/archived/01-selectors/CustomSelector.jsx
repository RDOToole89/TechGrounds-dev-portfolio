const CustomSelector = ({
  selectionArray,
  className,
  itemToAdd,
  setItemToAdd,
  property,
}) => {
  const optionsToDisplay = selectionArray.map((item) => (
    <option key={item + Math.random()} value={item}>
      {item}
    </option>
  ));

  // console.log('ITEM TO ADD PROP', itemToAdd);

  return (
    <select
      // De beginwaarde van je selector
      value={itemToAdd[`${property}`]}
      // itemToAdd is het object {id: 1, size: undefined: color: undefined}[`${property}`]
      // is hetzelde als bijvoorbeeld itemToAdd.color of itemToAdd['color'] => gewoon een lookup in een object om het component hergebruikbaar te maken gebruiken we `${}` syntax string interpolatie
      // geef de className mee
      className={className}
      // onChange event is waar we de state veranderen
      onChange={(e) => {
        // we maken een nieuw object met de oude state, als we de begin state hebben zou dat dus:
        let newItemToAdd = { ...itemToAdd }; // hetzelfde als {id: 1, size: undefined, color: undefined}

        // we willen in dit geval de property op dat item aan passen!
        // dus stel dit is een color selector doen we als het ware dit:
        // {id: 1, size: undefined, color: undefined}['color'] = e.target.value
        // waarin e.target.value een van de waardes is uit je lijstje! ['brown','beige','black']

        // we hebben nu dus een NIEUW state object die we naar onze cart willen pushen.
        newItemToAdd[property] = e.target.value;

        // Ervan uitgaande dat de gebruiker size en color heeft ingevuld ziet dat er ongeveer zo uit!
        // die ziet er zo uit: {id: 1, size: 41 , color: 'beige'}

        //
        setItemToAdd(newItemToAdd);
      }}>
      <option key={Math.random()} value={`${property}`}>
        {property}
      </option>
      {optionsToDisplay}
    </select>
  );
};

export default CustomSelector;
