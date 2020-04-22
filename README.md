## Welcome to Thought-Board LABS

Here at Thought-Board LABS, we believe in the value of visualizing your thoughts.  This project aims to allow our users to build a virtual board on which they can organize and visualize their notes for all sorts of projects.

Brought to you by [Larry Smith](https://github.com/larrypsmith), [Alec Keeler](https://github.com/Alec-Keeler), [Brennan Romance](https://github.com/romance939913), [Spencer Iascone](https://github.com/siascone)

[Visit the site here!](https://thought-board-labs.herokuapp.com/#/)

![readme-img](./readme-img.png)

## Features
* Secure frontend to backend user authentication using the BCryptJS library to hash, salt and retrieve passwords
* Full CRUD actions for Boards, Notes and Connections
* Dragging notes on a board to organize your thoughts appropriately
* Image upload and retrieval capabilities using Multer middleware and AWS S3

## Technologies Used
* Backend: Express.js/MongoDB/Node.js
* Frontend: Readt.js/Redux.js along with vanilla JS, HTML and CSS
* [React Draggable](https://www.npmjs.com/package/react-draggable) to implement sliding notes
* [CanvasJS](https://www.npmjs.com/package/canvas) for drawing connection lines between notes.

## How It Works

Users are able to create a thought-board immediately after signing up or logging in.  Once a board has been created, the user is able to add a note to the board, optionally uploading an image to the note.  Notes can be moved around the board as the user sees fit to organize them in a way that helps their personal process.  Connections can be made between notes, drawing a visual representation of one note's relation to others.

![readme-gif](thoughtboarddeck.gif)

### Slidable Note Positions Persisting

Each note stores its position in pixels relative to its parent container as x and y coordinates in the database:

```
const NoteSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
    },
    title: {
        type: String
    },
    ...,
    xcoord: {
        type: Number,
    },
    ycoord: {
        type: Number
    }   
})
```

When a note is dragged on a board and released in a new position, the onStop event is fired, executing a function that sends a PATCH request to the backend, updating the note's position:
```
onStop={(e, ui) => this.updatePosition(note, e, ui)}
updatePosition(note, e, { x, y }) {
        this.props.updateNote({
            _id: note._id,
            title: note.title,
            caption: note.caption,
            url: note.url,
            xcoord: x,
            ycoord: y
        })
    }
```
This allows the note's position to persist between page refreshes.

### Drawing Note connections

When a boards State changes (note positions move, a new connection is created, etc.) the Canvas component calls the draw method on every connection on the board

```js
  draw(lines, c) {
    c.clearRect(0, 0, 1920, 1080);
    c.lineWidth = 3;
    c.strokeStyle = "red";
    lines.forEach(line => {
      const { x1, y1, x2, y2 } = line;
      c.beginPath();
      c.moveTo(x1 + 75, y1 + 75);
      c.lineTo(x2 + 75, y2 + 75);
      c.closePath();
      c.stroke();
    })
  }
```

This creates the red "string" between the middle of two connected notes

## Future Plans for Thought-Board

* Disallow users from making changes to another user's board.
* Update boards for multiple users in real time.