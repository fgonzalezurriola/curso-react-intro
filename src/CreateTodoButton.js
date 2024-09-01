import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" 
        onClick={
            (event) => {
                console.log(event);
            }
        }
        >
            +
        </button>
    );
}

export { CreateTodoButton };
