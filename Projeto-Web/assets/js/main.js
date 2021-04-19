$(document).ready(function(e){
    var mostrar = true;
    $('#carrinhoFinalizar').hide();
    $('#loading').hide();

    $('#Carrinho').click(function(e){
        e.preventDefault();

        if(mostrar){
            mostrar = false;
            $('#telaDeProduto').hide();
            $('#footer').hide();
            $('#loading').show();
            setTimeout(function(){
                $('#loading').hide();
                $('#carrinhoFinalizar').show(500);
                $('#footer').show();
            },1000)
        }else{
            mostrar = true;
            $('#carrinhoFinalizar').hide(1000);
            $('#footer').hide();
            $('#loading').show();
            setTimeout(function(){
                $('#loading').hide();
                $('#telaDeProduto').show(500);
                $('#footer').show();
            },1000)
        }


    });

});