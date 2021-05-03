import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from "./components/StudentList"
const appkey = "jwhjwh_1585643726753"
async function fetchAllStudent() {
  const students = await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey).then(res => res = res.json()).then(res => res.data)
  ReactDOM.render(<StudentList students={students} />, document.getElementById("root"))

}
fetchAllStudent()