import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

function CartFooterComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Total: R$ 380.0</Text>
        <Text style={styles.descriptionText}>Impostos: R$ 60.0</Text>
      </View>

      <RectButton style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Comprar</Text>
      </RectButton>
    </View>
  );
}

export default CartFooterComponent;
