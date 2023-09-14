import botonQ from './assets/BotonQ.png';
import principales from './assets/Misionesprincipales.png'
import todasmisiones from './assets/todasmisiones.png'
import secundarias from './assets/misiones3.png'
import botonE from './assets/BotonE.png'
function TodoSearch(props){ 
    return (
        <div >
            <div className="tipos_misiones">
                <img className='boton' src={botonQ}></img>
                
                <button className='CategoryButton' onClick={()=>{
                    props.setButtonstate('all')
                }}>
                    <img src={todasmisiones}></img>
                </button>
                <button className='CategoryButton' onClick={()=>{
                    props.setButtonstate('main')
                }}>
                    <img src={principales} ></img>
                </button>
                <button className='CategoryButton' onClick={()=>{
                    props.setButtonstate('secondary')
                }}>
                <img src={secundarias}></img>
                </button>
                <img className='boton' src={botonE}></img>
            </div>
            <div>
                {props.children}
            </div>
        </div>
        

        
        
    ); 
}

export {TodoSearch};