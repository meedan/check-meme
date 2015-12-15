shareConfig = {
  description: "Debunk description",

  // This is a test image; it does not work.
  // We need to dynamically add the image that is generated.
  // image: "https://debunk-meme.herokuapp.com/images/false.png",
  ui: {
    flyout: "top right",
    buttonText: "Share on Facebook or Twitter"
  },
  networks: {
    facebook: {
      load_sdk: true,
      caption: "Debunk title",
      // This is a test image; it does not work.
      // We need to dynamically add the image that is generated.
      // image: "https://debunk-meme.herokuapp.com/images/false.png"
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