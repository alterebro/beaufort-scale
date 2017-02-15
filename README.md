# beaufort-scale

Translate speed to Beaufort wind force scale in both Node and the Browser. 
Returns the [Beaufort Scale](https://en.wikipedia.org/wiki/Beaufort_scale) intensity grade number from a given wind speed (in Kilometres per hour).


### Include the module
```js
// Node
var beaufort = require('beaufort-scale')

// Browser
<script src="/your/path/to/beaufort-scale.js"></script>
```

### Usage
```js
beaufort(40)

// returns an object
{
	grade: 6.09,
	desc: "Strong breeze"
}
```

### Options

There are two options that can be sent to the beaufort function. These are optional and have to be passed as an Object.

- **lang** : the language of the description string ( *desc* ). Two possible values, *en* for English or *es* for Spanish, the default value is *en*.  
- **int** : Boolean to determine if the grade returns an integer or a floating number, default value is *false*.

#### Example

```js
beaufort(40, {lang: 'es', int: true})

// returns the following object
{
	grade: 6,
	desc: "Brisa fuerte"
}
```