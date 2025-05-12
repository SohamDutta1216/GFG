"use client";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import styles from "../page.module.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Founder from "../components/Founder";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <ThemeToggle /> 
      <img src="/group_photo.JPG" alt="Good Friends Gallery Group" style={{ width: "80vw", height: "auto", margin: "0 auto", display: "block", marginTop: "10rem", maxWidth: "1000px" }} />
      <div style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold",  padding: "5rem 2rem", fontFamily: "Aileron, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif", fontWeight: "normal", minWidth: "300px" }}>At Good Friends Gallery, we don't see art as a finished product but as a conduit for connection. Founded by a group of close friends, this space was built on the belief that creativity is a communal act—and that everyone, whether or not they call themselves an artist, deserves a place to share what they make. We're here to hold space for experimentation, expression, and the kinds of conversations that only art can spark. 
      </div>
      <div style={{ textAlign: "center", fontSize: "7vw", fontWeight: "bold",  padding: "5rem 2rem", fontFamily: "Aileron, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif", fontWeight: "bold", minWidth: "300px" }}>Meet the founders:</div>
      <Founder
        image="/maliha.jpeg"
        alt="Maliha"
        instaHandle="@malihaceramics"
        instaUrl="https://www.instagram.com/malihaceramics/"
        bio="Brooklyn based ceramic artist and interior designer"
      />
      <Founder
        image="/hanna.jpeg"
        alt="Hanna"
        instaHandle="@hannawonphoto"
        instaUrl="https://www.instagram.com/hannawonphoto/"
        bio="Brooklyn based photographer"
      />
      <Founder
        image="/soham.jpg"
        alt="Soham"
        instaHandle="@sohamshoots"
        instaUrl="https://www.instagram.com/sohamshoots/"
        bio="NYC native, raised in Queens, based in Brooklyn, photographer, creative web designer and developer, and more"
      />
      <Founder
        image="/menelik.jpg"
        alt="How Mene Likes"
        instaHandle="@how_mene_likes"
        instaUrl="https://www.instagram.com/how_mene_likes/"
        bio="DJ, photographer, community builder, and more - based in Brooklyn, founder of Sounds of Spotlight"
      />
    </div>
  );
} 