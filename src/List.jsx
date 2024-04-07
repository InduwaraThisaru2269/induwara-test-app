import propTypes from 'prop-types';

function List(props){

    //const fruits = [{id: 1, name: "Banana", calories: 234}, 
    //              {id: 2, name: "Apple", calories:2345}, 
    //               {id: 3, name: "Mango", calories: 67}]
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name));  //Alphabetical
    //fruits.sort((a,b) => b.name.localeCompare(a.name));  //Reverse Alphabetical
    //fruits.sort((a,b) => a.calories - b.calories) //Numeric
    //fruits.sort((a,b) => b.calories - a.calories) // reverse numeric

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const category = props.category;
    const itemList = props.items;
    
    const listItems = itemList.map(item => <li key={item.id}>{item.name } : <b>{item.calories}</b></li>)
    
    


    return(
        <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
        </>
        
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape(
        {
            id: propTypes.number,
            name: propTypes.string,
            calories: propTypes.number
        }
    ))
}

export default List