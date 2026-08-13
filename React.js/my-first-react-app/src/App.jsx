// // //import DOMTimer from "./components/dom_timer";
// // import StudentCard from "./components/StudentCard"
// // function App() {
// //   const students=[
// // {
// //   name:"Akshay",
// //   course:"CSE",
// //   year:"2nd Year",
// //   skill:"C++",
// // },
// // {
// //   name:"dhoni",
// //   course:"CSE",
// //   year:"2nd Year",
// //   skill:"Java",
// // },
// // {
// //   name:"Jethalal",
// //   course:"CSM",
// //   year:"2nd Year",
// //   skill:"Python",
// // }

// //   ];
  
// //  return (
// //     <div >
   
// //       <StudentCard  students={students} />
      
// //     </div>
// //   );
// // }

// // export default App;

import EmployeeCard from "./components/EmployeeCard";
function App()
{
  const employee = [{
    empid : 12324435,
    empname : "Ramesh",
    dept : "Web Designing",
    empsalary : 35763650,
    empemail : "Ramesh12345@gmail.com"
  },
  {
    empid : 12324435,
    empname : "Kavya",
    dept : "Web Development",
    empsalary : 35763650,
    empemail : "Kavya12345@gmail.com"  
  },
  {
    empid : 12324435,
    empname : "Akshay Kulkarni",
    dept : "software developer",
    empsalary : 35763650,
    empemail : "akshay12345@gmail.com"  
  },
  {
    empid : 12324435,
    empname : "Varun",
    dept : "Cybersecurity",
    empsalary : 35763650,
    empemail : "varun12345@gmail.com"  
  },

]
  return(
    <div>
      <h1>Employee Profile Cards</h1>
      <EmployeeCard employee = {employee}/>
    </div>
  );
}
export default App;