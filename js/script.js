$(document).ready(function(){   

    $(".out-put").hide();

    $("#pass-wd").keyup(function(){
        let pass1 =$(this).val().trim(); 
        let pass1len= pass1.length; 
        //$(".typin").html(pass1len); 
        if(pass1len >= 8)
        {
            $("#pass-1").show();
            
        }    
        else
        {
            $("#pass-1").hide();
           
        }   
       

        });                  
        

    $("#pass-wd-2").keyup(function(){
        let pass1 =$("#pass-wd").val().trim();
        let pass2 =$(this).val().trim();
        if(pass1 == pass2&&pass1.length >=8)
        {
            $("#pass-2").show();
            document.getElementById("reg-sub-btn").disabled = false;
            
        }  
        else{
            $("#pass-2").hide();
            document.getElementById("reg-sub-btn").disabled = true;
        }                             
                            
        }); 
    
    $("#reg-sub-btn").click(function(){
        $("#reg-form").hide();
        $(".out-put").show();
        let fName =$("#f-name").val();
        let eMail =$("#e-mail").val();
        let uName =$("#user-name").val();        
        document.getElementById("name-input").innerHTML =fName;
        document.getElementById("email-input").innerHTML =eMail;
        document.getElementById("uname-input").innerHTML =uName;
        
    });
           
         
   });
   
