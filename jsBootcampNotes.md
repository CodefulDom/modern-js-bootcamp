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

