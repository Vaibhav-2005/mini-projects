import TransactionHeader from "./TransactionHeader";
import SummaryCards from "./SummaryCards";
import ActionBar from "./ActionBar";
import TransactionList from "./TransactionList";

export default function LedgerDisplay({ data, error }) {
  return (
    <main className="min-h-screen bg-[#0a1128] py-10 px-4 selection:bg-cyan-500 selection:text-black">
      <div className="max-w-3xl mx-auto space-y-8">
        <TransactionHeader />

        <SummaryCards spent={data.spent} earned={data.earned} />

        {error && (
          <div className="p-2 bg-red-900/30 border border-red-500 text-red-500 font-mono text-[10px] uppercase text-center">
            {error}
          </div>
        )}

        <ActionBar />

        <TransactionList transactions={data.transactions} />
      </div>
    </main>
  );
}
