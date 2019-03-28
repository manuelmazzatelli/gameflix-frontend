import _ from 'lodash';
import $ from 'jquery';

$.getJSON(
  "http://192.168.50.110:8080/categories",
  function (data) {
    console.log(data)
    let container = $("#categorie-container");
    for (let index = 0; index < data.slice(0, 13).length; index++) {
      $('<li class="nav-item active"><a class="nav-link" href="#" data-id="' + data[index].id + '">' + data[index].name + '</a></li>')
        .appendTo(container)
        .click(function(e) {
          e.preventDefault();
          $.getJSON(
            "http://192.168.50.110:8080/games?category="+$(this).find('a').data('id'),
            function(data)  {
              console.log (data)
            }
          );
        })
    }
  }
);

/*
on click
var cat = 1

*/