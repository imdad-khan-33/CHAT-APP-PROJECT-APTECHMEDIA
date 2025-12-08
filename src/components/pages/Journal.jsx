import React, { useState } from "react";
import { Plus, Calendar, Trash2 } from "lucide-react";

const Journal = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "December 4, 2025",
      mood: "Happy",
      content:
        "Today was a good day. I felt productive and managed to complete all my tasks.",
    },
    {
      id: 2,
      date: "December 3, 2025",
      mood: "Neutral",
      content:
        "Had a regular day. Nothing special happened but I'm grateful for the small moments.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ mood: "Happy", content: "" });

  const handleAddEntry = () => {
    if (newEntry.content.trim()) {
      const entry = {
        id: entries.length + 1,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        mood: newEntry.mood,
        content: newEntry.content,
      };
      setEntries([entry, ...entries]);
      setNewEntry({ mood: "Happy", content: "" });
      setShowForm(false);
    }
  };

  const getMoodColor = (mood) => {
    const colors = {
      Happy: "bg-green-100 text-green-700",
      Neutral: "bg-gray-100 text-gray-700",
      Sad: "bg-blue-100 text-blue-700",
      Anxious: "bg-yellow-100 text-yellow-700",
    };
    return colors[mood] || colors.Neutral;
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Journal</h1>
          <p className="text-gray-600 mt-1">Track your thoughts and feelings</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          New Entry
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
          <h3 className="font-semibold text-lg mb-4">New Journal Entry</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How are you feeling?
            </label>
            <select
              value={newEntry.mood}
              onChange={(e) =>
                setNewEntry({ ...newEntry, mood: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option>Happy</option>
              <option>Neutral</option>
              <option>Sad</option>
              <option>Anxious</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Write your thoughts
            </label>
            <textarea
              value={newEntry.content}
              onChange={(e) =>
                setNewEntry({ ...newEntry, content: e.target.value })
              }
              rows="6"
              placeholder="What's on your mind today?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            ></textarea>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleAddEntry}
              className="px-6 py-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
            >
              Save Entry
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gray-500" />
                <span className="text-sm text-gray-600">{entry.date}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getMoodColor(
                    entry.mood
                  )}`}
                >
                  {entry.mood}
                </span>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
