$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_no = $("#no"); // Select the "No" button
    var responseButtons = $(".response-buttons"); // Select the response buttons container

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
        
        // After 2 seconds, show the response buttons
        setTimeout(function(){
            $(".response-buttons").addClass("visible");
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        
        // Hide the response buttons when closing the envelope
        $(".response-buttons").removeClass("visible");
    }

    // "No" Button Jumping Behavior
    btn_no.click(function(event){
        event.preventDefault(); // Prevent any default button behavior

        // Get viewport dimensions
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // Get button dimensions
        var buttonWidth = $(this).outerWidth();
        var buttonHeight = $(this).outerHeight();

        // Calculate maximum allowed positions to keep the button fully within viewport
        var maxLeft = windowWidth - buttonWidth - 20; // 20px padding
        var maxTop = windowHeight - buttonHeight - 20; // 20px padding

        // Generate random positions
        var newLeft = Math.floor(Math.random() * maxLeft) + 10; // 10px from left
        var newTop = Math.floor(Math.random() * maxTop) + 10; // 10px from top

        // Animate the button to the new position
        $(this).animate({
            left: newLeft,
            top: newTop
        }, 500); // 500ms animation duration
    });
});