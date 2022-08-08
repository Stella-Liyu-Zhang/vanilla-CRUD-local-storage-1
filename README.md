

## Browser API

### DOM API
The DOM (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.

## Third party API
Third party APIs are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web. For example:
- The Twitter API allows you to do things like displaying your latest tweets on your website.
- The Google Maps API and OpenStreetMap API allows you to embed custom maps into your website, and other such functionality.

## Running order
When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in. For example, let's return to the block of JavaScript we saw in our first example:

```js
// selecting a text paragraph
const para = document.querySelector('p');

//attaching an event listener to it so that whenever the paragraph is clicked, the updateName() function is run.
para.addEventListener('click', updateName);

// asks the user for a new name, and then inserts that name into the paragraph to update the dispay. 
function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
```

If you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the browser developer console — TypeError: para is undefined. This means that the para object does not exist yet, so we can't add an event listener to it.

## Client versus server side
- Client side
    - when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. 
- Server side
    - Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.
## Dynamic versus static code 