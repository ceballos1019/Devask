 $('#myModal').modal('hide');
            $('#idModal').on('click',animacionModal);
            var val=0;
            function animacionModal(){
                $('.modal-content').css({'transform':'scale('+val+')'});
                val=val+0.2;
                if(val<=1){
                    setTimeout('animacionModal()',40);
                }else{
                    val=0;
                }
            }
            
            $('#aceptar').on('click',barraProgreso);
            var valor=0;
            
            function barraProgreso(){
                $('.modal-content').hide();
                $('.modal-dialog').html('<div class="progress progress-striped active"> <div class="progress-bar role="progress-bar" aria-valuemin="0" aria-valuemax="100" style="width:0%"><span class="se-only"></span></div></div>');
                avanzandoBarra();
            }
            
            function avanzandoBarra(){
                valor=valor+10;
                $('.progress-bar').css({'width':valor+'%'});
                if(valor==200){
                    $('#myModal').modal('hide');
                    location.reload();
                }
                setTimeout('avanzandoBarra()',100);
            }