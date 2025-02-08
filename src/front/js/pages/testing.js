import React from 'react'
import index from '../../styles/index.css'
import { useState } from 'react'

/* Usamos el metodo crypto.randomUUID() que nos proporciona el explorador para genera un num unico para cada key de los elementos del ul*/

const initialItems = [
    {id: crypto.randomUUID(), task: 'Lavar la ropa'},
    {id: crypto.randomUUID(), task: 'Estudiar React'},
    {id: crypto.randomUUID(), task: 'Terminar el proyecto'}
]
const testing = () => {
    const [items, setItems] = React.useState(initialItems)
    const inputRef = React.useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const task = event.target.item.value
        //el elemento que ha iniciado este evento (el formulario)
        setItems([...items, {id: crypto.randomUUID(), task}])   
        inputRef.current.value = ''
    }
    
    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }


  return (
    <div className='container-fluid mt-5 border border-primary p-5'>
        <div className='row'>
        <form className='col-6' onSubmit={handleSubmit}>
            <label className='form-label'>
                Agrega una tarea:
                <input className='form-control mt-2' type="text" name="item" placeholder='Lavar la ropa' ref={inputRef}/>
            </label>
            <br></br>
            <button className='btn btn-outline-light'>Agregar</button>
        </form>
        <div className='col-6'>
            <ul className='list-group list-group-flushed'>
                Lista de Tareas:
                {items.map((item)=>(
                    <li key={item.id} className='list-group-item border border-primary mb-2 d-flex justify-content-between align-items-center'>{item.task}<i className='fas fa-trash-alt text-danger' onClick={() =>handleDelete(item.id)}></i></li>
                ))}
            </ul>
        </div>
        </div>
    </div>


  )
}

export default testing