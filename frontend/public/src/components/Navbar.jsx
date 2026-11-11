import { Code2, LogOut, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  const username = localStorage.getItem("username") || "Coder"
  const rating = localStorage.getItem("rating") || "1200"

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("rating")

    navigate("/login")
  }

  return (
    <nav className="border-b border-slate-700 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => navigate("/dashboard")}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
            <Code2 size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              CodeDuel AI
            </h1>

            <p className="text-xs text-slate-400">
              AI Coding Arena
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 sm:flex">
            <span className="text-xs text-slate-400">
              Rating
            </span>

            <span className="font-bold text-indigo-400">
              {rating}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700">
              <User size={18} />
            </div>

            <span className="hidden text-sm font-medium text-slate-200 sm:block">
              {username}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={17} />
            <span className="hidden sm:block">
              Logout
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar