import './style.css'

const form = document.getElementById('cname')
const button = document.getElementById('submit')
const display = document.getElementById('display-data')


button?.addEventListener('click', async (e) => {
  e.preventDefault()
  const text = form?.value
  const arr = text.split(',')
  console.log(arr)

  const data = await fetch('http://localhost:8000/getWeather',{
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    "cities": text.split(',')
  })
})

const DataToJson = await data.json()
console.log(DataToJson)

const dataDisplay = DataToJson.map((city: any) => {
  const {CityName, Temp} = city

  return `
    <div class="container">
       <p>City-Name: ${CityName}</p>
       <p>Temp in Celcius: ${Temp}</p>
    </div>
  `
})
display.innerHTML = dataDisplay

dataDisplay()

})






