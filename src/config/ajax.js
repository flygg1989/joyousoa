import domain from '../domain'

export default (type='GET', url='', data={}, async=true) => {
	return new Promise((resolve, reject) => { //定义一个promise
		type = type.toUpperCase();

		let requestObj;
		if (window.XMLHttpRequest) {
			requestObj = new XMLHttpRequest();
		} else {
			requestObj = new ActiveXObject;
		}

		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			if(url != 'http://192.168.0.110:6010/v1/wx/user'){

				url = dataStr?url + '?' + dataStr:url;
				url = domain.testUrl + url
			}
			requestObj.open(type, url, async);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send();
		}else if (type == 'POST') {
			url = domain.testUrl + url
			requestObj.open(type, url, async);
			requestObj.setRequestHeader("Content-type", "application/json");
			requestObj.send(JSON.stringify(data));
		}else {
			reject('error type');
		}

		requestObj.onreadystatechange = () => {
			if (requestObj.readyState == 4) {
				if (requestObj.status == 200) {
					let obj = requestObj.response
					if (typeof obj !== 'object') {
						obj = JSON.parse(obj);
					}
					resolve(obj);
				}else {
					reject(requestObj);
				}
			}
		}
	})
}