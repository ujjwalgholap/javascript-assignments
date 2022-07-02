// https://www.google.com/search?q=hi&oq=hi&aqs=chrome..69i57j69i59l3j69i60l3j5.633j0j1&sourceid=chrome&ie=UTF-8

var domain = "https://www.google.com/search?q=hi"
var oq = "hi"
var aqs = "chrome..69i57j69i59l3j69i60l3j5.633j0j1"
var sourceid = "chrome"
var ie = "UTF-8"

var url = `${domain}&oq=${oq}&aqs=${aqs}&souceid=${sourceid}&ie=${ie}`

console.log(url)