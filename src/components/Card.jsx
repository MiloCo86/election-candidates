import "../styles/card.css"

const person = "../src/assets/person.jpg";

const Card = (props) => {
  return (
    <div className="card">
      <img src= {person}/>
      <p>{props.name}</p>
    </div>
  )
}

export default Card