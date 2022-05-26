import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Card from "../components/Card";
import CardList from "../components/CardList";
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";
import dayjs from "dayjs";

import "../index.css";

function Top() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const main = async () => {
      try {
        const today = dayjs().format("YYYY-MM-DD");

        const res = await axios.get(
          //`https://api.nhk.or.jp/v2/pg/info/130/g1/${now}.json?key=v7p6iqUGenYxuaH4Kkhl0TK6YGHABRZe`
          `https://api.tvmaze.com/schedule?country=US&date=${today}`
          //`https://api.nhk.or.jp/v2/pg/list/130/g1/${now}.json?key=v7p6iqUGenYxuaH4Kkhl0TK6YGHABRZe`
        );
        //setCards(res.data.list.g1);
        setCards(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }

    };
    main();
  }, []);
  console.log(cards)
  return (
    <Layout>
      <CardList>
      {cards.map(card => (
          <Card
          card={card}
          />
        ))}
      </CardList>
      <div
        className="button button--totop"
        onClick={() => scroll.scrollToTop()}
      ></div>
    </Layout>
  );
}
export default Top;