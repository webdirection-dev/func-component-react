import React, {useState, useEffect} from "react";

const Clicker = () => {
    // useEffect = componentDidMount + componentDidUpdate + componentWillUnmount т.е три в одном
    // useState, useEffect - из набораа хукков
    // деструктуризация массива, возвращенного из useState()
    // по умолчанию const value === 0, т.к useState(0) - т.е 1й аргумент функции useState это значение для value
    // const [value, setValue] = useState(11);
    // const [value2, setValue2] = useState(22);

    // изменим value передав другое значение в аргумет useState(2)
    // теперб value = 1
    // useState(33)

    // Например счетчик
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    // useEffect пишется перед return
    // принимает в себя два аргумента
    // 1 аргумент - действия кторые нужно сделать
    // 2 аргумент - зависимости

    // эмитация componentDidMount
    // если список зависимостей пустой [] - useEffect выполнится только 1 раз
    useEffect(() => {
        console.log('componentDidMount')
    }, []);


    // эмитация componentDidUpdate
    // если список зависимостей заполнент [] - выполнится каждый раз после обновления элемента из списка зависимостей
    useEffect(() => {
        console.log(`componentDidUpdate: ${count}`)

        // эмитация componentWillUnmount
        // используется спец-оператор RETURN
        return () => console.log(`Unmount`)
    }, [count]);


    return (
        <div className='clicker'>
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
        </div>
    );
};

export default Clicker;