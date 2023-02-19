import { Input, Tooltip } from "@mantine/core";
import React from "react";
import style from "./Directory.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/InfoOutlined";

const Directory = () => {
  return (
    <div className={style.directory}>
      <div className={style.header}>
        <div className={style.info}>
          <h3>Directory</h3>
          <p>
            Connecting alumni, preserving memories, and building a stronger
            community.
          </p>
        </div>
        <Input
          className={style.input}
          sx={{ width: "40%", borderRadius: "30px" }}
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
      <div className={style.body}></div>
    </div>
  );
};

export default Directory;
