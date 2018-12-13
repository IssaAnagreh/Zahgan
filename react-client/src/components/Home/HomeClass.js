import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EventClassNew from './EventClassNew'
import Create from '../Creator/Create'
import Slideshow from '../Slider/Slideshow';
import Vision from '../about/Vision';
import $ from 'jquery';

class HomeClass extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            items: [{
                "_id": {
                    "$oid": "5c124b0afc9e7108992d49fc"
                },
                "eventLocation": [
                    ""
                ],
                "attending": [],
                "creatorName": "jkdnas",
                "eventName": "lkqwdq",
                "cost": 2,
                "des": "sdcscawc",
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDA4Jhlt2TGWKs8hSYa4yLTv26x7UqLoVtCbcbh1KNxPjbuo8Ibw",
                "availableSeats": 3,
                "date": "2018-12-21T00:12",
                "email": "isa@isa.com",
                "imgName": "http://localhost:4000/images/myImage-1544702722136.jpg",
                "__v": 0
            }],
          }
    }

    scrollToMyRef = () => {
        window.scrollTo({
            top: this.myRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    componentDidMount() {
        $.ajax({
          url: '/create',
          type: "GET",
          success: (data) => {
            this.setState({
              items: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
      }
    render() {
        if (this.state.items){
        return (
            <div>
                <div className="container-fluid" >
                    <Slideshow />
                    <Vision />
                    <div classsname="images">
                        <p className="main_title"><span>Events</span></p>
                        <EventClassNew item={this.state.items} />
                    </div>
                </div>
            </div>
        )} else {
            return (
                <div>
                  estanna ya zamm
                </div>
            )
          }
    }
}

export default HomeClass

/*
{
                        {    this.state.items.map((item) => {
                                return (<div ref={this.myRef}>
                                    <EventClassNew item={item} />
                                </div>)
                            })
                        }
                        */

