import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
export default function SideBar({ setIsOpen, isOpen }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const menuList = [
    {
      id: 1,
      name: "Tablo Tasarımı",
      icon: "Table",
      subItem: [
        { id: 2, name: "Tablo ekle", icon: "Table add" },
        { id: 3, name: "Tablo Güncelle", icon: "Table update" },
      ],
    },
    {
      id: 1,
      name: "Tablo Tasarımı",
      icon: "Table",
      subItem: [
        { id: 2, name: "Tablo ekle", icon: "Table add" },
        {
          id: 3,
          name: "Tablo Güncelle",
          icon: "Table update",
          subItem: [
            { id: 2, name: "Tablo ekle", icon: "Table add" },
            { id: 3, name: "Tablo Güncelle", icon: "Table update" },
          ],
        },
      ],
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        borderWidth: 1,
        borderColor: "grey",
        overflow: "hidden",
      }}
    >
      SideBar
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        kapat aç
      </button>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Veri Tabanı
          </ListSubheader>
        }
      >
        {menuList.map((item) => (
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Geçmiş Paketler" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Test" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
