import './createTask.css'
import BotonCtrl from './assets/BotonCtrl.png'

function CreateTask() {
  return (
    <div className='Container'>
        <div className='type_color'></div>
        <p>Crear Mision</p>
        <input type={'text'}></input>
        <button onClick={
          (event) => {
            console.log('le diste click')
            console.log(event);
          }
        }
          >
          <img src={BotonCtrl} alt='Boton'></img>
          Crear
          
        </button>
    </div>
  )
}

export  {CreateTask}