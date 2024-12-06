import img from "./images/bulbasaur.jpg"
import "./Showcase.css"

function Showcase() {
const favPokemon = "dj guga la felipa..."
const pokeCharacteristics = {
    type: "miau",
    move: "deutsch"
}
    return (
      <div>
        <h1>{favPokemon}'s Showcase Component</h1>
        <img src={img} />
        <h2>{pokeCharacteristics.type} --- {pokeCharacteristics.move}
          <span> soto moto</span></h2>
      </div>
    );
  }
  
  export default Showcase;