function preload()
{
}

function setup()
{
    canvas=createCanvas(600,600);
    canvas.position(500,500);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw()
{
    image(video,0,0,500,500);
    tint(tint_color);

}
function take_snapshot()
{
    save('bbvainfinitoapk.jpg');
}

function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}