import React from 'react';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.countVotes(),
      voted: Boolean( this.props.gallery.currentUserVote )
    };

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.countVotes = this.countVotes.bind(this);
    this.convertType = this.convertType.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({count: this.countVotes()});
  }


  countVotes() {
    let ups = this.props.gallery.votes.upvotes;
    let downs = this.props.gallery.votes.downvotes;

    return ups - downs;
  }

  convertType(type) {
    if (type === "up") {
      return 0;
    } else {
      return 1;
    }
  }

  changeVote(type) {
    let voteProps = {
      user_id: this.props.user.id,
      voteable_id: this.props.gallery.id,
      voteable_type: "Gallery"
    };
    if (type === null) {
      this.props.deleteVote(voteProps);
    } else {
      voteProps.vote_type = type;
      if (this.props.gallery.votes.currentUserVote) {
        this.props.updateVote(voteProps);
      } else {
        this.props.createVote(voteProps);
      }
    }
  }

  upVote(e) {
    e.preventDefault();
    if (this.props.gallery.votes.currentUserVote === "up") {
      this.changeVote(null);
    } else {
      this.changeVote("up");
    }
  }

  downVote(e) {
    e.preventDefault();
    if (this.props.gallery.votes.currentUserVote === "down") {
      this.changeVote(null);
    } else {
      this.changeVote("down");
    }
  }

  render() {
    let upArr = <img src={"http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523635561/30180164_1668648299897240_1783406627_n.png"}/>;
    let dnArr = <img src={"http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523635555/30119056_1668648303230573_1426495899_n.png"}/>;

    if (this.props.gallery.votes.currentUserVote == "up") {
      upArr = <img src={"http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523635566/30184654_1668648293230574_1988530874_n.png"}/>;
    } else if (this.props.gallery.votes.currentUserVote == "down") {
      dnArr = <img src={"http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523635571/30784644_1668648296563907_2109082237_n.png"}/>;
    }

    return (
      <div>
        <ul className="horizontal-li center-text">
          <li onClick={this.upVote} className="gallery-vote cursor">{upArr}</li>
          <li className="gallery-vote count">{this.props.count}</li>
          <li onClick={this.downVote} className="gallery-vote cursor">{dnArr}</li>
        </ul>
      </div>
    );
  }
}

export default Vote;
