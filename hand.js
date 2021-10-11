export function straightFlush(handValue,handSuit){
    var flush = false
    var straight  = false
    var count = 0
    for(var x = 0; x < 5; x++) {  
        if(handValue[x+1]-handValue[x] == 1 || handValue[x+1]-handValue[x] == -12)
            count++
        if(count==4)
            straight = true
    }

    flush = handSuit.every( (val, i, arr) => val === arr[0] )
    if(straight == true && flush == true){
        return true
    } else{
        return false
    }
}

export function fourOfAKind(handValue){

        for(var i = 0; i < handValue.length; i++) {
            var countOfKind = 0;
            for (var j = 0; j < handValue.length; j++) {
                if (handValue[i] == handValue[j]) {
                    countOfKind++;
                }
            }
            if (countOfKind >= 4) {
                return true;
            }else {
                return false
            }
        }
}

export function fullHouse(handValue){
    const copy = handValue.slice();

    for(let i = 0; i < handValue.length;){
       const el = copy.splice(i, 1)[0];
       if(copy.includes(el)){
          copy.splice(copy.indexOf(el), 1);
          if(copy.includes(el)){
             return true;
          }
       }else{
          i++;
       }
    };
    return false;
}

export function flush(handSuit){
    let flush = handSuit.every( (val, i, arr) => val === arr[0] )
    if(flush == true){
        return true
    } else{
        return false
    }
}

export function straight(handValue){
    let straight_t = false
    let count = 0
    for(var x = 0; x < 5; x++) {  
        if(handValue[x+1]-handValue[x] == 1 || handValue[x+1]-handValue[x] == -12)
            count++
        if(count==4)
            straight_t = true
    }
    if(straight_t == true){
        return true
    } else{
        return false
    }
}

export function threeOfAKind(handValue){
    for(var i = 0; i < handValue.length; i++) {
        var countOfKind = 0;
        for (var j = 0; j < handValue.length; j++) {
            if (handValue[i] == handValue[j]) {
                countOfKind++;
            }
        }
        if (countOfKind == 3) {
            return true;
        }
    }
    return false
}

export function twoPair(handValue){
    let countObj = {}
    for(let x of handValue){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if(vals.filter(x => x === 2).length == 2) return true;
    return false;
  }



export function onePair(handValue){
    for(var i = 0; i < handValue.length; i++) {
        var countOfKind = 0;
        for (var j = 0; j < handValue.length; j++) {
            if (handValue[i] == handValue[j]) {
                countOfKind++;
            }
        }
        if (countOfKind == 2) {
            return true;
        } 
    }
        return false
}



