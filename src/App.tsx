import Presentation from './components/Presentation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-8">
      <header className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-white mb-2">AI Evolution Timeline</h1>
        <p className="text-gray-400">A retrospective view from 2200</p>
      </header>
      <Presentation />
    </div>
  );
}

export default App;