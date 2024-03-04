function Greeting(props) {

    const welcomeLogin = <h2>Welcome {props.username}</h2>
    const needLogin = <h2>Please login to continue</h2>

    return( props.isLoggedIn ? welcomeLogin : needLogin);

    // if(props.isLoggedIn) {
    //     return(
    //         <div>
    //             <h2>Welcome {props.username}</h2>
    //         </div>
    //     );
    // }else{
    //     return(
    //         <div>
    //             <h2>Please login to continue</h2>
    //         </div>
    //     );
    // }


}

export default Greeting