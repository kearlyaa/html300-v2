//$('[data-bs-toggle="tooltip"]').tooltip();

$(document).ready(function(){
    var apikey = "86aac794"

    //function to use data from form
    $("#movieForm").submit(function(event){
        event.preventDefault()

        var movie = $("#movie").val()

        var url="http://www.omdbapi.com/?apikey=86aac794"

        //creates function to grab data from API using user's search
        $.ajax({
            method:'GET',
            url:"http://www.omdbapi.com/?apikey=86aac794&t="+movie,
            success:function(data){
                console.log(data);

                //sets up how to display json data in html
                result = `
                <div style="float: left;">
                <h2>${data.Title}</h2>
                <h2>Year released: ${data.Year}</h2>
                <h2>Director: ${data.Director}</h2>
                </div>
                
                <div>
                <img style:"float:right" src="https://img.omdbapi.com/?i=${data.imdbID}&h=600&apikey=b77d742c" />
                </div>
                
                
                `
                //output results in html
                $("#result").html(result)
            }
        })
    })
    
    
})
//"https://img.omdbapi.com/?i=tt0111161&h=600&apikey=b77d742c"