# The Modern JavaScript Boot Camp

-------

## Setting up a Web Server

The web server that we set up was from npm. The package is called, `live-server` and you can install that with `npm install -g live-server`. From here you need to call `live-server` plus the folder you would like to serve. That command looks like this, `live-server source` .

-------

## JavaScript in the browser

### Script Tags

The script tag lets us run JavaScript in the browser thru our HTML. The script tag can be inline or external. An in-line example is :

```javascript
<script>
    console.log('Hey!');
</script>
```

It is best practice (_in the case of what we are working with_) to keep you JavaScript and HTML separated. The way you do that is with a script tag that is located in your HTML file inside of the `<head> </head>` tags. The example is as follows:

```HTML
<script src="my-script.js"></script>
```

To expound on this tag we have a `src` attribute that points to the file you want to externally import in `""` . We include the name of this file inside the `""` and then close the `<script>` tag.

-------

# DOM Manipulation

DOM stands for **<u>D**ocument **O**bject **M**odel</u>

*Document*: is the `<HTML>` document

*Object* *Model* : We have a object in Javascript that

So if we want to access all the `p` tags or delete all the `form` data we do that with with the DOM.

## Quering for Elements

The DOM is a JavaScript object. IT represents the `<HTML>` document that we can then use in our JavaScript to manipulate what the user sees in the browser. The DOM is provided to us via the `document` global variable.

When we want to manipulate the document, we first need to query the DOM for the thing we are trying to change. One way to achieve this is with the `querySelector` method. This method takes a single argument where we provide our query. In the case below, we're searching for the `<p></p>` element.
 ```javascript
const element = document.querySelector('p')
```
The `querySelector` method is going to search the DOM for the **first match** it finds, It will then return that match.
 ```javascript
const elements = document.querySelector('p')
```
We can remove an element using the remove method. The below would remove the **first** **`<h1></h1>`** element in the DOM.
 ```javascript
const element = document.querySelector('h1')
element.remove()
```
We can also read and change an element's text value. In the example below, we add an exclamation mark onto the text shown in a `<p></p>`.
 ```javascript
const element = document.querySelector('p')
element.textContent = element.textContent + '!'
```
