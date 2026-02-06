import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SearchBox({ data }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    navigate('/course-list/' + input);
  }

  return (
    <div className="w-full flex justify-center">
      
      <form 
        onSubmit={handleSearch} 
        className="flex items-center w-full max-w-xl bg-white shadow-lg rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 transition"
      >
        
        <Search className="text-gray-400 mr-2" size={20} />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for courses..."
          className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
        >
          Search
        </button>

      </form>

    </div>
  )
}

export default SearchBox
