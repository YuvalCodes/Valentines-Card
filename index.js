$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Envelope Click Handlers
    envelope.click(function(){
        openEnvelope();
    });
    btn_open.click(function(){
        openEnvelope();
    });
    btn_reset.click(function(){
        closeEnvelope();
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        
        // Optionally, add any additional behavior here
        // For example, playing a sound or triggering another animation
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        
        // Optionally, add any additional behavior here
    }
});
