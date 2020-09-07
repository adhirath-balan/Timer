var hr = document.getElementById("hrs")
var min = document.getElementById("mins")
var sec = document.getElementById("secs")

var tbody = document.getElementById("tbody")

var num = 0 

function start(){
    
    if ( sec.textContent < 9){
        sec.textContent = '0' + (++sec.textContent)
    } else if ( sec.textContent < 60){
        sec.textContent++
    }
    
    if (sec.textContent == 59){
        sec.textContent = "00"
        if ( min.textContent < 9){
            min.textContent = '0' + (++min.textContent)
        } else{
            min.textContent++ 
        }
    } else if (min.textContent == 59){
        min.textContent = "00"
        if( hr.textContent < 9){
            hr.textContent = '0' + (++hr.textContent)
        } else{
            hr.textContent++
        }
    } 

}

function stop(){

    clearInterval(counter)
    var row = document.createElement("tr")
    var data1 = document.createElement("td")
    var data2 = document.createElement("td")
    data1.textContent = ++num
    data2.textContent = hr.textContent + ":" + min.textContent + ":" + sec.textContent
    tbody.appendChild(row)
    row.appendChild(data1)
    row.appendChild(data2)  
}

function reset(){
  
    clearInterval(counter)
    var row = document.createElement("tr")
    var data1 = document.createElement("td")
    var data2 = document.createElement("td")
    data1.textContent = ++num
    data2.textContent = hr.textContent + ":" + min.textContent + ":" + sec.textContent
    tbody.appendChild(row)
    row.appendChild(data1)
    row.appendChild(data2)  
    sec.textContent = "00"
    min.textContent = "00"
    hr.textContent = "00"

}
