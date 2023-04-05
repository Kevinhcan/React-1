import React from "react";
import Button from "./Button";
import "./styles/Components.css"

const Components = ({ quote, newQuote }) => {
  return (
    <section className="Components" >

      <h2 className="tittle">INFOGALAX</h2>

          <article className="Components__phrase">
            <p>{quote.phrase}</p>
          </article>

      <Button newQuote={newQuote} />

          <article className="Components__author">
            <h4>Fuente: {quote.author}</h4>
          </article>
    </section>
  );
};

export default Components;
