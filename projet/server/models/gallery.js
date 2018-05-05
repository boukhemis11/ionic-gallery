/* Import the Mongoose software module */
var mongoose 			=	require('mongoose'),
    Schema 				=	mongoose.Schema,
    
	GallerySchema 		=	new Schema({
	   name   		: { type : String, required : true, max : 50 },
	   description	: { type : String, required : true },
	   thumbnail 	: { type : String, required : true },
	   displayed    : Boolean,
	   date 		: { type: Date, default: Date.now }
	});

/* Export model for application usage */
module.exports = mongoose.model('Gallery', GallerySchema);