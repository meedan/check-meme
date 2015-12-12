//= require "vendor/jquery"
//= require "vendor/underscore"
//= require "vendor/backbone"
//= require "main"
//= require "models/meme"
//= require "views/meme-canvas"
//= require "views/meme-editor"
//= require "helpers/font-monitor"
//= require "vendor/share-button.min"

// Sharing button configuration
// 
shareConfig = {
  description: "Debunk description",
  image: "https://debunk-meme.herokuapp.com/images/false.png",
  ui: {
    flyout: "top right",
    buttonText: "Share on Facebook or Twitter"
  },
  networks: {
    facebook: {
      load_sdk: true,
      caption: "Debunk title",
      image: "https://debunk-meme.herokuapp.com/images/false.png"
    },
    googlePlus: {
      enabled: false
    },
    linkedin: {
      enabled: false
    },
    pinterest: {
      enabled: false
    },
    reddit: {
      enabled: false
    },
    email: {
      enabled: false
    }
  }
};

var share = new ShareButton(".share-button", shareConfig);