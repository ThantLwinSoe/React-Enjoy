import { useState } from "react";

function CarForm() {

    const carDto = { 
        date : Number,
        brand: String,
        model: String
    }

    const [car,setCar] = useState(carDto)

    

    return(

        <div className="container">
            <div className="row">
                <div className="col-8 ">
                    <h2 className="text-info ">Add Car</h2>
                    <form action="#" className="fo"></form>
                    <label htmlFor="date" className="form-label ">Manufacture Date</label>
                    <input type="number" id="date" name="date" className="form-control " placeholder='Enter the Model Date'/>

                    <label htmlFor="brand" className="form-label ">Car Brand</label>
                    <input type="text" id="brand" name="brand" className="form-control " placeholder='Enter the Car Brand'/>

                    <label htmlFor="model" className="form-label ">Car Model </label>
                    <input type="model" id="model" name="model" className="form-control " placeholder='Enter the Car Model'/>
                    
                    <a href="/" className="btn btn-secondary ">Home Page</a>
                    <button onClick={handlerCarAdd}  className="btn btn-danger m-2  ">Add</button>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-8 ">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Brand</th>
                                    <th>Model</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default CarForm