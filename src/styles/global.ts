import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary: #c5aa64;
    --secondary: #549529;
    --tertiary: #ea5c5c;
    --white: #ffffff;

    --form-color: #293c2a;
    --error: #dc3545;

   --font-title: 'Baloo Bhai 2', sans-serif;
   --font-text: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--primary);
    -webkit-font-smoothing: antialiased;
    color: var(--white);
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }



  body, input, select, button {
    font-family: var(--font-text);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: 0;
    transition: filter .3s;
    &:hover {
      filter: brightness(.9)
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 900px) {
      font-size: 80.5%;
    }
  }

  .content {
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-title);
    }
    h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
      margin-bottom: 3rem;
    }
    h3 {
      font-size: 1.8rem;
      line-height: 1.8rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.3rem;
      margin-bottom: 3rem;
    }
    .highlight {
        color: var(--form-color);
      }
  }

  .animate-up-down {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  .jump {
    display: inline-block;
    margin: auto;
    padding: 0 10px;
    position: relative;
    text-align: center;
    .dots1 {
      position: absolute;
      bottom: 20%;
      left: 20%;
    }
    .dots2 {
      position: absolute;
      bottom: 20%;
      right: 20%;
      transform: scale(-1, 1);
    }
    .dot {
      display: inline-block;
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ff4440;
      opacity: 0;
    }
    .dot1 {
      animation: 1s dot infinite;
    }
    .dot2 {
      animation: 1s dot-2 infinite;
    }
    .circle {
      display: inline-block;
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 3px solid #fcbf29;
      -webkit-animation: 1s cirle-dot infinite;
      animation: 1s cirle-dot infinite;
      -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;
      opacity: 0;
    }
    img {
      display: block;
      margin: auto;
      width: 56px;
      height: 56px;
      -webkit-animation: 1s jump infinite;
      animation: 1s jump infinite;
      -webkit-animation-timing-function: cubic-bezier(0.92, 0.18, 0.04, 0.92);
      animation-timing-function: cubic-bezier(0.92, 0.18, 0.04, 0.92);
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
    }
    @-webkit-keyframes jump {
      0% {
        transform: translate3d(-10px, -30px, 0) rotate(-15deg);
      }
      50% {
        transform: translate3d(0, 8px, 0) scaleY(0.96);
      }
      100% {
        transform: translate3d(10px, -30px, 0) rotate(15deg);
      }
    }
    @keyframes jump {
      0% {
        transform: translate3d(-10px, -30px, 0) rotate(-15deg);
      }
      50% {
        transform: translate3d(0, 8px, 0) scaleY(0.96);
      }
      100% {
        transform: translate3d(10px, -30px, 0) rotate(15deg);
      }
    }
    @-webkit-keyframes dot {
      0% {
        opacity: 0;
      }
      1% {
        transform: scale(0.2);
      }
      50% {
        transform: scale(1) translate3d(-50px, -70px, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) translate3d(-50px, -70px, 0);
        opacity: 0;
      }
    }
    @keyframes dot {
      0% {
        opacity: 0;
      }
      1% {
        transform: scale(0.2);
      }
      50% {
        transform: scale(1) translate3d(-50px, -70px, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) translate3d(-50px, -70px, 0);
        opacity: 0;
      }
    }
    @-webkit-keyframes dot-2 {
      0% {
        opacity: 0;
      }
      1% {
        transform: scale(0.2);
      }
      70% {
        transform: scale(0.7) translate3d(-50px, -50px, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(0.7) translate3d(-50px, -50px, 0);
        opacity: 0;
      }
    }
    @keyframes dot-2 {
      0% {
        opacity: 0;
      }
      1% {
        transform: scale(0.2);
      }
      70% {
        transform: scale(0.7) translate3d(-50px, -50px, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(0.7) translate3d(-50px, -50px, 0);
        opacity: 0;
      }
    }
    @-webkit-keyframes cirle-dot {
      0% {
        opacity: 0;
      }
      1% {
        transform: scale(0.2);
      }
      80% {
        transform: scale(1) translate3d(-80px, -40px, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) translate3d(-80px, -40px, 0);
        opacity: 0;
      }
    }
    @keyframes cirle-dot {
      0% {
        opacity: 0;
      }
      1% {
        transform: scale(0.2);
      }
      80% {
        transform: scale(1) translate3d(-80px, -40px, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) translate3d(-80px, -40px, 0);
        opacity: 0;
      }
    }
  }

`;
