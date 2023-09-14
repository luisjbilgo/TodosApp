import './Contenedor.css'

function Contenedor(props) {
  return (
    <div className='App'>
        {props.children}
    </div>
  )
}

export default Contenedor