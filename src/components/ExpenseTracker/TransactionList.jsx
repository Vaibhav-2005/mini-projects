"use client";

import { useRouter } from "next/navigation";

export default function TransactionList({ transactions }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL + "/expenseTracker";
    try {
      const res = await fetch(`${API_BASE}/deleteTransaction/${id}`, {
        method: "DELETE",
      });
      if (res.ok) router.refresh();
    } catch (err) {
      console.error("Delete failure:", err);
    }
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="py-20 text-center border border-slate-800/30 rounded-xl">
        <p className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">
          No_Active_Logs
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex items-center justify-between py-4 border-b border-slate-800/40 hover:bg-slate-800/10 transition-colors px-2"
        >
          {/* Left: Info */}
          <div className="flex flex-col min-w-0 flex-1 pr-4">
            <span className="text-sm text-slate-200 truncate font-medium tracking-tight">
              {t.des}
            </span>
            <span className="text-[9px] text-slate-600 font-mono uppercase mt-0.5">
              {new Date(t.created_at).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Right: Price & Fixed Action */}
          <div className="flex items-center shrink-0">
            <span
              className={`text-sm font-mono text-right min-w-[90px] pr-6 ${t.expense === 1 ? "text-rose-500/80" : "text-cyan-400/80"}`}
            >
              {t.expense === 1 ? "-" : "+"}₹{Number(t.amount).toLocaleString()}
            </span>

            <button
              onClick={() => handleDelete(t.id)}
              className="text-[10px] text-slate-600 hover:text-rose-500 font-mono uppercase tracking-tighter border border-slate-800 px-2 py-1 rounded hover:border-rose-900/50 transition-all"
            >
              del
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
