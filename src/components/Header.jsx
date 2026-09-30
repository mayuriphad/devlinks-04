export default function Header({ city, icon }) {
  return (
    <header>
      <img className="icon" src={icon} />
      <h1>Weather in {city}</h1>
    </header>
  )
}
