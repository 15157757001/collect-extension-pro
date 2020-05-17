const getCookies = function({url,name}){
    return new Promise((resolve,reject)=>{
        chrome.cookies.get({url,name},function(res){
            resolve(res)
        })
    })
}

window.onload = function(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        
        let { event,data } = request
        
        switch (event) {
            case 'get_cookies':
                console.log(event,data)
                getCookies(data).then(res=>{
                    sendResponse(res)
                })
                break;
        }

        return true;
    });
    
}


