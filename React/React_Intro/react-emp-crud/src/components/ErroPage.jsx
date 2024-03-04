import {useRouteError} from "react-router-dom";

export const ErroPage = () => {

    const  error = useRouteError();

    return (
        <>
            <div id="error page">
                <h1>Oops!!!</h1>
                <p>Sorry, an unexcepted error has occurred.</p>
                <p>
                    <i>{error.statusbar || error.message}</i>
                </p>
            </div>
        </>
    )
}