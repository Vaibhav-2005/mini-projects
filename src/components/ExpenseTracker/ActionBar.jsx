"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ActionBar() {
  const [formData, setFormData] = useState({ des: "", amount: "", expense: 1 });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL + "/expenseTracker";

    try {
      await fetch(`${API_BASE}/addNewTransaction`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormData({ des: "", amount: "", expense: 1 });
      router.refresh(); // Tell the Server Component to update
    } catch (err) {
      console.error("Post Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap md:flex-nowrap gap-2 bg-[#101835] p-3 rounded-lg border border-[#1e2d4d]"
    >
      <input
        type="text"
        placeholder="Description"
        className="flex-[2] bg-[#0a1128] border border-[#1e2d4d] text-cyan-50 px-4 py-2 rounded focus:outline-none focus:border-cyan-500"
        value={formData.des}
        onChange={(e) => setFormData({ ...formData, des: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        className="flex-1 bg-[#0a1128] border border-[#1e2d4d] text-cyan-50 px-4 py-2 rounded focus:outline-none focus:border-cyan-500"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />
      <select
        className="bg-[#0a1128] border border-[#1e2d4d] text-cyan-50 px-4 py-2 rounded focus:outline-none focus:border-cyan-500"
        value={formData.expense}
        onChange={(e) =>
          setFormData({ ...formData, expense: parseInt(e.target.value) })
        }
      >
        <option value={1}>SPEND</option>
        <option value={0}>EARN</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-6 py-2 rounded transition-colors uppercase disabled:opacity-50"
      >
        {loading ? "..." : "Add"}
      </button>
    </form>
  );
}
