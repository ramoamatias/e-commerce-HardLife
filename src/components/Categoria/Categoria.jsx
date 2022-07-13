import "./Categoria.css";

const Categoria = ({ nombre }) => {
  return (
   <p className="categoria button">{ nombre }</p>
  )
}

export default Categoria