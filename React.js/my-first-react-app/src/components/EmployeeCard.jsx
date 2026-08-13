function EmployeeCard({ employee }) {
  return (
    <div className="student-card ">
      {employee.map((emp) => (
        <div
          key={emp.empId}
          style={{  
            border: "2px solid blue",
            margin: "10px",
            padding: "10px",
            backgroundColor: "pink",
          }}
        >
          <h2>{emp.empName}</h2>
          <p>Employee ID: {emp.empId}</p>
          <p>Department: {emp.empDepartment}</p>
          <p>Salary: {emp.empSalary}</p>
          {/* <p>Email: {emp.empEmail}</p> */}
        </div>
      ))}
    </div>
  );
}

export default EmployeeCard;
      