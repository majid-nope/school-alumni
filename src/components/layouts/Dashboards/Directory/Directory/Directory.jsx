import { Button, Card, Grid, Image, Input, Tooltip } from "@mantine/core";
import React from "react";
import style from "./Directory.module.scss";
import { useMediaQuery } from "@mui/material";


import bannerImg from '../../../../../assets/images/banner.jpeg'

//mui icons
import WorkIcon from '@mui/icons-material/WorkOutlineOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from "@mui/icons-material/SearchOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";

import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';

const Directory = () => {
  const onMedia = useMediaQuery('(min-width: 831px)');

  return (
    <div className={style.directory}>
      <div className={style.header} style={{ backgroundImage: `url(${bannerImg})`, flexDirection: !onMedia ? "column" : "row ", }}>
        <div className={style.info} style={{ width: !onMedia ? "80%" : "30%" }}>
          <h3>Directory</h3>
          <p>
            Connecting alumni, preserving memories, and building a stronger
            community.
          </p>
        </div>
        <Input
          className={style.input}
          sx={{ width: !onMedia ? "80%" : "40%", borderRadius: "30px" }}
          icon={<SearchIcon size={14} />}
          placeholder="Search for people"
          rightSection={
            <Tooltip label="Search people" position="top-end" withArrow>
              <div>
                <InfoIcon
                  size={18}
                  style={{ display: "block", opacity: 0.3 }}
                />
              </div>
            </Tooltip>
          }
        />
      </div>
      <div className={style.body}>
        <Grid>
          {Array(5).fill().map(el => (
            <Grid.Col md={6} lg={3} >
              <Card shadow="sm" p="lg" radius="md" sx={{}}>
                <Card.Section>

                  <div className={style.header}>
                    <Image
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      sx={{ width: "100%", padding: "20px", paddingBottom: "0" }}
                      alt="Norway"
                    />

                    <div className={style.info}>
                      <h3>Muhammed Majid</h3>
                      <span>muhammed0000majid@gmai.com</span>
                    </div>

                  </div>

                </Card.Section>

                <Card.Section>

                  <div className={style.body}>
                    <div className={style.batch}>
                      <span>Year: 2002</span>
                      <span>Class: 4 A</span>
                    </div>
                    <div className={style.moreInfo}>
                      <span data-content={"8129634***"}><PhoneIcon /></span>
                      {/* <span data-content={"muhammedmajisd@gmail.com"}><PhoneIcon /></span> */}
                      <span data-content={"Developer"}><WorkIcon /></span>

                      <div><HomeIcon /> <span >Kerala,India, somwhew</span></div>
                    </div>
                  </div>

                </Card.Section>

                {/* <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>User Name</Text>
                  <Badge color="pink" variant="light">
                    2022
                  </Badge>
                </Group>
                <Group position="center" mt="md" mb="xs">
                  <Text size="sm" color="dimmed" align="center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos libero quae mollitia veritatis unde explicabo ea natus amet iure officia. Blanditiis officia eveniet quaerat aliquam explicabo libero fuga ullam quis.
                  </Text>

                </Group> */}



                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  View Profile
                </Button>
              </Card>
            </Grid.Col>
          ))}

        </Grid>

      </div>
    </div>
  );
};

export default Directory;
