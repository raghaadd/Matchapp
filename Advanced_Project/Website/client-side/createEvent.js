const contactObject = {
    title: name,
    description: desc,
    startDate:time,
    maxCapacity:num,
    geometry:loc,
    file:Img,
    tags:Intersts,
    }
    console.log(JSON.stringify(contactObject))
    
    fetch('http://localhost:5000/events/', {
    method: 'POST',
    body: JSON.stringify(contactObject)})
    .then((response)=> response.json())
    
    .then ((responseData) =>{
    console.log(responseData)
    if (responseData == "OK") { alert("Created Successful!"); }
    else { alert("FAILURE!"); }
    
    })