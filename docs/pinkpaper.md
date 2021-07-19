---
id: pinkpaper
title: PINKPAPER VERSION 0.1
sidebar_label: Pinkpaper
slug: pinkpaper
---

![logo](https://i.imgur.com/mKeBfHq.png)


Performance-Driven Communities for Athletes and Fans

## Challenge

>Traditional social media has been the de-facto method for amateur athletes in athletics and e-sports to develop a fanbase and document and monetize their accomplishments. However, Web2 has limitations:

- [ ] Dependence on brand partnerships
- [ ] Limited sovereignity
- [ ] No purpose-built platform
        
        
Athletes rely on multiple outlets to monetize their efforts; eg. Patreon for funding and Instagram for content sharing. However, there is no specialized framework in place that allows them to effectively utilize a single platform 


Solution
---
>SHE --  A decentralized NFT and ERC20 platform built on Web 3.0 designed for athletes to tokenize their accomplishments in a merit-driven, collectible economy. 

**Individual DAOs** function as a central hub

**NFT collectibles** are created as accomplishments are documented and challenges are minted into collectible NFTs

**Fan engagement** goes beyond traditional social media by allowing end-users to directly invest in athletes and their accomplishments, and reap rewards via their success


Features
---
>SHE combines the best of Web2 social platforms with the interoperability of Web3

**Live feed**

**Scalability**
Deployment (as of now) on the xDai network allows for negligible transaction fees 

**Physically-backed NFTs**
Challenge cards

**User Investment**
Voting



Technology
---


SHE offers a LivePeer livestream for athletes to promote themselves and their accomplishments. Athletes will set challenges to complete via livestream to showcase and document personal growth. Viewers of the stream will be able to stake tokens or NFTs on the outcome of the challenge.

(fancy version of this)

#### $PRTCLE

Architecture
---
>How our product is developed and interfaced

#### Android/iOS app
Front end is built using ReactNative, providing a seamless interface that spans across iOS and Android

We utilize Web3 login protocol using wallet intergration. Burner wallets are created for all users upon initial registration, with an option to use a pre-existing wallet address. 

Meta-transactions use [Gas Station Network (GSN)]([https://](https://docs.opengsn.org/)).

These two are combined to create a gasless creator experience for athletes utilizing the app.

The app provides functional routing and native engagement. 


#### Centralized back end

A centralized NodeJS/GraphQL back end is used as an intermediary between smart contracts and the app. Certain features like live chat, synchronous updates, and complex searches are open to us by using an intermediary back end.

The back end is intergrated with The Graph subgraph technology, which connects directly with the xDai blockchain and our smart contracts to keep on-chain data concurrent.


#### Smart contracts

The smart contracts use the [Diamond Standard (EIP-2535)](https://eips.ethereum.org/EIPS/eip-2535). The primary contract used is  SHE`ChallengeDiamond.sol`.

Since Diamonds can be updated, we give control of the `diamondCut` function to the DAO and the owner of the challenge contract.

For each challenge made, a `ChallengeDiamond` is minted via the `ChallengeFactory` contract, which is deployed for athletes using meta-transactions.

Each `ChallengeDiamond` is responsible for tracking the various iterations of a singular challenge, as well as minting the ERC-1155 NFTs for that specific challenge. There are also vaults used as escrow for fan-submitted donations, as athletes attempt a challenge.

Every iteration of a challenge uses IPFS to store results and metadata, as well as the video stream of the challenge.

We have a DAO that has sole control over the `resolveChallenge` function, which is responsible for the payout mechanism and contract authentication. The DAO is given data directly from the front end and can instantly assign a challenge outcome.


Positioning
---
>Brief comparison with the most notable alternatives suggests that SHE offers the most attractive set of features.

(features graph)

X axis: SHE | TopShot | Opensea | IG | Patreon

Y axis: Defi | Collectible NFTs | Live Feed | 



Target market
---
>We are targeting up-and-coming athletes who are looking to develop a fanbase, as well as document and monetize their accomplishments.

**Content creators:** 
* College athletes
* Olympic hopefuls
* Record breakers
* Weekend warriors

**End-users:** 
Traditional broad social media target audience, skewed slightly older (16-36) to reflect the financial engagement and understanding of how to navigate the crypto space

About
---
>Who is SHE and why are we doing this?

### Our vision
---

>We envision a gamified form of social media on web3 that  enables athletes to harness their best monetary asset -- themselves.