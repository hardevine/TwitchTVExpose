# static header entities
define ["backbone","msgbus"], (Backbone, msgBus ) ->

    API =
        getHeaders:->
            new Backbone.Collection [
                    (name: "Games", url: "#games", title: "Live Games", cssClass: "glyphicon glyphicon-hdd" )
                    (name: "D3", url: "#d3", title: "Sample D3 visualization", cssClass: "glyphicon glyphicon-list")
                    (name: "About", url: "#about", title: "Learn about responsive Twitch-TV", cssClass: "glyphicon glyphicon-align-justify")
                    ]

    msgBus.reqres.setHandler "header:entities", ->
        API.getHeaders()
