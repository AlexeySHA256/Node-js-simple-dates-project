import { Button } from './components/button.jsx'
import { Input } from './components/input.jsx'
import { useState } from 'react'

function App() {
  const [currDate, setCurrDate] = useState(null)
  const [error, setError] = useState(null)
  const serverURL = "http://localhost:7707/api/v1"
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    // const timezone = data.get("timezone")
    // const format = data.get("format")
    console.log(data);
    const url = new URL(`${serverURL}/current-date`)
    url.search = new URLSearchParams(data).toString()
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrDate(data.currDate))
    .catch(err => {
      console.error(err)
      setError(err)
    })
  }

  return (
    <div className='bg-orange-800 flex flex-col items-center min-h-screen p-10 gap-3'>
      <h1 className='text-3xl bg-gradient-to-r from-red-600 to-green-800 rounded p-3 text-slate-200'>Получение даты</h1>
      <h3 className='text-xl text-slate-300'>Для получения текущей даты укажите ниже временную зону или она определится автоматически</h3>
      <div>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
          <Input placeholder="Введите временную зону, напр. UTC" name="timezone" />
          <Input placeholder="Формат даты, напр. YYYY-MM-DD HH:mm:ss" name="format"/>
          <Button variant="primary" size="lg">Получить дату</Button>
        </form>
      </div>
      <div>
        {currDate && <p>Текущая дата: {currDate}</p>}
        {error && <p className='text-red-600'>{error}</p>}
      </div>
    </div>
  )
}

export default App
