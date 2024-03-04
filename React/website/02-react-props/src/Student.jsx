import propsType from 'prop-types'

function Student(props) {

    const styles = {
        marginBottom:"4rem"

    }

    return(
        <div style={styles}>
            <div >Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>Student: {props.isStudent ? "Yes" : "No"}</div>
        </div>
    )
}
Student.propsType = {
    name: String,
    age: Number,
    isStudent: Boolean
}
Student.defaultProps ={
    name:"No Body",
    age:0,
    isStudent:false
}
export default Student