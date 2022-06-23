import { useState } from "react";

const List = ({ items }) => {
    return items.length > 0 ?
        <ul>
            {items.map(({ id, content }) => <li key={id}>{content}</li>)}
        </ul>
        :
        <p>no data</p>

}

const Form = () => {
    const [input, setInput] = useState("");
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return <p>
        <input type="text" onChange={handleChange} value={input} placeholder="add item" />
        <button type="button">Add item</button>
    </p>;
}

const Todo = () => {
    const [items, setItems] = useState([]);

    return <section>
        <h1>To do</h1>
        <form>
            <Form />
            <List items={items} />
        </form>
    </section>
}

export default Todo;