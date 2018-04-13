# Dungeon Diggur

[Live Demo](https://dungeon-diggur.herokuapp.com/#/)

Dungeon Diggur is a Dungeons and Dragons themed full-stack Image Uploading service, with user-feedback and organizational functionality. The name comes from a personal place; During my own sessions of D&D I needed an explanation for all the abandoned dungeons littered across the world. The answer: A subrace of Kobolds(little dragon people) that worship the concept of dungeons as a god, and build them as a rite of their religion. They were known as the Dungeon Diggers.

Anecdotes aside, this project has had it challenges and triumphs mostly related to the new technology I was introduced to. The core functionality in this project was provided by:

* Cloudinary: A cloud storage service that provides the image hosting.
* React/Redux: A frontend suite of tools that provide a manageable process for async server requests
* PostgreSQL: An open source relational database system
* BCrypt: A Ruby Gem that handles password digesting and salting

For more information about the details of my implementation for the project's various features visit the [wiki](https://github.com/Yzof/Dungeon-Diggur/wiki) or read on for an in-depth look at the core-functionality of Galleries in my website.

## Features and implementation
* Secure Frontend/Backend Login
* Users can Create and Edit Galleries of Images
* Users can Click a Galleries tags to see similar galleries
* Users can Upvote/Downvote a Gallery

### Account Creation
An important part of any modern website is the ability to track and store the data your users submit, in a way that respects their privacy and security. Using a hashing gem known as BCrypt, my database in no way stores the actual password in the servers, rather it is momentarily received before the BCrypt gem produces a hashed string that is then stored in the passwords place.

![](http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523655684/SignUp-Screen.png)

Then later, when the user attempts to login, the password inputted is passed to BCrypt for validation.

![](http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523655699/Log-in-good.png)

### Image Uploading
The core-gaol for this project is the ability to send and receive information through a third-party api service. This goal is accomplished with the use of Cloudinary, an accessable and free image hosting service. The primary feature of Cloudinary is it's easy to use upload widget:

![](http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523655690/upload-modal.png)

Once the user has selected their desired image, a flurry of server side actions take place, generating several relational models to provide further features( tags, likes, and extra images). The user is redirected to a creation page that gives them a form for customizing their new gallery.

![](http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523655708/form.png)

Once the user has finished, they can return to edit their gallery at any time, to add additional tags or images.

## Future Features
* Commenting on Galleries
* Search based on tag
* D&D Rules Compendium
* D&D Encounter Creation
