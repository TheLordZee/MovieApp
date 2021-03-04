 let currId = 0;
 let moviesList = [];
 $(function(){

    function createHtml(data){
        return `<tr>
           <td>${data.title}</td>
           <td>${data.rating}</td>
           <td>
             <button class="delete" data-delete-id=${data.currId}>
               Delete
             </button>
           </td>
         <tr>`;
     }

     $('#new-movie-form').on('submit', function(e){
         e.preventDefault();
         let title = $('#title').val();
         let rating = $('#rating').val();

         let variables = {title, rating, currId}
         const toAppend = createHtml(variables);
         console.log(toAppend)
         currId++;
         moviesList.push(variables);

         $("tbody").append(toAppend);
         $("#new-movie-form").trigger("reset");    
     });

    $("tbody").on("click", ".delete", function(e) {
        // find the index where this movie is
        let indexToRemoveAt = moviesList.findIndex(movie => movie.currId === +$(e.target).data("deleteId"))
        
        // remove it from the array of movies
        moviesList.splice(indexToRemoveAt, 1)
    
        // remove it from the DOM
        $(e.target).closest("tr").remove();
    });
    
})