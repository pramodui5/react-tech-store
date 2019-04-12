import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa';

export default class services extends Component {
  state = {
      services:[
          {
              id: 1,
              icon: <FaDolly />,
              title: 'free shipping',
              text: "lorem dolar sit amet, lorem dolar sit amet, lorem dolar sit amet, lorem dolar sit amet"
          },
          {
            id: 2,
            icon: <FaRedo />,
            title: '30 days return policy',
            text: "lorem dolar sit amet, lorem dolar sit amet, lorem dolar sit amet, lorem dolar sit amet"
        },
        {
            id: 3,
            icon: <FaDollarSign />,
            title: 'secured payment',
            text: "lorem dolar sit amet, lorem dolar sit amet, lorem dolar sit amet, lorem dolar sit amet"
        }
      ]
  }

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
            <div className="row">
                {this.state.services.map(item => {
                    return (
                        <div className="col-10 max-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                            <div className="service-icon">
                                {item.icon}
                            </div>
                            <div className="mt-3 text-capitalize">
                                {item.title}
                            </div>
                            <div className="mt-3">
                                {item.text}
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
      </ServicesWrapper>
    )
  }
}

const ServicesWrapper = styled.section`
    background: rgba(195, 195, 195, 0.5);
    .service-icon {
        font-size: 2.5rem;
        color: var(--primaryColor);
    }
    p {
        color: var(--darkGrey);
    }
`;
