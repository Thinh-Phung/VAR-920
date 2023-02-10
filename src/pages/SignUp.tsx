import React from "react"
import { useState } from "react"

const signUpData = {
  email: "",
  fistName: "",
  lastName: "",
  companyName: "",
  companyWebsite: "",
  phoneNumber: "",
  jobTitle: "",
  department: ""
}

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [fistName, setFistName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [department, setDepartment] = useState("")

  const handleSubmit = () => {
    signUpData["email"] = email
    signUpData["fistName"] = fistName
    signUpData["lastName"] = lastName
    signUpData["companyName"] = companyName
    signUpData["companyWebsite"] = companyWebsite
    signUpData["phoneNumber"] = phoneNumber
    signUpData["jobTitle"] = jobTitle
    signUpData["department"] = department
  }
  return (
    <div
      className="bg-sky-100 flex min-h-screen items-center justify-center 
     md:px-3 lg:px-6"
    >
      <div
        className=" bg-white flex min-h-screen flex-1 flex-col justify-center  
       lg:flex-initial lg:px-20 xl:px-24"
      >
        <h2 className="py-4 mt-0 text-3xl items-center justify-center font-bold tracking-tight text-gray-700">
          Sign up
        </h2>
        <form action="#" method="POST" className="mt-3 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block  w-full text-sm font-medium text-gray-700"
            >
              EMAIL
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="first name"
              className="block text-sm font-medium text-gray-700"
            >
              FIRST NAME
            </label>
            <div className="mt-1">
              <input
                id="first name"
                name="first name"
                type="first name"
                value={fistName}
                onChange={(e) => setFistName(e.target.value)}
                placeholder="first name"
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="last name"
              className="block text-sm font-medium text-gray-700"
            >
              LAST NAME
            </label>
            <div className="mt-1">
              <input
                id="last name"
                name="last name"
                type="last name"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="company name"
              className="block text-sm font-medium text-gray-700"
            >
              COMPANY NAME
            </label>
            <div className="mt-1">
              <input
                id="company name "
                name="company name "
                type="company name "
                placeholder="company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="company website"
              className="block text-sm font-medium text-gray-700"
            >
              COMPANY WEBSITE
            </label>
            <div className="mt-1">
              <input
                id="company website"
                name="company website"
                type="company website"
                value={companyWebsite}
                placeholder="company website"
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="phone number"
              className="block text-sm font-medium text-gray-700"
            >
              PHONE NUMBER
            </label>
            <div className="mt-1">
              <input
                id="phone number"
                name="phone number"
                type="phone number"
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="job title"
              className="block text-sm font-medium text-gray-700"
            >
              JOB TITLE
            </label>
            <div className="mt-1">
              <input
                id="job title"
                name="job title"
                type="job title"
                placeholder="job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              DEPARTMENT
            </label>
            <div className="mt-1">
              <input
                id="department"
                name="department"
                type="department"
                placeholder="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                          focus:border-indigo-500 focus:outline-none
                           focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md border border-transparent
                       bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm
                        hover:bg-indigo-700 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
