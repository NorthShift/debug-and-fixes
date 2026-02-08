$(document).ready(function(){
      
      
      var str = document.getElementById("cal_preview").value;
      var str1 = document.getElementById("year").value;
      var str2 = document.getElementById("holiday").value;
      var str3 = document.getElementById("cal_option").value;
   

        if (str=="" && str1=="" && str2=="" && str3=="" )
          {
            document.getElementById("calendar_preview").innerHTML="";
              return;
            } 
          if (window.XMLHttpRequest)
          {
            xmlhttp=new XMLHttpRequest();
          }
          else
          {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }

          xmlhttp.onreadystatechange=function()
          {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
              {
                document.getElementById("calendar_preview").innerHTML=xmlhttp.responseText;
              }
          }
          
        var url = calendar_preview_vars.plugin_url + "?id=" + str +"&"+"y="+str1+"&"+"h="+str2+"&"+"opt="+str3;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(); 
      
 });
