# Career Niche Mobile App
A React Native Mobile application which allows users to create or sign into a Gurucan account, track their job hunt, and view their Gurucan courses all in one place.
This project is associated with Career Niche, a company that provides career coaching.

### Techstack
The following technologies were utilized in developing this app:

#### Front end
- React Native
- React Native Elements
- JavaScript
- Expo
- React Context API

#### Back end:
- Node.js
- MongoDB
- Express.js
- Heroku Cloud
- Gurucan API

#### Design Decisions
React Native was selected because of it's cross-OS compatibility. Expo sped up development progress with out-of-the-box features.
For scaling purposes, Node.js and MongoDB were selected.  As the amount of users grow, a NoSQL database will be able to handle large volumes of data as well as taking full advantage of cloud services.  The application is built upon microservice architecture, which helps with seperating the services for Gurucan and Mongo DB.  The API gateway was designed to leverage this and provide each request a safe route to the correct API endpoint.
