//sayaç ile ilgili fonksiyonlar
import * as actionTypes from './actionTypes' // *(yıldız) koyulursa tüm actiontypeları alır. birden çok export var o dosyada

//increaseCounter bir değişkendir ve bu değişken bir fonksiyona işaret eder. işaret ettiği fonksiyon parametre olarak actionType ve payload alır
export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})
export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})
export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTEROUNTER,
    payload:2
})