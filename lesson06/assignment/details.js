/* TRIED TO PUT JSON DATA IN ACCORDIONS. IN WORK.
$(document).ready(function(){
    var apikey = "86aac794"
    $("#movieForm").submit(function(event){
        event.preventDefault()

        var movie3 = $("#movie3").val()

        var url="http://www.omdbapi.com/?apikey=86aac794"

        $.ajax({
            method:'GET',
            url:"http://www.omdbapi.com/?apikey=86aac794&t="+movie3,
            success:function(data){
                console.log(data);

                var resultA = `
                <h2>${data.Title}</h2>
                <h2>${data.Year}</h2>
                <h2>${data.Runtime}</h2>
                <h2>${data.Director}</h2>
                `

                $("#resultA").html(resultA)

                var resultB = `
                <h2>${data.Plot}</h2>
                <h2>${data.Genre}</h2>
                <h2>${data.Actors}</h2>
                
                
                `

                $("#resultB").html(resultB)

                var resultC = `
                <h2>${data.Ratings}</h2>
                <h2>Metascore: ${data.Metascore}</h2>
                <h2>IMDB Rating: ${data.imdbRating}</h2>
                
                `

                $("#resultC").html(resultC)
            }
        })
    })
    
    
})
*/