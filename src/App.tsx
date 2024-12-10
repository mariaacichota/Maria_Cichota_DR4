import React from "react";
import AlertComponent from "./components/alert";
import AvatarComponent from "./components/avatar";
import BoxComponent from "./components/box";
import CardComponent from "./components/card";
import CheckboxComponent from "./components/checkbox";
import ContainerComponent from "./components/container";
import DatePickerComponent from "./components/datepicker";
import FabComponent from "./components/fab";
import GridComponent from "./components/grid";
import IconButtonComponent from "./components/iconbutton";
import SnackBarComponent from "./components/snackbar";
import SwitchComponent from "./components/switch";
import TabComponent from "./components/tab";
import TextFieldComponent from "./components/textfield";
import TypographyComponent from "./components/typography";

function App() {
  return (
    <ContainerComponent>
      <TypographyComponent text="Testing Components" variant="h2" />

      <BoxComponent>
        <TypographyComponent text="Alert" variant="h4" />
        <AlertComponent
          severity="success"
          message="Operation was successful!"
        />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Avatar" variant="h4" />
        <AvatarComponent alt="User" src="https://via.placeholder.com/150" />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Card" variant="h4" />
        <CardComponent
          title="Card Title"
          content="This is a sample card content."
        />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Checkbox" variant="h4" />
        <CheckboxComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="DatePicker" variant="h4" />
        <DatePickerComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Fab" variant="h4" />
        <FabComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Grid" variant="h4" />
        <GridComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="IconButton" variant="h4" />
        <IconButtonComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="SnackBar" variant="h4" />
        <SnackBarComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Switch" variant="h4" />
        <SwitchComponent label="Enable Notifications" />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="Tab" variant="h4" />
        <TabComponent />
      </BoxComponent>

      <BoxComponent>
        <TypographyComponent text="TextField" variant="h4" />
        <TextFieldComponent label="Enter your name" />
        <TextFieldComponent label="Enter your password" type="password" />
      </BoxComponent>
    </ContainerComponent>
  );
}

export default App;
