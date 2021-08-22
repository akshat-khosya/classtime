const express = require("express");
const bodyParseer = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParseer.urlencoded({ extended: true }));
app.use(express.static("public"));
var classtable=[
    {day:'1',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://www.google.com',timestart:"9:0",timeend:"9:59"},
    {day:'1',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://www.google.com',timestart:"10:0",timeend:"10:59"},
    {day:'1',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"11:0",timeend:"11:59"},
    {day:'1',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://www.google.com',timestart:"12:0",timeend:"12:59"},
    {day:'1',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"14:0",timeend:"14:59"},
    {day:'1',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikiram',classlink:'https://www.google.com',timestart:"16:0",timeend:"16:59"},
    {day:'2',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://www.google.com',timestart:"14:0",timeend:"14:59"},
    {day:'2',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://www.google.com',timestart:"9:0",timeend:"9:59"},
    {day:'2',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"10:0",timeend:"10:59"},
    {day:'2',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://www.google.com',timestart:"11:0",timeend:"11:59"},
    {day:'2',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"12:0",timeend:"12:59"},
    {day:'2',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikiram',classlink:'https://www.google.com',timestart:"16:0",timeend:"16:59"},
    {day:'3',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://www.google.com',timestart:"12:0",timeend:"12:59"},
    {day:'3',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://www.google.com',timestart:"14:0",timeend:"14:59"},
    {day:'3',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"9:0",timeend:"9:59"},
    {day:'3',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://www.google.com',timestart:"10:0",timeend:"10:59"},
    {day:'3',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"11:0",timeend:"11:59"},
    {day:'3',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikiram',classlink:'https://www.google.com',timestart:"16:0",timeend:"16:59"},
    {day:'4',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://www.google.com',timestart:"11:0",timeend:"11:59"},
    {day:'4',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://www.google.com',timestart:"12:0",timeend:"12:59"},
    {day:'4',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"14:0",timeend:"14:59"},
    {day:'4',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://www.google.com',timestart:"9:0",timeend:"9:59"},
    {day:'4',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://www.google.com',timestart:"10:0",timeend:"10:59"},
    {day:'4',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikiram',classlink:'https://www.google.com',timestart:"16:0",timeend:"16:59"}
    



];
var classtime=0;
// var noclass=[{day:'',slot: '', subjectname:'', subjectcode:'', faculityname:'',classlink:'',timestart:"",timeend:""}];
// time variables

    // if(currenttime>=classtable[0].timestart && currenttime<=classtable[0].timeend ){
    
    // console.log("working fine");
    // }


app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let hour= today.getHours();
    let minute=today.getMinutes();
    let day = today.toLocaleDateString("en-US", options);
    let currenttime=hour +":"+minute;
    let weekday= today.getDay();
    console.log(weekday);
    console.log(currenttime);
    
    
    var gotoclass=time();
    console.log(gotoclass);
    function time(){
        for(let i=0;i<classtable.length;i++){
            if(currenttime>=classtable[i].timestart && currenttime<=classtable[i].timeend && weekday==classtable[i].day){
                classtime=i;
                return classtime;
            }
            else{
                classtime=-1;
            }
        }
        return classtime;
    };
    
    if(gotoclass==-1){
        res.render("noclass");
      
    }
    else{
        console.log(currenttime);
        res.render("home" ,{monday:classtable[gotoclass], day:day}); 
    }
    
   
});







app.listen(3000, function(){
    console.log("Server started on port 3000");
});