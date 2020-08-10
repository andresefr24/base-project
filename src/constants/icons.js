import React from "react";
import { Google } from "styled-icons/boxicons-logos";
import { Plus, Menu, Eye } from "styled-icons/entypo";
import {
  Trash,
  ChevronUp,
  ChevronDown,
  Save,
} from "styled-icons/boxicons-solid";
import { EditOutline, CloseOutline } from "styled-icons/evaicons-outline";
import { Duplicate, Check, Minus } from "styled-icons/boxicons-regular";
import { Play } from "styled-icons/feather";

export default function Icons(type) {
  switch (type) {
    case "google":
      return <Google />;
    case "logo":
      return <Play />;
    case "plus":
      return <Plus />;
    case "minus":
      return <Minus />;
    case "trash":
      return <Trash />;
    case "eye":
      return <Eye />;
    case "edit":
      return <EditOutline />;
    case "close":
      return <CloseOutline />;
    case "chevronUp":
      return <ChevronUp />;
    case "chevronDown":
      return <ChevronDown />;
    case "duplicate":
      return <Duplicate />;
    case "menu":
      return <Menu />;
    case "save":
      return <Save />;
    case "check":
      return <Check />;
    default:
      return <div />;
  }
}
