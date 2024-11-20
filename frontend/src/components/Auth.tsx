import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput, SignupInput } from "@mrcricket/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Spinner } from "./Spinner";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const [getInputs, setGetInputs] = useState<SigninInput>({
    username: "",
    password: ""
  })
  async function sendRequest() {
    try{
      setIsLoading(true);
      // if type is sign up then it will be signup if not then it will be signin
    
      if(type === "signup"){
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/signup` , postInputs);  
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      } else if(type === "signin"){
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/signin` , getInputs);  
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }} catch (e){
        alert(type === "signin" ? "write a valid email ID!" : "write a valid email ID! OR PASSWORD");
    } finally{
      setIsLoading(false);
    }
      }

      if (isLoading) {
        // Render the spinner as a full-page overlay
        return (
          <div className="h-screen flex justify-center items-center">
            <Spinner />
          </div>
        );
      }
    
      // if type is sign up then it will be signup if not then it will be signin
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center font-mono ">
        <div className="shadow-lg border md:p-3 p-5 rounded-lg ">
          <div className="md:px-10 ">
            <div className="text-3xl flex justify-center pt-5 ">
              { type === "signup" ? "JOIN VICTOR!" : "WELCOME VICTOR!"}
              </div>
            <div className="text-slate-400">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline text-green-500   "
                to={type === "signin" ? "/" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-4  ">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Jatin Mehta..."
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            
            {type === "signup" ? (
            <LabelledInput
              label="Username"
              placeholder="Jatin@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            ):null}
            
             {type === "signin" ? (
               <LabelledInput
                 label="Username"
                 placeholder="Jatin@gmail.com"
                 onChange={(e) => {
                   setGetInputs({
                     ...getInputs,
                     username: e.target.value,
                   });
                 }}
               />
             ): null}
            
            {type === "signup" ? (
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="Password(min(6))"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
            ):null}

            
            {type === "signin" ? (
             <LabelledInput
              label="Password"
              type={"password"}
              placeholder="Password"
              onChange={(e) => {
                setGetInputs({
                  ...getInputs,
                  password: e.target.value,
                });
              }}
            />
            ):null}

            <button onClick={sendRequest} type="button" className="mt-5 w-full text-white bg-green-700 hover:bg-green-500  focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-lg  px-5 py-2.5 "
            >
              { type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-extrabold text-gray-900  dark:text-black pt-4 ">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
