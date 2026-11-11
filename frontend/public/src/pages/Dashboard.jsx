import { Code2, Trophy, Swords } from "lucide-react"

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-indigo-400">
          WELCOME TO CODEDUEL AI
        </p>

        <h1 className="text-3xl font-bold text-white">
          Coding Arena
        </h1>

        <p className="mt-2 text-slate-400">
          Đấu code 1v1 và debug cùng AI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-700 bg-codePanel p-6">
          <Code2 className="mb-4 text-indigo-400" size={28} />

          <h2 className="text-lg font-semibold">
            Coding Battle
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Tham gia trận đấu lập trình với người chơi khác.
          </p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-codePanel p-6">
          <Swords className="mb-4 text-red-400" size={28} />

          <h2 className="text-lg font-semibold">
            Arena
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Tạo phòng hoặc tham gia phòng đấu.
          </p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-codePanel p-6">
          <Trophy className="mb-4 text-yellow-400" size={28} />

          <h2 className="text-lg font-semibold">
            Rating
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Theo dõi rating và thứ hạng của bạn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard