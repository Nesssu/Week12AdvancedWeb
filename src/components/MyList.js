const MyList = (props) =>
{
    return (
        <div>
            <h1>{props.header}</h1>
            <ol>
                {props.items.map(item =>
                    <li key={item.id} onClick={() => props.update(item.id)} style={{textDecoration: item.clicked === true ? 'line-through': ''}}>{item.text}</li>
                )}
            </ol>
        </div>
    );
}

export default MyList;