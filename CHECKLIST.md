# Rock Paper Scissors with Friends
## To Do List

1. Sketch out users' experience
2. Sketch out computer experience (what's happening in firebase)
3. Update to-do list 
4. Create basic html with spaces for each element
    * title
    * name input
    * input button
    * greeting line
    * status update
    * input boxs
        * score tallies
    * win/loss announcement box
    * chat room
    * chat input
    * input button
5. Create name input and greeting line logic with firebase.
6. Create turn-taking logic (will also be used for chat, I suspect)
7. Write code for winner determination

#### Remember to post useful snippets in gistbox as you pull them from past code samples!

### Instructions
* Only two users can play at the same time.
* Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
* The game will track each player's wins and losses.
* Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.
* Styling and theme are completely up to you. Get Creative!

### User Experience

1. Types name in blank and clicks START.
2. Waits for opponent to do the same.
3. Clicks choice of RPS.
4. Waits for opponent to do the same.
5. Sees opponent's choice and is alerted to the winner.
6. Score increases/decreases as necessary.
6. Game resets after 5 seconds or so.
7. Chat's with opponent and talks smack (types and presses send)
8. Receives smack talk from opponent (each line noted with name of player)
9. Opponent gets mad and leaves (closes browser/refreshes) and gets disconnect notification.
10. Waits for next player (and the score resets)

### Computer Experience

1. Accepts inputs of names and stores in database
2. Displays names from database on UI
3. Accepts input from player 1
4. Accepts input from player 2
5. Compares inputs and determines "winner"
6. Displays winner 
7. Increment/decrement win/loss appropriately
8. Wait 5 seconds and start game over
9. If a player exits, sends notification to other player and zeros win/loss tally
10. If a player types in chat box, accept and display on each chat display


### Elements of UI

1. Name input with submit button labeled "start"
2. Information space with name and status updates
2. One interactive space with clickable choices of RPS and win/loss tally
3. One non-interactive space for other player's interaction
4. One non-interactive space for winner announcements 
3. One chat space where dialog shows
4. One input line for chat with button labeled "send"

