import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../../styles/home.css';

/* Usamos el metodo crypto.randomUUID() que nos proporciona el explorador para genera un num unico para cada key de los elementos del ul*/

const initialItems = [
    {id: crypto.randomUUID(), task: 'Lavar la ropa'},
    {id: crypto.randomUUID(), task: 'Estudiar React'},
    {id: crypto.randomUUID(), task: 'Terminar el proyecto'}
];

const Testing = () => {
    const [items, setItems] = useState(initialItems);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = inputRef.current.value;
        if (task.trim()) {
            setItems([...items, {id: crypto.randomUUID(), task}]);
            inputRef.current.value = ''; // Limpiar el input
        }
    };

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
/* El metodo map() nos permite recorrer el array de items y modificar el valor de task de un item en especifico, 
    si el id del item es igual al id que estamos editando, entonces modificamos el valor de task por el valor que 
    se encuentra en el estado editValue, de lo contrario dejamos el valor de task como esta */
    const handleEdit = (id, task) => {
        setEditId(id);
        setEditValue(task);
    };

    const handleEditChange = (event) => {
        setEditValue(event.target.value);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        setItems(items.map((item) => (item.id === editId ? { ...item, task: editValue } : item)));
        setEditId(null);
        setEditValue('');
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedItems = Array.from(items);
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, reorderedItem);
        setItems(reorderedItems);
    };

    return (
        <div className='container-fluid mt-5 border border-primary p-5'>
            <div className='row'>
                <form className='col-6' onSubmit={handleSubmit}>
                    <label className='form-label'>
                        Agrega una tarea:
                        <input 
                            className='form-control mt-2'  
                            type="text" 
                            name="item" 
                            placeholder='Lavar la ropa'
                            ref={inputRef} 
                        />
                    </label>
                    <br />
                    <button className='btn btn-outline-light'>Agregar</button>
                </form>
                <div className='col-6'>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="tasks">
                            {(provided) => (
                                <ul className='list-group list-group-flushed' {...provided.droppableProps} ref={provided.innerRef}>
                                    Lista de Tareas:
                                    {items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <li 
                                                    className='list-group-item border border-primary mb-2 d-flex justify-content-between align-items-center'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {editId === item.id ? (
                                                        <form onSubmit={handleEditSubmit} className='d-flex w-100'>
                                                            <input 
                                                                className='form-control me-2' 
                                                                type="text" 
                                                                value={editValue} 
                                                                onChange={handleEditChange} 
                                                            />
                                                            <button className='btn btn-outline-success' type="submit" style={{cursor: 'pointer'}}>Guardar</button>
                                                        </form>
                                                    ) : (
                                                        <>
                                                            <span>{item.task}</span>
                                                            <div>
                                                                <i 
                                                                    className='fas fa-pencil-alt text-primary me-3' 
                                                                    onClick={() => handleEdit(item.id, item.task)} 
                                                                    style={{ cursor: 'pointer' }}
                                                                ></i>
                                                                <i 
                                                                    className='fas fa-trash-alt text-danger' 
                                                                    onClick={() => handleDelete(item.id)} 
                                                                    style={{ cursor: 'pointer' }}
                                                                ></i>
                                                            </div>
                                                        </>
                                                    )}
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
};

export default Testing;