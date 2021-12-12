# the-social

* An API for a yet-to-be-developed social network platform. This API is set up to allow a user to add new Users, which they can then view, edit, and remove. 
* A user can also add, view, edit, and delete any Thoughts they might want to share. 
   * The API is set up to add and delete friends from the User list.
   * The API is set up to allow other users to share and delete reactions to thoughts that have been posted.

## Table of Contents
* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built-with)
* [Contact](#contact)

### About the Project
* This API is easily customizable for a variety of client uses. Routes are already built out for GET, POST, PUT, and DELETE requests on both the User and Thought schema.
* A well-built front-end UI will complement this build. 
* Uses MongoDB for easy scaling, with the Mongoose ODM to structure requests. 
* Developers can easily add on other Documents, should they want to collect additional data.

### Installation

* On first use, new users will need to install dependencies, using ```npm i``` or ```npm install```

![SetUpGIF (1)](https://user-images.githubusercontent.com/78443941/145724894-04bbdc51-19cd-4cbe-a643-8aa62ee9067a.gif)

### Usage
* The User CRUD in action

![UserGIF_2 (1)](https://user-images.githubusercontent.com/78443941/145724862-9e558e87-fdb4-4ae6-a81d-62e4c9836124.gif)

* The Thoughts CRUD: 

![ThoughtGIF](https://user-images.githubusercontent.com/78443941/145725443-b19e2059-3b3f-4c0b-9557-1d91875d0cdd.gif)

* Friends and Reactions

![Friends_Reactions_GIF](https://user-images.githubusercontent.com/78443941/145725938-f1631940-1740-410e-a634-5398fcd0e799.gif)


### Built With
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)
   * And presented by [Screencastify](https://www.screencastify.com/)
 
 #### Contact
 * GitHub: [DoctorMuch](https://github.com/DoctorMuch)
 * Email: [David Mueth](mailto:davidmueth@gmail.com)
