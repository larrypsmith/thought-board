import React from 'react';
import { withRouter } from 'react-router-dom'
import Image from '../image/image';

class NoteCompose extends React.Component {
    constructor(props) {
        super(props);

        this.fileInput = React.createRef();


        this.state = {
            title: '',
            caption: '',
            newNote: '',
            boardId: '',

            url: '',
            file: null,
            imageUrl: null,
            errors: [],
            inputReset: Date.now()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({newNote: nextProps.newNote.text});
    }

    handleSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.fileInput.current.files.length <= 0) {
        let note = {
          title: this.state.title,
          caption: this.state.caption,
          boardId: this.props.boardId,
          url: null,
          xcoord: 100,
          ycoord: 100
        }

        this.props.makeNote(note)
          .then(() => this.props.closeModal())
        // const errors = [];
        // errors.push("Unable to upload image. image must be a JPEG or PNG and cannot be empty");
        // this.setState({ errors });
      } else if (this.fileInput.current.files.length > 0) {

        if (this.fileInput.current.files[0].type === 'image/jpg' ||
          this.fileInput.current.files[0].type === 'image/png' ||
          this.fileInput.current.files[0].type === 'image/jpeg') {
          let image = new FormData();
          image.append('image', this.state.file);
          this.props.uploadImage(image).then(url => {this.setState({
            errors: [],
            inputReset: Date.now(),
            file: null,
            imageUrl: null
          })
            let note = {
              title: this.state.title,
              caption: this.state.caption,
              boardId: this.props.boardId,
              url: url.data.imageUrl,
              xcoord: 100,
              ycoord: 100
            }
            return note

          }).then(note => {
            this.props.makeNote(note)
          
          })
            .then(() => this.props.closeModal())


          }

      } else {
        const errors = []
        errors.push('Unable to upload image. image must be a JPEG or PNG');
        this.setState({ errors });
      }
    }

    handleFiles(e) {
      e.preventDefault();
      this.setState({ file: e.target.files[0] });
    }

    update(field) {

        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
          <div>
            <button onClick={this.props.closeModal}>Close</button>
            <form onSubmit={this.handleSubmit}>

                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title of note"
                />
                <br />
                <Image />
                <br />
                <input type='file'
                  ref={this.fileInput}
                  key={this.state.inputReset}
                  name='image'
                  onChange={this.handleFiles}
                />
                <br />
                <input
                  type="textarea"
                  value={this.state.caption}
                  onChange={this.update('caption')}
                  placeholder="Write a note..."
                />
                <br />
                <input type="submit" value="Submit" />
                
            </form>
          </div>
        );
    }
}

export default withRouter(NoteCompose);