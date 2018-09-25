<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Made with Thimble</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
   <script>
     function sumCongruentModulo(inputArray, divisor, remainder)
     {
       for (i=0;i<inputArray.length;i++) //looping through inputArray
         for (j=0; j<inputArray.length; j++) //producing remainder when divided by divisor
           if(i!=j&&inputArray[i]%divisor==remainder&&inputArray[j]%divisor==remainder)
             return inputArray[i]+inputArray[i]+inputArray[i];

     }
     console.log(sumCongruentModulo([1,2,3,6],3,0));
     console.log(sumCongruentModulo([1,2,3,6],2,0));
     console.log(sumCongruentModulo([1,2,3,6],2,1));

    </script>
    </p>
  </body>
</html>
