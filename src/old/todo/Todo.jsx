import { useState } from "react";

const List = ({ items }) => {
    return items.length > 0 ?
        <ul>
            {items.map(({ id, content }) => <li key={id}>{content}</li>)}
        </ul>
        :
        <p>no data</p>

}

const Form = ({ addItem }) => {
    const [input, setInput] = useState("");
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleClick = () => {
        addItem(input);
        setInput("");
    }

    return <p>
        <input type="text" onChange={handleChange} value={input} placeholder="add item" />
        <button type="button" onClick={handleClick}>Add item</button>
    </p>;
}

const Todo = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        const newArray = [...items];
        newArray.push({
            id: Math.floor(Math.random() * 1000),
            content: item,
            completed: false
        });
        setItems(newArray);
    }

    return <section>
        <h1>To do</h1>
        <form>
            <Form addItem={addItem} />
            <List items={items} />
        </form>
    </section>
}

export default Todo;