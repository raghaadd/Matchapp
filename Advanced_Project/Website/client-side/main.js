let event=document.getElementById("event")

let eventitemData=[
    {
        id:"event1",
        name:"Healthy Food",
        desc:"In this event, we will talk about healthy food and how it affects working life, and we will exchange information.",
        time:"Time:4:00-6:00 PM",
        loc:"Location:Nablus",
        img:"image/food.jpg"
    },
    {
        id:"event2",
        name:"Football",
        desc:"In this event, we will talk about football,and everything related to its rules and laws and open discussion with that.",
        time:"Time:2:00-4:00 PM",
        loc:"Location:Ramallah",
        img:"image/Foot.jpg"
    },
    {
        id:"event3",
        name:"Sport",
        desc:"In this event, we will talk about sport,and its importance for the prevention of serious diseases.",
        time:"Time:7:00-9:00 PM",
        loc:"Location:Ramallah",
        img:"image/sport.jpg"
    },
    {
        id:"event4",
        name:"Clothes",
        desc:"In this event, we will talk about clothing,what suits each of them, and appropriate colors that suit each season of the year.",
        time:"Time:5:00-7:00 PM",
        loc:"Location:Nablus",
        img:"image/cloth.jpg"
    },



];



let generateevent=()=>{
return (event.innerHTML=eventitemData
    .map((x)=>{
        let {id,name,desc,time,loc,img}=x;
    return `
    <div id=product-id-${id} class="item">
        <img class="image" width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <h4 style="color:#ee624b;">${time}</h4>
          <h4 style="color:#ee624b;">${loc}</h4>
          <button type = "button4">
          Join Event
           </button>
            </div>
          </div>
    `;
}).join(""));
};

generateevent();






function myFunction() {
    document.getElementById("myinterests").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.inerests')) {
      var dropdowns = document.getElementsByClassName("list-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }