import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed ? '#D6DCDF' : 'white'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };
