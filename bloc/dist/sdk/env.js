export function getEnv(){
    //dev,fat,uat,pre,prd
    var env = "";
    if(/47\.105\.42\.195/.test(location.host)){
        env = "prd"
    }else if(/xiaogangji\.com/.test(location.host)){
        env = "uat"
    }else{
        env = "dev"
    }
    return env;
}

export const env = getEnv();