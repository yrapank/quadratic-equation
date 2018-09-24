module.exports = function solveEquation(equation) {
  var indexOfA = equation.indexOf('x');
  var indexOfB = equation.indexOf('x', indexOfA+1);
  var signOfA = equation[0];
  var signOfB = equation.substr(indexOfA+4, 1);
  var signOfC = equation.substr(indexOfB+2, 1);
  var a,e,e1;
  if(signOfA=='-')a = equation.substring(1, indexOfA-3);
  else a = equation.substring(0, indexOfA-3);
  var b  = equation.substring(indexOfA+6, indexOfB-3);
  var c = equation.substring(indexOfB+4);
  a=+a;
  b=+b;
  c=+c;
  if(signOfA=='-')a=-a;
  if(signOfB=='-')b=-b;
  if(signOfC=='-')c=-c;
  var diz = b*b-4*a*c;//расчёт дискреминанта
  if (diz>=0){
 e = (-b+Math.sqrt(diz))/(2*a);// расчёт если дискр. > 0 для х1
console.log(e);
 e1 =(-b-Math.sqrt(diz))/(2*a);//расчёт если дискр. > 0 для х2
}else{
 e = (-b+Math.sqrt(-diz))/(2*a);// расчёт если дискр. > 0 для х1
console.log(e);
 e1 =(-b-Math.sqrt(-diz))/(2*a);//расчёт если дискр. > 0 для х2
}
e = Math.round(e);
e1 = Math.round(e1);
var anser =[];
anser.push(e,e1);
anser.sort(function(a, b) { 
return a - b; 
}); 
return anser;
};
