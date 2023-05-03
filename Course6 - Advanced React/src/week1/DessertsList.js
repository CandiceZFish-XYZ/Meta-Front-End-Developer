function DessertsList(props) {
  return (
    <div>
      <ul>
        {props.data
          .filter((dessert) => dessert.calories <= 500)
          .sort((d1, d2) => d1.calories - d2.calories)
          .map((dessert) => (
            <li key={dessert.name}>
              {dessert.name + " - " + dessert.calories + " cal"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DessertsList;
