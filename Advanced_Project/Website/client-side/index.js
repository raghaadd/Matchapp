// var form=document.getElementById("myForm")
var load=document.onload("index.html")

form.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById("search").value
    // to remove space from name: 
    var name=search.split(' ').join('')
    alert(name)

    fetch("http://localhost:5000/index")
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("result").innerHTML=`
        <tr>
        <td><img style="border-radius: 50%;"src="./image/logo.png" alt="Avatar"></td>
              <td style="width:800px;"><a id="hlink" href="profileView.html?username=${data.name}">${data.name} </a></td>           
              </tr>
        `
    })


})

