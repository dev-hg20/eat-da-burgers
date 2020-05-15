$(function () {
  $(".devoured-button").on("click", function (e) {
    let id = $(this).data("id");
    const newDevoured = $(this).data("newburger");
    const devouredState = {
      devoured: newDevoured,
    };

    //PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("This has now been eaten");
      //load uploaded list
      location.reload();
    });
  });

  $("#form").on("submit", function (e) {
    event.preventDefault();

    var newBurger = {
      name: $("#burgerInput").val().trim(),
    };
    //POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
