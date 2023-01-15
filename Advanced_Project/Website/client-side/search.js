var form=document.getElementById("myForm");
var name=document.getElementById("search");
form.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById("search").value
    // to remove space from name: 
    var name=search.split(' ').join('')
    alert(name)

    fetch("https://jsonplaceholder.typicode.com/users/"+name)
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("result").innerHTML=`
        <tr>
        <td><img style="border-radius: 50%;"src="./image/person4.png" alt="Avatar"></td>
              <td style="width:800px;"><a id="hlink" href="profileView.html?username=${data.name}">${name} </a></td>           
              </tr>
        `
    })


})

