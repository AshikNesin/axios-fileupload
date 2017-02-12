'use strict';
const axios = require('axios')
module.exports = (url, file,name='file') => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof url}`);
	}
    const formData = new FormData();
    formData.append(name,file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post(url, formData,config)
};
