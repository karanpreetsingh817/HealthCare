import { useState } from "react";
import axios from "axios"
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";






const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState(0);
  const [resetEmail, setResetEmail] = useState("")

  const handleSubmit = async (e) => {

    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8080/v1/patient/logIn", { email, password });

      console.log(res.data)
    }
    catch (err) {
      console.log(err.response.data)

    }
  }

  const handleResetMail = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.patch("http://localhost:8080/v1/patient/forgetPassword/090980", { email: resetEmail });
      console.log(res.data)
    }
    catch (err) {
      console.log(err.response.data)
    }
  }

  const handleResetPage = () => {
    setPage(1)
  }

  const backLogIn = () => {
    setPage(0)
  }
  
    const sendSignup=()=>{
      setPage(2)
    }

  return (
 
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">

      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">

        {page===0 &&
         <div className="w-3/5 p-5 ">
         <div className="text-left font-bold">
           <span className="text-green-500"><span className="text-yellow-500">Health</span>Ease</span>
         </div>
         <form action="">
           

         <div className="py-20">
           
           <h2 className=" flex text-3xl font-bold text-green-500 mb-2 justify-center">Log in to Account</h2>
           <div className="inline-block mx-1.5"></div>
           <div className=" border-2 w-48 border-green-500 inline-block mb-2 mx-24" ></div>
          
       
           <div className="flex flex-col items-center  mb-3">

             <div className="bg-gray-100 w-64 p-2 flex items-center"><FaRegEnvelope className="text-gray-400 mg-2" />
               <input value={email} onChange={el => { setEmail(el.target.value) }} name="email" type="email" placeholder="Email" className="bg-gray-100 ml-4 outline-none text-sm flex-1" />
             </div>

           </div>


           <div className="flex flex-col items-center  mb-3">

             <div className="bg-gray-100 w-64 p-2 flex items-center"><MdLockOutline className="text-gray-400 mg-2" />
               <input value={password} onChange={(el) => setPassword(el.target.value)} name="password" type="password" placeholder="Password" className="bg-gray-100 ml-4 outline-none text-sm flex-1" />
             </div>
             <div className="flex justify-between w-64 mb-5 mt-3">
               <label className="flex items-center text-xs"> <input type="checkbox" name="remember" className="" />Remember Me</label>
               <button className="text-xs" onClick={handleResetPage}>Forget Password?</button>
                   </div>

           </div>
           <div className="flex justify-center">

           <button onClick={handleSubmit} className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500  hover:text-gray-100 	transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Submit</button>
         
         </div>
         </div>
        </form>

         
       </div>
        }


        {page===1 &&

          <div className="w-3/5 p-5 ">
            <div className="text-left font-bold">
              <span className="text-green-500"><span className="text-yellow-500">Health</span>Ease</span>
            </div>
            <form action="">


              <div className="py-20">

                <h2 className=" flex text-3xl font-bold text-green-500 mb-2 justify-center">Forget Password</h2>
                
                <div className=" border-2 w-12 border-green-500 inline-block mb-2 ml-48" ></div>


                <div className="flex flex-col items-center  mb-3">

                  <div className="bg-gray-100 w-64 p-2 flex items-center "><FaRegEnvelope className="text-gray-400 mg-2" />
                 
                    <input value={resetEmail} onChange={el => { setResetEmail(el.target.value) }} name="email" type="email" placeholder="Email" className="bg-gray-100 ml-4 outline-none text-sm flex-1" />
                  </div>

                </div>
               
                <div className="flex flex-col items-center  mb-3">




                </div>
                <div className="flex justify-around mx-16 mt-4 ">

                  <button onClick={backLogIn} className="border-2 border-green-500  text-green-500 rounded-full px-8 py-2 inline-block font-semibold hover:bg-green-500  hover:text-gray-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Back</button>
                  <button onClick={handleResetMail} className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-semibold hover:bg-green-500  hover:text-gray-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Submit</button>
                </div>
              </div>
            </form>


          </div>
        }
        <div className=" flex flex-col w-2/5 text-white rounded-tr-2xl rounded-br-2xl py-32 px-12 bg-gradient-to-t from-green-300 to-green-600">
        
        <h2 className="text-3xl font-bold ">Welcome! </h2>
        <div className="border-2 w-10 border-white inline-block ml-12  mb-2"></div>
        <p className="mb-10">Fill Up Your  Information And Start Journey With Us.</p>



        <button onClick={sendSignup} className="border-2 border-white w-48 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Sign Up</button>



      
      </div>
      </div>
    </div>

   
  )
}

export default Home