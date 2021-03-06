// For accountability partner obj: Describe objective in detail for NLP API.

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { TextInput } from "react-native-paper";

import Colors from "../../../constants/Colors";
import TextDefault from "../../../components/Text/TextDefault";
import NoteCard from "../../../components/Cards/NoteCard";
import WarningCard from "../../../components/Cards/WarningCard";
import ButtonWhite from "../../../components/Buttons/ButtonWhite";
import CancelObjCreationButton from "../../../components/IconButtons/CancelObjCreationButton";
import { HomeNavProps, HomeParamList } from "types";

export interface Objective3ScreenProps {
  navigation: StackNavigationProp<HomeParamList, "Objective3Screen">;
  route: RouteProp<HomeParamList, "Objective3Screen">;
}

const Objective3Screen = ({
  route,
  navigation,
}: HomeNavProps<"Objective3Screen">) => {
  const [description, setDescription] = useState("");
  const [numOfChar, setNumOfChar] = useState(150);

  const charactersLeftText =
    numOfChar === 1 ? "character left" : "characters left";

  const { objectiveTitle, type } = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <CancelObjCreationButton />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Describe your objective in detail.
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <NoteCard style={styles.card}>
            This will not be shared with your accountability partner.
          </NoteCard>
          <WarningCard style={styles.card}>
            Do not use abbreviated words, acronyms or initials for easier
            machine readability.
          </WarningCard>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            maxLength={150}
            numberOfLines={4}
            style={styles.input}
            label="Objective description"
            onChangeText={(changedDescription) => {
              setDescription(changedDescription);
              setNumOfChar(150 - changedDescription.length);
            }}
            value={description}
          />
          <TextDefault style={styles.charLeftText}>
            {numOfChar} {charactersLeftText}
          </TextDefault>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonWhite
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            {"<"} Back
          </ButtonWhite>

          <ButtonWhite
            style={styles.button}
            onPress={() =>
              navigation.navigate("Objective4Screen", {
                objectiveTitle: objectiveTitle,
                type: type,
                description: description,
              })
            }
          >
            Continue {">"}
          </ButtonWhite>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 50,
  },
  headerContainer: {
    width: "80%",
    marginTop: 50,
  },
  headerText: {
    fontSize: 30,
    color: Colors.taintedWhite,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    marginVertical: 6,
  },
  inputContainer: {
    marginVertical: 15,
  },
  input: {
    width: "100%",
    height: 136,
  },
  charLeftText: {
    marginVertical: 6,
    fontSize: 14,
    color: Colors.taintedWhite,
    textAlign: "right",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    width: 130,
  },
});

export default Objective3Screen;
