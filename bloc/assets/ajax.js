function Ajax(option){
	//定义默认参数
	var defaultOption = {
		"url":option.url || "www.baidu.com",//地址
		"type":option.type || "GET",		//请求方式
		"async":option.async || true,	//是否异步处理
		"before":option.before || function(){},
		"success":option.success || function(){return false},
		"withCredentials":true,   //当再跨域请求中需要带cookie信息的时候，这个值要设置为true，并且服务端的Access-Control-Allow-Origin必须指定域名，不能设置为*
		"data":option.data || {}
	};

	var xmlhttp;
	if (window.XMLHttpRequest){
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    xmlhttp=new XMLHttpRequest();
	}else{
	    // IE6, IE5 浏览器执行代码
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	
	
	xmlhttp.withCredentials = true; //是否允许发送cookie信息

	
	if(defaultOption.type.toLocaleUpperCase()==="POST"){
		xmlhttp.open(defaultOption.type,defaultOption.url,defaultOption.async);
		/**
		 * Content-Type：
		 * application/x-www-form-urlencoded为表单提交类型
		*/
		if(option.contentType){
			xmlhttp.setRequestHeader("Content-Type", option.contentType);
			if(/application\/json/.test(option.contentType)){
				xmlhttp.send(JSON.stringify(defaultOption.data));
			}else{
				var url = "";
				for(let key in defaultOption.data){
					url+=`${key}=${defaultOption.data[key]}&`;
				}
				url = url.replace(/&$/,"");
				xmlhttp.send(url);
			}
		}else{
			//xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			//xmlhttp.setRequestHeader("Content-Type", "application/json");
			xmlhttp.setRequestHeader("Content-Type", "text/plain");
			xmlhttp.send(JSON.stringify(defaultOption.data));
		}
	}else{
		var url = defaultOption.url+"?"
		for(let key in defaultOption.data){
			url+=`${key}=${defaultOption.data[key]}&`;
		}
		url = url.replace(/&$/,"");
		xmlhttp.open(defaultOption.type,url,defaultOption.async);
		xmlhttp.send();
	}


	if(defaultOption.async){
		//请求前处理
		defaultOption.before();

		xmlhttp.onreadystatechange=function(data){
    		if (xmlhttp.readyState==4 && xmlhttp.status==200){
		        defaultOption.success(JSON.parse(xmlhttp.response));
		    }
		}
	}

	
}
