import color from "../colors"
const Swatch = ({ color }) => {
    const {name, hex} = color;
    return <li>{name}</li>
}
export default Swatch;