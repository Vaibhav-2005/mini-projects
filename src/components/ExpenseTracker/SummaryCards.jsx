export default function SummaryCards({ spent, earned }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4 font-sans">
      <div className="p-4 bg-[#111d3a] border border-[#1e2d4d] rounded-md shadow-inner">
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">
          Total Inflow
        </div>
        <div className="text-xl font-bold text-emerald-400 font-mono tracking-tighter">
          +₹{earned.toLocaleString()}
        </div>
      </div>

      <div className="p-4 bg-[#111d3a] border border-[#1e2d4d] rounded-md shadow-inner">
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">
          Total Outflow
        </div>
        <div className="text-xl font-bold text-red-400 font-mono tracking-tighter">
          -₹{spent.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
