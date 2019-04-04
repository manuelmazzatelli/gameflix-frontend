import _ from 'lodash';
import $ from 'jquery';
import css from './index.css';
var template_card = require("./card.handlebars");
var template_category = require("./category.handlebars");

$.getJSON(
  "http://192.168.50.110:8081/categories",
  function (data) {
    console.log(data)
    let container = $("#categorie-container");
    data.forEach(function(d){
      $(template_category(d))
        .appendTo(container)
        .click(function(e) {
          e.preventDefault();
          $.getJSON(
            "http://192.168.50.110:8081/games?category="+$(this).find('a').data('id'),
            function(games)  {
              console.log (games);
              $('#game-container').empty();
              games.forEach(function(game){
                $('#game-container').append(template_card(game));
              })
            }
          );
        })
    });
  }
);

/*
on click
var cat = 1

*/
