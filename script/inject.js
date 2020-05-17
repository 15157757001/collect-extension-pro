(function(){

    window.addEventListener("message", function(e){
        let { event,data } = e.data
        switch(event){
            case 'show_login':
                BootstrapDialog.show({
                    title:'提示',
                    message:'需要登录后才能收藏。',
                    buttons:[{
                        label:"登录",
                        cssClass:"btn-primary",
                        action:function(e){
                            e.close();
                            location.href='https://account.dcloud.net.cn/oauth2?client_id=DCLOUD_DEV&redirect_uri=http%3A%2F%2Fext.dcloud.net.cn%2Fauth%2Fdcloud%2Fcallback&scope=&response_type=code'
                        }
                    }]
                })
                break
        }
    }, false);

})()