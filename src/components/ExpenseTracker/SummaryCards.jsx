export default function SummaryCards({ spent, earned }) {
  const net = earned - spent;
  return (
    <div className="grid grid-cols-3 gap-8 border-b border-slate-800 pb-8">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
          Inflow
        </p>
        <p className="text-xl text-cyan-400 font-mono">
          ₹{earned.toLocaleString()}
        </p>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
          Outflow
        </p>
        <p className="text-xl text-rose-400 font-mono">
          ₹{spent.toLocaleString()}
        </p>
      </div>
      <div className="text-right">
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
          Net
        </p>
        <p
          className={`text-xl font-mono ${net >= 0 ? "text-cyan-100" : "text-rose-500"}`}
        >
          ₹{net.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
