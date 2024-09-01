import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        // Simula una demora de 2 segundos antes de cargar los datos
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false); // La carga ha terminado
            } catch (error) {
                setError(error);
                setLoading(false); // La carga ha terminado con un error
            }
        }, 1500); // 2000 milisegundos = 2 segundos
    }, []);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Tarea de TEOCOMPU', completed: true },
//   { text: 'Tarea de RIM', completed: false },
//   { text: 'Aprender React', completed: false },
//   { text: 'Aprender Django', completed: false },
//   { text: 'Aprender Flask', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

//JSON.stringify(defaultTodos)
//JSON.parse(parsedTodos)