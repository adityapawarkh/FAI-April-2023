function stringlength(inputtxt, minlength, maxlength,name)
{ 
var field = inputtxt.value; 
var mnlen = minlength;
var mxlen = maxlength;


var regEx = /^[0-9a-zA-Z]+$/;

if(field.length<mnlen || field.length> mxlen)
{ 
alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters Or the Pin must be alpha Numeric" );
return false;
}
else
{ 
    if(name.value.match(regEx))
    {
        alert('Your Validation have accepted.');
return true;
    }

}


}

