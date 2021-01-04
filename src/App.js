import './styles/globals.css';
import './styles/tailwind.css';


function App() {
  return (
    <div className="App">
      <h1 className="pt-52 text-2xl font-bold text-center text-blue-800">TIMES DA NBA</h1>

      <div className="grid grid-cols-3 gap-5 my-20 px-4">
        <a className="flex bg-gray-200 rounded-lg p-4 mt-4 space-x-4 hover:bg-gray-100 transition" href="#">
          <img className="w-20" src="https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png" alt="Hawks" />
          <p className="text-lg font-semibold self-center">Atlanta Hawks</p>
        </a>
        <a className="flex bg-gray-200 rounded-lg p-4 mt-4 space-x-4 hover:bg-gray-100 transition" href="#">
          <img className="w-20" src="https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png" alt="Hawks" />
          <p className="text-lg font-semibold self-center">Atlanta Hawks</p>
        </a>
        <a className="flex bg-gray-200 rounded-lg p-4 mt-4 space-x-4 hover:bg-gray-100 transition" href="#">
          <img className="w-20" src="https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png" alt="Hawks" />
          <p className="text-lg font-semibold self-center">Atlanta Hawks</p>
        </a>
      </div>
    </div>
  );
}

export default App;
