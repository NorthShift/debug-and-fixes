$(document).ready(function(){
      
    var elStr  = document.getElementById("elStr");
    var elYear = document.getElementById("elYear");
    var elHol  = document.getElementById("elHol");
    var elOpt  = document.getElementById("elOpt");
    var previewEl = document.getElementById("previewEl");

    if (!elStr || !elYear || !elHol || !elOpt || !previewEl) {
        console.warn("One or more elements do not exist!");
        return;
    }

      var str  = elStr.value;
      var str1 = elYear.value;
      var str2 = elHol.value;
      var str3 = elOpt.value;

    if (str === "" && str1 === "" && str2 === "" && str3 === "") {
        if (previewEl) previewEl.innerHTML = "";
    return;
        }
          if (window.XMLHttpRequest)
          {
            var xmlhttp = new XMLHttpRequest();
          }
          else
          {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }

          xmlhttp.onreadystatechange=function()
          {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
              {
                previewEl.innerHTML = xmlhttp.responseText;
              }
          }
          
        var url = calendar_preview_vars.plugin_url + "?id=" + str +"&"+"y="+str1+"&"+"h="+str2+"&"+"opt="+str3;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(); 
      
 });
