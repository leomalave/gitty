export function Greeting({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

export function UserCard({ name, amount, married, adress, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>💲{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {adress.city}</li>
        <li>Adress: {adress.street}</li>
      </ul>
    </div>
  );
}
