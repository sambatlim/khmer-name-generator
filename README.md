
# Khmer Name Generator

This package is able to generate real khmer name in khmer alphabets(Unicode range: U+1780–U+17FF Khmer; U+19E0–U+19FF Khmer Symbols) and cambodia province name with city including Lat Long (update 2020). 

## Getting Started

### Prerequisites
This project require node install.

```
//Make sure you have node install by typing as below in your cmd:

node --version

//this will print out your node version
```

### Installing and usage
Install in the browser
```
<script src="khmernamegenerator.min.js" type="text/javascript"></script>
<script>
  console.log(khmerNameGenerator.name.getRandomName());
  console.log(khmerNameGenerator.name.getRandomFirstname());
  console.log(khmerNameGenerator.name.getRandomLastname());
  console.log(khmerNameGenerator.provincewithlatlong.getProvinceWithLatLong());
</script>
```

___

Install the package with npm
```
npm install khmer-name-generator
```
import to your file 

```
const khmerGenerator = require('khmer-name-generator')
```

get the generated full name
```
var fullName = khmerGenerator.name.getRandomName()
```
get the generated first name
```
var firstName = khmerGenerator.name.getRandomFirstname()
```
get the generated last name
```
var lastName = khmerGenerator.name.getRandomLastname()
```
get the khmer province with lat long
```
var khmerProvinceWithLatLong = khmerGenerator.provincewithlatlong.getProvinceWithLatLong()
```

## Authors

* **Sambat Lim** - *github profile* - [https://github.com/sambatlim](https://github.com/sambatlim)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Reference

* [http://db.ncdd.gov.kh/gazetteer/view/index.castle](http://db.ncdd.gov.kh/gazetteer/view/index.castle)
* [https://latitudelongitude.org/kh/](https://latitudelongitude.org/kh/)
