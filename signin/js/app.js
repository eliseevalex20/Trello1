$(document).ready(function() {

    $('#email').keyup(function(){
  
      if($(this).val() != '') {
  
        var pattern = /[a-zA-Z0-9]/;
        var pattern1 = /[@]/;
         if(pattern.test($(this).val())){ 
            if(pattern1.test($(this).val())){                                                                                                  
                $('#submit').css({
                    'background':'limegreen'
                });                                                                                                 
            } 
            else{
                $('#submit').css({
                    'background':'#E2E4E6'
                }); 
            }                                                                                                
             $('#btn').css({
                 'display':'none'
             });                                                                                               
             $('#btnn').css({
                'display':'none'
            });
            $('#or').css({
                'display':'none'
            });  
         } 
      } else {                                                                                                
         $('#btn').css({
            'display':'block'
        });                                                                                            
         $('#btnn').css({
            'display':'block'
        }); 
        $('#or').css({
            'display':'block'
        });
      }                                                                                      
  });
});