function Showcase() {
const favPokemon = "dj guga la felipa..."
const pokeCharacteristics = {
    type: "miau",
    move: "deutsch"
}
    return (
      <div>
        <h1>{favPokemon}'s Showcase Component</h1>
        <h2>{pokeCharacteristics.type} --- {pokeCharacteristics.move}</h2>
      </div>
    );
  }
  
  export default Showcase;