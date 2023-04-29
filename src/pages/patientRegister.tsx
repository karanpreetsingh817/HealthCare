import { useState } from "react";
import axios from "axios"


import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline,MdOutlineBloodtype,MdLocationCity } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { CiCalendarDate} from "react-icons/ci";
import { FcPhoneAndroid} from "react-icons/fc"; 
import { RiLockPasswordFill} from "react-icons/ri";

import { BsFillImageFill} from "react-icons/bs";




const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [page,setPage]=useState(false);

  const pageNext=()=>{
    setPage(true)
  }

  const pageBack=()=>{
    setPage(false)
  }
  const handleSubmit = async(e) => {
   
    try{
      
      e.preventDefault();
      const res=await axios.post("http://localhost:8080/v1/patient/signUp", {name,email,password,confirmPassword,age,address,bloodGroup,phoneNumber } );
     
    console.log(res.data)
  }
  catch(err){
    console.log(err.response.data)

  }
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
       
          
          {/* signUp slogens section */}
          <div className="w-2/5 p-5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl pb-36 px-12 bg-gradient-to-t from-green-300 to-green-600"> 
          <div className="font-bold text-left "> <span className="text-yellow-300">Health</span>Ease</div>
        <h2 className="text-3xl font-bold mb-2 pt-36"> Hello, Friend</h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <p className="mb-2">Join our community today by signing up! We can't wait to have you as a part of our platform</p>
          </div>

        {/* signup fields */}
        {!page &&
          <div className="w-3/5 ">
            <div className="py-10">

              <h2 className="text-3xl font-bold text-green-500 mb-2">Enter Personal Details</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            </div>
            <form action="">
            <div className="flex flex-col items-center ">
              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><SiNamecheap className="text-gray-400 mr-2"/>
              <input name="name" value={name} onChange={(ev)=>{setName(ev.target.value)}} type="text" placeholder="Enter Your Name" required className="bg-gray-200 outline-none flex-1"   />
              </div>

              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><CiCalendarDate className="text-gray-400 mr-2"/>
              <input name="age" value={age} onChange={(ev)=>{setAge(ev.target.value)}} type="number"  placeholder="Enter Your Age" required className="bg-gray-200 outline-none flex-1"   />
              </div>

              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><FcPhoneAndroid className="text-gray-400 mr-2"/>
              <input name="phoneNumber" value={phoneNumber} onChange={(ev)=>{setPhoneNumber(ev.target.value)}} type="number"  placeholder="Enter Your Mobile Number" required className="bg-gray-200 outline-none flex-1"   />
              </div>


              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><MdLocationCity className="text-gray-400 mr-2"/>
              <input name="address" value={address} onChange={(ev)=>{setAddress(ev.target.value)}} type="text"  placeholder="Enter Your Address" required className="bg-gray-200 outline-none flex-1"   />
              </div>




              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><MdOutlineBloodtype className="text-gray-400 mr-2"/>
             <select name="bloodGroup" value={bloodGroup} onChange={ev=>setBloodGroup(ev.target.value) } className="bg-gray-200 outline-none flex-1"  >
             <option  value="" disabled hidden>Select Your Blood Type</option>
             <option value="A+">A+</option>
             <option value="A-">A-</option>
             <option value="B+">B+</option>
             <option value="B-">B-</option>
             <option value="AB+">AB+</option>
             <option value="AB-">AB-</option>
             <option value="O+">O+</option>
             <option value="O-">O-</option>
             </select>
              </div>

              <div className=" flex items-center justify-end w-64 p-2 mb-4 mt-12">
              {/* <button  className="border-2 border-green-500 bg-green-500 text-white px-4 py-2 inline-block font-semibold hover:bg-gray-50  hover:text-green-500">Back</button> */}
              <button onClick={pageNext} className="border-2 border-green-500 rounded-full bg-green-500 text-white px-8 py-2 inline-block font-semibold hover:bg-gray-50  hover:text-green-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Next</button>
              </div>
            </div>
            </form>

          </div> 
}

          {page && <div className="w-3/5 ">
            <div className="py-10">

              <h2 className="text-3xl font-bold text-green-500 mb-2">Sign Up To Your Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            </div>
            <form action="">
            <div className="flex flex-col items-center ">
              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><FaRegEnvelope className="text-gray-400 mr-2"/>
              <input name="email" value={email} onChange={(ev)=>{setEmail(ev.target.value)}} type="email" placeholder="Enter Your Email" required className="bg-gray-200 outline-none flex-1"   />
              </div>

              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><MdLockOutline className="text-gray-400 mr-2"/>
              <input name="password" value={password} onChange={(ev)=>{setPassword(ev.target.value)}} type="password"  placeholder="Make Strong Paaword" required className="bg-gray-200 outline-none flex-1"   />
              </div>

              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><RiLockPasswordFill className="text-gray-400 mr-2"/>
              <input name="confirmPassword" value={confirmPassword} onChange={(ev)=>{setConfirmPassword(ev.target.value)}} type="password"  placeholder="Enter Confirm Password" required className="bg-gray-200 outline-none flex-1"   />
              </div>

              


              <div className=" flex items-center bg-gray-200 w-64 p-2 mb-4"><BsFillImageFill className="text-gray-400 mr-2"/>
             
              <input value={profilePhoto} id="imageInput" type="file" accept="image/*" onChange={setProfilePhoto}  className="bg-gray-200 outline-none flex-1"   />
            </div>









              <div className=" flex items-center justify-between w-64 p-2 mb-4 mt-12">
              <button  onClick={pageBack} className="border-2 rounded-full border-green-500 bg-green-500 text-white px-6 py-2 inline-block font-semibold hover:bg-gray-50  hover:text-green-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Back</button>
              <button onClick={handleSubmit} className="border-2 rounded-full border-green-500 bg-green-500 text-white px-6 py-2 inline-block font-semibold hover:bg-gray-50  hover:text-green-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Sign Up</button>
              </div>
            </div>
            </form> 
            </div>
            }
          </div>
          

        
      </main>



    </div>

  )
}

export default Register



