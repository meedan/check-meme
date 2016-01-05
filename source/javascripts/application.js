// Memebuster dependencies 
// 
//= require "jquery/dist/jquery"
//= require "underscore/underscore"
//= require "backbone/backbone"
//= require "main"
//= require "models/meme"
//= require "views/meme-canvas"
//= require "views/meme-editor"
//= require "helpers/font-monitor"
//= require "helpers/ease-in"

// Todo list dependencies
// 
//= require "todo.js"
  // ^ This is a fork of todomvc-common/base.js
//= require "backbone.localstorage/backbone.localStorage"
//= require "models/todo"
//= require "collections/todos"
//= require "views/todo-view"
//= require "views/app-view"
//= require "routers/router"

// Define variables for todo list
// 
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function() {
  'use strict';

  // The more-options section of the form
  // 
  $('.more-options.js-toggle').hide();
  $('.more-options-button a').click(function(e) {
    $('.more-options.js-toggle').toggle();
    $('.more-options.js-toggle').addClass('.js-last');
    e.preventDefault();
  });

  // Start the todo list
  // 
  // https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone/js
  // Kick things off by creating the `App`.
  // 
  new app.AppView();

  // Render the querystring 
  // 
  // For the link detail page prototype support:
  // For example, visit: http://10.0.1.5:4567/prototype.html?source=twitter.com
  // 
  $('.js-querystring-source').text(queries.source);
});
