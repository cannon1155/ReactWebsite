import React from "react"

function NewComponent(props) {
  return (
    <div className = "about-title">
      <h1>Stefan Keeley</h1>
      <div className = "about-subtitle">
        <h2>About me</h2>
        <div className = "about-body-text">
          <h4>I am currently a 3rd year student at the university of bristol expecting a high 2:1. I like making apps and have a wide experience of
          diffrent programming languages.</h4>
        </div>

      </div>
      <div className = "about-subtitle">
        <h2>programming languages</h2>
        <div className = "about-body-text">
          <h4>Kotlin - Used to develop a few diffrent android apps. Used in Mazeable which was released.</h4>
          <h4>Java - Used in university to develop a board game with another person as well as an Ai for it.
          Used in university to develop an app for a real world client in a team of 3 other people.</h4>
          <h4>Dart - Used with the flutter framework to develop an Android and Ios app.
          Used in Duck Bills which was released and was worked with one other person.</h4>
          <h4>Javascript, Html and Css - used to develop this website.</h4>
          <h4>C# - used to develop Spinable a game in Unity.</h4>
        </div>

      </div>
      <div className = "about-subtitle">
        <h2>Frameworks and tools</h2>
        <div className = "about-body-text">
          <h4>Flutter - used to develop an android and ios app.</h4>
          <h4>React - used to make this website.</h4>
          <h4>Firebase - used to make the backends of multiple apps including Duck Bills and Mazeable.</h4>
        </div>

      </div>
      <div className = "about-subtitle">
        <h2>Links</h2>
        <div className = "about-body-text">
          <h4>Github - <a href="https://github.com/cannon1155">link</a></h4>
          <h4>Linkedin - <a href="https://www.linkedin.com/in/stefan-keeley/">link</a></h4>
          <h4>Mazeable - <a href="https://play.google.com/store/apps/details?id=com.unamedCompany.Mazeable&hl=en">link</a></h4>
          <h4>Duck Bills - <a href="https://play.google.com/store/apps/details?id=com.jamesstefan.DuckBills&hl=en">link</a></h4>
        </div>

      </div>
    </div>

  )
}

export default NewComponent;
