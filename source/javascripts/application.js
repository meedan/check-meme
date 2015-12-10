//= require "vendor/jquery"
//= require "vendor/underscore"
//= require "vendor/backbone"
//= require "main"
//= require "models/meme"
//= require "views/meme-canvas"
//= require "views/meme-editor"
//= require "helpers/font-monitor"
//= require "vendor/share-button.min"

new ShareButton({
  networks: {
    facebook: {}
  }
});

var share = new ShareButton(); // Grabs all share-button elements on page