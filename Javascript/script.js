var hr = document.getElementById("hrs")
var min = document.getElementById("mins")
var sec = document.getElementById("secs")

function start(){
    
    if ( sec.textContent < 9){
        sec.textContent = '0' + (++sec.textContent)
    } else if ( sec.textContent < 60){
        sec.textContent++
    }
    
    if (sec.textContent == 60){
        sec.textContent = "00"
        if ( min.textContent < 9){
            min.textContent = '0' + (++min.textContent)
        } else{
            min.textContent++ 
        }
    } else if (min.textContent == 60){
        min.textContent = "00"
        if( hr.textContent < 9){
            hr.textContent = '0' + (++hr.textContent)
        } else{
            hr.textContent++
        }
    } 

}

function reset(){
  
    clearInterval(counter)
    sec.textContent = "00"
    min.textContent = "00"
    hr.textContent = "00"

}
