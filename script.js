import axios from 'axios'

const content = document.querySelector(".content")
const credit = document.querySelector(".credit")
const timeAndDate = document.querySelector(".time-and-date")


const unsplashApi = () => {
  axios('https://api.unsplash.com/photos/qD9xzm7yK9U/?client_id=d8WOuDBwyt8dHN-3rilAxikGoVX-CxQzAGdfwy3QLJc')
  .then(response => {
    console.log(response)
    content.style.backgroundImage = `url(${response.data.urls.regular})`;
    credit.innerHTML = `Background photo credit: Unsplash @${response.data.user.username}`
  })
  .catch(error => {
    console.log(error)
  })
}
unsplashApi()

const updateTime = () => {
  timeAndDate.innerHTML = Date()
}

setInterval(updateTime, 1000)


