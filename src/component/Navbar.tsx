import React from "react";
import { useState } from "react"
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material"

function Ex() {
  const [value, setValue] = useState("")

  return (
    <React.Fragment>
      <AppBar className="bg-green-500 " >

        <Toolbar>
          <Tabs textColor="inherit">
            <Tab label="LOGO"></Tab>
          </Tabs>

          <Tabs textColor="white" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="primary">
            <Tab label="HealthEase" />
            <Tab label="Doctors" />
            <Tab label="Services" />
            <Tab label="About Us" />
          </Tabs>



          <Button variant="contained" sx={{ marginLeft: "auto" }}> Log In</Button>
          <Button variant="contained" sx={{ marginLeft: "10px" }}> Sign Up</Button>

        </Toolbar>

      </AppBar>


    </React.Fragment>
  )
}

export default Ex