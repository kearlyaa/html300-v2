/* TRIED TO USE JSON DATA IN IMAGES PAGE. IN WORK.
$(document).ready(function(){
    var apikey = "b77d742c"
    $("#movieForm").submit(function(event){
        event.preventDefault()

        var movie2 = $("#movie2").val()

        var url="http://img.omdbapi.com/?apikey=b77d742c&"

        $.ajax({
            method:'GET',
            url:"http://www.omdbapi.com/?apikey=86aac794&t="+movie2,
           
            success:function(data){
                console.log(data);

                var idMov = data.imdbID;

                var imgurl = "https://img.omdbapi.com/?i="+idMov+"&h=600&apikey=b77d742c";

                result2 = `
                
                <h2>${data.imdbRating}</h2> 
                <h2>${data.imdbID}</h2>
                <img src="${imgurl}" style="float:left"  />
                
                `

                $("#result2").html(result2)
            }
        })
    })
    
    
})
*/