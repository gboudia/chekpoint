function compterMot() { 

    var mots = document.getElementById("textarea").value; 
    var nombre = 0; 
    var vowelsCount = 0;
    var split = mots.split(' '); 
    for (var  i = 0; i < split.length; i++)
    { 
    if (split[i] != "") 
    { 
    nombre += 1; 
    
    } 
    } 
    document.getElementById("mots").innerHTML = nombre; 
  
    document.getElementById("longueur").innerHTML = mots.length;

    document.getElementById("voyelle").innerHTML = (mots.match(/[aeiou]/ig)||[]).length;
    } 
