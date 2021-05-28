                                                                          ____________
--------------------------------------------------------------------------Amazon Clone------------------------------------------------------------------------------------------------------------------------------------------
                                                                          ‾‾‾‾‾‾‾‾‾‾‾‾
                                                    

--------------------------------------------------------------------------React Front-end--------------------------------------------------------------------------------------------------------------------------------------

                                                                          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
                                                                          |    -CSS3                                                  |
                                                                          |        https://devdocs.io/css/                            |
                                                                          |                                                           |
                                                                          |    -@material-ui                                          |
                                                                          |        https://material-ui.com/                           |
                                                                          |                                                           |
                                                                          |    -react-flip-move                                       |
                                                                          |        https://github.com/joshwcomeau/react-flip-move     |
                                                                          |___________________________________________________________|

--------------------------------------------------------------------------Firebase Back-end (user auth/purchased items)---------------------------------------------------------------------------------------------------------

                                                                          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
                                                                          |    -firebase user authentication                   |
                                                                          |        https://firebase.google.com/docs/auth       |
                                                                          |                                                    |       
                                                                          |    -fireStore database                             |
                                                                          |        https://firebase.google.com/docs/firestore  |
                                                                          |                                                    |
                                                                          |    -blaze plan                                     |
                                                                          |        https://firebase.google.com/pricing         |
                                                                          |____________________________________________________|

--------------------------------------------------------------------------Stripe Functionality(card auth)-----------------------------------------------------------------------------------------------------------------------

                                                                          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
                                                                          |    -stripe card authoriztion                       |
                                                                          |        https://stripe.com/docs/js                  |                                                                        
                                                                          |____________________________________________________|

 -------------------------------------------------------------------------Node.js/Express.js(server)---------------------------------------------------------------------------------------------------------------------------

                                                                          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
                                                                          |    -Express server version                         |
                                                                          |        https://expressjs.com/                      |
                                                                          |                                                    |       
                                                                          |____________________________________________________|


Full E-commerce clone of Amazon. 

State managment using StateProvider from 'react'. Storing the user,basket,and value of combined items 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Clone app
Open in editor
navigate to root folder
run "npm install"
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
TESTING
‾‾‾‾‾‾‾
-navigate to the Axios.js file and uncomment the testing endpoint and comment out the deployed endpoint
-navigate to functions folder run "firebase emulators:start"
-npm start
-http:localhost:3000/
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DEPLOYING
‾‾‾‾‾‾‾‾‾
-navigate to the Axios.js file and uncomment the cloud function url endpoint and comment out the testing endpoint
-navigate to functions folder run "firebase deploy --only functions"
-navigate to project root folder run "npm run build"
-next run "firebase deploy --only hosting"

