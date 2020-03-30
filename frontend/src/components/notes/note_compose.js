import React from 'react';
import NoteBox from './note_box';
import { withRouter } from 'react-router-dom'
import Image from '../image/image';
import ImageUploadContainer from '../image_upload/image_upload_container';

class NoteCompose extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        this.state = {
            title: '',
            caption: '',
            newNote: '',
            boardId: '',
            image: {},
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
        // e.stopPropagation();

        let note = {
            title: this.state.title,
            caption: this.state.caption,
            boardId: this.props.boardId,
            image: this.state.image,
            xcoord: 100,
            ycoord: 100
        };

        this.props.makeNote(note)
        .then((note) => {
          debugger
          if (this.fileInput.current.files.length <= [0]) {
            const errors = [];
            errors.push("Unable to upload image. image must be a JPEG or PNG and cannot be empty");
            this.setState({ errors });

          } else if (this.fileInput.current.files.length > 0) {

            if (this.fileInput.current.files[0].type === 'image/jpg' ||
              this.fileInput.current.files[0].type === 'image/png' ||
              this.fileInput.current.files[0].type === 'image/jpeg') {
              const image = new FormData();
              image.append('image', this.state.file);
              this.props.uploadImage(image, note.note.data).then(res => console.log(res))
              // this.setState({
              //   errors: [],
              //   inputReset: Date.now(),
              //   file: null,
              //   imageUrl: null
              // })
              // this.setState({ file: e.target.files[0]})
            } else {
              const errors = []
              errors.push('Invalid Image');
              this.setState({ errors });
            }
          }
        })
        // .then( () => this.props.closeModal())

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
            {/* <button onClick={this.props.closeModal}>Close</button> */}
            <form onSubmit={this.handleSubmit}>
              <div>
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
                  type='file'
                  name='image'
                  onChange={this.handleFiles}
                />
                {/* <ImageUploadContainer update={this.update('image')} /> */}
                <br />
                <input
                  type="textarea"
                  value={this.state.caption}
                  onChange={this.update('caption')}
                  placeholder="Write a note..."
                />
                <br />
                <input type="submit" value="Submit" />
              </div>
            </form>
            <br />
            <NoteBox text={this.state.newNote} />
          </div>
        );
    }
}

export default withRouter(NoteCompose);