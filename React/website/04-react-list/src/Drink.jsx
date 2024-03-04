

function Drink(props) {

    const drink = props.fruit
                    .filter( item => item.category === "drink")
                    .map( ok => <li>{ok.name}</li>)

    return(
        <div>
            <ul>
                {drink}
            </ul>
        </div>

    );
}

export default Drink