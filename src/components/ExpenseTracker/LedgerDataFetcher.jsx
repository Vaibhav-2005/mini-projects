import LedgerDisplay from "./LedgerDisplay";

export default async function LedgerDataFetcher() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL + "/expenseTracker";

  try {
    const [resT, resS, resE] = await Promise.all([
      fetch(`${API_BASE}/getTransactions`, { cache: "no-store" }),
      fetch(`${API_BASE}/getTotalOfExpensesSpent`, { cache: "no-store" }),
      fetch(`${API_BASE}/getTotalOfExpensesEarned`, { cache: "no-store" }),
    ]);

    if (!resT.ok || !resS.ok || !resE.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const transactions = await resT.json();
    const spentData = await resS.json();
    const earnedData = await resE.json();

    const data = {
      transactions: Array.isArray(transactions)
        ? transactions.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at),
          )
        : [],
      spent: spentData.total_spent || spentData[0]?.total_spent || 0,
      earned: earnedData.total_earned || earnedData[0]?.total_earned || 0,
    };

    // Pass data to the Client Component
    return <LedgerDisplay data={data} />;
  } catch (error) {
    console.error("API Error:", error);
    // Safe fallback if the backend is down
    return (
      <LedgerDisplay
        data={{ transactions: [], spent: 0, earned: 0 }}
        error="CONNECTION_LOST"
      />
    );
  }
}
