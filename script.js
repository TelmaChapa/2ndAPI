function artCollection() {
    fetch('https://efa-cors-anywhere.herokuapp.com/https://www.rijksmuseum.nl/api/en/collection?key=RhHm1flt&involvedMaker=Rembrandt+van+Rijn')
    .then(response => response.json())
    .then((result) => displayartCollection(result))
    .catch((error) => console.log(error));
}



artCollection();

function displayartCollection(artwork) {
    let Rembrandt = document.querySelector('.paintings');
    while (Rembrandt.firstChild) {
    Rembrandt.removeChild(Rembrandt.firstChild);
    }

    // create a random number between 0-9 
    // store that in a variable 
    //replace that 0 bucket with the variable you created
   // console.log(artwork)
   let randomNum = Math.floor(Math.random() * Math.floor(9))
   console.log(randomNum)
    console.log(artwork.artObjects[randomNum])
    console.log(artwork.artObjects[randomNum].longTitle);
    console.log(artwork.artObjects[randomNum].showImage);
    console.log(artwork.artObjects[randomNum].webImage.url);
    let piece = artwork.artObjects[randomNum].longTitle
    console.log(piece);
    // Find an anchor point using querySelector like you did in line 27 of adventure time
    //let div= document.querySelector('.painting')
    let para = document.createElement('p');
    para.innerText = piece;
    Rembrandt.appendChild(para);
    para.setAttribute("class", "name")
    let img = document.createElement('img');
    img.src = artwork.artObjects[randomNum].webImage.url;
    Rembrandt.appendChild(img);
    img.setAttribute("class", "display")

    

    para.innerText = artwork.artObjects[randomNum].longTitle ?? "No Artist Title"
    img.src = artwork.artObject[randomNum].webImage.url ?? "Image Not Available"
    }

    // create a p tag
    // create an image tage

    // inner text of p tage = console.log(artwork.artObjects[0].showImage

    // set the image src to artwork.artObjects[0].webImage.url

    // append the child to the anchor point 
    // .append(para)
    // .append(img)


    // Anchor Tag
 
    //Create Tags

    // Innertext and ***Setting Attributes***

    // Displaying using Append

