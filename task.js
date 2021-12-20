let apis = window.fetch('https://assignmentapis.herokuapp.com/machstatz/get_all_users')

console.log(apis)

apis.then((res)=>{return res.json()})
.then(data => {console.log(data)
    let data1=""
    data.map((value)=>{

        var r1 = [];
        var r2 = [];
       
        
        var n = 1;
        var x = 0;
        data1 = 
            
        function add(){
            var Addrow = document.getElementById("mytable")
            var newrow = Addrow.insertRow(n)
        
             row1[x] = document.getElementById("fstname").value;
             row2[x] = document.getElementById("lstname").value;
            
            var cell1= newrow.insertCell(0)
            var cell2= newrow.insertCell(1)
            
        
                cell1.innerHTML = row1[x];
                cell2.innerHTML = row2[x];
               

             
                n++;
                x++;
        
        }
        get()
        
        

      document.getElementById("d2").innerHTML=data1
      function deleted(){
       
         document.getElementsByTagName("tr")[1].remove();
    }
    deleted()
    })
})
.catch(err =>{console.log(err)})