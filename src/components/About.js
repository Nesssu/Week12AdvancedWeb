import { useEffect, useState } from "react";

const About = (props) =>
{
    const [items, setItems] = useState([]);

    useEffect(() =>
    {
        let mounted = true;
        async function fetchData()
        {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data =>
                    { 
                        let newItemsList = [];

                        data.forEach(item =>
                            {
                                newItemsList.push({id: item.id, title: item.title});
                            })
                        
                            return newItemsList;
                    });

            if (mounted)
            {
                setItems(data);
            }
        }

        fetchData();

        return () =>
        {
            mounted = false;
        }
    }, []);

    return (
        <div>
            <h1>About</h1>
            <ol>
                {items.map(item =>
                    <li key={item.id}>{item.title}</li>
                )}
            </ol>
        </div>
    )
}

export default About;