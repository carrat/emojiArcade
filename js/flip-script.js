.nameOfThingtoFlip{
	-webkit-animation: cardReveal 2s linear;
	-moz-animation: cardReveal 2s linear;
	-o-animation: cardReveal 2s linear;
	animation: cardReveal 2s linear;
}

@-webkit-keyframes cardReveal {
    0%{
	    -ms-transform: rotateY(180deg); /* IE 9 */
	    -webkit-transform: rotateY(180deg); /* Chrome, Safari, Opera */
	    transform: rotateY(180deg);    	
    }
    100%{
    	-ms-transform: rotateY(0deg); /* IE 9 */
	    -webkit-transform: rotateY(0deg); /* Chrome, Safari, Opera */
	    transform: rotateY(0deg);  
    }
}
@-moz-keyframes cardReveal {
    0%{
	    -ms-transform: rotateY(180deg); /* IE 9 */
	    -webkit-transform: rotateY(180deg); /* Chrome, Safari, Opera */
	    transform: rotateY(180deg);    	
    }
    100%{
    	-ms-transform: rotateY(0deg); /* IE 9 */
	    -webkit-transform: rotateY(0deg); /* Chrome, Safari, Opera */
	    transform: rotateY(0deg);  
    }
}
@-o-keyframes cardReveal {
    0%{
	    -ms-transform: rotateY(180deg); /* IE 9 */
	    -webkit-transform: rotateY(180deg); /* Chrome, Safari, Opera */
	    transform: rotateY(180deg);    	
    }
    100%{
    	-ms-transform: rotateY(0deg); /* IE 9 */
	    -webkit-transform: rotateY(0deg); /* Chrome, Safari, Opera */
	    transform: rotateY(0deg);   
    }
}
@keyframes cardReveal { 
    0%{
	    -ms-transform: rotateY(180deg); /* IE 9 */
	    -webkit-transform: rotateY(180deg); /* Chrome, Safari, Opera */
	    transform: rotateY(180deg);    	
    }
    100%{
    	-ms-transform: rotateY(0deg); /* IE 9 */
	    -webkit-transform: rotateY(0deg); /* Chrome, Safari, Opera */
	    transform: rotateY(0deg);  
	}
}