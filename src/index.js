import $ from 'jquery';
import './index.css';
var template_card = require("./card.handlebars");
var template_category = require("./category.handlebars");
const host = "localhost";
const port = "8081";

$.getJSON(
  "http://"+host+":"+port+"/categories",
  function (data) {
    let container = $("#categorie-container");
    data.forEach(function(d){
      $(template_category(d))
        .appendTo(container)
        .click(function(e) {
          e.preventDefault();
          $.getJSON(
            "http://"+host+":"+port+"/games?category="+$(this).find('a').data('id'),
            function(games)  {
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
