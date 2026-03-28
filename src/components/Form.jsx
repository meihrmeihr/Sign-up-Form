import { useState } from "react";

const Form = () => {
  const [fnError,setFnError] = useState(false);
  const [lnError,setLnError] = useState(false);
  const [eaError,seEaError] = useState(false);
  const [isTyping,setIsTyping] = useState(false);
  const [pError,setPError] = useState(false);
  const [isSccessful,setIsSccessful] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const firstName = formData.get("firstName").trim();
    const lastName = formData.get("lastName").trim();
    const emailAddress = formData.get("emailAddress").trim();
    const password = formData.get("password").trim();
    let handleError = false;
    (function(){
      const first_name_error = firstName === "";
      const last_name_error = lastName === "";
      const email_address_error = !emailAddress.includes("@");
      const password_error = password.length < 8;

      // first name errors
      if (first_name_error) setFnError(true);
      if (!first_name_error) setFnError(false);
      // last name errors
      if (last_name_error) setLnError(true);
      if (!last_name_error) setLnError(false);
      // email address errors
      if (email_address_error) seEaError(true);
      if (!email_address_error) seEaError(false);
      // password errors
      if (password_error) setPError(true);
      if (!password_error) setPError(false);
      handleError = first_name_error || last_name_error || email_address_error || password_error;
    })()
    
    if (handleError) return;
    e.currentTarget.reset();
    setIsSccessful(true);
  }

  return (
    <>
      <form
        className='flex flex-col justify-center items-center gap-y-4 w-full'
        onSubmit={handleSubmit}
        noValidate
      >
        {/* advertise div */}
        <div className='bg-purple-700 text-purple-200 font-thin py-2 w-full max-w-[80%] rounded-md shadow-[0px_8px_0px_0px_rgba(0,0,0,0.3)] shadow-black/30'>
          <h3 className='text-center text-sm sm:text-base md:text-lg lg:text-xl mx-auto'>
            <em className='text-white font-semibold'>Try it free 7 days</em>{" "}
            then $20/mo. thereafter
          </h3>
        </div>

        <div className='relative bg-white flex flex-col justify-center items-center gap-y-2 md:gap-y-4 w-full h-auto max-w-[80%] py-4 rounded-md shadow-[0px_8px_0px_0px_rgba(0,0,0,0.3)] shadow-black/30'>
          {/* success massage here */}
          <div className={`bg-green-400 text-white absolute z-10 ${isSccessful ? "flex":"hidden"} justify-center items-center top-0 w-full h-[70%] `}>
            <h1>Sccessfully sent</h1>
          </div>
          {/* inputs are here */}
          <div className='relative w-11/12'>
            <input
              className={`border border-neutral-300 bg-transparent focus:border-neutral-400 outline-0 rounded-sm p-2 pl-4 w-full`}
              name='firstName'
              type='text'
              placeholder='First Name'
            />

            <svg
              className={`absolute ${fnError ? "block" : "hidden"} right-4 top-2.5`}
              fill='#ff5252'
              width='20px'
              height='20px'
              viewBox='-1.7 0 20.4 20.4'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ff5252'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z'></path>
              </g>
            </svg>

            <strong
              className={`${fnError ? "block" : "hidden"} text-[clamp(0.5rem,1dvw,1rem)] text-red-400 text-right font-thin select-none`}
            >
              {"First Name cannot be empty"}
            </strong>
          </div>
          <div className='relative w-11/12'>
            <input
              className={`border border-neutral-300 bg-transparent focus:border-neutral-400 outline-0 rounded-sm p-2 pl-4 w-full`}
              name='lastName'
              type='text'
              placeholder='Last Name'
            />

            <svg
              className={`absolute ${lnError ? "block" : "hidden"} right-4 top-2.5`}
              fill='#ff5252'
              width='20px'
              height='20px'
              viewBox='-1.7 0 20.4 20.4'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ff5252'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z'></path>
              </g>
            </svg>

            <strong
              className={`${lnError ? "block" : "hidden"} text-[clamp(0.5rem,1dvw,1rem)] text-red-400 text-right font-thin select-none`}
            >
              {"Last Name cannot be empty"}
            </strong>
          </div>
          <div className='relative w-11/12'>
            <input
              className={`border border-neutral-300 bg-transparent focus:border-neutral-400 outline-0 rounded-sm p-2 pl-4 w-full`}
              name='emailAddress'
              type='email'
              onChange={(e)=>{
                if (e.target.value === "") setIsTyping(true);
                if (e.target.value !== "") setIsTyping(false);
              }}
              placeholder={!isTyping ? 'Email Address':""}
            />

            <label
              className={`absolute ${eaError && isTyping ? "inline" : "hidden"} left-4 top-4 md:top-3 text-red-400 text-[clamp(0.5rem,1dvw,1rem)] font-thin select-none`}
            >
              example@example.com
            </label>

            <svg
              className={`absolute ${eaError ? "block" : "hidden"} right-4 top-2.5`}
              fill='#ff5252'
              width='20px'
              height='20px'
              viewBox='-1.7 0 20.4 20.4'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ff5252'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z'></path>
              </g>
            </svg>

            <strong
              className={`${eaError ? "block" : "hidden"} text-[clamp(0.5rem,1dvw,1rem)] text-red-400 text-right font-thin select-none`}
            >
              {"Looks like this is not an Email Address"}
            </strong>
          </div>
          <div className='relative w-11/12'>
            <input
              className={`border border-neutral-300 bg-transparent focus:border-neutral-400 outline-0 rounded-sm p-2 pl-4 w-full`}
              name="password"
              type="password"
              placeholder="Password"
            />

            <svg
              className={`absolute ${pError ? "block" : "hidden"} right-4 top-2.5`}
              fill='#ff5252'
              width='20px'
              height='20px'
              viewBox='-1.7 0 20.4 20.4'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ff5252'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z'></path>
              </g>
            </svg>
            <strong
              className={`${pError ? "block" : "hidden"} text-[clamp(0.5rem,1dvw,1rem)] text-red-400 text-right font-thin select-none`}
            >
              {"Password cannot be smaller than 8 letters"}
            </strong>

          </div>

          <button
            className='bg-green-400 text-sm text-white tracking-wide font-semibold py-2 px-6 rounded-md shadow-[0px_5px_0px_0px_rgba(0,0,0,0.3)] shadow-green-500 w-11/12 active:scale-105 focus:outline-none'
            onClick={()=>{
              const errors = !fnError && !lnError && !eaError && !pError;
              if (errors) setIsSccessful(false);
            }}
            type={"submit"}
          >
            {isSccessful ? "Reset the Form":"Claim your free trial"}
          </button>

          <p className='text-center text-[clamp(0.5rem,2dvw,1rem)] text-gray-300 w-9/12'>
            By clicking the button, you are agreeing to our{" "}
            <span className='text-red-400'>Terms and Services</span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
