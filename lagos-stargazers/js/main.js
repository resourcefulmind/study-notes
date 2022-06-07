//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=iwVCpFK5lSuE5D1KvSMCUsUSnjBYGqvQTf5e7rFp&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').style.display = "none"
        } else if(data.media_type === 'video') {
          document.querySelector('img').style.display = "none"
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h6').innerText = data.explanation
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

