export const getCookies = function({url,name}){
    return new Promise((resolve,reject)=>{
        chrome.cookies.get({url,name},function(res){
            resolve(res)
        })
    })
}