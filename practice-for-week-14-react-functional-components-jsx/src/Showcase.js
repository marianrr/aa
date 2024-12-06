import img from "./images/bulbasaur.jpg"


function Showcase() {
const favPokemon = "dj guga la felipa..."
const pokeCharacteristics = {
    type: "miau",
    move: "deutsch"
}
    return (
      <div>
        <h1>{favPokemon}'s Showcase Component</h1>
        <img src={img} width="300" height="300" alt="miau" style={{margin:"50px"}}/>
        <h2>{pokeCharacteristics.type} --- {pokeCharacteristics.move}
          <span style={{ backgroundColor:"green"}}> soto moto</span></h2>
      </div>
    );
  }
  
  export default Showcase;