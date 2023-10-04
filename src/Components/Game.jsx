import { Page, Text } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/game.css";
import { AttempEven, AttempOdd, CheckAttemp } from "./Redux/reducer";

const Game = () => {
  var [count, setCount] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (count === 2) {
        setCount((count = 0));
        dispatch(CheckAttemp());
      }
    }, 1000);
    if (state.Matched === 12) {
      alert("You Won the game");
      window.location.reload(false);
    }
  }, [count]);

  return (
    <Page title="Memory Game  ">
       <Text variant="heading2xl" as="h3">
        Step : {state.Steps}
      </Text>
      <div className="boxx">
        {state.Data.map((val) => {
          return (
            <div
              className="cards"
              key={val.id}
              onClick={() => {
                if (count <= 2) {
                  if (count === 0) {
                    dispatch(AttempEven(val));
                  }
                  if (count === 1) {
                    dispatch(AttempOdd(val));
                  }
                  setCount(count + 1);
                }
              }}
            >
              <img src={val.image} alt="" height="100%" width="100%" />
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default Game;
