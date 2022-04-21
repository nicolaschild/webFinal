$(document).ready(function() {
    //initValidation called from HTML script tag
    thirdImage();
    $(".logVisitorForm").css("display", "none");
});

function loadVisitors () {
    //Called when the 'visitors' menu is clicked
    //calls view 'showVisitors'
    //calls view 'renderTable'
    //calls view 'showTable'
}

function submitForm() {
    //Called on form submit, gets contents of form, creats visitor object
    //calls model 'modelAddVisitor' function
    //calls view 'renderTable'
    //calls view 'showTable'
}

function addVisitor() {
    //Called on 'click' of 'New Visitor' button
    //calls view 'clearForm' to clear form contents
    //calls view 'showForm'
}

function deleteVisitor() {
    //called on 'click' of 'delete' icon in visitor list
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable'
    //calls view 'showTable'
}


// Three image functions
// This is the selector function
// Which changes the image when the user selects the button
// Unless it is the same image
function expandInfo() 
    {
        imageNum++;
        if (imageNum > 2)
            {
                imageNum = 0;
            }

        $("#infoButton").css("background-color", "#535353");
        $("#infoButton").css("color", "white");

        setTimeout(function()
            {
                if (imageNum == 0)
                    {
                        firstImage();
                    }
                else if (imageNum == 1)
                    {
                        secondImage();
                    }

                else 
                    {
                        thirdImage();
                    }
                $("#infoButton").css("background-color", "");
                $("#infoButton").css("color", "white");
            }, 300)

    }


// Function to show/hide the video
// Also creates another button to show it again
var flag = 0;
function hideAll() 
{
    if (!flag) //If the button has not been clicked yet
    {
        $("#secondVideo").css("display", "none");
        $("#hideText").text("Show Video");

        //Set to new state
        flag = 1;
    }

    else
    {
        $("#secondVideo").css("display", "");
        $("#hideText").text("Hide Video");

        //Reset flag
        flag = 0;
    }
}

//Function to add/remove the styles.css theme sheet from the HTML
var flagTwo = 0;
var explanationColor = "#DDDDDD";
function toggleTheme()
{
    if (!flagTwo)
        { //Adding the stylesheet
            //Set the session storage to have an item which saves the theme for all pages
            sessionStorage.setItem("theme", "color");
            $('head').append('<link id="toggle" rel="stylesheet" type="text/css" href="css/theme.css">');
            // Changing the video
            $('#video').attr("src", "https://www.youtube.com/embed/iXQ4AyyJSEk");
            // Changing the theme button's text
            $('#themeText').text("Black and White");
            // Make sure you restore the default colors of the buttons
            $("#home").css("background-color", "rgb(110, 226, 255)");
            $("#home").css("color", "white");
            $("#aboutMe").css("background-color", "rgb(110, 226, 255)");
            $("#aboutMe").css("color", "white");
            $("#projects").css("background-color", "rgb(110, 226, 255)");
            $("#projects").css("color", "white");

            //Changing the text background to match theme
            $("#imageExplanation").css("background-color", "rgb(7, 167, 47)");
            //Now so whenever image is changed it defaults to this color
            explanationColor = "rgb(7, 167, 47)";

            flagTwo = 1;
        }

    else
        { //Removing the stylesheet
            //Setting the session storage to save the theme
            sessionStorage.setItem("theme", "B&W");
            $('#toggle').remove();
            // Changing theme button's text back to Colored
            $('#themeText').text("Colored");
            $('#video').attr("src", "https://www.youtube.com/embed/UJQYeiQYOvw");
            //Change the color of the buttons back to B&W standards
            $("#home").css("background-color", "#DDDDDD");
            $("#home").css("color", "black");
            $("#aboutMe").css("background-color", "#DDDDDD");
            $("#aboutMe").css("color", "black");
            $("#projects").css("background-color", "#DDDDDD");
            $("#projects").css("color", "black");
            //Changing the background for the explanations on the page
            //Changing the text background to match theme
            $("#imageExplanation").css("background-color", "#DDDDDD");
            //Now so whenever image is changed it defaults to this color
            explanationColor = "#DDDDDD";
            flagTwo = 0;
        }
}

// Global variable to determine what photo is going to be shown on click of button
var imageNum = 0;

function pageRedirect(link, id) {
    // Reformat the link to be correct format
    link = 'http://' + link;
    // Now I am going to change the color for the button for a .2 seconds
    // then change it back
    var oldBackgroundColor = $(`#${id}`).css("background-color");
    var oldColor = $(`#${id}`).css("color");
    $(`#${id}`).css("background-color", "white");
    $(`#${id}`).css("color", "black");
    // After 200ms, go back
    setTimeout(function() {
        window.open(link);
        $(`#${id}`).css("background-color", oldBackgroundColor);
        $(`#${id}`).css("color", oldColor);
    }, 300)
}

function firstImage() {
    $("#imageExplanation").text("This is an image of me taken while I was in the USAF,\n\
    I left to futher pursue my own passions. And for that I am forever grateful!\n\
    I would not be where I am today without the skills and dicipline I learned from that experience.");
    $("#imageExplanation").css("background-color", explanationColor);
    $(".imageBorders").css("width", "9em")
    $(".imageBorders").css("height", "14em")
    $(".imageBorders").attr("src", "../images/USAF.jpg")

}


function secondImage() {
    $("#imageExplanation").text("I like this photo because it encapsulates my goofy side.\n\
    I like to think of myself as an empathetic and creative person. I strongly believe that has made me\n\
    an easier person to work with.");
    $("#imageExplanation").css("background-color", explanationColor);
    $(".imageBorders").css("width", "10.5em");
    $(".imageBorders").attr("src", "../images/goofBall.jpg");
}

function thirdImage() {
    $("#imageExplanation").text("Welcome to my website! I hope you enjoy. I put this together from scratch.\n\
    Using CSS/HTML/JS and no front end tools; hence why it is an eye sore. Anyways, here's some pictures of me!\n\
    This is a photo of me taken in highschool (left), I used to play ball #BallIsLyfe");
    $("#imageExplanation").css("background-color", explanationColor);
    $(".imageBorders").css("width", "12em");
    $(".imageBorders").attr("src", "../images/football.jpg");


}

var enabled = true;
function visitors() {
    if (enabled) {
        // When button is enabled we will disable the current
        // Footer and display the visitor form and visitor list
        $(".Footer").css("display", "none");
        $(".logVisitorForm").css("display", "");
        $("#formText").text("Hide Visitors");
        enabled = false;
    }
    else { //Otherwise we will show the current page without the visitor form
        $(".Footer").css("display", "");
        $(".logVisitorForm").css("display", "none");
        $("#formText").text("Visitors");
        enabled = true;
    }
    
}
