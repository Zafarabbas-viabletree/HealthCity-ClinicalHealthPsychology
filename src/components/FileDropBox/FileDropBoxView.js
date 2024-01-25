// @flow
import React from "react";
import { css } from "aphrodite";
import Dropzone from "react-dropzone";

import styles from "./FileDropBoxStyles";

export default function FileDropBoxView(props) {
  return (
    <div className={`mt-3 ${css([styles.outerWrapper])}`}>
      {props.label && (
        <label className={`${css([styles.label])}`}> {props.label}</label>
      )}
      <Dropzone
        onDragEnter={props.onDragEnter}
        onDragLeave={props.onDragLeave}
        onDrop={props.onFileSelected}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              {...getRootProps()}
              className={`${css([
                styles.wrapper,
                props.isDragOver && styles.dragOver,
              ])}`}
            >
              <input {...getInputProps()} />
              <p>Drop files here or click to upload</p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className={`${css([styles.fileItemsWrapper])}`}>
        {props.files.map((item, index) => {
          return (
            <div
              className={`${css([styles.fileItem])}`}
              key={item.lastModified}
            >
              {item.name}{" "}
              <button
                onClick={() => {
                  props.onFileRemove(index);
                }}
                className={`${css([styles.crossButton])}`}
              >
                Remove
              </button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
