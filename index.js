let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

//dog image
let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
 let dogImage = document.createElement('img')
 dogImage.setAttribute('class', 'dog-image')
 dogImage.setAttribute('src', './assets/rizzo.jpg')

 dogContent.append(dogImage)
 content.append(dogContent)

//dog details
let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
let descHeader = document.createElement('h3')
descHeader.textContent = 'Description'
let descParagraph = document.createElement('p')
descParagraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'

dogContent.append(dogDetails)
dogDetails.append(descHeader)
dogDetails.append(descParagraph)

//Feeding time list
let feedingHeader = document.createElement('h3')
feedingHeader.textContent = 'Feeding Times:'
let ulFeeding = document.createElement('ul')
let feeding1 = document.createElement('li')
feeding1.textContent = '9:00 am'
let feeding2 = document.createElement('li')
feeding2.textContent = '12:00 pm'
let feeding3 = document.createElement('li')
feeding3.textContent = '5:00 pm'

ulFeeding.append(feeding1, feeding2, feeding3)
dogDetails.append(ulFeeding)