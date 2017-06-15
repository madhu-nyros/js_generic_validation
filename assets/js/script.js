  //this is the main function from here we call all other functions.
function validation()
{
 var user=username();
 var pas=password();
 var ema= email();
 var lang= Language();
 var gende=Gender();
 var qualify =Qualification();
 var day =date();
 var time= Time();
 var add =Address();
 var tech=Technology();
 var terms1 =terms();
  if(user == false || pas == false || ema ==false || lang == false || gende == false
   	|| qualify == false|| day == false||time == false || add == false || tech == false || terms1 == false)
   {
      alert("Fill all the fields");
      return false;
    }
    else
    {
    	alert("completed successfully");
    	return true;
    }

}
//function for username
function username()
{

    var name = document.forms["myform"]["username"].value;
    var nameReg = new RegExp(/^[A-Za-z]+$/) ;

  if(name == "" )
   {
    document.getElementById("nametext").innerHTML ="Enter correctname ";
 	document.getElementById("username").style.borderColor ="red";
    return false;
   }
  else if(!(nameReg).test(name))
  {

 	document.getElementById("nametext").innerHTML ="Enter correctname ";
 	document.getElementById("username").style.borderColor ="red";
    return false;
  }
 else
 {
	document.getElementById("username").style.borderColor ="initial";
	document.getElementById("nametext").style.visibility ="hidden";
    return true;
 }

}
//password function is for validate the password field
function password()
{
    var pass =document.forms["myform"]["password"].value;
    var passReg =new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  if(pass == "" )
   {
	 document.getElementById("passwordtext").innerHTML ="enter Password";
     document.getElementById("password").style.borderColor="red";
     return false;
   }
  else if(!(passReg).test(pass))
   {
     document.getElementById("passwordtext").innerHTML ="password(e.g:Adfcf@21)";
     document.getElementById("password").style.borderColor="red";
     return false;
   }
  else
   {
    document.getElementById("password").style.borderColor ="initial";
	document.getElementById("passwordtext").style.visibility ="hidden";
     return true;
   }


}
//this is the function for email validation
function email()
{
	var email =document.forms["myform"]["email"].value;
    var emailreg =new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
   if(email =="" )
    {
     document.getElementById("Emailtext").innerHTML =" enter email ";
     document.getElementById("email").style.borderColor ="red";
     return false ;
     }
    else if( !(emailreg).test(email))
    {
     document.getElementById("Emailtext").innerHTML ="please enter valid email ";
     document.getElementById("email").style.borderColor ="red";
     return false ;
    }
    else
    {
     document.getElementById("Emailtext").style.visibility ="hidden";
     document.getElementById("email").style.borderColor = "initial";
     return true;
    }

}
//this is for checkbox validation
function Language()
{
	var telugu= document.forms["myform"]["telugu"].checked;
	var english =document.forms["myform"]["english"].checked;
	var hindi =document.forms["myform"]["hindi"].checked;
	if(telugu == false && english == false && hindi == false)
	{
     document.getElementById("checkboxtext").innerHTML ="select atleast one checkbox";
	 return false;
    }
	else
	{
	 document.getElementById("checkboxtext").style.visibility ="hidden";
      return true;
	}

}
// this is for radiobutton validation
function Gender()
{
	var male = document.forms["myform"]["male"].checked;
    var female = document.forms["myform"]["female"].checked;
    if(male == false && female == false)
   {
      document.getElementById("gendertext").innerHTML ="Please Select Gender";
      return false;
    }
   else
   {
	  document.getElementById("gendertext").style.visibility = "hidden";
       return true;
    }

}
// this is for combobox validation
function Qualification()
{
	var qualification  =  document.getElementById("qualification1");
    var options    =  qualification.options[qualification.selectedIndex].value;
    var options1   =  qualification.options[qualification.selectedIndex].text;
    if(options == 0)
    {
      document.getElementById("qualifytext").innerHTML ="Please Select Qualification";
      document.getElementById("qualification1").style.borderColor="red";
 	  return false;
    }
    else
    {
 	  document.getElementById("qualifytext").style.visibility = "hidden";
 	  document.getElementById("qualification1").style.borderColor="initial";
      return true;
    }

 }
 // date function is for validate the date field
function date()
{
	var currentdate= new Date();
	var dateReg =new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    var date1=document.forms["myform"]["date"].value;
    if(date1 == "")
    {

      document.getElementById("datetext").innerHTML ="please enter date";
      document.getElementById("date").style.borderColor="red";
       return false;
    }
    else if(!(dateReg).test(date1))
    {
      document.getElementById("datetext").innerHTML ="please enter valid date";
      document.getElementById("date").style.borderColor="red";
       return false;
    }
    else
    {
      document.getElementById("datetext").innerHTML ="dd/mm/yyyy";
      document.getElementById("date").style.borderColor="initial";
      return true;
    }

}
// time function is for validate the time field.
function Time()
{
     var time1= document.forms["myform"]["time"].value;
     if(time1 == "")
     {
 	   document.getElementById("timetext").innerHTML ="please enter time";
 	   document.getElementById("time").style.borderColor ="red";
       return false;
      }
     else
      {
 	   document.getElementById("timetext").innerHTML="hh:mm";
 	   document.getElementById("time").style.borderColor ="initial";
        return true;
       }

}
// this function is for validate the text area field
function Address()
{
	var address1 = document.forms["myform"]["address"].value;
    if(address1 ==" ")
    {

      document.getElementById("addresstext").innerHTML ="please enter address";
      document.getElementById("address").style.borderColor ="red";
      return false;
    }
    else if(address1.length <= 20)
    {
      document.getElementById("addresstext").innerHTML ="enter atleast 20 characters";
      document.getElementById("address").style.borderColor ="red";
      document.getElementById("address").focus();
      return false;
    }
    else
    {
      document.getElementById("address").style.borderColor = "initial";
      document.getElementById("addresstext").style.visibility ="hidden";
       return true;
    }

}
// this is for multi combobox validation
function Technology()
{
    var tech = document.forms["myform"]["technologies"].value;
    if(tech == "")
    {
      document.getElementById("techtext").innerHTML ="please choose technology";
      document.getElementById("technologies").style.borderColor ="red";
      return false;
    }
    else
    {
 	  document.getElementById("techtext").style.visibility ="hidden";
      document.getElementById("technologies").style.borderColor ="initial";
      return true;
    }

}
// this is for checkbox validation
function terms()
{
	var conditions = document.forms["myform"]["terms"].checked;
    if(!conditions)
	{
	  document.getElementById("termstext").innerHTML ="please select terms and conditions";
	  return false;
	}
	else
	{
	  document.getElementById("termstext").style.visibility ="hidden";
       return true;
	}
}






