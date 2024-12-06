export default function PokeMoveCard(...props) {
    console.log("propsul este: ", props, props.move, props.id)
    return (

        <li>{props.move}</li>


    )
}