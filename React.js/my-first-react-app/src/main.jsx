// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// import App01 from './App01.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App01 />
//   </StrictMode>,
// )

function EmployeeCard({employee}) {
    return(
        <div>
            {employee.map((emp) =>
            (
            <div
            key={emp.empname}
        
        style={{
            border: "2px solid cyan",
            margin: "50px",
            padding: "10px",
            color:"yellow"
          }}

        >
            <h2>{emp.empname}</h2>
            <p>Employee ID : {emp.empid}</p>
            <p>Department : {emp.dept}</p>
            <p>Salary : {emp.empsalary}</p>
            {/* <p>Email : {emp.empemail}</p> */}
        </div>

            ))}
        
        </div>
    );
}
export default EmployeeCard;