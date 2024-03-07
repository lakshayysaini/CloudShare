import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ( { response } ) => {
  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={ main }>
        <Container>
          <Section style={ logo }>
            <Img src='https://i.ibb.co/tbHkdcG/Cloud-Share.png' />
          </Section>

          <Section style={ content }>
            <Row style={ { ...boxInfos, paddingBottom: "0" } }>
              <Column>
                <Heading
                  style={ {
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  } }
                >
                  Hi { response.emailToSend.split( "@" )[0] },
                </Heading>
                <Heading
                  as="h2"
                  style={ {
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  } }
                >
                  I have a file for you.
                </Heading>

                <Text style={ paragraph }>
                  <b>File Name: { response.fileName }</b>
                </Text>

                <Text style={ { ...paragraph, marginTop: -5 } }>
                  <b>File Size: { Math.round( response.fileSize / 1048576 ) } MB</b>
                </Text>

                <Text style={ { ...paragraph, marginTop: -5 } }>
                  <b>File Type: { response.fileType }</b>
                </Text>

              </Column>
            </Row>
            <Row style={ { ...boxInfos, paddingTop: "0" } }>
              <Column style={ containerButton } colSpan={ 2 }>
                <Button style={ button } href={ response?.shortUrl } >Click Here to Download</Button>
              </Column>
            </Row>
          </Section>

          <Text
            style={ {
              textAlign: "center",
              fontSize: 14,
              color: "rgb(0,0,0, 0.7)",
            } }
          >
            © 2024| Cloud Share by lakshayysaini
          </Text>
        </Container>
      </Body>
    </Html>
  )
};


const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
