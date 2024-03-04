function Food(props) {

    const list = props.fruit


   const detail = list
                    .filter( item => item.category === "food" )
                    .map( ok => <li>{ok.name}</li>)

    return(
        <div>
            <ul>
               {detail} 
            </ul>
        </div>
    );
}

export default Food