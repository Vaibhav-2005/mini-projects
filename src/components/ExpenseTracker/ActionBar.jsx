import { useState } from "react";

export default function ActionBar({ onTransactionAdded }) {
  const [formData, setFormData] = useState({ des: "", amount: "", expense: 1 });
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/addNewTransaction`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ des: "", amount: "", expense: 1 });
        onTransactionAdded(); // Trigger refresh in parent
      }
    } catch (err) {
      console.error("Post Error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-wrap gap-2 p-3 bg-[#111d3a] border border-[#1e2d4d] rounded-md"
    >
      <input
        type="text"
        placeholder="DESC_DATA"
        className="flex-1 bg-[#0a1128] border border-[#1e2d4d] px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
        value={formData.des}
        onChange={(e) => setFormData({ ...formData, des: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="VAL_INR"
        className="w-24 bg-[#0a1128] border border-[#1e2d4d] px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />
      <select
        className="bg-[#0a1128] border border-[#1e2d4d] px-2 py-1.5 text-[10px] text-slate-400 font-mono"
        value={formData.expense}
        onChange={(e) =>
          setFormData({ ...formData, expense: parseInt(e.target.value) })
        }
      >
        <option value={1}>OUT / SPEND</option>
        <option value={0}>IN / EARN</option>
      </select>
      <button
        type="submit"
        className="bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-bold px-4 py-1.5 rounded transition-all uppercase tracking-widest"
      >
        EXECUTE_TX
      </button>
    </form>
  );
}
