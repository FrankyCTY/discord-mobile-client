import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function ExpoIcon({
  name = "image",
  size,
  color,
  iconType = "MaterialCommunity",
}) {
  return (
    <>
      {iconType === "MaterialCommunity" && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}

      {iconType === "Ionicons" && (
        <Ionicons name={name} size={size} color={color} />
      )}
    </>
  );
}
