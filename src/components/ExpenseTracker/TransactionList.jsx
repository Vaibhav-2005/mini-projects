export default function TransactionList({ transactions = [], onRefresh }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleDelete = async (id) => {
    if (!confirm("CONFIRM_DELETE_REQUEST?")) return;
    try {
      // Note: Adjust endpoint if your backend uses a different DELETE path
      const res = await fetch(`${API_BASE}/deleteTransaction/${id}`, {
        method: "DELETE",
      });
      if (res.ok) onRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#111d3a] border border-[#1e2d4d] rounded-md overflow-hidden font-sans">
      {/* ... (Existing Header) ... */}

      <div className="divide-y divide-[#1e2d4d]">
        {transactions.map((t) => {
          const isExpense = t.expense === 1;
          return (
            <div
              key={t.id}
              className="px-4 py-3 hover:bg-[#1e2d4d]/30 flex items-center justify-between group"
            >
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[9px] font-mono text-cyan-400 font-bold">
                    #{t.id}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    {new Date(t.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs text-slate-300 truncate font-medium">
                  {t.des}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div
                    className={`text-sm font-bold font-mono ${isExpense ? "text-red-400" : "text-emerald-400"}`}
                  >
                    ₹{t.amount.toLocaleString()}
                  </div>
                </div>

                {/* Inline Actions - Only visible on hover for that clean "Stock" feel */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="text-slate-500 hover:text-red-500 text-[10px] font-mono"
                  >
                    [DEL]
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
