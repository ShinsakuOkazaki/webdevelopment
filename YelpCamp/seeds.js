var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
        {
            name: "Cloud's Rest",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9bykRyTUnrADV4LVlibxX0f5tELeXcQ1WiX8huesaozrVoavRQ",
            description: "blah blah blah"
        },
        {
            name: "Cloud's Rest",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9bykRyTUnrADV4LVlibxX0f5tELeXcQ1WiX8huesaozrVoavRQ",
            description: "blah blah blah"
        },
        {
            name: "Cloud's Rest",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9bykRyTUnrADV4LVlibxX0f5tELeXcQ1WiX8huesaozrVoavRQ",
            description: "blah blah blah"
        },
        ]

function seedDB(){
    Campground.remove({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("removed campgrounds");
            Comment.remove({}, function(err){
                if(err){
                    console.log(err);
                }
                console.log("removed comments!");
            })
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else{
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is grreat, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                }else{
                                    campground.comments.push(comment)
                                    campground.save();
                                    console.log("Created new comments")
                                }
                            });
                    }
                });
            });
        });
}

module.exports = seedDB;