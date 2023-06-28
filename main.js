// Create a variable canvas
var canvas = new  fabric.canvas('mycanvas')


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Complete the function new_image() to add new image
function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img) {
		block_image_object = Img;
		block_image_object.scale_to_width

	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	// Use appropriate keycode to add red image
	if(keyPressed == ) 
	{



	}
	// Use appropriate keycode to add green image
	if(keyPressed == )
	{
	


	}
	// Use appropriate keycode to add yellow image
	if(keyPressed == )
	{

		

	}
	// Use appropriate keycode to add pink image
	if(keyPressed == )
	{
	


	}
	// Use appropriate keycode to add blue image
	if(keyPressed == )
	{



	}
	
}

