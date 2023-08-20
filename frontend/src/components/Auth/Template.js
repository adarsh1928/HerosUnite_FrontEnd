// import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignUpForm"
// import images9 from "../../assets/images11.png"

function Template({ title, description1, description2, formType,image }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className=" grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="  mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className=" p-5 bg-[#4B5320] mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className=" mb-10 text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative lg:mt-16  mx-auto w-11/12 max-w-[690px] md:mx-0">
            <img
              src={image}
              alt="Pattern"
              width={700}
              height={690}
              loading="lazy"
            />


          </div>
        </div>
      )}
    </div>
  )
}

export default Template