// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./BooksPDFSecStyles";
import { Colors, Images } from "../../../theme";
import { BOOK_SHOP_WEBSITE } from "../../../constants";
import { Button } from "react-bootstrap";

//dataset for pdf books

const BOOKS_PDF = [
  {
    image: Images.thoughts_book_cover,
    title: "Thought Techniques for Simple Brain Files",
    bgColor:
      "linear-gradient(31deg, rgba(14, 158, 148, 0.5), rgb(14, 158, 148))",
    color: Colors.text.primary,
  },
  {
    image: Images.twin_brain_book_cover,
    title: "Do I Have a Twin Brain?",
    bgColor: "linear-gradient(31deg, rgba(46, 75, 148, 0.5), rgb(46, 75, 148))",
    color: Colors.text.primary,
  },
];

export default function BooksPDFSecView(props) {
  return (
    <div className={`${css(styles.wrapper)}`}>
      <div className={`container`}>
        <div className={`row`}>
          {BOOKS_PDF.map((item) => {
            return (
              <div className={`col-lg-6 col-md-12 col-sm-12 my-3`}>
                <div className={css(styles.bookPdfContainer)}>
                  <img src={item.image} className={css(styles.bookImage)} />
                  <div
                    style={{ background: item.bgColor }}
                    className={css(styles.bookBox)}
                  >
                    <h6 className={css(styles.bookHeading)}>BOOK</h6>

                    <h4 className={css(styles.bookTitle)}>{item.title}</h4>

                    <Button
                      style={{ color: item.color }}
                      className={css(styles.downloadBtn)}
                      onClick={() => {
                        window.open(BOOK_SHOP_WEBSITE);
                      }}
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
