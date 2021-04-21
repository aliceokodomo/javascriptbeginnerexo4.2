var x = 0;
var array = Array();
function addElement()
{
 array[x] = document.getElementById("id").value;
 alert("Element ajouté: " + array[x] );
 x++;
 document.getElementById("id").value = "";
}

function displayArray()
{
    var e = "";

    for (var y=0; y<array.length; y++)
    {
      e +=  array[y] + " , ";
    }
    alert(e);
 }
