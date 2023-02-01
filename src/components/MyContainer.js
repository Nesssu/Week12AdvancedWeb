import { useState } from 'react';
import MyList from './MyList';

const MyContainer = () =>
{
    const [items, setItems] = useState([
        {id: "1", text: "This is an item", clicked: false},
        {id: "2", text: "Also this", clicked: false}
    ]);

    const update = (id) =>
    {
        items.forEach(item =>
        {
            if (item.id === id)
            {
                item.clicked = !item.clicked;
            }
        });

        setItems([...items]);
    }
    return (
        <div>
            <MyList
                header="Really epic list component"
                items={items}
                update={update}
            />
        </div>
    );
}

export default MyContainer;