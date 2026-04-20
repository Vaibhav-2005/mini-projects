"use client";
import { useState, useEffect, useCallback } from "react";
import TransactionList from "@@/components/ExpenseTracker/TransactionList";
import SummaryCards from "@@/components/ExpenseTracker/SummaryCards";
import TransactionHeader from "@@/components/ExpenseTracker/TransactionHeader";
import ActionBar from "@@/components/ExpenseTracker/ActionBar";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL + "/expenseTracker";

export default function ExpenseTrackerPage() {
  const [data, setData] = useState({
    transactions: [],
    spent: 0,
    earned: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Centralized Data Fetcher
  const fetchData = useCallback(async () => {
    try {
      // Parallel fetching for speed
      const [resT, resS, resE] = await Promise.all([
        fetch(`${API_BASE}/getTransactions`),
        fetch(`${API_BASE}/getTotalOfExpensesSpent`),
        fetch(`${API_BASE}/getTotalOfExpensesEarned`),
      ]);

      if (!resT.ok || !resS.ok || !resE.ok)
        throw new Error("API_PROTOCOL_FAILURE");

      const transactions = await resT.json();
      const spentData = await resS.json();
      const earnedData = await resE.json();

      // 2. Sorting Logic: Newest Timestamp First
      const sortedTransactions = Array.isArray(transactions)
        ? transactions.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at),
          )
        : [];

      setData({
        transactions: sortedTransactions,
        // Extracting values based on your SQL return structure [data]
        spent: spentData.total_spent || spentData[0]?.total_spent || 0,
        earned: earnedData.total_earned || earnedData[0]?.total_earned || 0,
      });
      setError(null);
    } catch (err) {
      console.error("Critical Terminal Error:", err);
      setError("CONNECTION_LOST: Check backend status.");
    } finally {
      setLoading(false);
    }
  }, []);

  // 3. Initial Boot
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 4. Loading & Error States (Terminal Style)
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1128] flex items-center justify-center font-mono">
        <div className="text-cyan-500 text-[10px] tracking-[1em] animate-pulse uppercase">
          Initializing_Terminal_Buffer...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a1128] py-10 px-4 md:px-0 selection:bg-cyan-500 selection:text-black">
      <div className="max-w-3xl mx-auto">
        {/* Header with Pulse Status */}
        <TransactionHeader />

        {/* Financial Metrics Cards */}
        <SummaryCards spent={data.spent} earned={data.earned} />

        {/* Error Notification Bar */}
        {error && (
          <div className="mb-4 p-2 bg-red-900/30 border border-red-500 text-red-500 font-mono text-[9px] uppercase text-center animate-bounce">
            {error}
          </div>
        )}

        {/* Create Transaction Action Bar */}
        <ActionBar onTransactionAdded={fetchData} />

        {/* Data Stream / Transaction List */}
        <TransactionList
          transactions={data.transactions}
          onRefresh={fetchData}
        />

        {/* Simple Footer Metadata */}
        <footer className="mt-12 text-center border-t border-[#1e2d4d] pt-6">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => (window.location.href = "/")}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-500 hover:text-cyan-400 transition-all"
            >
              [ Terminate_Session ]
            </button>
            <p className="text-[8px] font-mono text-slate-700 uppercase tracking-widest mt-4">
              Authorized Access Only // User: VAIBHAV_AGGARWAL // Node: 2026.1
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
