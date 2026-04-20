export default function TransactionHeader() {
  return (
    <header className="border-b-2 border-slate-900 pb-6 mb-12 flex justify-between items-end font-space">
      <div className="text-left">
        <h1 className="font-anton text-5xl md:text-7xl uppercase tracking-tighter  leading-none">
          Ledger.exe
        </h1>
        <p className="text-blue-600 font-mono text-[10px] uppercase tracking-[0.3em] mt-3 font-bold">
          Financial Management Interface // v1.0
        </p>
      </div>
      <div className="hidden md:block text-right">
        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
          Terminal Status: Active
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
          {new Date().toLocaleDateString()}
        </span>
      </div>
    </header>
  );
}
