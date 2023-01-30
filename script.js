import axios from 'axios'

const content = document.querySelector(".content")
const credit = document.querySelector(".credit")
const timeAndDate = document.querySelector(".time-and-date")
const norris = document.querySelector(".norris")
const number = document.querySelector(".number")
const location = document.querySelector(".location")


const unsplashApi = () => {
  axios('https://api.unsplash.com/photos/qD9xzm7yK9U/?client_id=d8WOuDBwyt8dHN-3rilAxikGoVX-CxQzAGdfwy3QLJc')
  .then(response => {
    console.log(response)
    content.style.backgroundImage = `url(${response.data.urls.regular})`;
    credit.innerHTML = `Background photo credit: Unsplash @${response.data.user.username}`
  })
  .catch(error => {
    console.log(error)
    content.style.backgroundImage = url('./promises.jpg');
  })
}
unsplashApi()

const updateTime = () => {
  timeAndDate.innerHTML = Date()
}

setInterval(updateTime, 1000)

const getPlace = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
      axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0a15459f72bcb893dcf5982775466217&units=metric`)
      .then(response => {
        location.innerHTML = `It is ${response.data.main.temp}c but feels like ${response.data.main.feels_like}c in ${response.data.name}`
      })
      .catch(error => {
        console.log(error)
        location.innerHTML = "Location could not be found"
      })
        
      }); 
}
getPlace()

const getNorrisJoke = () => {
  axios('https://api.chucknorris.io/jokes/random')
  .then(response => {
    norris.innerHTML = response.data.value
  })
  .catch(error => {
    console.log(error)
    norris.innerHTML = "Could not load Chuck Norris joke..."
  })
}

getNorrisJoke()


const getNumberInfo = () => {
  axios('http://numbersapi.com/random/trivia')
  .then(response => {
    number.innerHTML = response.data
  })
  .catch(error => {
    console.log(error)
    number.innerHTML = "Unable to reach numbersapi"
  })
}
getNumberInfo()