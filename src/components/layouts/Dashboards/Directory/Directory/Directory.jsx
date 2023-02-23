import { Button, Card, Grid, Image, Input, Tooltip } from "@mantine/core";
import React, { useEffect } from "react";
import style from "./Directory.module.scss";
import { useMediaQuery } from "@mui/material";


import bannerImg from '../../../../../assets/images/banner.jpeg'

//mui icons
import WorkIcon from '@mui/icons-material/WorkOutlineOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from "@mui/icons-material/SearchOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import EmailIcon from '@mui/icons-material/AlternateEmail';

import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../../redux/async-operations/user";

const Directory = () => {
  const onMedia = useMediaQuery('(min-width: 831px)');

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUser())
  }, [])


  const users = useSelector((state) => state.userReducer.users)
  useEffect(() => {
    console.log(users, "kkkkk");
  }, [users])
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
          {users?.map?.(el => (
            <Grid.Col md={6} lg={3} >
              <Card shadow="sm" p="lg" radius="md" sx={{}}>
                <Card.Section>

                  <div className={style.header}>
                    <Image
                      src={`${process.env.REACT_APP_BASE_URL}/images/${el.image}`}
                      sx={{ width: "100%", padding: "20px", paddingBottom: "0" }}
                      alt="DP"
                    />

                    <div className={style.info}>
                      <h3>{el.name}</h3>


                      <div className={style.batch}>

                        <span >Year: {el.passOut}</span>
                        <span >Class: {el.class} {el.division}</span>
                      </div>
                    </div>




                  </div>

                </Card.Section>

                <Card.Section>

                  <div className={style.body}>

                    <div className={style.moreInfo}>
                      <span data-content={el.phone?.replace(/.{0,2}$/, '') + "***"}><PhoneIcon /></span>
                      <span data-content={el.email ? el.email : "none"}><EmailIcon /></span>
                      <span data-content={el.job ? el.job : "no job"}><WorkIcon /></span>

                      <div><HomeIcon /> <span style={{ whiteSpace: "nowrap" }}>{el.address ? el.address.length >= 30 ? el.address.substr(0, 29)+"..." : el.address : "no address"}</span></div>
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



                < Button variant="light" color="blue" fullWidth mt="md" radius="md" >
                  View Profile
                </Button>
              </Card>
            </Grid.Col>
          ))
          }

        </Grid >

      </div >
    </div >
  );
};

export default Directory;
