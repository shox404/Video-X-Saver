import React from "react";
import { Block } from "./style";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const box = (name) => (
    <div className="box" onClick={() => navigate(`/${name.toLowerCase()}`)}>
      <img src={require(`../../Assets/Icons/${name}.png`)} />
      <div className="title">{name}</div>
    </div>
  );

  return (
    <Block>
      <div className="header">
        <img src={require("../../Assets/Logo.png")} />
        <h1>xSaver</h1>
      </div>
      <p>
        Download Videos from Multiple Social Media Platforms.Tips and Methods
        for Preserving MP4 Videos in High Definition HD Quality.t is very easy
        with Super Downlaoder, any video or image, download twitter, download
        facebook, download instagram etc. to your mobile, PC or Mac easily in
        less than a minute.
      </p>
      <div className="boxes">
        {box("Instagram")}
        {box("Youtube")}
        {box("Tiktok")}
        {box("Facebook")}
      </div>
    </Block>
  );
}
