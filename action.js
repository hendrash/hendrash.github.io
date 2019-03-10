
function base10(x){
	var words=x.split(' ');
	var place= words[1].toString().length-1;
	var character=words[1].split('');
	if(1==words[1].toString().length){
		return convert(words[1]);
	}
	return +(words[0]**place)*convert(character[0])+ +base10(words[0]+" "+words[1].substring(1,words[1].length));
}

function convert(x){
	var nums=[["10","A","a"],["11","B","b"],["12","C","c"],["13","D","d"],["14","E","e"],["15","F","f"]];
	if(x<=9){
		return x;
		}
	for(i=0;i<6;i++){
		if(nums[i][0]==x){
			return nums[i][1];}
		
		if(nums[i][1]==x){
			return nums[i][0];}
		
		if(nums[i][2]==x)
		return nums[i][0];
		}	
}	
function myFunction(){
		var x= document.getElementById("fname").value;
		var word=x.split(' ');
		
		document.getElementById("print").innerHTML="The value of "+word[1]+" in base "+word[0]+" is <b>"+base10(x)+"</b> in base 10";
		}
		
		
function toBaseN(x){
var word=x.split(" ");
var exp=0;
var total=Math.floor(Math.log(word[1])/Math.log(word[0]));
var ans="";
var s;
while(exp<=total){
	var mul=0;
		s=innerBaseN(word[0],(total-exp),word[1]);
		word[1]=word[1]-word[0]**(total-exp)*s;
		ans+=convert(s);
		exp++;
	}
	
	return ans;
}
function innerBaseN(base, exp, bigNum){
	var i=0;
	while(base**exp*i<=bigNum){
		i++;
		}
		return (i-1);
	}
	
function to_Base_N(){
		var x= document.getElementById("toN").value;
		var word=x.split(' ');
		
		document.getElementById("printbaseN").innerHTML="The value of "+word[1]+" in base 10 is <b>"+toBaseN(x)+"</b> in base "+word[0];
		}
		
function shiftcipher(message,num){
	var string=" ";
	for(var i =0;i<message.length;i++){
	if(message[i]==" "){
	string= string+" ";
	}
	else{
	string=string+String.fromCharCode(((message.charCodeAt(i)+7+num)%26)+97);
	}
	
}return string;}

function ciph(){
	
	var shift=document.getElementById("shift").value;
	var message=document.getElementById("message").value;
	
	document.getElementById("encrypted").innerHTML="<b> "+shiftcipher(message,Number(shift))+"</b>";
	
	}
console.log(shiftcipher("asdf",1));
