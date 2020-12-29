import axios from 'axios'

// 获取产品列表
/*  
    * 
    params  ==== 查询参数

*/
export const getProductList = (params) => {
    //wsl

    return axios({
        method: 'post',
        url: getUrl() + '/products',
        contentType: 'application/x-www-form-urlencoded',
        params:params,
    });
}

export const getProductDetail = (id) =>{
    //wsl
    return axios({
        method: 'post',
        url: getUrl() + `/products/${id}`,
        contentType: 'application/x-www-form-urlencoded',
    });
}

// 获取登录用户信息
export const getUserInfo = () => {
    //wsl
    return axios.get(getUrl()+'/user');
}



//获取购物中所有商品数量总和

export const getCartCount = (username) =>{
    //wsl
    var params = new URLSearchParams();
    params.append("username",username);
    return axios({
        method: 'post',
        url: getUrl() + '/carts/products/sum',
        contentType: 'application/x-www-form-urlencoded',
        params:params,
    });
}

// 获取购物车列表
export const getCartList = (username) =>{
    //wsl
    var params = new URLSearchParams();
    params.append("username",username);
    return axios({
        method: 'post',
        url: getUrl() + '/carts',
        contentType: 'application/x-www-form-urlencoded',
        params:params,
    });
}

export const getUrl = () =>{
    return 'http://172.23.101.157:8082';
}
