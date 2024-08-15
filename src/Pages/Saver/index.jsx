import React, { useState } from "react";
import { Block } from "./style";
import { api } from "../../Utils";

export default function Saver({ name }) {
  const [state, setState] = useState({
    link: "",
    valid: "",
    video: "",
    loader: false,
  });

  const title = name[0].toUpperCase() + name.substring(1, name.length);

  const getMedia = (e) => {
    e.preventDefault();
    if (state.link)
      api(state.link, setState, name === "youtube" ? "youtu" : name);
  };

  const change = (e) => {
    setState((p) => ({ ...p, valid: false }));
    setState((p) => ({ ...p, link: e.target.value }));
  };

  return (
    <Block>
      <div className="title">
        <img src={require(`../../Assets/Icons/${title}.png`)} /> {title}
      </div>
      <form onSubmit={(e) => getMedia(e)}>
        <input
          type="text"
          name="link"
          placeholder={`Paste ${title} Video Url`}
          onChange={(e) => change(e)}
          className={state.valid ? "warrning" : ""}
          required
        />
        <button>
          <div className={state.loader ? "loader" : ""}></div> Get Video
        </button>
      </form>
      <div className="medias">
        {state.video !== "" ? (
          <div className="video">
            <video src={state.video} controls autoPlay />
          </div>
        ) : (
          <div className="videoBlock">
            <h1>Video not avilable</h1>
          </div>
        )}
      </div>
    </Block>
  );
}
