$(document).ready(function () {
  
  $(".image-checkbox").each(function () {
  if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
    $(this).addClass('image-checkbox-checked');
  }
  else {
    $(this).removeClass('image-checkbox-checked');
  }
});
var date= new Date();


// sync the state to the input
$(".image-checkbox").on("click", function (e) {
  $(this).toggleClass('image-checkbox-checked');
  var $checkbox = $(this).find('input[type="checkbox"]');
  $checkbox.prop("checked",!$checkbox.prop("checked"))

  e.preventDefault();
});
var value1=-1;
$("#nbp").click(function(){
        $( "#chaises" ).empty();
        var value = $('#nbp').find(":selected").val();
		    var image = "<img src='img/chaise.jpg'/>";

		for (var i = 0 ; i < value ; i++) {

			$("#chaises").append(image).css("animation", "bounceInDown 2s");

		}
    value1 = value;
		
});

var d;       
$('#date').Zebra_DatePicker({format: 'd/m/Y',onSelect: function() { 
        var	dt =$(this).context.value;
        d=dt;
      }});



$("#b1").click(function(){
      if (value1 === -1) {
      alert('saisir nombre des places')}else{
	    var h;
	    if ($('input[name="civilite"]').is(':checked')){
        var x = $("input[name=civilite]:checked").each(
		    function() {
			  var v = $(this).val();
			  if (v==="mme") { v="Madamme";
			  }else if (v==="mlle"){ v="Mademoiselle";
			  }else if (v==="m"){ v="Monsieur";
			  }
			  h=v;
	      });
        
        
        var nom = $('#nom').val();
        var n = nom.length;
        if(n<10 || isNaN(nom)===false){
         alert('nom et prenom tres court!!!!');
         
        }else{

          var validetel = /\d{8}$/;
          var tel = $('#tel').val();
          if(validetel.test(tel) === false){
          alert('numéro de tel invalide !!!!');
          }else{

               $( "#div_resume" ).empty();
               var ticke = '<div class="container1 container"><div class="item"><img src="img/home-icon2.png" class="icon2"><p class="event">bonjour '+h+'</p><h2 class="title"><strong> '+nom+'</strong></h2><div class="sce"></br> Votre commande du '+d+ ' a ete bien validée les plats commandés sont :</div><div id="cmmd" class="loc"></div><div  id="fix" class="fix"></div><button class="tickets">Tickets</button></div></div>';
               var large = '<div> bonjour '+h+'<strong> '+nom+'</strong> </br> Votre commande du '+d+ ' a ete bien validée les plats commandés sont :</div></br>';	
               $("#div_resume").append(ticke);
               var prix = 0;
               var man;
               var x = $("input[name=cmd]:checked").each(
               function() {
                           var p = $(this).data('prix');
                           prix=prix+parseFloat(p);
                           px=prix;
                           var dt =$(this).context.value;
                           man=dt;
                           var large1 = '<span class="menu">'+man+'</span><img class="img-responsive imgtick" src="img/'+man+'.jpg" />';
        
                            $("#cmmd").append(large1);
        
                          });
                var large2= 'le montant total de la commande est de '+px+' dt';
                 $("#fix").append(large2);

        
        

        }}}else alert('la civilite est obligatoire');
        }
                
});

});
