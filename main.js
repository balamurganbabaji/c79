name_of_the_student_array = [];
function submit()
{ var name_1 = document.getElementById("n1").value;
 var name_2 = document.getElementById("n2").value;
 var name_3 = document.getElementById("n3").value;
 var name_4 = document.getElementById("n4").value;
name_of_the_student_array.push(name_1);
name_of_the_student_array.push(name_2);
name_of_the_student_array.push(name_3);
name_of_the_student_array.push(name_4);
console.log(name_of_the_student_array);
document.getElementById("Displayname").innerHTML = name_of_the_student_array; 
document.getElementById("b1").style.display = "none"; 
document.getElementById("b2").style.display = "inline-block";
}
function sorting() { name_of_the_student_array.sort(); 
    console.log(name_of_the_student_array); 
    document.getElementById("Displayname").innerHTML = name_of_the_student_array; }