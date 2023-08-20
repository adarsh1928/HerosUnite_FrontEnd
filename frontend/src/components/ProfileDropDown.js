import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {BsFillFilePersonFill} from "react-icons/bs"

import { logout } from "../services/authAPI"
import useOnClickOutside from "./UseOnClickOutside"
import {ImProfile} from "react-icons/im"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)

  //  console.log("user",user);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))


  if (!user) return null

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <div className="text-richblack-900">
          {/* <ImProfile /> */}
          {user.firstName}
        </div>
        <BsFillFilePersonFill className="text-sm text-richblack-900" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >

          <div
            onClick={() => {
              console.log(" inside profile dropdown")
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}