// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["msgbus", "apps/games/detail/views", "controller/_base", "backbone"], function(msgBus, Views, AppController, Backbone) {
    var Controller, _ref;
    return Controller = (function(_super) {
      __extends(Controller, _super);

      function Controller() {
        _ref = Controller.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Controller.prototype.initialize = function(options) {
        var gameModel, gameName,
          _this = this;
        gameName = options.gameName, gameModel = options.gameModel;
        console.log("OPTIONS passed to detail controller", options);
        if (gameModel === void 0) {
          gameModel = msgBus.reqres.request("games:searchName", gameName);
          console.log("GameModel", gameModel);
        }
        this.layout = this.getLayoutView();
        this.listenTo(this.layout, "show", function() {
          return _this.gameRegion(gameModel);
        });
        return this.show(this.layout, {
          loading: {
            entities: gameModel
          }
        });
      };

      Controller.prototype.gameRegion = function(model) {
        var view;
        view = this.getGameView(model);
        msgBus.commands.execute("app:stream:list", this.layout.streamRegion, model.get("game").name);
        return this.layout.gameRegion.show(view);
      };

      Controller.prototype.getGameView = function(model) {
        return new Views.Detail({
          model: model
        });
      };

      Controller.prototype.getLayoutView = function() {
        return new Views.Layout;
      };

      return Controller;

    })(AppController);
  });

}).call(this);
