import './todoCounter.css' 
import check from './assets/Check_icon.png'

function TodoCounter({total, completed}){
    return (
    <div className='Misiones'>
        <image>
            <img src={check} ></img>
        </image>
        
            <h1 >
                Todas las misiones {completed}/{total}
            </h1>
    </div>
    ); 
}

export {TodoCounter};