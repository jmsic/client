import './App.css'

function App() {
  return (
    <header className='flex justify-between'>
            <a href="" className='flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
              <span className='font-bold text-xl'>AirCnC</span>
            </a>
            <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
              <div>Anywhere</div>
              <div className='border border-1 border-gray-300'></div>
              <div>Any Week</div>
              <div className='border border-1 border-gray-300'></div>
              <div>Add Guests</div>
              <button className='bg-primary text-white p-1 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
              </button>
            </div>
            
    </header>
  )
}

export default App
