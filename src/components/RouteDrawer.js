import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import { Drawer, Divider, Button, IconButton} from '@mui/material/';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material/';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

import styles from '../css/styles.module.css';

const RouteDrawer = ({links}) => {
  const[isOpened, setOpened] = useState(false);

  const toggleDrawerStatus = () => {
    setOpened(true);

  }

  const closeDrawer = () => {
    setOpened(false);

  }

  return(
    <div>
      <div className={styles.PagesButton}>
        <IconButton aria-label="Select Page" onClick={() => {toggleDrawerStatus()}}>
          <MenuBookOutlinedIcon color="primary" sx={{ fontSize: 70 }}/>
        </IconButton>
      </div>
      <Divider/>

      <Drawer
        variant="temporary"
        open={isOpened}
        onClose={() => {closeDrawer()}}
      >
        {links.map(link => {
          return(
            <Link key={link.key} to={link.path}>
              <List>
                <ListItem
                  button key={link.name}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  >
                  <ListItemText primary={link.name}/>
                </ListItem>
              </List>
            </Link>
          );
        })}

      </Drawer>

    </div>

  );

};

export default RouteDrawer;
