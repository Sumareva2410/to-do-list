  
  
         
        let addButton = document.querySelector('.newButton');
       addButton.addEventListener('click', add);

        let click = document.querySelector('.newInput')
        click.addEventListener( 'keyup', event => {
        if( event.code === 'Enter' ) add;
        });

        function add(){
    
        let bigDiv = document.querySelector('.bigDiv')
        document.body.append(bigDiv)

        let willDo = document.querySelector('.willDo')
        document.body.append(bigDiv)

        let done = document.querySelector('.done')
        document.body.append(bigDiv)

        let secondDiv  = document.createElement("div"); 
        secondDiv.className = "secondDiv";
        willDo.append(secondDiv);  

        let text = document.querySelector(".newInput").value;
        if (text ==''){
            alert('Введите название')
            secondDiv.className = 'secondDivNoText'
            secondDiv = false
        }

        let blockTime = document.createElement("div");
        secondDiv.append(blockTime)
        blockTime.className = 'blockTime'

        let now = new Date().toLocaleString();
        blockTime.append(now)

        let data = document.createElement('input')  
        data.className = 'data'
        document.querySelector('.data')
        data.type = 'date';
       
        secondDiv.append(data)
        blockTime.append(data)
 
        let form = document.createElement('submit')
        form.className = "form"
        blockTime.append(form)
        form.append(data)    

        let label = document.createElement('label')
        label.innerHTML= "выполнить до"
        form.append(label)
        label.className="label"

        let buttonDate = document.createElement('button')
        blockTime.append(buttonDate)
        buttonDate.className = 'buttonDate'
        buttonDate.innerHTML = "ok"
        document.querySelector('.buttonDate').addEventListener("click", function (){ 
  
        let dataParse = Date.parse(data.value);
        localStorage.setItem('data', dataParse.toString())      
        } )

        let check = document.createElement('input')
        check.type = 'checkbox'
        check.className = "checkbox"
        document.querySelector('.newInput').value='';
        text.className = 'text'

        let blockText = document.createElement("div");
        secondDiv.append(blockText)
        blockText.append(check)
        blockText.append(text)
        blockText.className = 'blockText'
             
        let timeEnd = new Date().toLocaleString()
        timeEnd.className = 'timeEnd'
        let time = (new Date()).toJSON();
        let timeParse = Date.parse(time);  
        localStorage.setItem('time', timeParse.toString()) 


       check.addEventListener('change', e => {          
        if(localStorage.getItem('data') === null){
            alert('Укажите конечную дату выполнения ')
            document.querySelector(chec).disabled = true     
        }
       
         if(e.target.checked){
            secondDiv.className = "completed"
            done.append(secondDiv)
            data.remove(text)
            buttonDate.remove(blockTime)
            form.remove(label)

            let timeError = localStorage.getItem('data') - (localStorage.getItem('time'))
            localStorage.removeItem("time")
            localStorage.removeItem("data")
            
            if(timeError < 0){
                let alert = document.createElement('p')
                alert.className = "alert"
                alert.innerHTML = "выполнено " + timeEnd + " с опозданием"
                secondDiv.append(alert)     
            }   
             else{
               
                let end = document.createElement('p')
                secondDiv.append(end)
                end.className = 'end'
                end.innerHTML = "выполнено " +timeEnd;
                console.log(timeError);     
            } 
             
         }   
        })
        let buttonDel = document.createElement("button")
        secondDiv.appendChild(buttonDel)
        buttonDel.innerHTML = "Удалить"
        buttonDel.className= "buttonDel"

        let blockDel = document.createElement("div");
        blockText.appendChild(blockDel)
        blockDel.append(buttonDel)
        blockDel.className = 'blockDel'

        
        buttonDel.addEventListener('click', (e)=>{   
        secondDiv.remove(text)  
        })  
   
        }




