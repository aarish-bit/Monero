import React, { Component } from 'react'
import './About.scss'

const information = [
  {
    id: '1',
    head: 'What is Monero?',
    content: 'Monero is cash for a connected world. It’s fast, private,and secure. With Monero, you are your own bank. You can spend safely,knowing that others cannot see your balances or track your activity.'
  },

  {
    id: '2',
    src: './about-images/secure-monero.png',
    altText: 'secure 1',
    head: 'Monero is secure!',
    content: 'Monero is a decentralized cryptocurrency, meaning it is secure digital cash operated by a network of users.Transactions are confirmed by distributed consensus and then immutably recorded on the blockchain. Third-parties do not need to be trusted to keep your Monero safe.'
  },

  {
    id: '3',
    src: './about-images/private-monero.png',
    altText: 'private 1',
    head: 'Monero is private!',
    content: ' Monero uses ring signatures, ring confidential transactions,and stealth addresses to obfuscate the origins, amounts, and destinations of all transactions. Monero provides all the benefits of a decentralized cryptocurrency, without any of the typical privacy concessions.'
  },

  {
    id: '4',
    src: './about-images/untraceable-monero.png',
    altText: 'untraceable 1',
    head: 'Monero is untraceable!',
    content: 'Sending and receiving addresses as well as transacted amounts are obfuscated by default. Transactions on the Monero blockchain cannot be linked to a particular user or real-world identity.'
  },

  {
    id: '5',
    src: './about-images/fungible-monero.png',
    altText: 'fungible 1',
    head: 'Monero is fungible!',
    content: 'Monero is fungible because it is private by default. Units of Monero cannot be blacklisted by vendors or exchanges due to their association in previous transactions.'
  },

]


class About extends Component {
  render() {
    return (
      <div className="about" >
        {information.map(info => (
          <div key={info.id} className="col-md-12 col-sm-12 col-xs-12">
            <img src={info.src} alt={info.title} className="aboutimg" />

            <br></br>
            <h2><strong>{info.head}</strong></h2>
            <hr />
            <br></br>
            {info.content}
          </div>
        ))}
      </div>
    )
  }
}

export default About
