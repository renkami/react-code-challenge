import React from "react";

const ResultItem = props => {
  console.log(props);
  return (
    <li>
      <img src={props.pokemon.img} alt="" />
      <div className="info">
        <h1>
          {props.pokemon.Name}
          <span className="hl">Pika</span>chu
        </h1>
        {props.pokemon.Types.map(type => (
          <Type type={type} key={type} />
        ))}
      </div>
    </li>
  );
};

const Type = props => (
  <span className={"type " + props.type.toLocaleLowerCase()}>{props.type}</span>
);

export default ResultItem;
