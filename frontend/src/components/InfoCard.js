import React from "react"

class InfoCard extends React.Component {

    render() {
        return (
        <div className="modal">
            {this.props.event.info &&
           <h2 className="info">{this.props.event.info}</h2>
            }
            <div className="links">
           {this.props.event.ytUrl &&
           <a href={this.props.event.ytUrl} target="_blank" className="links">Facebook</a>
            }
            <br/>
            <br/>
            <br/>
            {this.props.event.igUrl &&
           <a href={this.props.event.igUrl} target="_blank" className="links">Twitter</a>
            }
            </div>
        </div>
        )
    }
}

export default InfoCard