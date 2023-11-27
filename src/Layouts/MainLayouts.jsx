import { Outlet } from "react-router-dom";

export default function MainLayouts() {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
        <Outlet />
    </div>
  )
}
