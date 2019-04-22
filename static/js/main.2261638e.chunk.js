(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(78),i=a.n(s),o=(a(41),a(85),a(13)),l=a(14),c=a(16),m=a(15),u=a(17),p=a(56),h=a.n(p);h.a.initializeApp({apiKey:"AIzaSyBKqbtDbOU87DXS3r_jEyaM2drG-eTrtCY",authDomain:"firebasicstutorial.firebaseapp.com",databaseURL:"https://firebasicstutorial.firebaseio.com",projectId:"firebasicstutorial",storageBucket:"firebasicstutorial.appspot.com",messagingSenderId:"924177388749"});var d=h.a,v=a(79),f=a.n(v),E=(a(183),a(57)),g=a.n(E),b=(a(184),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h1",null,"Toronto Events"),r.a.createElement("h2",null,"find out what's going on in the city!")),r.a.createElement("form",{className:"eventForm",onSubmit:this.props.handleSubmit},r.a.createElement("h3",null,"Choose your event preferences"),r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("select",{placeholder:"Type event category",id:"category",onChange:this.props.handleCategoryChoice},r.a.createElement("option",{value:"music"},"Music"),r.a.createElement("option",{value:"visual-arts"},"Visual Arts"),r.a.createElement("option",{value:"performing-arts"},"Performing Arts"),r.a.createElement("option",{value:"film"},"Film"),r.a.createElement("option",{value:"lectures-books"},"Lectures and Books"),r.a.createElement("option",{value:"fashion"},"Fashion"),r.a.createElement("option",{value:"food-and-drink"},"Food and Drink"),r.a.createElement("option",{value:"festivals-fairs"},"Festivals and Fairs"),r.a.createElement("option",{value:"charities"},"Charities"),r.a.createElement("option",{value:"sports-active-life"},"Sports and Active Life"),r.a.createElement("option",{value:"nightlife"},"Nightlife"),r.a.createElement("option",{value:"kids-family"},"Kids and Family"),r.a.createElement("option",{value:"other"},"Other")),r.a.createElement("label",{htmlFor:"onlyFree"},"Free or paid events"),r.a.createElement("select",{placeholder:"Only show events that are free",id:"onlyFree",onChange:this.props.handlePriceChoice},r.a.createElement("option",{value:"false"},"Free and paid events"),r.a.createElement("option",{value:"true"},"Only free events")),r.a.createElement("input",{type:"submit",id:"submitForm",value:"Submit form"})))}}]),t}(n.Component)),y=(a(185),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleSaveToFB=function(t){t.preventDefault();var a=d.database().ref(),n={name:e.props.name,description:e.props.description};e.setState({selectedEvent:n}),a.push(n)},e.state={selectedEvent:[]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"responseItem",onSubmit:this.handleSaveToFB},r.a.createElement("a",{href:this.props.website},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{src:this.props.image,alt:this.props.name}))),r.a.createElement("div",{className:"descriptionContainer"},r.a.createElement("h3",null,this.props.name),r.a.createElement("p",null,this.props.description.substring(0,100)+"..."),r.a.createElement("p",null,"Date: ",this.props.date.substring(0,10)," Time: ",this.props.date.substring(11))),r.a.createElement("button",{className:"saveEvent"},"Save this Event!"))}}]),t}(n.Component)),S=(a(186),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("h3",null,"Copyright \xa9 2019 Gus Richardson"),r.a.createElement("p",null,"Skyline photo credit: Luis Enrique Carvajal   ",r.a.createElement("span",null,"|   Pattern background created at SVGBackgrounds.com")))}}]),t}(n.Component)),C="T4ppS0vgQo0YhVouBtsAnFcusw0O72e9rjlL7igvSTjfF2H_FsZYz17lO8d2A7Zpt1tz7TcTOrQmNgGsnUhDBu7wBtzbkZI7SeWxQTq_bXGtxcQ1jnQ1KnpJHhmxXHYx",w="https://api.yelp.com/v3/events?location=toronto",j="https://cors-anywhere.herokuapp.com/",F=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleCategoryChoice=function(t){e.setState({category:t.target.value}),console.log(e.state)},e.handlePriceChoice=function(t){"true"===t.target.value?e.setState({onlyFree:!0}):e.setState({onlyFree:!1})},e.removeItem=function(e){d.database().ref(e).remove()},e.handleSubmit=function(t){t.preventDefault(),e.loadingResults(),e.getEventsFromAPI()},e.getTimeStamp=function(){var t=Date.now(),a=Math.floor(t/1e3)-14400;e.setState({start_date:a})},e.loadingResults=function(){e.setState({isLoading:!0})},e.getEventsFromAPI=function(){f()({url:j+w,method:"GET",dataType:"json",headers:{Authorization:"Bearer ".concat(C)},params:{limit:10,start_date:e.state.start_date,categories:e.state.category,is_free:e.state.onlyFree}}).then(function(t){var a=t.data.events.filter(function(e){return!1===e.is_canceled});0===a.length&&alert("Sorry, not much going on. Why not try another category!"),e.setState({events:a,isLoading:!1})}).catch(function(e){alert("Sorry, something went wrong")})},e.state={category:"",start_date:0,onlyFree:!1,events:[],savedEvents:[],isLoading:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getTimeStamp(),d.database().ref().on("value",function(t){var a=t.val(),n=[];for(var r in a){var s=a[r].description.substring(0,180)+"...";n.push({key:r,name:a[r].name,description:s})}e.setState({savedEvents:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(b,{handleCategoryChoice:this.handleCategoryChoice,handlePriceChoice:this.handlePriceChoice,handleSubmit:this.handleSubmit}),r.a.createElement("main",{className:"results",id:"responseContainer"},!1===this.state.isLoading?r.a.createElement("div",null,r.a.createElement("h2",{className:"resultsTitle"},"Here's what's happening!"),r.a.createElement(g.a,{href:"#responseContainer"},r.a.createElement("i",{className:"fa fa-arrow-circle-down"}))):null,r.a.createElement("div",{className:"responseFlex wrapper"},this.state.isLoading?r.a.createElement("div",null,r.a.createElement("h2",{className:"resultsTitle"},"Loading your results..."),r.a.createElement("i",{className:"fa fa-spinner fa-spin resultsTitle"})):this.state.events.map(function(e){return r.a.createElement(y,{name:e.name,image:e.image_url,description:e.description,date:e.time_start,website:e.event_site_url})})),r.a.createElement("div",{className:"savedEvents wrapper",id:"savedEvents"},r.a.createElement("h2",{className:"resultsTitle"},"Saved Events"),r.a.createElement(g.a,{href:"#savedEvents"},r.a.createElement("i",{className:"fa fa-arrow-circle-down"})),r.a.createElement("div",{className:"savedEventsFlex"},this.state.savedEvents.map(function(t){return r.a.createElement("div",{className:"savedEventItem"},r.a.createElement("div",{className:"savedItemText"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.description)),r.a.createElement("button",{onClick:function(){return e.removeItem(t.key)}},"Remove Item"))})))),r.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(187)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.2261638e.chunk.js.map
