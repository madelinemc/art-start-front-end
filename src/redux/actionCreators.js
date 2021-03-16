//example action creators

export function name(){
    return {type: "NAME"}
}

export function another(arg){
    return {type: "ANOTHER", payload: arg}
}