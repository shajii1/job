import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [isTeacherFormOpen, setTeacherFormOpen] = useState(false);

  const openTeacherForm = () => {
    setTeacherFormOpen(true);
  };

  

   
    const [teachername,setteachertName] = useState("");
    const [teacheremail,setteachertEmail] = useState("");
    const [teacherpass,setteachertPass] = useState("");
    const [teacherqualification,setteachertQualification] = useState("");

   


    
    

      const handleTeacherSubmit = () => {
        const data = {
            username: teachername,
            email: teacheremail,
            password: teacherpass,
            highestQualification: teacherqualification,
        };
    
        // axios.post("https://lmsdatabase.onrender.com/teacher_add", data)
        axios.post("https://lms-backend-1-l5v8.onrender.com/teacher_add", data)

          .then((res) => {
            if (res.status === 201) {
            } else {
              return Promise.reject();
            }
          })
          .catch((err) => {
            alert(err);
          });
      };
    


  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 p-6">
    <div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-zinc-800">
      <div className="w-full">
        {/* <button onClick={openStudentForm} className=" active:bg-zinc-900 h-14 w-1/2 h border-2 text-white border-zinc-900 text-center xl:text-2xl md:text-xl">
          Student 
        </button> */}
        <button onClick={openTeacherForm} className=" active:bg-zinc-900 h-14 w-1/2 border-2 text-white border-zinc-900 text-center xl:text-2xl md:text-xl">
          Teacher
        </button>
      </div>
      <div className="form-container p-6">
        
        {isTeacherFormOpen && (
          <div className="form teacher-form">
            <h2 className="text-white text-md mb-8">Teacher Registration</h2>
            <form onSubmit={handleTeacherSubmit}>
              <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" onChange={(event)=>setteachertName(event.target.value)} type="text" placeholder="Username" />
              <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5  bg-zinc-600 text-white" onChange={(event)=>setteachertEmail(event.target.value)} type="email" placeholder="Email" />
              <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5  bg-zinc-600 text-white" onChange={(event)=>setteachertPass(event.target.value)} type="password" placeholder="Password" />
              <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5  bg-zinc-600 text-white" onChange={(event)=>setteachertQualification(event.target.value)} type="text" placeholder="Qualification" />
              <button className="bg-orange-500 text-white hover:bg-orange-700 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">SignUp as Instructor</button>

            </form>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default RegisterPage;
