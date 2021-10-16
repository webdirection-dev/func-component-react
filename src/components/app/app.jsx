import React, {useState} from "react";

const App = () => {
    // useState - из набораа хукков
    // деструктуризация массива, возвращенного из useState()
    // по умолчанию const value === 0, т.к useState(0) - т.е 1й аргумент функции useState это значение для value
    const [value, setValue] = useState(11);
    const [value2, setValue2] = useState(22);

    // изменим value передав другое значение в аргумет useState(2)
    // теперб value = 1
    useState(33)


    // Например счетчик
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    return (
        <>
            <button onClick={increment}>+</button>

            <span
                style={{
                    display: 'inline-block',
                    margin: '10px'
                }}
            >
                {count}
            </span>

            <button onClick={decrement}>-</button>
        </>
    );
}

export default App;
