import { moves } from "./data"
import Coco from "./PokeMoveCard"
let i = 0

export default function PokeMoves() {
  return (

    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map(item => {
          console.log(item)
          return(
          <Coco key={i++} lol={item} />
        )})}
      </ul>




    </div>


  )
}