

var loremDisplayed = false;


$("#commandLine").on("keydown", function (evt) {

    console.log(evt.keyCode);
    if (evt.keyCode === 13) {
        var command = $("#commandLine").val();
        if (command === "lorem ipsum") {
            $("#text").append(lorem + "<br>");
            loremDisplayed = true;
        } else if ((command === "lorem entered") && (loremDisplayed === true)) {
            $("#text").append(loremWasEntered + "<br>");
        } else {
            
            swal({
                Title: 'I dont understand!',
                text: 'Please type something else!',
                type: 'question',
                confirmButtonText: 'Okay...',
            });
        }
    }
})



// var loremipsum = load('../text/loremipsum.txt').text();

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis rhoncus augue. Quisque dolor ligula, tincidunt a sem vel, gravida posuere ipsum. Nullam porttitor quis lectus ut cursus. Phasellus varius sem eu mauris vestibulum, non pretium libero convallis. Ut nec ultricies velit, vel pellentesque neque. Nam diam metus, commodo in tristique at, lacinia maximus velit. Sed dignissim massa in justo pulvinar, ut commodo leo tincidunt. Go ahead and enter lorem entered to continue"

var loremWasEntered = "GOOD JOB"