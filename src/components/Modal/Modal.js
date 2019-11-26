import React from "react";
// import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';


import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000

}

const modal = props => {
  // Video 544
  // CSSTransition  maneja  cuatro css class para manejar la transición automaticamente.
  // puede pasarse un obj al atributo classNames, no solo "fade-slide"
  return (

    <CSSTransition mountOnEnter
     unmountOnExit
      in={props.show}
       timeout={animationTiming}
        // classNames= "fade-slide">
        classNames= {{
          enter:'',
          enterActive:'ModalOpen',
          exit:'',
          exitActive:'ModalClosed',
          appear:'',
          appearActive:'',
        }}>

      {/* {state => {
          const cssClasses = [
            "Modal", 
            state === "entering"
            ? 'ModalOpen'
            : state === 'exiting' ? 'ModalClosed' : null
          ]; */}

        {/* <div className={cssClasses.join(" ")}> */}
        <div className="Modal">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>

    </CSSTransition>
  );
};

export default modal;
