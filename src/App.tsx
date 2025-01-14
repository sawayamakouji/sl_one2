import Presentation from './components/Presentation';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex flex-col">
      {/* ヘッダー部分 */}
      <header className="text-center flex-shrink-0 h-16 p-4">
        <h1 className="text-4xl font-bold text-white mb-2">AI Evolution Timeline</h1>
        <p className="text-gray-400">A retrospective view from 2200</p>
      </header>

      {/* プレゼンテーション部分 */}
      <div className="flex-grow">
        <Presentation />
      </div>
    </div>
  );
}

export default App;
