var crossword = "without work you have nothing";
crossword = crossword.toUpperCase()
var l3ngth = crossword.length;
var miss = 0;
var cross1 = "";
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
for(i=0; i<l3ngth; i++)
    {
        if(crossword.charAt(i)== " ") cross1 = cross1 + " ";
        else cross1 = cross1 + "-"
    }


function show_crossword()
{
    document.getElementById("board").innerHTML = cross1;
}

window.onload = letters;

 var leter_box = new Array(35);

leter_box[0] = "A";
leter_box[1] = "Ą";
leter_box[2] = "B";
leter_box[3] = "C";
leter_box[4] = "Ć";
leter_box[5] = "D";
leter_box[6] = "E";
leter_box[7] = "Ę";
leter_box[8] = "F";
leter_box[9] = "G";
leter_box[10] = "H";
leter_box[11] = "I";
leter_box[12] = "J";
leter_box[13] = "K";
leter_box[14] = "L";
leter_box[15] = "Ł";
leter_box[16] = "M";
leter_box[17] = "N";
leter_box[18] = "Ń";
leter_box[19] = "Ź";
leter_box[20] = "O";
leter_box[21] = "Ó";
leter_box[22] = "P";
leter_box[23] = "Q";
leter_box[24] = "R";
leter_box[25] = "S";
leter_box[26] = "Ś";
leter_box[27] = "T";
leter_box[28] = "U";
leter_box[29] = "V";
leter_box[30] = "W";
leter_box[31] = "X";
leter_box[32] = "Y";
leter_box[33] = "Z";
leter_box[34] = "Ż";




 
function letters()
{
    var content = "";
    
    for(i=0; i<35; i++)
        {
            var elem = "let"+i;
            
        content = content + '<div class="letter" id="'+elem+'" onclick="check('+i+')">'+leter_box[i] +'</div>';  
            
            if((i+1) % 7==0) content = content + '<div style="clear:both;"></div>';
        }
        
    
    document.getElementById("alphabet").innerHTML = content;
    
    show_crossword();
    
}
    
String.prototype.insert_sign = function(place , sign)
{
    if(place>this.length - 1 ) return this.toString();
    else return this.substr(0, place) + sign + this.substr(place+1);
 }

function check(nr)
{
    var hit = false;
    
    for(i=0;i<l3ngth; i++)
        {
            if(crossword.charAt(i)== leter_box[nr])
                {
                    cross1 = cross1.insert_sign(i, leter_box[nr]);
                    hit = true;
                }
        }
    
    
    if(hit == true)
        {
            yes.play();
             var elem = "let"+nr;
            
            document.getElementById(elem).style.background= "#003300";
            document.getElementById(elem).style.color= "#00c000";
            document.getElementById(elem).style.border= "3px solid #00c000";
            document.getElementById(elem).style.cursor= " default";
            show_crossword();
        }
    else
        {
            no.play();
            var elem = "let"+nr;
            
            document.getElementById(elem).style.background= "#330000";
            document.getElementById(elem).style.color= "#c00000";
            document.getElementById(elem).style.border= "3px solid #c00000";
            document.getElementById(elem).style.cursor= " default";
            document.getElementById(elem).setAttribute("onclick",";");
            //missed word and bulld gallow
            miss++;
            var image = "img/s" + miss + ".jpg";
             
            document.getElementById("gallows").innerHTML = '<img src= "'+image+'" alt=""/>';
        }
    //win
    if(crossword == cross1)
        document.getElementById("alphabet").innerHTML = "Yes! you WIN your crossword is: " + crossword + '<br /><br /> <span class="reset"            onclick="location.reload()">Try Again? </span>';
    //losse
    
    if(miss>=9)
         document.getElementById("alphabet").innerHTML = "GAME OVER your correct crossword is: " + crossword + '<br /><br /> <span class="reset"            onclick="location.reload()">Try Again? </span>';
    
    
    
    
}