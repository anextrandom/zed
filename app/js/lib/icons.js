define(function(require, exports, module) {
    
    function protocolIcon(url) {
        var protocol = url.split(":")[0];
        switch (protocol) {
            case "dropbox":
                return "img/dropbox.png";
            case "syncfs":
                return "img/sync.png";
            case "manual":
                return "img/manual.png";
            case "settings":
                return "img/settings.png";
            default:
                return "img/project.png";
        }
    }
    
    return {
        protocolIcon: protocolIcon
    };
});