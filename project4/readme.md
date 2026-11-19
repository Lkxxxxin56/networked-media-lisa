Prompt
Create a bot on our class Mastodon Server. You will be working in pairs.

Each person will:
- Create a dataset using an HTML form
- Stores the data in a database
- Makes the data publicly accessible via an API
- Create a bot that uses your partner's API

Project Requirements:
- You will be working in your /project4 folder

Bot requirements:
- Automatically post on a specific interval time.
- Apply the community standards that we built as as class. See the "Server Rules" section on the about page of our server.
    - The same ITP/IMA Code of Conduct applies in this digital space.
    - You can view the code of conduct here: https://community.itp.io/
    - Bot posts are limited to maximum 5 posts per hour. This is approximately 1 post every 12 minutes.
    - Bots must have a specified sleeping time. In your profile bio, include when the bot sleeps. This should be between 3 - 12 hours.
    - Every bot post should name drop / mention another student in the class.

Database requirements:
- Uses database specified in class
- URL to add to the database
- Make the database public via an API.

Submission Requirements:
- a working link in the discussion thread by class start time. The link should follow the format of https://networked-media.itp.io/@{your-username}
- a github link to your uploaded code. It should include your bot.js and your server.js
- a link to your documentation, or included documentation in the post. if you are using an external source, please ensure to share it with me using my netID email


Concept
- My Project 4 concept is a humorous London Eye bot.
- Users submit fictional passenger experiences through a simple HTML form, including:
    - A passenger name or alias (classmates name drops)
    - Their mood
    - The current weather
    - A short thought beginning with “I wonder if…”
- The data is stored in a NeDB database and made publicly available through a /get-data API.
- My bot randomly selects a passenger entry and turns it into a short post with a playful English tone, for example:
    
    > London is rainy again. Sam, a curious passenger, is wondering if the London Eye ever gets dizzy.
    > 
- The bot posts automatically once per hour during its working hours and sleeps overnight.
- Every post includes a mention of another classmate, following the Mastodon server rules.
- For the final partner integration, my bot will fetch passenger thoughts from my partner’s public API instead of my temporary local API.