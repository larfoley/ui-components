var MODAL = (function() {

  var initialized = false;

  return {

    init: function() {

      if (!initialized) {

        var modalWrapper = document.createElement('div');
        document.body.appendChild(modalWrapper);
        initialized = true;

      }

    },

    create: function() {

      var modalWrapper = document.querySelector('#modal-wrapper');

      if (!initialized) {
        throw new Error("Modal not initialized");
      }

      if (!modalWrapper) {
        throw new Error("Modal Wrappper not found");
      }

      var html = document.createElement('div');

      return {

        init: function(content, launcher) {

          var title = document.createElement('h2');
          var body = document.createElement('body');
          var closeBtn = document.createElement('button');

          title.innerHTML = content.title;
          title.innerHTML = content.body;

          launcher.onclick = this.open.bind(this);
          closeBtn.onclick = this.close.bind(this);

        },

        open: function() {
          modalWrapper.html = "";
          modalWrapper.appendChild(html);
        },

        close: function() {
          modalWrapper.innerHTML = "";
        }

      }

    }

  }

}()).init()
