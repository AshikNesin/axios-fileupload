# Axios file upload

> File upload using axios (multipart/form-data)


## Install

```
$ npm install --save axios-fileupload
```


## Usage

```js
const axiosFileupload = require('axios-fileupload');

axiosFileupload(url,file);
//=> 'Uploads a file and returns a promise'
```


## API

### axiosFileupload(url,file)

#### url

Type: `string`

File upload API endpoint url

#### file

Type: `file object`

File that you want to upload

## License

MIT © [Ashik Nesin](https://github.com/HugeThoughts/axios-fileupload)
