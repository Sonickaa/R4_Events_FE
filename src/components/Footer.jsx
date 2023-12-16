// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box style={{ width: "100%" }}>
      <h1
        style={{
          color: "#E0007C",
          textAlign: "left",
          marginTop: "10px",
          width: "auto",
        }}
      >
        See you on the dancefloor!
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/awareness">We are</FooterLink>
            <FooterLink href="/shop">New T-shirts!</FooterLink>
            {/*  <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Awareness</Heading>
            <FooterLink href="/awareness">Know-how</FooterLink>
            <FooterLink href="/impressum">Impressum</FooterLink>
            {/*   <FooterLink href="#">Help</FooterLink> */}
            {/*   <FooterLink href="#">Teaching</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            {/*   <FooterLink href="#">E-mail</FooterLink> */}
            <FooterLink href="/contact">Contact Form</FooterLink>
            {/* <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.instagram.com/raumvier/">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://t.me/+NEQEzcRvFmJmNGUy">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Telegram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UC72xtaDBPnBmqsLRNBuaphw">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  YouTube
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/raumvier2020/">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
