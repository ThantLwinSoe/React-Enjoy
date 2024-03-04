import { useState } from "react";


function Car() {

    const [car,setCar] = useState({
        id:1,
        date: 2007,
        model: 'Honda',
        color: 'red'
    });

    const handlerUpdateCarDate = (e) => {
        setCar((c) => ({...c,date: e.target.value}))  
      }

    const handlerUpdateCarModel = (e) => {
        setCar( (car) => ({...car, model: e.target.value}))
    }

    const handlerUpdateCarColor = (e) => {
        setCar( (car) => ({...car, color: e.target.value}))
    }

    return(
        <div className="container mt-5">
            <div className="row ">
                <div className="col-7 card" >
                    <div className="card-header">
                        <img src="" alt="Car image" />
                    </div>
                    <div className="card-body">
                        <div className="card-title ">Edit Car : {car.date} {car.model} {car.color}</div>
                        
                        <label className="form-label " htmlFor="carDate">Date</label>
                        <input className="form-control " type="number" name="carDate"  value={car.date} onChange={handlerUpdateCarDate} />
                        
                        <label className="form-label " htmlFor="carModel">Model</label>
                        <input className="form-control " type="text" name="carModel"  value={car.model} onChange={handlerUpdateCarModel} />

                        <label className="form-label " htmlFor="carColor">Color</label>
                        <input className="form-control " type="text" name="carColor"  value={car.color} onChange={handlerUpdateCarColor} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Car