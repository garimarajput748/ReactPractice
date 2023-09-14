import { useState , useEffect } from "react";

const APIData = () => {
    const [data, setData] = useState('posts');
    const [items, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`https://blog.vitabletech.in/wp-json/wp/v2/${data}`)
        .then(response => response.json())
        .then((json) => {
            console.log('API Response:', json);
            setItem(json)
          })
        .catch((error) => console.error(error));
    },[data]);

    return(
        <>
        <div>
            <p>You clicked on {data}</p>
            <button onClick={() => setData('posts')}> posts </button>
            <button onClick={() => setData('categories')}> categories </button>
            <button onClick={() => setData('tags')}> Tags </button>
        </div>
        <div>
        {items.map((item) => (
          <div key={item.id}>
            {data === 'posts' ? (
                <>
              <h3><a href={item.link}>{item.title.rendered}</a></h3>
              <p>{item.excerpt.rendered}</p>
                </>
            ) : (
              <p>{item.name}</p>
            )}
          </div>
        ))}
      </div>
        </>
    );
}
export default APIData;