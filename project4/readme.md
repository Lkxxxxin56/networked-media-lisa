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