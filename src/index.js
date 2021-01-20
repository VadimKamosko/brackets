module.exports = function check(str, bracketsConfig) {
   a = {};
    let count = 0;
    for (mas of bracketsConfig)
        for (val of mas) {
            b = new Object;
            if(!!a[val]) {a[val].parent=count;count++; a[val].mirror=true; continue};
            a[val] = b;
            b.number = count++;
            if (count % 2 == 0)
                b.parent = count - 2;
        }
    a.now = [];
    let temp;
    for (let i = 0; i < str.length; i++) {
        temp = str.charAt(i);
        if (a[temp].number % 2 == 0) { 
            if(a[temp].mirror) a[temp].number=a[temp].number+1;;           
            a.now.push(temp);
        }
        else {
            if (a.now.length == 0) return false;
            let c = a.now[a.now.length - 1];
            if (a[c].number == a[temp].parent) {
                if(a[temp].mirror)  a[temp].number=a[temp].number-1;  
                a.now.pop();
            }
            else return false;
        }
    }
    if (a.now.length == 0) return true;
    else return false;
}
