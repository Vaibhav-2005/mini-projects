export default function TransactionHeader() {
  return (
    <div className="flex justify-between items-baseline">
      <h1 className="text-cyan-500 font-bold tracking-tighter text-2xl">
        ledger.sh
      </h1>
      <span className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.3em]">
        session_active
      </span>
    </div>
  );
}
