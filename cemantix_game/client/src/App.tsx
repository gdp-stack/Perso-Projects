
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkWord } from './store/gameSlice';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const { result, temperature } = useSelector((state: any) => state.game);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(checkWord(input));
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl mb-5">Cémantix Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Enter a word"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Check
        </button>
      </form>
      {result && (
        <div className="mt-5">
          <p>Result: {result}</p>
          <p>Temperature: {temperature}</p>
        </div>
      )}
    </div>
  );
};

export default App;
